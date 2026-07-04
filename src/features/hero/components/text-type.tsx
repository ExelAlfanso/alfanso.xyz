"use client";

import { gsap } from "gsap";
import {
  createElement,
  type ElementType,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface TextTypeProps {
  as?: ElementType;
  className?: string;
  cursorBlinkDuration?: number;
  cursorCharacter?: string | React.ReactNode;
  cursorClassName?: string;
  deletingSpeed?: number;
  hideCursorWhileTyping?: boolean;
  initialDelay?: number;
  loop?: boolean;
  onSentenceComplete?: (sentence: string, index: number) => void;
  pauseDuration?: number;
  reverseMode?: boolean;
  showCursor?: boolean;
  startOnVisible?: boolean;
  text: string | string[];
  textColors?: string[];
  typingSpeed?: number;
  variableSpeed?: { min: number; max: number };
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);

  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) {
      return typingSpeed;
    }

    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [typingSpeed, variableSpeed]);

  const getProcessedText = useCallback(
    (value: string) => {
      if (!reverseMode) {
        return value;
      }

      return value.split("").reverse().join("");
    },
    [reverseMode]
  );

  const completeCurrentSentence = useCallback(() => {
    setIsDeleting(false);

    if (onSentenceComplete) {
      onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
    }

    const isLastSentence = currentTextIndex === textArray.length - 1;

    if (isLastSentence && !loop) {
      return;
    }

    setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
    setCurrentCharIndex(0);
  }, [currentTextIndex, loop, onSentenceComplete, textArray]);

  const deleteCharacter = useCallback(
    (setTimeoutRef: (timeout: ReturnType<typeof setTimeout>) => void) => {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deletingSpeed);

      setTimeoutRef(timeout);
    },
    [deletingSpeed]
  );

  const typeCharacter = useCallback(
    (
      processedText: string,
      setTimeoutRef: (timeout: ReturnType<typeof setTimeout>) => void
    ) => {
      const speed = variableSpeed ? getRandomSpeed() : typingSpeed;

      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + processedText[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, speed);

      setTimeoutRef(timeout);
    },
    [currentCharIndex, getRandomSpeed, typingSpeed, variableSpeed]
  );

  const startDeletingAfterPause = useCallback(
    (setTimeoutRef: (timeout: ReturnType<typeof setTimeout>) => void) => {
      const timeout = setTimeout(() => {
        if (loop || textArray.length > 1) {
          setIsDeleting(true);
        }
      }, pauseDuration);

      setTimeoutRef(timeout);
    },
    [loop, pauseDuration, textArray.length]
  );

  useEffect(() => {
    if (!(startOnVisible && containerRef.current)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!(showCursor && cursorRef.current)) {
      return;
    }

    gsap.set(cursorRef.current, { opacity: 1 });

    const animation = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    return () => {
      animation.kill();
    };
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    const setTimeoutRef = (value: ReturnType<typeof setTimeout>) => {
      timeout = value;
    };

    const currentText = textArray[currentTextIndex];
    const processedText = getProcessedText(currentText);

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          completeCurrentSentence();
          return;
        }

        deleteCharacter(setTimeoutRef);
        return;
      }

      if (currentCharIndex < processedText.length) {
        typeCharacter(processedText, setTimeoutRef);
        return;
      }

      startDeletingAfterPause(setTimeoutRef);
    };

    const shouldUseInitialDelay =
      currentCharIndex === 0 && !isDeleting && displayedText === "";

    if (shouldUseInitialDelay) {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    completeCurrentSentence,
    currentCharIndex,
    currentTextIndex,
    deleteCharacter,
    displayedText,
    getProcessedText,
    initialDelay,
    isDeleting,
    isVisible,
    startDeletingAfterPause,
    textArray,
    typeCharacter,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    <span className="inline">{displayedText}</span>,
    showCursor && (
      <span
        className={`ml-1 inline-block opacity-100 ${
          shouldHideCursor ? "hidden" : ""
        } ${cursorClassName}`}
        ref={cursorRef}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;

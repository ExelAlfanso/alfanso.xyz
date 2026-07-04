import { ExternalLink, X } from "lucide-react";
import { AnimatePresence, type MotionValue, motion } from "motion/react";
import { useEffect, useRef } from "react";
import type { ProjectItem } from "../types/project";

interface ProjectGroup {
  data: ProjectItem[];
  title: string;
}

interface ProjectsSectionProps {
  activeProject: ProjectItem | null;
  cardsAnimation: MotionValue<number>;
  headerY: MotionValue<number>;
  onCloseProject: () => void;
  onOpenProject: (project: ProjectItem, trigger: HTMLButtonElement) => void;
  sections: ProjectGroup[];
  slideUp: MotionValue<number>;
}

function getProjectImagePath(imgPath: string) {
  return imgPath.startsWith("/") ? imgPath : `/${imgPath}`;
}

export default function ProjectsSection({
  sections,
  activeProject,
  headerY,
  slideUp,
  cardsAnimation,
  onOpenProject,
  onCloseProject,
}: ProjectsSectionProps) {
  return (
    <>
      <motion.section
        aria-labelledby="projects-title"
        className="sticky top-0 h-screen w-full scroll-mt-24"
        id="Projects"
        style={{ y: slideUp }}
      >
        <div className="pointer-events-none absolute -top-30 right-0 left-0 z-50 h-32 w-full bg-gradient-to-t from-primary to-transparent" />

        <div className="relative flex h-screen w-full overflow-y-auto overscroll-contain bg-primary px-5 py-12 md:px-10 lg:px-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 md:gap-14">
            <motion.div style={{ y: headerY }}>
              <h2
                className="font-bold font-heading text-4xl text-accent text-wrap-balance md:text-6xl"
                id="projects-title"
              >
                Projects
              </h2>
            </motion.div>

            <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-12">
              {sections.map((section) => (
                <motion.section
                  aria-labelledby={`${section.title.replaceAll(" ", "-")}-title`}
                  className="min-w-0"
                  key={section.title}
                  style={{ y: cardsAnimation }}
                >
                  <h3
                    className="mb-5 text-left font-bold font-heading text-2xl text-accent md:text-3xl lg:text-4xl"
                    id={`${section.title.replaceAll(" ", "-")}-title`}
                  >
                    {section.title}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {section.data.map((project) => (
                      <ProjectCard
                        key={project.name}
                        onOpenProject={onOpenProject}
                        project={project}
                      />
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal onClose={onCloseProject} project={activeProject} />
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectCard({
  project,
  onOpenProject,
}: {
  project: ProjectItem;
  onOpenProject: (project: ProjectItem, trigger: HTMLButtonElement) => void;
}) {
  return (
    <motion.article
      className="group min-w-0 overflow-hidden rounded-md border border-accent/20 bg-secondary/70"
      layout
    >
      <button
        className="block w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-two focus-visible:outline-offset-4"
        onClick={(event) => onOpenProject(project, event.currentTarget)}
        type="button"
      >
        <span className="block overflow-hidden">
          <img
            alt={`${project.name} project screenshot`}
            className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
            decoding="async"
            height="360"
            loading="lazy"
            src={getProjectImagePath(project.img)}
            width="640"
          />
        </span>
        <span className="block min-w-0 p-4">
          <span className="block font-heading text-accent text-wrap-balance text-xl leading-tight">
            {project.name}
          </span>
          <span className="mt-2 block font-mono text-accent-two text-xs uppercase tracking-wide">
            {project.category}
          </span>
          <span className="mt-3 line-clamp-3 block font-mono text-accent/85 text-sm leading-relaxed">
            {project.description}
          </span>
          <span className="mt-4 inline-flex items-center gap-2 font-mono font-semibold text-accent-two text-sm">
            View Project
          </span>
        </span>
      </button>
    </motion.article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!(first && last)) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-contain bg-black/70 p-4 backdrop-blur-sm md:p-8"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      onMouseDown={onClose}
      role="presentation"
    >
      <motion.div
        animate={{ opacity: 1, scale: 1, y: 0 }}
        aria-labelledby="project-modal-title"
        aria-modal="true"
        className="relative w-full max-w-4xl overflow-hidden rounded-md border border-accent/25 bg-secondary p-5 shadow-2xl md:p-8"
        exit={{ opacity: 0, scale: 0.97, y: 30 }}
        initial={{ opacity: 0, scale: 0.97, y: 30 }}
        onMouseDown={(event) => event.stopPropagation()}
        ref={dialogRef}
        role="dialog"
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <button
          aria-label="Close project details"
          className="absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-accent/40 text-accent transition-colors duration-200 hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-two focus-visible:outline-offset-4"
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          <X aria-hidden="true" size={20} />
        </button>

        <div className="grid max-h-[82vh] gap-6 overflow-y-auto pr-1 md:grid-cols-2 md:gap-8">
          <img
            alt={`${project.name} full preview`}
            className="aspect-video w-full rounded-md object-cover"
            height="540"
            src={getProjectImagePath(project.img)}
            width="960"
          />

          <div className="flex min-w-0 flex-col gap-5 pr-10 md:pr-0">
            <p className="font-mono text-accent-two text-xs uppercase tracking-wide md:text-sm">
              {project.category}
            </p>

            <h3
              className="text-3xl text-accent text-wrap-balance leading-tight md:text-4xl"
              id="project-modal-title"
            >
              {project.name}
            </h3>

            <p className="font-mono text-accent/95 text-sm leading-relaxed md:text-base">
              {project.description}
            </p>

            <div>
              <p className="mb-2 font-mono text-accent/80 text-xs uppercase tracking-wide md:text-sm">
                Categories
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <li
                    className="rounded-full border border-accent/40 bg-primary/60 px-3 py-1 font-mono text-accent text-xs md:text-sm"
                    key={category}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <a
              className="inline-flex w-fit items-center gap-2 rounded-full border border-accent px-4 py-2 font-mono font-semibold text-accent text-sm transition-colors duration-200 hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-two focus-visible:outline-offset-4 md:text-base"
              href={project.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              Visit Project
              <ExternalLink aria-hidden="true" size={16} />
            </a>
            <p className="break-all font-mono text-accent/70 text-xs md:text-sm">
              {project.href}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

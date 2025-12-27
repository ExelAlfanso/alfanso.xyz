import { motion } from "motion/react";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-primary text-accent transition-opacity`}
    >
      <div className="relative flex items-center justify-center">
        <motion.svg
          width="587"
          height="791"
          viewBox="0 0 587 791"
          xmlns="http://www.w3.org/2000/svg"
          className="w-64 h-auto text-accent"
          fill="none"
        >
          <motion.path
            d="M582 5H5V786H582V5Z"
            stroke="currentColor"
            strokeWidth="10"
            pathLength={1}
            initial={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeIn" }}
          />
        </motion.svg>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute inset-0 grid place-items-center"
        >
          <span className="font-heading text-xl tracking-wide ">
            alfanso.xyz
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

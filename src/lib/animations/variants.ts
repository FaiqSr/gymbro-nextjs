export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.6,
    },
  },
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.6,
    },
  },
};

export const slideInFromTop = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.6,
    },
  },
};

export const slideInFromBottom = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.6,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  whileTap: {
    scale: 0.95,
  },
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const rotateAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const bounceAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

export const shimmer = {
  animate: {
    backgroundPosition: ["200% center", "-200% center"],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

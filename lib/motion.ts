

export function slideInFromLeft(delay: number, duration: number) {
  return {
      hidden: { x: -80, opacity: 0 },
      visible: {
          x: 0,
          opacity: 1,
          transition: {
              delay: delay,
              duration: duration,
          },
      },
  };
}

export function slideInFromRight(delay: number, duration: number) {
  return {
      hidden: { x: 80, opacity: 0 },
      visible: {
          x: 0,
          opacity: 1,
          transition: {
              delay: delay,
              duration: duration,
          },
      },
  };
}

export function slideInFromTop(delay: number, duration: number) {
  return {
      hidden: { y: -80, opacity: 0 },
      visible: {
          y: 0,
          opacity: 1,
          transition: {
              delay: delay,
              duration: duration,
          },
      },
  };
}
export function slideInFromBottom(delay: number, duration: number) {
  return {
      hidden: { y: 80, opacity: 0 },
      visible: {
          y: 0,
          opacity: 1,
          transition: {
              delay: delay,
              duration: duration,
          },
      },
  };
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  target: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = "" }) => {
  const [count, setCount] = useState<number>(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 20);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);

      return () => clearInterval(counter);
    }
  }, [inView, target]);

  return (
    <div ref={ref}>
      <h4 className="text-3xl md:text-4xl font-bold text-primary-base mb-1">
        {count}
        {suffix}
      </h4>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="grid grid-cols-3 gap-2 md:gap-6 w-full md:w-[85%]"
    >
      <div className="text-center md:text-left">
        <Counter target={3} suffix="+" />
        <p className="text-xs md:text-sm text-secondary-gray">
          Years Experience
        </p>
      </div>
      <div className="text-center md:text-left">
        <Counter target={20} suffix="+" />
        <p className="text-xs md:text-sm text-secondary-gray">
          Projects Completed
        </p>
      </div>
      <div className="text-center md:text-left">
        <Counter target={769} suffix="+" />
        <p className="text-xs md:text-sm text-secondary-gray">Contributions</p>
      </div>
    </motion.div>
  );
};

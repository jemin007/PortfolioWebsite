import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-50"
      animate={{ x: mousePosition.x - 150, y: mousePosition.y - 150 }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    >
      <div className="w-[300px] h-[300px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
    </motion.div>
  );
};

export default CursorEffect;
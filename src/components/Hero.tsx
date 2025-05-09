import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Data Engineer';
  
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setText('');
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping]);

  return (
    <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center max-w-screen-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Jemin Shrestha</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6 h-12 sm:h-auto typing-cursor">
              {text}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-8">
              I build exceptional and accessible data pipelines.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary animate-beat text-white shadow-lg border-2 border-blue-600 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 focus:ring-4 focus:ring-blue-300 focus:outline-none rounded-full"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                style={{ animationDuration: '2s' }}
              >
                Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com/jemin007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                aria-label="GitHub Profile"
              >
                <GitHub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jemin-shrestha-6164a3170/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:jeminshrestha9@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                aria-label="Email"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-[60%] mx-auto lg:max-w-[72%]"
          >
            <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
              <img
                src="/images/myphoto.jpg"
                alt="Jemin Shrestha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 inset-0 blur-3xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
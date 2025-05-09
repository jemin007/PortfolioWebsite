import { Github as GitHub, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold flex items-center">
              <span className="text-purple-400">Jemin</span>&nbsp;Shrestha
            </a>
            
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/jemin007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="GitHub Profile"
              >
                <GitHub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jemin-shrestha-6164a3170/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              
              <a
                href="mailto:jeminshrestha9@gmail.com"
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Jemin Shrestha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
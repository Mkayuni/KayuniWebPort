import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              Moses<span className="text-primary">Kayuni</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Software Developer | Data Engineer & Scientist
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Mkayuni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/moses-kayuni-7915709b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:Kayunilow11@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FiMail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Moses Kayuni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-matte-900 border-t border-gray-200 dark:border-matte-700 transition-colors duration-200">
      <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Anshul Kawarey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
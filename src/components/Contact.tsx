import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
    emailjs
      .send(
        'service_ud0mugg', 
        'template_jcz3l65',
        templateParams,
        'EfU2nKkNQ997pYu4e'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSending(false);
          setIsSuccess(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          setIsSending(false);
          setIsSuccess(false);
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-matte-800 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:contact@anshulkawarey.com"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-phthalo-400 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                anshulkawarey@gmail.com
              </a>
              <a
                href="https://github.com/AnshulKawarey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-phthalo-400 transition-colors"
              >
                <Github className="mr-2" size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/anshulkawarey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-phthalo-400 transition-colors"
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white dark:bg-matte-900 border border-gray-300 dark:border-matte-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-phthalo-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white dark:bg-matte-900 border border-gray-300 dark:border-matte-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-phthalo-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-white dark:bg-matte-900 border border-gray-300 dark:border-matte-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-phthalo-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-200"
                required
              />
            </div>
            <button
              type="submit"
              className={`inline-flex items-center px-6 py-3 ${
                isSending
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 dark:bg-phthalo-500 dark:hover:bg-phthalo-600'
              } text-white rounded-lg transition-colors duration-200`}
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
              <Send className="ml-2" size={20} />
            </button>
            {isSuccess && (
              <p className="text-green-600 mt-4">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

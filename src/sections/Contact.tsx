import { motion } from "framer-motion";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { config } from "../config";
import { EnvelopeIcon, LinkIcon } from '@heroicons/react/24/outline';

function ContactForm() {
  return (
    <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-center">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <EnvelopeIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send a Message</h2>
        <p className="text-gray-600 dark:text-gray-400">
          The contact form is currently under maintenance.
        </p>
      </div>

      <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Please email me directly at</p>
        <a
          href="mailto:matas0412@gmail.com"
          className="text-lg font-bold text-blue-600 dark:text-blue-400 hover:underline"
        >
          matas0412@gmail.com
        </a>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={config.recaptchaKey}>
      <div className="min-h-screen bg-white dark:bg-dark-bg py-20 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's <span className="text-blue-600 dark:text-blue-400">Connect!</span> 🤝
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about web development,
              I'm always open to new opportunities and interesting conversations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm currently available for freelance work and consulting.
                If you have a project that needs some creative direction or
                technical expertise, feel free to reach out!
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:matas0412@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                >
                  <div className="p-3 bg-white dark:bg-white/10 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                    <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">matas0412@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://github.com/tmatijev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                >
                  <div className="p-3 bg-white dark:bg-white/10 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">GitHub</div>
                    <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">github.com/tmatijev</div>
                  </div>
                  <LinkIcon className="w-5 h-5 text-gray-400 ml-auto" />
                </a>

                <a
                  href="https://linkedin.com/in/tmatijev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                >
                  <div className="p-3 bg-white dark:bg-white/10 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                    <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">linkedin.com/in/tmatijev</div>
                  </div>
                  <LinkIcon className="w-5 h-5 text-gray-400 ml-auto" />
                </a>
              </div>
            </motion.div>

            {/* Contact Form Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WhatCanIDo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-6 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let Me Build Something Amazing For You! 🚀
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Not sure about all the technical stuff? No worries! Here's what I can
          build and do for you, explained in plain English - because great
          websites shouldn't be complicated to understand! 😊
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Custom Website Building */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl mb-4 block">🎨</span>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Build Your Dream Website
            </h2>
            <p className="text-gray-600">
              I'll create a website that perfectly represents your business and
              impresses your visitors. Whether they're using phones, tablets, or
              computers, your site will look fantastic and work smoothly - just
              like the big brands!
            </p>
          </div>

          {/* E-commerce Solutions */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl mb-4 block">🛍️</span>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Set Up Your Online Store
            </h2>
            <p className="text-gray-600">
              Ready to start selling online? I'll build you a complete online
              store where customers can easily find and buy your products. Think
              of it as your own mini-Amazon, but for your specific business!
            </p>
          </div>

          {/* Custom Tools & Systems */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl mb-4 block">⚡</span>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Create Custom Digital Tools
            </h2>
            <p className="text-gray-600">
              Need specific tools for your business? I can build systems that
              make your work easier - like appointment booking, customer
              management, or any other digital solution that saves you time and
              helps you grow!
            </p>
          </div>

          {/* Website Improvements */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl mb-4 block">✨</span>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Upgrade Your Current Website
            </h2>
            <p className="text-gray-600">
              Got an existing website that's not performing? I'll transform it
              into something modern, fast, and effective. It's like giving your
              digital presence a complete makeover - your visitors will love the
              difference!
            </p>
          </div>

          {/* Performance Optimization */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl mb-4 block">🚀</span>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Make Your Website Lightning Fast
            </h2>
            <p className="text-gray-600">
              Is your website running slow? I'll turbocharge it! Just like I did
              for other companies, reducing their load times by up to 85%. Your
              visitors won't have to wait around - they'll get straight to what
              matters!
            </p>
          </div>

          {/* Design Services */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl mb-4 block">🎯</span>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Design That Catches Eyes
            </h2>
            <p className="text-gray-600">
              Need a fresh look? With my background in visual design, I'll
              create beautiful, user-friendly designs that make your brand
              shine. From logos to complete website designs, I'll make sure you
              stand out from the crowd!
            </p>
          </div>

          {/* Team Leadership */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl mb-4 block">👥</span>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Guide Your Tech Team
            </h2>
            <p className="text-gray-600">
              Got a development team that needs direction? I've led multiple
              teams to success, creating standards and best practices that
              stick. Think of me as your technical co-pilot, helping your team
              reach new heights!
            </p>
          </div>

          {/* Technology Migration */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl mb-4 block">🔄</span>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Modernize Your Technology
            </h2>
            <p className="text-gray-600">
              Stuck with outdated tech? I'll help you move to modern solutions
              that make your life easier. It's like renovating a house - keeping
              what works while upgrading everything else to today's standards!
            </p>
          </div>

          {/* Consultation Services */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl mb-4 block">💡</span>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Get Expert Advice
            </h2>
            <p className="text-gray-600">
              Need guidance? I offer consultations for teams and companies,
              sharing insights from years of experience. Think of it as having a
              tech-savvy friend who can help you make the right decisions for
              your digital future!
            </p>
          </div>

          {/* AI-Powered Solutions */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl mb-4 block">🤖</span>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              AI Is My Secret Superpower
            </h2>
            <p className="text-gray-600">
              Thanks to modern AI, I'm like a Swiss Army knife of tech
              solutions! Even if something's not in my usual toolbox, I can team
              up with AI to figure it out. Think of it as having a whole team of
              experts in my pocket - we can tackle almost any digital challenge
              you throw at us! 🦾
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Build Something Special? 🌟
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            You bring the ideas, and I'll bring them to life! Don't worry about
            the technical details - that's my job. Together, we can create
            something that helps your business grow and succeed online.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Let's Start Building Together 🛠️
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

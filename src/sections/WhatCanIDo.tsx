import { motion } from "framer-motion";
import { ServiceCard } from '../components/ServiceCard';

export default function WhatCanIDo() {
  const services = [
    {
      emoji: "🎨",
      title: "Build Your Dream Website",
      description: "I'll create a website that perfectly represents your business and impresses your visitors. Whether they're using phones, tablets, or computers, your site will look fantastic and work smoothly - just like the big brands!"
    },
    {
      emoji: "🚀️",
      title: "Set Up Your Online Store",
      description: "Ready to start selling online? I'll build you a complete online store where customers can easily find and buy your products. Think of it as your own mini-Amazon, but for your specific business!"
    },
    {
      emoji: "⚡",
      title: "Create Custom Digital Tools",
      description: "Need specific tools for your business? I can build systems that make your work easier - like appointment booking, customer management, or any other digital solution that saves you time and helps you grow!"
    },
    {
      emoji: "✨",
      title: "Upgrade Your Current Website",
      description: "Got an existing website that's not performing? I'll transform it into something modern, fast, and effective. It's like giving your digital presence a complete makeover - your visitors will love the difference!"
    },
    {
      emoji: "🤖",
      title: "Make Your Website Lightning Fast",
      description: "Is your website running slow? I'll turbocharge it! Just like I did for other companies, reducing their load times by up to 85%. Your visitors won't have to wait around - they'll get straight to what matters!"
    },
    {
      emoji: "🎯",
      title: "Design That Catches Eyes",
      description: "Need a fresh look? With my background in visual design, I'll create beautiful, user-friendly designs that make your brand shine. From logos to complete website designs, I'll make sure you stand out from the crowd!"
    },
    {
      emoji: "👥",
      title: "Guide Your Tech Team",
      description: "Got a development team that needs direction? I've led multiple teams to success, creating standards and best practices that stick. Think of me as your technical co-pilot, helping your team reach new heights!"
    },
    {
      emoji: "🔄",
      title: "Modernize Your Technology",
      description: "Stuck with outdated tech? I'll help you move to modern solutions that make your life easier. It's like renovating a house - keeping what works while upgrading everything else to today's standards!"
    },
    {
      emoji: "💡",
      title: "Get Expert Advice",
      description: "Need guidance? I offer consultations for teams and companies, sharing insights from years of experience. Think of it as having a tech-savvy friend who can help you make the right decisions for your digital future!"
    },
    {
      emoji: "🤖",
      title: "AI Is My Secret Superpower",
      description: "Thanks to modern AI, I'm like a Swiss Army knife of tech solutions! Even if something's not in my usual toolbox, I can team up with AI to figure it out. Think of it as having a whole team of experts in my pocket - we can tackle almost any digital challenge you throw at us! 🦾"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg py-20 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] dark:bg-[url('/grid-dark.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center px-6 mb-20 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Let Me Build Something <span className="text-blue-600 dark:text-blue-400">Amazing</span> For You! 🚀
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Not sure about all the technical stuff? No worries! Here's what I can
          build and do for you, explained in plain English - because great
          websites shouldn't be complicated to understand! 😊
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard
                emoji={service.emoji}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-card max-w-3xl mx-auto p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">
              Ready to Build Something Special? 🌟
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 relative z-10">
              You bring the ideas, and I'll bring them to life! Don't worry about
              the technical details - that's my job. Together, we can create
              something that helps your business grow and succeed online.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary relative z-10"
            >
              Let's Start Building Together 🛠️
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

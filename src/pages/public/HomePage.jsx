import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import MainLayout from '../../components/layout/MainLayout';
import FadeIn from '../../components/animations/FadeIn';
import SlideIn from '../../components/animations/SlideIn';
import ParallaxEffect from '../../components/animations/ParallaxEffect';

const HomePage = () => {
  // Animation controls
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  // Parallax effect for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Start animation on component mount
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-[#0a0d14]">
        {/* Background image with parallax effect */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />

        {/* Enhanced background pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.15) 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }}/>
        </div>

        {/* Enhanced glowing elements */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary-600/15 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-primary-600/10 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Additional accent glow */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary-400/5 blur-[80px]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Enhanced animated particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary-500 opacity-10 blur-sm"
            style={{
              width: particle.size / 2,
              height: particle.size / 2,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 30 - 15, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: particle.delay,
            }}
          />
        ))}

        {/* Content */}
        <div className="container mx-auto px-6 h-screen flex items-center justify-center">
          <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Left side - Text content */}
            <div className="order-2 lg:order-1 lg:w-3/5 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Animated background elements for text */}
                <motion.div
                  className="absolute -left-8 top-1/4 w-16 h-16 rounded-full bg-primary-500/10 blur-xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.2, 0.1],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute -right-4 bottom-1/4 w-20 h-20 rounded-full bg-primary-400/10 blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.15, 0.1],
                    rotate: [360, 270, 180, 90, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Main heading with character animation */}
                <div className="overflow-hidden">
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated text with staggered characters */}
                    <motion.span className="inline-block whitespace-nowrap">
                      {"Transforming Ideas into".split("").map((char, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.05 * index,
                            ease: "easeOut"
                          }}
                          className="inline-block"
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.span>

                    <motion.span
                      className="text-primary-400 block mt-2 relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.5 }}
                    >
                      {/* Animated underline */}
                      <motion.div
                        className="absolute -bottom-2 left-0 h-[3px] bg-primary-500/70"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.2, delay: 2.5, ease: "easeInOut" }}
                      />

                      {/* Second line with different animation */}
                      <span className="whitespace-nowrap">
                        {"Vivid Visual Worlds".split("").map((char, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: 1.5 + 0.07 * index,
                              ease: "backOut"
                            }}
                            className="inline-block"
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </span>
                    </motion.span>
                  </motion.h1>
                </div>

                {/* Animated paragraph with gradient highlight */}
                <div className="relative overflow-hidden mt-6">
                  <motion.p
                    className="text-gray-400 mx-auto lg:mx-0 max-w-xl relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 2.8 }}
                  >
                    With a passion deeply rooted in fine arts and a professional journey spanning
                    imaginative digital illustration, dynamic concept art, and compelling storytelling.
                  </motion.p>

                  {/* Animated highlight that sweeps across the paragraph */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent z-0"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 2,
                      delay: 3.2,
                      repeat: Infinity,
                      repeatDelay: 8,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Animated buttons with floating effect */}
                <motion.div
                  className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 0.2
                      }
                    }}
                  >
                    <Link
                      to="/portfolio"
                      className="px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 border border-primary-400/30"
                    >
                      View Portfolio
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 0.2,
                        delay: 0.5
                      }
                    }}
                  >
                    <Link
                      to="/contact"
                      className="px-6 py-3 border border-gray-600 text-white font-medium rounded-lg hover:border-primary-400 hover:text-primary-400 transition-all duration-300 group"
                    >
                      <span className="relative inline-block">
                        Get in Touch
                        <motion.span
                          className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-400 group-hover:w-full transition-all duration-300"
                        />
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Artist image */}
            <div className="order-1 lg:order-2 lg:w-2/5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative max-h-[60vh] max-w-sm w-full overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`
                }}
              >
                {/* Floating elements around the image */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-primary-500/20 z-10"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-primary-400/20 z-10"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />

                {/* Animated frame */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary-500/30 rounded-lg z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 3.5 }}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(20px)"
                  }}
                />

                {/* Main image container with enhanced styling */}
                <motion.div
                  className="relative rounded-lg overflow-hidden border border-gray-800 shadow-2xl shadow-primary-900/20"
                  animate={{
                    rotateZ: [0, 1, 0, -1, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Artist image - constrained height */}
                  <img
                    src="https://images.unsplash.com/photo-1649331593153-7575e5cd3c6e?q=80&w=2000&auto=format&fit=crop"
                    alt="Digital Artist at Work"
                    className="w-full h-auto max-h-[60vh] object-cover object-center"
                  />

                  {/* Enhanced overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/70 via-[#0a0d14]/30 to-transparent" />

                  {/* Animated highlight effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 5,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Animated dots overlay */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle at 15px 15px, rgba(59, 130, 246, 0.5) 2px, transparent 0)',
                    backgroundSize: '30px 30px'
                  }}/>
                </motion.div>

                {/* Enhanced decorative elements */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-primary-500/60 blur-sm"
                  animate={{
                    width: ["60%", "80%", "60%"],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />

                {/* Animated corner accents */}
                <motion.div
                  className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary-400/50 rounded-tl-lg"
                  animate={{
                    borderColor: ["rgba(96, 165, 250, 0.5)", "rgba(59, 130, 246, 0.7)", "rgba(96, 165, 250, 0.5)"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-primary-400/50 rounded-tr-lg"
                  animate={{
                    borderColor: ["rgba(96, 165, 250, 0.5)", "rgba(59, 130, 246, 0.7)", "rgba(96, 165, 250, 0.5)"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-primary-400/50 rounded-bl-lg"
                  animate={{
                    borderColor: ["rgba(96, 165, 250, 0.5)", "rgba(59, 130, 246, 0.7)", "rgba(96, 165, 250, 0.5)"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary-400/50 rounded-br-lg"
                  animate={{
                    borderColor: ["rgba(96, 165, 250, 0.5)", "rgba(59, 130, 246, 0.7)", "rgba(96, 165, 250, 0.5)"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                />

                {/* Floating badges */}
                <motion.div
                  className="absolute -right-4 top-1/4 bg-dark-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-primary-400 border border-primary-500/30 shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 4 }}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(30px)"
                  }}
                >
                  Digital Art
                </motion.div>
                <motion.div
                  className="absolute -left-4 bottom-1/4 bg-dark-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-primary-400 border border-primary-500/30 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 4.3 }}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(30px)"
                  }}
                >
                  Illustration
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 bg-dark-900">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore a selection of my most impactful projects, showcasing the depth and versatility of my artistic vision.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Work 1 */}
            <SlideIn direction="up">
              <Link to="/portfolio/ethereal-dreamscapes" className="block group">
                <div className="relative overflow-hidden aspect-[4/3] rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1558865869-c93f6f8482af?q=80&w=2081&auto=format&fit=crop"
                    alt="Ethereal Dreamscapes"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover overlay with description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">Ethereal Dreamscapes</h3>
                      <p className="text-gray-300">
                        A series exploring the boundaries between reality and imagination through vibrant digital illustrations.
                      </p>
                      <div className="mt-4 inline-flex items-center text-primary-400 font-medium">
                        View Project
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </SlideIn>

            {/* Featured Work 2 */}
            <SlideIn direction="up" delay={0.1}>
              <Link to="/portfolio/futuristic-metropolis" className="block group">
                <div className="relative overflow-hidden aspect-[4/3] rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1974&auto=format&fit=crop"
                    alt="Futuristic Metropolis"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover overlay with description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">Futuristic Metropolis</h3>
                      <p className="text-gray-300">
                        Concept art for a sci-fi project depicting a sprawling city of tomorrow with advanced technology.
                      </p>
                      <div className="mt-4 inline-flex items-center text-primary-400 font-medium">
                        View Project
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </SlideIn>

            {/* Featured Work 3 */}
            <SlideIn direction="up" delay={0.2}>
              <Link to="/portfolio/character-evolution" className="block group">
                <div className="relative overflow-hidden aspect-[4/3] rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2009&auto=format&fit=crop"
                    alt="Character Evolution"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover overlay with description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">Character Evolution</h3>
                      <p className="text-gray-300">
                        A deep dive into character design, showcasing the development process from sketch to final artwork.
                      </p>
                      <div className="mt-4 inline-flex items-center text-primary-400 font-medium">
                        View Project
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </SlideIn>
          </div>

          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link to="/portfolio" className="btn btn-outline">
                View All Works
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ParallaxEffect speed={0.1} className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1536924430914-91f9e2041b83?q=80&w=1966&auto=format&fit=crop"
                alt="Artist at work"
                className="w-full h-auto rounded-lg"
              />
            </ParallaxEffect>

            <div>
              <SlideIn direction="right">
                <h2 className="text-4xl font-bold mb-6">About the Artist</h2>
                <p className="text-gray-300 mb-6">
                  With a passion deeply rooted in fine arts and a professional journey spanning imaginative digital illustration,
                  dynamic concept art, and compelling storytelling, I transform ideas into vivid visual worlds — growing from
                  strong local roots to a thriving global reach.
                </p>
                <p className="text-gray-300 mb-8">
                  Currently bringing creative visions to life as a Concept Illustrator, I blend traditional artistic techniques
                  with cutting-edge digital tools to create immersive visual experiences that captivate and inspire.
                </p>
                <Link to="/about" className="btn btn-primary">
                  Learn More
                </Link>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-900">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Ready to Bring Your Vision to Life?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and transform your ideas into stunning visual narratives.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-900 hover:bg-gray-100">
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;

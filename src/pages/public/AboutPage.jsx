import { motion } from 'framer-motion';
import MainLayout from '../../components/layout/MainLayout';
import FadeIn from '../../components/animations/FadeIn';
import SlideIn from '../../components/animations/SlideIn';
import ParallaxEffect from '../../components/animations/ParallaxEffect';
import { usePageTitle } from '../../hooks/usePageTitle.jsx';
import nafisaAhmedImg from '../../assets/nafisa_ahmed.jpg';
import ProfessionalJourneyTimeline from '../../components/common/ProfessionalJourneyTimeline';

const AboutPage = () => {
  usePageTitle('About');
  
  // Skills data
  const skills = [
    { name: 'Digital Illustration', level: 95 },
    { name: 'Concept Art', level: 90 },
    { name: 'Character Design', level: 85 },
    { name: 'Environment Design', level: 80 },
    { name: 'Storyboarding', level: 75 },
    { name: 'Traditional Art', level: 70 },
  ];

  // Timeline data
  const timeline = [
    {
      year: '2023 - Present',
      title: 'Senior Concept Illustrator',
      company: 'Creative Visions Studio',
      description: 'Leading concept art development for major game and film projects, mentoring junior artists, and establishing visual direction for clients.',
    },
    {
      year: '2020 - 2023',
      title: 'Concept Artist',
      company: 'Dreamscape Interactive',
      description: 'Created character designs, environment concepts, and key art for award-winning video game titles and animated series.',
    },
    {
      year: '2018 - 2020',
      title: 'Freelance Illustrator',
      company: 'Self-employed',
      description: 'Worked with various clients on book covers, editorial illustrations, and marketing materials while developing a unique artistic style.',
    },
    {
      year: '2014 - 2018',
      title: 'BFA in Illustration',
      company: 'Art Institute of Design',
      description: 'Graduated with honors, specializing in digital illustration and concept art. Recipient of the Outstanding Visual Storyteller Award.',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SlideIn direction="right">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About the Artist</h1>
                <p className="text-xl text-gray-700 mb-6">
                  With a passion deeply rooted in fine arts and a professional journey spanning imaginative digital illustration,
                  dynamic concept art, and compelling storytelling.
                </p>
                <p className="text-gray-600 mb-8">
                  I transform ideas into vivid visual worlds — growing from strong local roots to a thriving global reach,
                  currently bringing creative visions to life as a Concept Illustrator.
                </p>
              </SlideIn>
            </div>

            <ParallaxEffect speed={0.1} className="rounded-lg overflow-hidden">
              <img
                src={nafisaAhmedImg}
                alt="Nafisa Ahmed - Visual Artist"
                className="w-full h-auto rounded-lg object-cover object-center min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/800x600/f6d0a8/ffffff?text=Nafisa+Ahmed";
                }}
              />
            </ParallaxEffect>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-primary-400">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              With years of experience across various artistic disciplines, I've developed a diverse skill set
              that allows me to bring any creative vision to life.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <SlideIn key={skill.name} direction="up" delay={index * 0.1}>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ParallaxEffect speed={0.1} className="rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop"
                alt="Artist at work"
                className="w-full h-auto rounded-lg"
              />
            </ParallaxEffect>

            <div className="order-1 lg:order-2">
              <SlideIn direction="left">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">My Creative Philosophy</h2>
                <p className="text-gray-700 mb-6">
                  I believe that art is a powerful medium for storytelling and emotional connection. Every piece I create
                  is designed to evoke feeling and transport the viewer to another world.
                </p>
                <p className="text-gray-700 mb-6">
                  My approach combines technical precision with imaginative exploration, blending traditional artistic
                  principles with cutting-edge digital techniques to create visuals that are both innovative and timeless.
                </p>
                <p className="text-gray-700">
                  Whether I'm designing characters, environments, or illustrations, I strive to infuse each piece with
                  narrative depth and visual richness that invites viewers to linger and discover new details with each viewing.
                </p>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline - Beautiful Timeline */}
      <section className="py-20 bg-primary-400">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              My career path has been shaped by diverse experiences that have contributed to my growth as an artist.
            </p>
          </FadeIn>
          <ProfessionalJourneyTimeline timeline={timeline} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-400">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Let's Create Something Amazing</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a href="/contact" className="btn bg-white text-primary-900 hover:bg-gray-100">
              Get in Touch
            </a>
          </FadeIn>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;

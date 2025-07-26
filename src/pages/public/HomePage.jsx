import { Link } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';
import FadeIn from '../../components/animations/FadeIn';
import SlideIn from '../../components/animations/SlideIn';
import ParallaxEffect from '../../components/animations/ParallaxEffect';
import { usePageTitle, PageTitle } from '../../hooks/usePageTitle.jsx';
import heroBg from '../../assets/bg.jpg';
import profileImg from '../../assets/profile.jpg';
import nafisaAhmedImg from '../../assets/nafisa_ahmed.jpg';

const HomePage = () => {
  usePageTitle('Home');

  return (
    <>
      <PageTitle title="Home" />
      <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image from assets */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Lily Pad Background"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/1920x1080/d4b5a0/ffffff?text=Background+Image";
            }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-6xl w-full">
            {/* Profile section - positioned to match the reference image */}
            <div className="flex flex-col items-center md:items-start md:ml-16 lg:ml-24 mt-16 md:mt-32">
              {/* Profile image with bouncing animation */}
              <FadeIn delay={0.3}>
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white mb-6 relative z-20 bounce-slow">
                <img
                  src={profileImg}
                  alt="Nafisa Ahmed"
                  className="w-full h-full object-cover object-center"
                  onLoad={() => console.log('Profile image loaded successfully')}
                  onError={(e) => {
                    console.error('Profile image failed to load:', e);
                    console.log('Attempted to load:', profileImg);
                    console.log('Trying fallback to public folder...');
                    e.target.onerror = null;
                    e.target.src = "/assets/profile.jpg";
                    // If that also fails, show placeholder
                    e.target.onerror = () => {
                      e.target.src = "https://placehold.co/400x400/f6d0a8/ffffff?text=Profile+Image";
                    };
                  }}
                />
                </div>
              </FadeIn>

              {/* Name and title with bouncing animation */}
              <FadeIn delay={0.6}>
                <div className="text-center md:text-left bounce-slow">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl hero-title mb-2 font-normal tracking-wide">Sk. Nafisa Ahmed</h1>
                  <p className="text-lg md:text-xl hero-subtitle font-medium">Visual Artist</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

      </section>

      {/* Featured Works Section */}
      <section className="py-20 bg-primary-400">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Works</h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
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
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Ethereal Dreamscapes</h3>
                      <p className="text-gray-300">
                        A series exploring the boundaries between reality and imagination through vibrant digital illustrations.
                      </p>
                      <div className="mt-4 inline-flex items-center text-primary-300 font-medium">
                        View Project
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
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
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Futuristic Metropolis</h3>
                      <p className="text-gray-300">
                        Concept art for a sci-fi project depicting a sprawling city of tomorrow with advanced technology.
                      </p>
                      <div className="mt-4 inline-flex items-center text-primary-300 font-medium">
                        View Project
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
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
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Character Evolution</h3>
                      <p className="text-gray-300">
                        A deep dive into character design, showcasing the development process from sketch to final artwork.
                      </p>
                      <div className="mt-4 inline-flex items-center text-primary-300 font-medium">
                        View Project
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SlideIn>
          </div>

          <div className="text-center mt-12">
            <div className="inline-block">
              <Link to="/portfolio" className="btn bg-primary-800 text-white hover:bg-primary-900 border border-primary-700 hover:border-primary-600 transition-all duration-300">
                View All Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-primary-400">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Light effect animation - positioned to match photo size */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/20 to-transparent animate-light-sweep"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-100/30 to-transparent animate-light-sweep-delayed"></div>
              </div>
              
              {/* Photo with up-down animation */}
              <ParallaxEffect speed={0.1} className="rounded-lg overflow-hidden">
                <div className="animate-float-slow relative z-10">
                  <img
                    src={nafisaAhmedImg}
                    alt="Nafisa Ahmed - Visual Artist"
                    className="w-full h-auto rounded-lg object-cover object-center min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] shadow-2xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/800x600/f6d0a8/ffffff?text=Nafisa+Ahmed";
                    }}
                  />
                </div>
              </ParallaxEffect>
            </div>

            <div>
              <SlideIn direction="right">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">About the Artist</h2>
                <p className="text-gray-700 mb-6">
                  With a passion deeply rooted in fine arts and a professional journey spanning imaginative digital illustration,
                  dynamic concept art, and compelling storytelling, I transform ideas into vivid visual worlds — growing from
                  strong local roots to a thriving global reach.
                </p>
                <p className="text-gray-700 mb-8">
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
      <section className="py-20 bg-gradient-to-br from-primary-800 to-accent-900">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Bring Your Vision to Life?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and transform your ideas into stunning visual narratives.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-primary-50 hover:text-primary-900 transition-all duration-300">
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </MainLayout>
    </>
  );
};

export default HomePage;

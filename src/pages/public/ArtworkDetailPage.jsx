import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '../../components/layout/MainLayout';
import FadeIn from '../../components/animations/FadeIn';
import SlideIn from '../../components/animations/SlideIn';

// Sample artwork data (in a real app, this would come from an API or database)
const artworksData = [
  {
    id: 'ethereal-dreamscapes',
    title: 'Ethereal Dreamscapes',
    category: 'digital-illustration',
    description: 'A series exploring the boundaries between reality and imagination through vibrant digital illustrations.',
    image: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?q=80&w=2081&auto=format&fit=crop',
    featured: true,
    date: 'June 2023',
    tools: ['Photoshop', 'Procreate', 'Wacom Tablet'],
    story: `This series began as an exploration of the liminal spaces between consciousness and dreams. I've always been fascinated by the surreal landscapes our minds create when we sleep, and I wanted to capture that ethereal quality in my work.

Each piece in this collection represents a different dreamscape, inspired by both personal experiences and universal dream symbols. The vibrant color palette was chosen to evoke the heightened emotional state we often experience in dreams, where colors seem more saturated and meaningful.

The technical process involved sketching initial concepts based on dream journal entries, then developing them digitally using a combination of Photoshop and Procreate. I focused particularly on lighting effects to create that sense of otherworldliness that characterizes dream states.

What I find most compelling about this series is how viewers bring their own interpretations to each piece, often seeing reflections of their own dream experiences in the imagery. It's a reminder of how art can create a bridge between individual experiences and collective unconscious themes.`,
    relatedWorks: ['cosmic-journey', 'fantasy-landscapes', 'watercolor-dreams'],
  },
  {
    id: 'futuristic-metropolis',
    title: 'Futuristic Metropolis',
    category: 'concept-art',
    description: 'Concept art for a sci-fi project depicting a sprawling city of tomorrow with advanced technology.',
    image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1974&auto=format&fit=crop',
    featured: true,
    date: 'March 2023',
    tools: ['Photoshop', 'Blender', 'ZBrush'],
    story: `The Futuristic Metropolis project was commissioned for an upcoming sci-fi film set in the year 2150. The director wanted to create a vision of the future that felt both advanced and plausible, avoiding the dystopian clichés that often dominate sci-fi visual language.

I began by researching current urban planning trends, sustainable architecture, and emerging technologies to ground my concepts in reality before pushing them into the future. The city needed to feel like a natural evolution of our current world rather than a complete departure.

One of the key design principles was the integration of nature with technology. You'll notice the abundance of vertical gardens, green spaces, and water features throughout the cityscape. These elements not only provide visual contrast to the sleek architectural forms but also represent a future where environmental consciousness is built into urban design.

The lighting design was particularly important for this project. I wanted to create a sense of a city that never sleeps but avoids light pollution through smart, adaptive illumination systems. The blue-teal color palette emerged naturally from this concept, giving the city a cool, efficient feel while still appearing inviting and livable.

This project challenged me to balance technical precision with creative vision, resulting in a metropolis that feels both fantastical and believable.`,
    relatedWorks: ['cyberpunk-alley', 'ancient-ruins', 'fantasy-landscapes'],
  },
  // More artwork data would be here in a real application
];

const ArtworkDetailPage = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedArtworks, setRelatedArtworks] = useState([]);
  const navigate = useNavigate();

  // Fetch artwork data
  useEffect(() => {
    const fetchArtwork = async () => {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const foundArtwork = artworksData.find(art => art.id === id);
      
      if (foundArtwork) {
        setArtwork(foundArtwork);
        
        // Get related artworks
        if (foundArtwork.relatedWorks && foundArtwork.relatedWorks.length > 0) {
          const related = artworksData
            .filter(art => foundArtwork.relatedWorks.includes(art.id))
            .slice(0, 3);
          setRelatedArtworks(related);
        }
      } else {
        // Artwork not found, redirect to 404
        navigate('/not-found');
      }
      
      setIsLoading(false);
    };

    fetchArtwork();
  }, [id, navigate]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      </MainLayout>
    );
  }

  if (!artwork) {
    return null; // Will redirect to 404 page
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-10">
        <div className="container-custom">
          <div className="mb-8">
            <Link to="/portfolio" className="text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
          </div>
          
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{artwork.title}</h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              {artwork.description}
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Artwork Image */}
      <section className="py-10">
        <div className="container-custom">
          <SlideIn direction="up">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={artwork.image} 
                alt={artwork.title} 
                className="w-full h-auto"
              />
            </div>
          </SlideIn>
        </div>
      </section>
      
      {/* Artwork Details */}
      <section className="py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Metadata */}
            <SlideIn direction="right">
              <div className="bg-dark-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-gray-400 text-sm">Category</h3>
                    <p className="font-medium">
                      {artwork.category.split('-').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-400 text-sm">Date</h3>
                    <p className="font-medium">{artwork.date}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-400 text-sm">Tools Used</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {artwork.tools.map(tool => (
                        <span 
                          key={tool} 
                          className="inline-block bg-dark-700 text-primary-400 px-3 py-1 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {artwork.featured && (
                    <div className="pt-2">
                      <span className="inline-block bg-gold-900/30 text-gold-400 border border-gold-500 px-3 py-1 rounded-full text-sm">
                        Featured Work
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </SlideIn>
            
            {/* Story */}
            <SlideIn direction="up" className="lg:col-span-2">
              <div className="bg-dark-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">The Story</h2>
                <div className="prose prose-invert max-w-none">
                  {artwork.story.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
      
      {/* Related Works */}
      {relatedArtworks.length > 0 && (
        <section className="py-16 bg-dark-900">
          <div className="container-custom">
            <FadeIn className="mb-10">
              <h2 className="text-3xl font-bold">Related Works</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArtworks.map((relatedArt, index) => (
                <SlideIn key={relatedArt.id} direction="up" delay={index * 0.1} className="group">
                  <Link to={`/portfolio/${relatedArt.id}`} className="block">
                    <div className="card h-full">
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={relatedArt.image}
                          alt={relatedArt.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{relatedArt.title}</h3>
                        <p className="text-gray-400 mb-4 line-clamp-2">
                          {relatedArt.description}
                        </p>
                        <span className="text-primary-400 hover:text-primary-300 font-medium">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </Link>
                </SlideIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default ArtworkDetailPage;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from '../../components/layout/MainLayout';
import FadeIn from '../../components/animations/FadeIn';

// Sample artwork data (in a real app, this would come from an API or database)
const artworksData = [
  {
    id: 'ethereal-dreamscapes',
    title: 'Ethereal Dreamscapes',
    category: 'digital-illustration',
    description: 'A series exploring the boundaries between reality and imagination through vibrant digital illustrations.',
    image: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?q=80&w=2081&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'futuristic-metropolis',
    title: 'Futuristic Metropolis',
    category: 'concept-art',
    description: 'Concept art for a sci-fi project depicting a sprawling city of tomorrow with advanced technology.',
    image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1974&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'character-evolution',
    title: 'Character Evolution',
    category: 'character-design',
    description: 'A deep dive into character design, showcasing the development process from sketch to final artwork.',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2009&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'ancient-ruins',
    title: 'Ancient Ruins',
    category: 'environment-design',
    description: 'Environmental concept art depicting mysterious ancient ruins reclaimed by nature.',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'cosmic-journey',
    title: 'Cosmic Journey',
    category: 'digital-illustration',
    description: 'A vibrant series exploring space themes and cosmic landscapes.',
    image: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'mythical-creatures',
    title: 'Mythical Creatures',
    category: 'character-design',
    description: 'A collection of mythical creature designs inspired by various world mythologies.',
    image: 'https://images.unsplash.com/photo-1580983218765-f663bec07b37?q=80&w=2069&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'cyberpunk-alley',
    title: 'Cyberpunk Alley',
    category: 'environment-design',
    description: 'Neon-lit alleyways in a dystopian cyberpunk future.',
    image: 'https://images.unsplash.com/photo-1569171160332-f201f68c60bd?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'fantasy-landscapes',
    title: 'Fantasy Landscapes',
    category: 'concept-art',
    description: 'Breathtaking fantasy landscapes for an epic adventure game.',
    image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1965&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'watercolor-dreams',
    title: 'Watercolor Dreams',
    category: 'traditional-art',
    description: 'A series of traditional watercolor paintings exploring dreamlike themes.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2045&auto=format&fit=crop',
    featured: false,
  },
];

const PortfolioPage = () => {
  const [artworks, setArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Categories for filtering
  const categories = [
    { value: 'all', label: 'All Works' },
    { value: 'digital-illustration', label: 'Digital Illustration' },
    { value: 'concept-art', label: 'Concept Art' },
    { value: 'character-design', label: 'Character Design' },
    { value: 'environment-design', label: 'Environment Design' },
    { value: 'traditional-art', label: 'Traditional Art' },
  ];

  // Simulate fetching artworks from an API
  useEffect(() => {
    const fetchArtworks = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setArtworks(artworksData);
      setFilteredArtworks(artworksData);
      setIsLoading(false);
    };

    fetchArtworks();
  }, []);

  // Filter artworks by category
  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    if (category === 'all') {
      setFilteredArtworks(artworks);
    } else {
      setFilteredArtworks(artworks.filter(artwork => artwork.category === category));
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <MainLayout>
      <section className="py-20">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my collection of artwork spanning digital illustrations, concept art,
              character designs, and more.
            </p>
          </FadeIn>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategoryChange(category.value)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Artwork Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredArtworks.length > 0 ? (
                  filteredArtworks.map((artwork) => (
                    <motion.div
                      key={artwork.id}
                      variants={itemVariants}
                    >
                      <a href={`/portfolio/${artwork.id}`} className="block group">
                        <div className="relative overflow-hidden aspect-[4/3] rounded-lg">
                          <img
                            src={artwork.image}
                            alt={artwork.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />

                          {/* Hover overlay with description */}
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileHover={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <h3 className="text-2xl font-bold text-white mb-2">{artwork.title}</h3>
                              <p className="text-gray-300 line-clamp-2">
                                {artwork.description}
                              </p>
                              <div className="mt-4 inline-flex items-center text-primary-400 font-medium">
                                View Details
                                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </div>
                            </motion.div>
                          </div>

                          {artwork.featured && (
                            <div className="absolute top-4 right-4 bg-gold-500 text-dark-900 text-xs font-bold px-2 py-1 rounded z-10">
                              Featured
                            </div>
                          )}
                        </div>
                      </a>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">No artworks found</h3>
                    <p className="text-gray-400">
                      No artworks match the selected category. Try selecting a different category.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default PortfolioPage;

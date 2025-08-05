import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const iconStyles = [
  { background: '#f6d0a8', color: '#0b2a2b' }, // Work
  { background: '#f4c794', color: '#0b2a2b' }, // Work
  { background: '#f2be80', color: '#0b2a2b' }, // Work
  { background: '#0b2a2b', color: '#fff' },    // Education
];

const getIcon = (index, title) => {
  if (title.toLowerCase().includes('bfa') || title.toLowerCase().includes('graduat')) return <FaGraduationCap />;
  if (index === 0) return <FaStar />;
  return <FaBriefcase />;
};

const ProfessionalJourneyTimeline = ({ timeline }) => (
  <VerticalTimeline animate={true} lineColor="#0b2a2b">
    {timeline.map((item, idx) => (
      <VerticalTimelineElement
        key={item.year + item.title}
        className="vertical-timeline-element--work"
        contentStyle={{ 
          background: 'linear-gradient(135deg, #f6d0a8 0%, #f4c794 50%, #f2be80 100%)', 
          color: '#0b2a2b', 
          boxShadow: '0 12px 40px rgba(11,42,43,0.15)',
          borderRadius: '16px',
          border: '2px solid rgba(11,42,43,0.1)',
          margin: '0 20px',
          padding: '20px'
        }}
        contentArrowStyle={{ borderRight: '8px solid #0b2a2b' }}
        date={item.year}
        iconStyle={iconStyles[idx % iconStyles.length]}
        icon={getIcon(idx, item.title)}
      >
        <div className="h-full">
          <h3 
            className="vertical-timeline-element-title text-xl font-bold mb-2" 
            style={{ color: '#0b2a2b' }}
          >
            {item.title}
          </h3>
          <h4 
            className="vertical-timeline-element-subtitle text-primary-700 font-medium mb-3"
          >
            {item.company}
          </h4>
          <p 
            className="text-gray-800 leading-relaxed text-sm"
          >
            {item.description}
          </p>
        </div>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
);

export default ProfessionalJourneyTimeline; 
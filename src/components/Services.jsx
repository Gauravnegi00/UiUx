import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import RotatingText from './RotatingText';
import '../styles/RotatingText.css';

function Services() {
  const services = [
    {
      title: 'Professional Training & Development',
      description: 'Empower your team with cutting-edge skills and knowledge.',
      features: [
        'Custom Training Programs',
        'Professional Development Workshops',
        'Leadership Training',
        'Technical Skills Development',
        'Team Building Activities',
        'Performance Assessment'
      ]
    },
    {
      title: 'Website Development',
      description: 'Create modern, responsive websites tailored to your needs.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'CMS Integration',
        'Responsive Design',
        'SEO Optimization',
        'Website Maintenance & Support'
      ]
    },
    {
      title: 'UI/UX Design',
      description: 'Design intuitive and engaging user experiences.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'User Testing',
        'Mobile & Web App Design',
        'Dark Mode & Adaptive UI'
      ]
    },
    {
      title: 'Graphic Design',
      description: 'Create stunning visuals that capture your brand essence.',
      features: [
        'Logo Design',
        'Brand Identity',
        'Marketing Materials',
        'Social Media Graphics',
        'Motion Graphics & Animation',
        'Product Packaging Design'
      ]
    },
    {
      title: 'Digital Marketing',
      description: 'Boost your online presence with strategic marketing solutions.',
      features: [
        'SEO & SEM Optimization',
        'Content Marketing',
        'Social Media Management',
        'PPC Advertising',
        'Email Marketing',
        'Conversion Rate Optimization'
      ]
    },
    {
      title: 'Mobile App Development',
      description: 'Develop high-performance mobile apps tailored to your business needs.',
      features: [
        'iOS & Android Development',
        'Cross-Platform Solutions',
        'App UI/UX Design',
        'Performance Optimization',
        'App Maintenance & Support',
        'Push Notifications & Analytics'
      ]
    }
  ];

  return (
    <div className='bg-white/5 backdrop-blur-lg w-[95%] min-h-screen flex flex-col gap-10 pb-20 pt-20 items-center text-gray-800'>
      <h2 className='text-4xl font-bold mb-4 text-center text-gray-700'>Our Services</h2>
      <p className='text-gray-600 max-w-2xl text-center mb-8'>We provide a wide range of digital solutions to help your business grow and succeed in the online world.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4'>
        {services.map((service, index) => (
          <div key={index} className='bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 border border-white/20'>
            <h3 className='text-2xl font-semibold mb-4 text-gray-700'>
              <RotatingText
                texts={[service.title]}
                splitBy="characters"
                staggerDuration={0.03}
                rotationInterval={4000}
                transition={{ type: "spring", damping: 20, stiffness: 180 }}
              />
            </h3>
            <p className='text-gray-600 mb-6'>
              <RotatingText
                texts={[service.description]}
                splitBy="words"
                staggerDuration={0.05}
                rotationInterval={4000}
                transition={{ type: "spring", damping: 15, stiffness: 150 }}
              />
            </p>
            <ul className='space-y-3'>
              {service.features.map((feature, idx) => (
                <li key={idx} className='flex items-center space-x-2'>
                  <FaCheckCircle className='text-gray-500' />
                  <span className='text-gray-700'>
                    <RotatingText
                      texts={[feature]}
                      splitBy="words"
                      staggerDuration={0.04}
                      rotationInterval={3500}
                      transition={{ type: "spring", damping: 18, stiffness: 160 }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
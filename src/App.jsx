import React, { useState, useEffect } from 'react';

// --- Portfolio Data ---
// Consolidated data for all portfolio sections, including categorized projects.
const portfolioData = {
  name: 'Oyerinde David',
  title: 'Graphic Designer & Motion Designer',
  summary: 'Highly creative and detail-oriented Graphic Designer & Motion Designer with 4 years of experience in crafting visually stunning designs and motion graphics. Proficient in a range of design software, with a strong passion for delivering high-quality work.',
  contact: {
    phone: '08145264181',
    email: 'oyerindedavid9@gmail.com',
  },
  experience: [
    {
      title: 'Motion Designer',
      company: 'NACOSS',
      date: 'June 2024',
      description: [
        'Designed and developed motion graphics, animations, and visual effects for various projects, including social media content, event promotions, and brand campaigns.',
        'Collaborated with the design team to create cohesive visual identities for clients.',
        'Utilized Adobe Creative Suite, particularly After Effects, Premiere Pro, and Photoshop, to create high-quality motion graphics.',
      ],
    },
    {
      title: 'Graphic Designer',
      company: 'De-Majestic Concept',
      date: 'March 2020',
      description: [
        'Designed and developed visual materials, including logos, brochures, posters, and social media graphics, for various clients.',
        'Worked closely with clients to understand their design needs and preferences.',
        'Proficiently used Adobe Creative Suite, specifically Photoshop, Illustrator, to create high-quality designs.',
      ],
    },
  ],

  education: [
    {
      degree: 'University of Ilorin',
      notes: '',
    },
    {
      degree: 'Trained with Deji Design',
      notes: '',
    },
  ],
  skills: {
    graphicDesign: ['Adobe Photoshop', 'Adobe Illustrator'],
    motionGraphics: ['Adobe After Effects', 'Adobe Premiere Pro'],
    other: ['Visual Effects', 'Branding and Identity Design', 'Social Media Graphics', 'Print Design (Brochures, Posters, Business Cards)', 'UI/UX Design (Basic knowledge)'],
  },
  // Categorized projects for the new gallery pages
  projects: {
    brandIdentity: [
      {
            id: 'bi1', // Assuming this is da-musik.jpg
        name: 'Music Album Cover: "Celebrate"',
        category: 'Album Art / Flyer Design',
        description: 'Vibrant album cover design for "Celebrate" by Da-musik, featuring a classic microphone against a tropical backdrop to evoke a festive, musical mood. Ideal for digital release and promotional flyers.',
        src: "src/assets/da-musik.png", // Internal placeholder path
        
      },
      {
           id: 'bi2', // Assuming this is dm design.jpg
           name: 'De-Majestic Concept Branding',
           category: 'Branding & Marketing',
           description: 'Promotional graphic for "De-Majestic Concept" highlighting their services: Logo Design, Branding, and Flyer Design. Features a modern illustration and clear contact information for marketing campaigns.',
          src: "src/assets/dm design.png", // Internal placeholder path
        
      },
      {
        id: 'bi3',
        name: 'Corporate Brochure Layout',
        category: 'Print Design',
        src: 'src/assets/nacos.png', // Internal placeholder path
        description: 'Elegant tri-fold brochure showcasing company services and values for client presentations.',
      },
      {
       id: 'bi4', // Assuming this is YES.png (Business Card)
         name: 'Yosola Electrical Services Business Card',
        category: 'Business Card Design',
         description: 'Professional business card design for "Yosola Electrical Services," showcasing contact details and key services (Electrical Appliances Maintenance, Installation, Solar Power, CCTV). Designed for clear communication and brand recall.',
        src: 'src/assets/YES.png', // Internal placeholder path

      },
    ],
    animations: [
      {
        id: "an4",
        title: "Event Teaser - 2024-12-24",
        thumbnail: "src/assets/animations/2024-12-24-230421838-thumb.png",
        videoUrl: "src/assets/2024-12-24-230421838.mp4",
        description: "A dynamic video teaser created for an event held on December 24, 2024, designed to build excitement and attendance."
      },

{
  id: "an5",
  title: "Christmas NACOSS Celebration",
  thumbnail: "src/assets/animations/Christmas-NACOSS-thumb.png",
  videoUrl: "src/assets/Christmas NACOSS.mp4",
  description: "A festive animation celebrating Christmas with the NACOSS community, featuring cheerful visuals and holiday themes."
},
{
  id: "an6",
  title: "Abstract Motion Graphic - lv_0",
  thumbnail: "src/assets/lv_0_20241128112346-thumb.png",
  videoUrl: "src/assets/lv_0_20241128112346.mp4",
  description: "An abstract motion graphic piece, exploring fluid movements and vibrant colors, created on November 28, 2024."
},
{
  id: "an7",
  title: "Promotional Clip - VID_20241224",
  thumbnail: "src/assets/animations/VID_20241224_031524_761-2-thumb.png",
  videoUrl: "src/assets/VID_20241224_031524_761~2.mp4",
  description: "A short promotional video clip, capturing key highlights and designed for quick engagement, recorded on December 24, 2024."
}
    ],
    socialMediaGraphics: [
      {
        id: 'sm1', // Assuming this is soc nacos.jpg
        name: 'NACOSS Data Science Social Media Campaign',
        category: 'Social Media Graphics',
         description: 'Series of engaging social media graphics for NACOSS (National Association of Computer Science Students) promoting Data Science initiatives. Designs focus on "Untapped Potential," "Master Data, Solve Problems," and "Unlock Insights, Drive Decisions" to attract students.',
        src: "src/assets/soc nacos.png ",//Internal placeholder path
      },
      {
        id: "sm2",
        name: "NACOS Merch Design Challenge Promo",
        category: "Social Media Graphics",
        src: "src/assets/nacos.png", // Internal placeholder path
        description: "Promotional graphic for the 'NACOS is Cooking: Create the Merch Design Challenge,' featuring a t-shirt design and event details to build anticipation and encourage participation."

   
      },
      {
        id: 'sm3',
        name: 'Facebook Ad Set',
        category: 'Facebook Ads',
        src: '/assets/social_media/facebook-ads.png', // Internal placeholder path
        description: 'Creative ad visuals optimized for Facebook, driving clicks and conversions.',
      },
      {
        id: 'sm4',
        name: 'LinkedIn Carousel',
        category: 'LinkedIn',
        src: '/assets/social_media/linkedin-carousel.png', // Internal placeholder path
        description: 'Informative and visually appealing carousel posts for professional networking on LinkedIn.',
      },
    ],
  },
};

// --- Main App Component ---
const App = () => {
  // State to manage the current page view: 'home', 'brandIdentity', 'animations', 'socialMediaGraphics'
  const [currentPage, setCurrentPage] = useState('home');
  // State to control the video modal visibility and content
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Function to open the video modal
  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  // Function to close the video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  // Render the appropriate section based on currentPage state
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            {/* Hero Section */}
            <section id="hero" className="d-flex align-items-center justify-content-center min-vh-100 bg-black text-white py-5 pt-md-0">
              <div className="container text-center py-5">
                <h1 className="display-3 fw-bolder lh-tight tracking-tight rounded-xl p-4 bg-dark-custom bg-opacity-75 shadow-lg-custom">
                  Welcome, I'm <span className="text-gold">{portfolioData.name}</span>
                </h1>
                <p className="fs-2 fw-light rounded-xl p-3 bg-dark-custom bg-opacity-75 mt-4">
                  A <span className="fw-semibold text-white">{portfolioData.title}</span>
                </p>
                <p className="fs-5 lh-base mt-4 rounded-xl p-3 bg-dark-custom bg-opacity-75 shadow-inner text-secondary">
                  {portfolioData.summary}
                </p>
                <a
                  href="#contact"
                  className="btn btn-gold btn-lg rounded-pill mt-5 px-5 py-3 shadow-lg-custom"
                >
                  Connect With Me
                </a>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-5 bg-dark-custom border-top border-bottom border-dark-subtle">
              <div className="container py-5">
                <h2 className="display-4 fw-bold text-center text-gold mb-5 pb-4 border-bottom border-gold">About My Craft</h2>
                <div className="row g-5 align-items-center">
                  <div className="col-md-6">
                    <img
                      src="src/assets/_MG_9607.JPG" 
                      alt="Oyerinde David"
                      className="img-fluid rounded-circle shadow-lg-custom border border-dark-subtle d-block mx-auto"
                      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                      onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23212121'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='20' fill='%23FFD700' text-anchor='middle' dominant-baseline='middle'%3EProfile Image Missing%3C/text%3E%3C/svg%3E"; }}
                    />
                    <p className="text-center text-muted mt-3">
                     
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="fs-5 lh-base text-secondary">{portfolioData.summary}</p>
                    <p className="fs-5 lh-base text-secondary">
                      My journey in design began with a fervent passion for crafting compelling visual narratives. I've meticulously refined my expertise in both static graphic design and dynamic motion graphics, consistently delivering exceptional work that not only meets but surpasses client expectations.
                    </p>
                    <h3 className="fs-3 fw-semibold text-white mt-5">My Training & Knowledge</h3>
                    <ul className="list-unstyled ps-4 space-y-3 text-secondary">
                      {portfolioData.education.map((edu, index) => (
                        <li key={index} className="d-flex align-items-center">
                          <span className="text-gold me-3 fs-4">&bull;</span> <span className="fw-medium text-white">{edu.degree}</span> {edu.notes && `(${edu.notes})`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-5 bg-black">
              <div className="container py-5">
                <h2 className="display-4 fw-bold text-center text-gold mb-5 pb-4 border-bottom border-gold">My Expertise</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {/* Graphic Design Skills */}
                  <div className="col">
                    <div className="card h-100 bg-darker-custom rounded-xl shadow-custom card-custom border border-dark-subtle">
                      <div className="card-body p-4">
                        <h3 className="card-title fs-3 fw-bold text-white mb-4">Graphic Design Mastery</h3>
                        <ul className="list-unstyled ps-4 space-y-3 text-secondary">
                          {portfolioData.skills.graphicDesign.map((skill, index) => (
                            <li key={index} className="d-flex align-items-center">
                              <span className="text-gold me-3 fs-4">&bull;</span> {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Motion Graphics Skills */}
                  <div className="col">
                    <div className="card h-100 bg-darker-custom rounded-xl shadow-custom card-custom border border-dark-subtle">
                      <div className="card-body p-4">
                        <h3 className="card-title fs-3 fw-bold text-white mb-4">Motion Graphics Artistry</h3>
                        <ul className="list-unstyled ps-4 space-y-3 text-secondary">
                          {portfolioData.skills.motionGraphics.map((skill, index) => (
                            <li key={index} className="d-flex align-items-center">
                              <span className="text-gold me-3 fs-4">&bull;</span> {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Other Skills */}
                  <div className="col">
                    <div className="card h-100 bg-darker-custom rounded-xl shadow-custom card-custom border border-dark-subtle">
                      <div className="card-body p-4">
                        <h3 className="card-title fs-3 fw-bold text-white mb-4">Diverse Competencies</h3>
                        <ul className="list-unstyled ps-4 space-y-3 text-secondary">
                          {portfolioData.skills.other.map((skill, index) => (
                            <li key={index} className="d-flex align-items-center">
                              <span className="text-gold me-3 fs-4">&bull;</span> {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Projects Section - Now acts as the navigation to galleries */}
            <section id="projects" className="py-5 bg-dark-custom border-top border-bottom border-dark-subtle">
              <div className="container py-5">
                <h2 className="display-4 fw-bold text-center text-gold mb-5 pb-4 border-bottom border-gold">My Creations</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                  <div className="col">
                    <PortfolioCategoryCard
                      title="Brand Identity & Print"
                      description="Flyers, brochures, and comprehensive branding solutions."
                      icon="🎨"
                      onClick={() => setCurrentPage('brandIdentity')}
                    />
                  </div>
                  <div className="col">
                    <PortfolioCategoryCard
                      title="Animations & Video Logs"
                      description="Dynamic motion graphics, explainer videos, and visual storytelling."
                      icon="🎬"
                      onClick={() => setCurrentPage('animations')}
                    />
                  </div>
                  <div className="col">
                    <PortfolioCategoryCard
                      title="Social Media Graphics"
                      description="Engaging visuals optimized for various social media campaigns."
                      icon="📱"
                      onClick={() => setCurrentPage('socialMediaGraphics')}
                    />
                  </div>
                </div>
                <p className="text-center text-muted mt-5 fs-5 fst-italic">
                  Note: Click on a category above to view detailed projects in each area.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-5 bg-black border-top border-bottom border-dark-subtle">
              <div className="container py-5 text-center">
                <h2 className="display-4 fw-bold text-center text-gold mb-5 pb-4 border-bottom border-gold">Initiate Contact</h2>
                <p className="fs-5 text-secondary mb-5">
                  I am eager to explore new opportunities and creative collaborations. Feel empowered to connect!
                </p>
                <div className="d-flex flex-column align-items-center justify-content-center gap-4">
                  <p className="fs-4 fw-bold text-white d-flex align-items-center justify-content-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-gold" style={{ width: '2rem', height: '2rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {portfolioData.contact.phone}
                  </p>
                  <p className="fs-4 fw-bold text-white d-flex align-items-center justify-content-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-gold" style={{ width: '2rem', height: '2rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 6v4m0 0H9m3 0h3m-6-10h6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
                    </svg>
                    <a href={`mailto:${portfolioData.contact.email}`} className="text-white hover-gold text-decoration-none">{portfolioData.contact.email}</a>
                  </p>
                </div>
              </div>
            </section>
          </>
        );
      case 'brandIdentity':
        return (
          <BrandIdentityGallery
            projects={portfolioData.projects.brandIdentity}
            onBack={() => setCurrentPage('home')}
          />
        );
      case 'animations':
        return (
          <AnimationGallery
            projects={portfolioData.projects.animations}
            onBack={() => setCurrentPage('home')}
            onPlayVideo={openVideoModal} // Pass the modal opener from App
          />
        );
      case 'socialMediaGraphics':
        return (
          <SocialMediaGraphicsGallery
            projects={portfolioData.projects.socialMediaGraphics}
            onBack={() => setCurrentPage('home')}
          />
        );
      default:
        return null; // Should not happen with 'home' as default
    }
  };

  return (
    <div className="bg-black text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Bootstrap CSS */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous"></link>
      {/* Font Awesome for social icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      {/* Custom Styles for Dark Mode and Gold Accents */}
      <style>
        {`
        body {
            background-color: #000;
            font-family: 'Inter', sans-serif;
            color: #fff;
        }
        .text-gold {
            color: #FFD700;
        }
        .bg-dark-custom {
            background-color: #1a1a1a !important; /* Slightly lighter black for sections */
        }
        .bg-darker-custom {
            background-color: #212121 !important; /* Even lighter black for cards */
        }
        .border-gold {
            border-color: #FFD700 !important;
        }
        .border-dark-subtle {
            border-color: #333 !important; /* Subtle dark border */
        }
        .btn-gold {
            background-color: #FFD700;
            color: #000;
            font-weight: bold;
            border: none;
            transition: all 0.3s ease;
        }
        .btn-gold:hover {
            background-color: #FFD700; /* Keep gold on hover for a strong contrast */
            filter: brightness(0.9); /* Slightly darken on hover */
            transform: scale(1.05);
        }
        .card-custom {
            border-color: #333 !important;
            transition: transform 0.3s ease;
        }
        .card-custom:hover {
            transform: scale(1.02);
        }
        .hover-gold:hover {
            color: #FFD700 !important;
        }
        .rounded-xl {
            border-radius: 1rem !important; /* Custom large border-radius */
        }
        .shadow-custom {
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.5) !important; /* Darker shadow */
        }
        .shadow-lg-custom {
            box-shadow: 0 1rem 3rem rgba(0,0,0,.7) !important; /* Larger, darker shadow */
        }
        /* Custom spacing for list items, mimicking Tailwind's space-y */
        .space-y-3 > li:not(:first-child) {
            margin-top: 0.75rem; /* 12px */
        }
        .space-y-4 > *:not(:first-child) {
            margin-top: 1rem; /* 16px */
        }
        /* Video Modal specific styles for responsiveness */
        .embed-responsive {
            position: relative;
            display: block;
            width: 100%;
            padding: 0;
            overflow: hidden;
        }
        .embed-responsive.embed-responsive-16by9::before {
            padding-top: 56.25%; /* 16:9 aspect ratio */
            content: "";
            display: block;
        }
        .embed-responsive .embed-responsive-item,
        .embed-responsive iframe,
        .embed-responsive video {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }
        `}
      </style>

      {/* Header/Navbar */}
      <header className="navbar navbar-expand-lg bg-dark sticky-top shadow-custom border-bottom border-dark-subtle py-3">
        <div className="container-fluid container-xl">
          <a className="navbar-brand text-gold fs-3 fw-bolder rounded-xl px-3 py-2 hover-gold" href="#" onClick={() => setCurrentPage('home')}>David O.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white hover-gold fw-medium rounded-lg px-3 py-2" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white hover-gold fw-medium rounded-lg px-3 py-2" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white hover-gold fw-medium rounded-lg px-3 py-2" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                {/* Updated Projects link to navigate to the main projects section */}
                <a className="nav-link text-white hover-gold fw-medium rounded-lg px-3 py-2" href="#projects" onClick={() => setCurrentPage('home')}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white hover-gold fw-medium rounded-lg px-3 py-2" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Render the main content based on currentPage state */}
      {renderContent()}

      {/* Footer */}
      <footer className="bg-black text-white py-5 text-center border-top border-dark-subtle">
        <div className="container">
          <p className="fs-5 text-secondary mb-4">&copy; {new Date().getFullYear()} Oyerinde David. All rights reserved. Crafted with excellence.</p>
          <div className="d-flex justify-content-center gap-4">
            {/* Social media icons - remember to replace '#' with actual links */}
            <a href="#" className="text-secondary hover-gold text-decoration-none" style={{ transition: 'transform 0.3s ease' }}>
                <i className="fab fa-linkedin-in fs-4"></i>
            </a>
            <a href="#" className="text-secondary hover-gold text-decoration-none" style={{ transition: 'transform 0.3s ease' }}>
                <i className="fab fa-behance fs-4"></i>
            </a>
            <a href="#" className="text-secondary hover-gold text-decoration-none" style={{ transition: 'transform 0.3s ease' }}>
                <i className="fab fa-dribbble fs-4"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* Video Modal (rendered conditionally at the App level) */}
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={closeVideoModal} />
      )}

      {/* Bootstrap Bundle with Popper */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
    </div>
  );
};

// --- Reusable Components for Galleries ---

// Card for displaying portfolio categories on the home page
const PortfolioCategoryCard = ({ title, description, icon, onClick }) => {
  return (
    <div
      className="card h-100 bg-darker-custom rounded-xl shadow-custom card-custom border border-dark-subtle text-center d-flex flex-column justify-content-between cursor-pointer"
      onClick={onClick}
    >
      <div className="card-body p-4">
        <div className="fs-1 mb-3">{icon}</div> {/* Emoji icon */}
        <h3 className="card-title fs-3 fw-bold text-white mb-2">{title}</h3>
        <p className="card-text text-secondary">{description}</p>
      </div>
      <div className="card-footer bg-transparent border-top border-dark-subtle p-3">
        <button className="btn btn-gold rounded-pill px-4 py-2 shadow-sm">
          View Projects
        </button>
      </div>
    </div>
  );
};

// Component for displaying individual design assets (images)
const DesignCard = ({ asset }) => {
  return (
    <div className="col">
      <div className="card h-100 bg-darker-custom rounded-xl shadow-custom card-custom border border-dark-subtle overflow-hidden">
        <img
          src={asset.src} // Now consistently using asset.src
          alt={asset.name}
          className="card-img-top img-fluid"
          style={{ height: '256px', objectFit: 'cover' }}
          onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23212121'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='30' fill='%23FFD700' text-anchor='middle' dominant-baseline='middle'%3EImage Missing%3C/text%3E%3C/svg%3E"; }}
        />
        <div className="card-body p-4">
          <h3 className="card-title fs-3 fw-bold text-white mb-3">{asset.name}</h3>
          <p className="card-text text-secondary mb-2">{asset.category}</p>
          <p className="card-text text-secondary">{asset.description}</p>
        </div>
      </div>
    </div>
  );
};

// Component for displaying video placeholders
const VideoPlaceholder = ({ video, onPlay }) => {
  return (
    <div className="col">
      <div
        className="card h-100 bg-darker-custom rounded-xl shadow-custom card-custom border border-dark-subtle overflow-hidden cursor-pointer"
        onClick={() => onPlay(video)}
      >
        <div className="position-relative">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="card-img-top img-fluid"
            style={{ height: '256px', objectFit: 'cover' }}
            onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='270' viewBox='0 0 480 270'%3E%3Crect width='480' height='270' fill='%23212121'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='25' fill='%23FFD700' text-anchor='middle' dominant-baseline='middle'%3EVideo Thumbnail Missing%3C/text%3E%3C/svg%3E"; }}
          />
          {/* Play button overlay */}
          <div className="position-absolute top-50 start-50 translate-middle bg-black bg-opacity-75 rounded-circle p-3 d-flex align-items-center justify-content-center"
               style={{ width: '80px', height: '80px', transition: 'background-color 0.3s ease' }}>
            <svg className="text-gold" width="50" height="50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="card-body p-4">
          <h3 className="card-title fs-3 fw-bold text-white mb-3">{video.title}</h3>
          <p className="card-text text-secondary">{video.description}</p>
        </div>
      </div>
    </div>
  );
};

// Modal for video playback
const VideoModal = ({ video, onClose }) => {
  useEffect(() => {
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-darker-custom rounded-xl shadow-lg-custom border border-dark-subtle">
          <div className="modal-header border-bottom border-dark-subtle">
            <h5 className="modal-title text-gold">{video.title}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body p-4">
            <div className="embed-responsive embed-responsive-16by9 mb-4 rounded-lg overflow-hidden">
              {/* Only use <video> tag for internal resources */}
              <video controls autoPlay className="w-100 h-100 rounded-lg" onEnded={onClose}>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag or the video file is missing.
              </video>
            </div>
            <p className="text-secondary">{video.description}</p>
          </div>
          <div className="modal-footer border-top border-dark-subtle">
            <button type="button" className="btn btn-secondary rounded-pill" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Gallery Pages ---

const BrandIdentityGallery = ({ projects, onBack }) => (
  <section className="py-5 bg-black">
    <div className="container py-5">
      <button onClick={onBack} className="btn btn-secondary rounded-pill mb-5 d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        Back to Portfolio
      </button>
      <h2 className="display-4 fw-bold text-center text-gold mb-5 pb-4 border-bottom border-gold">Brand Identity & Print Designs</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((asset) => (
          <DesignCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  </section>
);

const AnimationGallery = ({ projects, onBack, onPlayVideo }) => (
  <section className="py-5 bg-black">
    <div className="container py-5">
      <button onClick={onBack} className="btn btn-secondary rounded-pill mb-5 d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        Back to Portfolio
      </button>
      <h2 className="display-4 fw-bold text-center text-gold mb-5 pb-4 border-bottom border-gold">Animations & Video Logs</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((video) => (
          <VideoPlaceholder key={video.id} video={video} onPlay={onPlayVideo} />
        ))}
      </div>
    </div>
  </section>
);

const SocialMediaGraphicsGallery = ({ projects, onBack }) => (
  <section className="py-5 bg-black">
    <div className="container py-5">
      <button onClick={onBack} className="btn btn-secondary rounded-pill mb-5 d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        Back to Portfolio
      </button>
      <h2 className="display-4 fw-bold text-center text-gold mb-5 pb-4 border-bottom border-gold">Social Media Graphics</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((asset) => (
          <DesignCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  </section>
);


export default App;

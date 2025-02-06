import React, { useState } from 'react';
import pencipaper from '../../Assets/pencilandpapericon.png'
import developmentimg from '../../Assets/devcharactericon.png'
import personaldev from '../../Assets/devgrowth.png'
import marketing from '../../Assets/megaphone.png'
import teaching from '../../Assets/teaching.png'
import health from '../../Assets/health.png'
import lifestyle from '../../Assets/lifestyle.png'
import business from '../../Assets/business.png'
import videography from '../../Assets/photography.png'
import productivity from '../../Assets/edit-main-category.png'

const PopularCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    { 
      id: 1, 
      name: 'Design', 
      image: pencipaper,
      imageAlt: 'Design icon showing pencil and paper'
    },
    { 
      id: 2, 
      name: 'Development', 
      image: developmentimg,
      imageAlt: 'Development icon showing developer character'
    },
    { 
      id: 3, 
      name: 'Personal Development', 
      image: personaldev,
      imageAlt: 'Personal Development icon showing growth chart'
    },
    { 
      id: 4, 
      name: 'Marketing', 
      image: marketing,
      imageAlt: 'Marketing icon showing megaphone'
    },
    { 
      id: 5, 
      name: 'Teaching & Academics', 
      image: teaching,
      imageAlt: 'Teaching icon showing classroom'
    },
    { 
      id: 6, 
      name: 'Health & Fitness', 
      image: health,
      imageAlt: 'Health icon showing heart in hands'
    },
    { 
      id: 7, 
      name: 'Lifestyle', 
      image: lifestyle,
      imageAlt: 'Lifestyle icon showing running figure'
    },
    { 
      id: 8, 
      name: 'Business', 
      image: business,
      imageAlt: 'Business icon showing money and gears'
    },
    { 
      id: 9, 
      name: 'Photography & Video', 
      image: videography,
      imageAlt: 'Photography icon showing camera'
    },
    { 
      id: 10, 
      name: 'Office Productivity', 
      image: productivity,
      imageAlt: 'Office Productivity icon showing chart and gears'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected category:', selectedCategory);
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title mb-4">Popular Category</h5>
              <img src="../" alt="" />
              <form onSubmit={handleSubmit}>
                <div className="category-list">
                  {categories.map((category) => (
                    <div 
                      key={category.id}
                      className="category-item mb-3 p-3 d-flex align-items-center"
                      style={{
                        border: '5px dotted #cccccc',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        backgroundColor: selectedCategory === category.id ? '#f8f9fa' : 'transparent'
                      }}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <div className="icon-wrapper me-3">
                        <img 
                          src={category.image} 
                          alt={category.imageAlt}
                          className="img-fluid"
                          style={{ 
                            width: '80px', 
                            height: '80px',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                      <span className="category-name text-dark">
                        {category.name}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-success px-4 py-2 mt-3"
                  style={{ backgroundColor: '#00E676' }}
                  disabled={!selectedCategory}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
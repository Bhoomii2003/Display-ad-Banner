import React, { useState } from 'react';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import { AdBanner } from '../types/banner';
import styles from '../styles/Home.module.css';

const initialBanners: AdBanner[] = [
  {
    title: 'Banner 1',
    description: 'Description for Banner 1',
    cta: 'Click Here',
    image: '/banner1.jpg',
    background: '#f0f0f0'
  },
  {
    title: 'Banner 2',
    description: 'Description for Banner 2',
    cta: 'Learn More',
    image: '/banner2.jpg',
    background: '#f0f0f0'
  },
  {
    title: 'Banner 3',
    description: 'Description for Banner 3',
    cta: 'Sign Up',
    image: '/banner3.jpg',
    background: '#f0f0f0'
  },
  {
    title: 'Banner 4',
    description: 'Description for Banner 4',
    cta: 'Read More',
    image: '/banner4.jpg',
    background: '#f0f0f0'
  },
];

const Home: React.FC = () => {
  const [banners, setBanners] = useState<AdBanner[]>(initialBanners);
  const [editingBanner, setEditingBanner] = useState<AdBanner | null>(null);

  const handleEdit = (banner: AdBanner) => {
    setEditingBanner(banner);
  };

  const handleSave = (updatedBanner: AdBanner) => {
    setBanners(banners.map(b => (b.title === updatedBanner.title ? updatedBanner : b)));
    setEditingBanner(null);
  };

  const handleClose = () => {
    setEditingBanner(null);
  };

  return (
    <div className={styles.container}>
      {banners.map((banner, index) => (
        <div className={styles.banner} key={index}>
          <img src={banner.image} alt={banner.title} className={styles.bannerImage} />
          <div className={styles.bannerContent}>
            <h3>{banner.title}</h3>
            <p>{banner.description}</p>
            <button className={styles.editButton} onClick={() => handleEdit(banner)}>
              Edit
            </button>
          </div>
        </div>
      ))}
      {editingBanner && (
        <EditBannerTemplateBs
          banner={editingBanner}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Home;

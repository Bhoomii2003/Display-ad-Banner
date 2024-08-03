// components/BannerImageComp.tsx
import React from 'react';
import { AdBanner } from '../types/banner';
import styles from './BannerImageComp.module.css';

interface BannerImageCompProps {
  banner: AdBanner;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ banner, onEdit }) => {
  return (
    <div className={styles.banner}>
      <img src={banner.image} alt={banner.title} className={styles.bannerImage} />
      <div className={styles.bannerContent}>
        <h2>{banner.title}</h2>
        <p>{banner.description}</p>
        <button className={styles.editButton} onClick={onEdit}>Edit</button>
      </div>
    </div>
  );
};

export default BannerImageComp;

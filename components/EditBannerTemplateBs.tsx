import React, { useState } from 'react';
import { AdBanner } from '../types/banner';
import styles from './EditBannerTemplateBs.module.css';

interface EditBannerTemplateBsProps {
  banner: AdBanner;
  onSave: (banner: AdBanner) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ banner, onSave, onClose }) => {
  const [editedBanner, setEditedBanner] = useState<AdBanner>(banner);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedBanner({
      ...editedBanner,
      [name]: value
    });
  };

  const handleSave = () => {
    onSave(editedBanner);
  };

  return (
    <div className={styles.editWindow}>
      <button className={styles.closeButton} onClick={onClose}>Close</button>
      <h2>Edit Banner</h2>
      <div className={styles.editWindowContent}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={editedBanner.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={editedBanner.description}
            onChange={handleChange}
          />
        </label>
        <label>
          CTA:
          <input
            type="text"
            name="cta"
            value={editedBanner.cta}
            onChange={handleChange}
          />
        </label>
        <label>
          Background:
          <input
            type="color"
            name="background"
            value={editedBanner.background}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={editedBanner.image}
            onChange={handleChange}
          />
        </label>
        <div className={styles.buttons}>
          <button className={styles.doneButton} onClick={handleSave}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;

/* eslint-disable @next/next/no-img-element */
// Types
import { IPatients } from "@/types/patients";
// Styles
import styles from "./styles.module.css";

import defaultUser from "@/public/user_4302027.png";
import { useState } from "react";
import PencilIcon from "../icons/pencil";
import UpArrowIcon from "../icons/upArrow";

const UserCard = (user: IPatients) => {
  const [imageSrc, setImageSrc] = useState(user?.avatar || defaultUser.src);
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className={styles.card_container}>
      <div className={styles.card_header}>
        <img
          alt="user avatar"
          src={imageSrc}
          onError={() => {
            setImageSrc(defaultUser.src);
          }}
          className={styles.card_avatar}
        />

        <h3 className={styles.card_title}>{user.name}</h3>
        <span className={styles.card_pencil}>
          <PencilIcon />
        </span>
      </div>
      <div className={styles.card_date}>
        <span className={styles.card_date_title}>Created At</span>
        <span className={styles.card_date_date}>20-06-2024</span>
      </div>
      <div className={`${styles.card_expand} ${showDescription && styles.card_collapsed}`}   onClick={() => setShowDescription(!showDescription)}>
        <UpArrowIcon />
      </div>

        <div >
          <h3 className={styles.subtitle}>Description</h3>
          <p className={`${styles.card_description} ${showDescription && styles.card_description_show}`}>{user.description}</p>
          <h3 className={styles.subtitle}>Website</h3>

          <div className={`${styles.card_description} ${showDescription && styles.card_description_show}`}>
            <a href="user.website" target="blank">{user.website}</a>
          </div>
          
        </div>
      
    </div>
  );
};

export default UserCard;

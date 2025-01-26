/* eslint-disable @next/next/no-img-element */
// Types
import { IPatients } from "@/types/patients";
// Styles
import styles from "./styles.module.css";

import defaultUser from "@/public/user_4302027.png";
import { useState } from "react";
import PencilIcon from "../icons/pencil";

const UserCard = (user: IPatients) => {
  const [imageSrc, setImageSrc] = useState(user?.avatar || defaultUser.src);
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
        <PencilIcon/>
        </span>
      </div>
      <div className={styles.card_date}>
        <span className={styles.card_date_title}>Created At</span>
        <span className={styles.card_date_date}>20-06-2024</span>
      </div>
      {/* //! TODO : SHOW EXTRA INFORMATION */}
      <p style={{display:'none'}}>{user.description}</p>
      <p style={{display:'none'}}>{user.website}</p>
    </div>
  );
};

export default UserCard;

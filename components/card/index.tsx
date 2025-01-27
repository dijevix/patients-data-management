// Types
import { IPatients } from "@/types/patients";
// Styles
import styles from "./styles.module.css";

import defaultUser from "@/public/user_4302027.png";
import { useEffect, useState } from "react";
import PencilIcon from "../icons/pencil";
import UpArrowIcon from "../icons/upArrow";
import Image from "next/image";
import Divider from "../common/divider";
import { dateFormatter } from "@/utils/helper/format";

const UserCard = ({
  user,
  onEdit,
}: {
  user: IPatients;
  onEdit: (data: IPatients) => void;
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    !user?.avatar ? defaultUser.src : user?.avatar
  );

  // TODO : REMOVE USEEFFECT
  useEffect(() => {
    setImageSrc(user?.avatar);
  }, [user]);

  return (
    <div className={styles.card_container}>
      <div className={styles.card_header}>
        <Image
          alt="user avatar"
          src={imageSrc}
          onError={() => {
            setImageSrc(defaultUser.src);
          }}
          className={styles.card_avatar}
          height={50}
          width={50}
        />

        <h3 className={styles.card_title}>{user.name}</h3>
        <span
          onClick={() => {
            onEdit(user);
          }}
          className={styles.card_pencil}
        >
          <PencilIcon />
        </span>
      </div>
      <div className={styles.card_date}>
        <span className={styles.card_date_title}>Created At</span>
        <span className={styles.card_date_date}>
          {dateFormatter.format(user?.createAt)}
        </span>
      </div>
      <div
        className={`${styles.card_expand} ${
          showDescription && styles.card_collapsed
        }`}
        onClick={() => setShowDescription(!showDescription)}
      >
        <UpArrowIcon />
      </div>

      <div
        className={`${styles.card_description} ${
          showDescription && styles.card_description_show
        }`}
      >
        <Divider />
        <h3 className={styles.subtitle}>Description</h3>
        <Divider />
        <p
          className={`${styles.card_description} ${
            showDescription && styles.card_description_show
          }`}
        >
          {user.description}
        </p>
        <h3 className={styles.subtitle}>Website</h3>
        <Divider />
        <div
          className={`${styles.card_description} ${
            showDescription && styles.card_description_show
          }`}
        >
          <a href={user.website} target="blank">
            Go there
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

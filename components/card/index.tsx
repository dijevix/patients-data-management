import {  useMemo, useState } from "react";
// Third party
import Image from "next/image";
// CustomComponents
import PencilIcon from "../icons/pencil";
import UpArrowIcon from "../icons/upArrow";
import Divider from "../common/divider";
// Types
import { IPatients } from "@/types/patients";
// Public
import defaultUser from "@/public/user_4302027.png";
// Utils
import { dateFormatter } from "@/utils/helper/format";
// Styles
import styles from "./styles.module.css";

const UserCard = ({
  user,
  onEdit,
}: {
  user: IPatients;
  onEdit: (data: IPatients) => void;
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [isImageError, setIsImageError] = useState({error :false , url: null})


  const handledImageSrc = useMemo(() => {
    if(!isImageError.error){
      return user.avatar
    }
    if (user.avatar !==  isImageError?.url) {
      return user.avatar;
    }
    return defaultUser.src;
   
  }, [user.avatar , isImageError])

  return (
    <div className={styles.card_container}>
      <div className={styles.card_header}>

        <Image
          alt="user avatar"
          src={handledImageSrc}
          onError={() => {
            setIsImageError({error : true , url : user.avatar})
          }}
          onLoad={()=>{
            setIsImageError({error : false, url: null})

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
        onClick={() => {
          setShowDescription(!showDescription);
        }}
      >
        <UpArrowIcon />
      </div>

      <div
        className={`${styles.card_description} ${showDescription && styles.card_description_show}`}
      >
        <h3 className={styles.subtitle}>Description</h3>
        <Divider />
        <p className={`${styles.card_description_content} ${showDescription}`}>
          {user.description}
        </p>
        <h3 className={styles.subtitle}>Website</h3>
        <Divider />
        <div>
          <a href={user.website} target="_blank">
            Go there
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

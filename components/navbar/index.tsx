import Image from "next/image";
import doctorImage from "@/public/ai-generated-9019520_640.png";
import styles from "./styles.module.css";
import BeltIcon from "../icons/belt";
import BlueDotIcon from "../icons/blueDot";
const NavBar = () => {
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.navbar_title_container}>
      <BlueDotIcon/>
        <h2 className={styles.navbar_title}>Patients Manager</h2>
      </div>

      <div className={styles.navbar_rightItems}>
        <div className={styles.navbar_invite_users_container}>
          <button className={styles.navbar_invite_users}>
            Invite new patients +
          </button>
        </div>
        <div>
          <Image
            className={styles.navbar_profile}
            src={doctorImage}
            alt="profile photo"
            width={40}
            height={40}
          />
        </div>

        <span className={styles.navbar_beltIcon}>
          <BeltIcon />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;

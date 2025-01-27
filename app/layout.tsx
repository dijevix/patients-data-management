import { Roboto } from "next/font/google";
import styles from "./styles.module.css";
import { Metadata } from "next";
import NavBar from "@/components/navbar";
import  '@/app/globals.css'
type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Patients",
};
const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
});
const layout = ({ children }: Props) => {
  return (
    <html>
      <body className={roboto.className}>
        <NavBar />
        <main className={styles.main_container}>{children} </main>
        <footer>THIS IS THE FOOTHER</footer>
      </body>
    </html>
  );
};

export default layout;

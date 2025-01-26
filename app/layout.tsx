import { Roboto } from "next/font/google";
type Props = {
  children: React.ReactNode;
};

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
});
const layout = ({ children }: Props) => {
  return (
    <html>
      <body className={roboto.className}>
        <main style={{background: '#f5f8fe'}}>{children} </main>
      </body>
    </html>
  );
};

export default layout;

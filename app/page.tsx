import Image from "next/image";
import styles from "./page.module.css";
import ImageCarousel from "./components/HomePage/HomePage";

export default function Home() {
  return (
    <><div className="container">
      <ImageCarousel />
      </div>
    </>
  );
}

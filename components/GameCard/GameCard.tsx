import Image from "next/image";
import styles from "./GameCard.module.scss";

type GameCardProps = {
  title: string;
  image: string;
  rating: number;
};

export default function GameCard({ title, image, rating }: GameCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.rating}>⭐ {rating}</span>
      </div>
    </article>
  );
}

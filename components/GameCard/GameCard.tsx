import Image from "next/image";
import Link from "next/link";
import styles from "./GameCard.module.scss";

type GameCardProps = {
  title: string;
  image: string;
  rating: number;
  id: number;
};

const GameCard = ({ title, image, rating, id }: GameCardProps) => {
  console.log(id);
  return (
    <Link href={`/${id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.rating}>⭐ {rating}</span>
      </div>
    </Link>
  );
};

export default GameCard;

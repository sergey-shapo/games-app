"use client";

import { useParams } from "next/navigation";
import { GameDetail } from "@/types/api/gameDetail.types";
import { useAxios } from "@/hooks/useAxios/useAxios";
import styles from "./GameDetail.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { useMemo } from "react";

const GameDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const config = useMemo(
    () => ({
      url: `/games/${id}`,
      method: "GET",
    }),
    [id],
  );

  const { data: game, loading, error } = useAxios<GameDetail>(config);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>Error loading game</p>;
  if (!game) return null;

  console.log(game);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{game.name}</h1>
        <p>Released: {game.released}</p>
        {game.esrb_rating && <p>ESRB: {game.esrb_rating.name}</p>}
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={game.background_image}
          alt={game.name}
          fill
          className={styles.image}
        />
      </div>

      <section className={styles.details}>
        <p dangerouslySetInnerHTML={{ __html: game.description }} />
        <p>Metacritic: {game.metacritic}</p>
        <p>
          Rating: {game.rating} / {game.rating_top}
        </p>

        {game.platforms && (
          <div className={styles.platforms}>
            <h4>Platforms:</h4>
            <ul>
              {game.platforms.map((p) => (
                <li key={p.platform.name}>
                  {p.platform.name} ({p.released_at})
                </li>
              ))}
            </ul>
          </div>
        )}

        {game.website && (
          <p>
            Website:{" "}
            <a href={game.website} target="_blank" rel="noopener noreferrer">
              {game.website}
            </a>
          </p>
        )}
      </section>
      <Button label="← Back to Games" onClick={() => router.push("/")} />
    </div>
  );
};

export default GameDetailPage;

"use client";

import { useAxios } from "@/hooks/useAxios/useAxios";
import GameCard from "@/components/GameCard/GameCard";
import { GamesResponse } from "@/types/api/games.types";
import styles from "./page.module.scss";

export default function Home() {
  const { data } = useAxios<GamesResponse>({
    url: "/games",
    method: "GET",
  });

  return (
    <main className={styles.grid}>
      {data?.results.map((game) => (
        <GameCard
          key={game.id}
          title={game.name}
          image={game.background_image}
          rating={game.rating}
        />
      ))}
    </main>
  );
}

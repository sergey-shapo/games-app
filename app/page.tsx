"use client";

import { useMemo, useState } from "react";
import { useAxios } from "@/hooks/useAxios/useAxios";
import GameCard from "@/components/GameCard/GameCard";
import Button from "@/components/Button/Button";
import { GamesResponse } from "@/types/api/games.types";
import styles from "./page.module.scss";

export default function Home() {
  const [page, setPage] = useState(1);

  const config = useMemo(
    () => ({
      url: "/games",
      method: "GET",
      params: { page },
    }),
    [page],
  );

  const { data, loading } = useAxios<GamesResponse>(config);
  return (
    <>
      <main className={styles.grid}>
        {data?.results.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.name}
            image={game.background_image}
            rating={game.rating}
          />
        ))}
      </main>

      {/* Pagination */}
      <div className={styles.pagination}>
        <Button
          label="← Previous"
          disabled={page === 1 || loading}
          onClick={() => {
            setPage((p) => Math.max(1, p - 1));
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        <Button
          label="Next →"
          disabled={!data?.next || loading}
          onClick={() => {
            setPage((p) => p + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
    </>
  );
}

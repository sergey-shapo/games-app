export interface GamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  released: string;
}

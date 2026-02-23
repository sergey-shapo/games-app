export interface GameDetail {
  id: number;
  slug: string;
  name: string;
  description: string;
  background_image: string;
  released: string;
  rating: number;
  rating_top: number;
  metacritic: number;
  esrb_rating: { name: string };
  platforms: { platform: { name: string }; released_at: string }[];
  website: string;
}

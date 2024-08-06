import { useState } from "react";

export const useFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return { isFavorite, handleToggleFavorite };
};

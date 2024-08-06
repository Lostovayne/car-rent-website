import { BsHeart, BsFillHeartFill } from "react-icons/bs";

type IsFavoriteIconProps = {
  isFavorite: boolean;
  handleToggleFavorite: () => void;
};

export const IsFavoriteIcon: React.FC<IsFavoriteIconProps> = ({
  isFavorite,
  handleToggleFavorite,
}) => {
  return isFavorite ? (
    <BsFillHeartFill
      className="size-5 text-red-500 cursor-pointer animate-pulse"
      onClick={handleToggleFavorite}
    />
  ) : (
    <BsHeart
      className="size-5 cursor-pointer text-gray-400"
      onClick={handleToggleFavorite}
    />
  );
};

import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { cn } from "../lib";

type IsFavoriteIconProps = {
  isFavorite: boolean;
  handleToggleFavorite: () => void;
  className?: string;
};

export const IsFavoriteIcon: React.FC<IsFavoriteIconProps> = ({
  isFavorite,
  handleToggleFavorite,
  className = "",
}) => {
  return isFavorite ? (
    <BsFillHeartFill
      className={cn(
        "size-5 text-red-500 cursor-pointer animate-pulse",
        className
      )}
      onClick={handleToggleFavorite}
    />
  ) : (
    <BsHeart
      className={cn("size-5 cursor-pointer text-gray-400", className)}
      onClick={handleToggleFavorite}
    />
  );
};

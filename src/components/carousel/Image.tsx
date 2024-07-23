import { cn } from "../../lib/utils";
type ImageProps = React.ComponentPropsWithoutRef<"img">;

export const Image: React.FC<ImageProps> = ({ className = "", src, alt }) => {
  return (
    <img
      className={cn("object-cover object-center w-full h-full ", className)}
      src={src}
      alt={alt}
    />
  );
};

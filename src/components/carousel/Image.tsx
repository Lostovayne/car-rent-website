import { cn } from "../../lib/utils";
type ImageProps = {
  src: string;
  alt: string;
} & React.ComponentPropsWithoutRef<"img">;

export const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <img
      className={cn("object-cover object-center w-full h-full ", className)}
      src={src}
      alt={alt}
    />
  );
};

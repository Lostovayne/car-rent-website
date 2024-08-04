import { Image } from "./Image";
import { ImagesCarouselProps } from "../../interfaces";
import { cn } from "../../lib";

interface ImageIteratorProps extends ImagesCarouselProps {
  selectedImage: string;
  handleImageClick: (id: number) => void;
}

export const ImageIterator: React.FC<ImageIteratorProps> = ({
  images,
  selectedImage,
  handleImageClick,
}) => {
  return (
    <>
      {images.map(({ id, url, alt }) => (
        <div
          key={id}
          className={cn`first:object-contain w-1/3 aspect-square cursor-pointer transition-all border-2 border-transparent  ${
            selectedImage === url &&
            "scale-95 p-1 border-2 border-primaryColor/60 rounded-lg"
          }`}
          onClick={() => handleImageClick(id)}
        >
          <Image src={url} className="rounded-lg" alt={alt} />
        </div>
      ))}
    </>
  );
};

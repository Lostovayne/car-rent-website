import { useSelected } from "../../hooks/useSelected";
import { ImagesCarouselProps } from "../../interfaces";
import { cn } from "../../lib/utils";
import { Image } from "./Image";

export const ImageCarousel: React.FC<ImagesCarouselProps> = ({ images }) => {
  const { selectedImage, handleImageClick } = useSelected({ images });

  return (
    <div className="flex flex-col gap-y-2 w-full h-full max-w-[500px] max-h-[500px]">
      <header className="w-full aspect-square bg-[url('/img/carouselBackground.png')] bg-cover bg-no-repeat rounded-lg overflow-hidden ">
        <Image src={selectedImage} alt="" />
      </header>

      <section className="w-full flex">
        {images.map(({ id, url, alt }) => (
          <div
            key={id}
            className={cn` w-1/3 aspect-square cursor-pointer transition-all border-2 border-transparent  ${
              selectedImage === url &&
              "scale-95 p-1 border-2 border-primaryColor/60 rounded-lg"
            }`}
            onClick={() => handleImageClick(id)}
          >
            <Image src={url} className="rounded-lg" alt={alt} />
          </div>
        ))}
      </section>
    </div>
  );
};

import { useSelected } from "../../hooks/useSelected";
import { ImagesCarouselProps } from "../../interfaces";
import { cn } from "../../lib/utils";
import { Carousel, CarouselItem } from "../ui/carousel";
import { Image } from "./Image";

export const ImageCarousel: React.FC<ImagesCarouselProps> = ({ images }) => {
  const { selectedImage, handleImageClick } = useSelected({ images });

  return (
    <div className="flex flex-col gap-y-2 w-full h-full max-w-md">
      <Carousel className="w-full h-64 bg-[url('/img/carouselBackground.png')] bg-cover bg-no-repeat rounded-lg overflow-hidden aspect-square">
        <CarouselItem className="w-full h-full pl-0 ">
          <Image src={selectedImage} alt="" />
        </CarouselItem>
      </Carousel>

      <section className="w-full ">
        <div
          className=" flex flex-row aspect-square size-36 w-full justify-between
         "
        >
          {images.map(({ id, url, alt }) => (
            <div
              key={id}
              className={cn` cursor-pointer aspect-square transition-all border-2 border-transparent  ${
                selectedImage === url &&
                "scale-95 p-1 border-2 border-primaryColor/60  rounded-lg"
              }`}
              onClick={() => handleImageClick(id)}
            >
              <Image src={url} className="rounded-lg" alt={alt} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

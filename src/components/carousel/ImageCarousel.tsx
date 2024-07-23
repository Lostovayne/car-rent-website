import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Image } from "./Image";
import { cn } from "../../lib/utils";

interface ImagesCarouselProps {
  images: ImageUrl[];
}

interface ImageUrl {
  url: string;
  alt: string;
  id: number;
}

export const ImageCarousel: React.FC<ImagesCarouselProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0].url);

  const handleImageClick = (id: number): void => {
    const clickedImage = images.find((image) => image.id === id);
    if (clickedImage) {
      setSelectedImage(clickedImage.url);
    }
  };

  return (
    <div className="flex flex-col gap-y-2 w-full h-full max-w-md">
      <Carousel className="w-full h-64 bg-[url('/img/carouselBackground.png')] bg-cover bg-no-repeat rounded-lg overflow-hidden aspect-square">
        <CarouselItem className="w-full h-full pl-0 ">
          <Image src={selectedImage} alt="" />
        </CarouselItem>
      </Carousel>

      <Carousel className="w-full">
        <CarouselContent className="px-4 gap-2 [&>div]:basis-1/3 [&>div]:bg-white [&>div]:rounded-lg [&>div]:h-24 [&>div]:overflow-hidden [&>div>img]:w-full [&>div>img]:h-full [&>div>img]:object-cover ">
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              className={cn` p-0 ${
                selectedImage === image.url &&
                "p-1 border-2 border-primaryColor/60 transition-all duration-100 ease-in-out"
              }`}
              onClick={() => handleImageClick(image.id)}
            >
              <Image src={image.url} className="rounded-lg" alt={image.alt} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

// Todo: Componetizar la imagen del carrusel => Remplazar el Template String por cn , quitar el estado adicional, agregar el id al array

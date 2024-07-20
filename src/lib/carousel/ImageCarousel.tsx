import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { ImageUrl } from "./index";

interface ImagesCarouselProps {
  images: ImageUrl[];
}

export const ImageCarousel: React.FC<ImagesCarouselProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0].url);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImage(images[index].url);
    setSelectedImageIndex(index);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <Carousel className="w-full h-64 bg-primaryColor rounded-lg overflow-hidden">
        <CarouselItem className="w-full h-full pl-0 ">
          <img
            src={selectedImage}
            alt=""
            className="object-cover w-full h-full object-center"
          />
        </CarouselItem>
      </Carousel>

      <Carousel className="w-full">
        <CarouselContent className="px-4 gap-2 [&>div]:basis-1/3 [&>div]:bg-white [&>div]:rounded-lg [&>div]:h-24 [&>div]:overflow-hidden [&>div>img]:w-full [&>div>img]:h-full [&>div>img]:object-cover ">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className={`w-full h-full  ${
                selectedImageIndex === index
                  ? "p-1 border-2 border-primaryColor transition-all duration-100 "
                  : "p-0"
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.url}
                alt=""
                className="object-cover w-full h-full object-center rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

import { useSelected } from "../../hooks/useSelected";
import { CarouselOfImagesProps } from "../../interfaces";
import { Image } from "./Image";
import { ImageIterator } from "./ImageIterator";

export const CarouselOfImages: React.FC<CarouselOfImagesProps> = ({
  images,
}) => {
  const { selectedImage, handleImageClick } = useSelected({ images });

  return (
    <div className=" w-full lg:w-1/2 flex justify-center">
      <div className="flex flex-col gap-y-2 w-full h-full max-w-[500px] max-h-[500px]">
        <header className="w-full aspect-square bg-[url('/img/carousel/carouselBackground.png')] bg-cover bg-no-repeat rounded-lg overflow-hidden ">
          <Image src={selectedImage} alt="" />
        </header>

        <section className="w-full flex justify-between gap-x-1">
          <ImageIterator
            images={images}
            selectedImage={selectedImage}
            handleImageClick={handleImageClick}
          />
        </section>
      </div>
    </div>
  );
};

import React from "react";
import { CarouselOfImagesProps } from "../interfaces";

export const useSelected = ({ images }: CarouselOfImagesProps) => {
  const [selectedImage, setSelectedImage] = React.useState(images[0].url);

  const handleImageClick = (id: number): void => {
    const clickedImage = images.find((image) => image.id === id);
    setSelectedImage(clickedImage!.url);
  };

  return {
    selectedImage,
    handleImageClick,
  };
};

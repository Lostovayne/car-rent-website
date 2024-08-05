import { CarDetail, ImageCarousel,Reviews } from "../components";
import { dataCarDetails, imagesUrl } from "../data";
import { ICar } from "../interfaces";

export const DetailsPage = () => {
  const { reviews = [] } = dataCarDetails as ICar; // =>  If reviews is null or undefined, set it to an empty array

  return (
    // HOC
    <CarDetail>
      <CarDetail.View>
        <ImageCarousel images={imagesUrl} />
      </CarDetail.View>
      <Reviews reviews={reviews} />
      <CarDetail.Sections />
    </CarDetail>
  );
};

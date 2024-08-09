import {
  CarDetail,
  CarouselOfImages,
  Reviews,
  CarDetailsCard,
} from "../components";
import { dataCarDetails, imagesUrl } from "../data";
import { ICar } from "../interfaces";

export const DetailsPage = () => {
  const { reviews = [] } = dataCarDetails as ICar; // =>  If reviews is null or undefined, set it to an empty array

  return (
    // HOC
    <CarDetail>
      <CarDetail.View>
        <CarouselOfImages images={imagesUrl} />
        <CarDetailsCard />
      </CarDetail.View>
      <Reviews reviews={reviews} />
      <CarDetail.Sections />
    </CarDetail>
  );
};

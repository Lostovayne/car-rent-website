import { SectionCards } from "@/components/sectionCar/SectionCards";
import { CarDetail, CarouselOfImages, Reviews, CarDetailsCard, Button } from "@/components";
import { dataCarDetails, imagesUrl } from "@/data";
import { ICar } from "@/interfaces";
import { ViewCars } from "@/components/sectionCar/ViewCars";

export const DetailsPage = () => {
  const { reviews = [] } = dataCarDetails as ICar; // =>  If reviews is null or undefined, set it to an empty array

  return (
    // HOC
    <CarDetail>
      <CarDetail.View>
        <CarouselOfImages images={imagesUrl} />
        <CarDetailsCard />
      </CarDetail.View>
      <Reviews reviews={reviews}>
        <Reviews.Title>
          <Reviews.CommentCount />
        </Reviews.Title>
        <Reviews.List />
      </Reviews>

      <SectionCards>
        <div className=" py-5 flex items-center justify-between">
          <h3 className="text-textSecondary font-normal">Recented Car</h3>
          <Button variant="link" className="text-primaryColor">
            View All
          </Button>
        </div>
        <ViewCars cuantity={3} className=" gap-x-1"/>
      </SectionCards>
      
      <SectionCards>
        <div className=" py-5 flex items-center justify-between">
          <h3 className="text-textSecondary font-normal">Recomendation Car</h3>
          <Button variant="link" className="text-primaryColor">
            View All
          </Button>
        </div>
        <ViewCars cuantity={3} className=" gap-x-1"/>
      </SectionCards>

      <CarDetail.Sections /> 
     
    </CarDetail>
  );
};

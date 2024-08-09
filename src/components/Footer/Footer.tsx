import {
  FooterTitle,
  FooterBottomSection,
  ColumnContainer,
} from "../../components";
export const Footer = () => {
  return (
    <footer className=" pb-12 pt-16 container mx-auto ">
      <div className="flex flex-col md:flex-row  justify-between  pb-6 ">
        <FooterTitle />
        <ColumnContainer />
      </div>
      <FooterBottomSection />
    </footer>
  );
};

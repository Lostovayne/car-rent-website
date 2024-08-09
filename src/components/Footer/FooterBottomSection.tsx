export const FooterBottomSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-0 justify-between border-t-2 font-bold  py-4 text-textPrimary">
      <p>2024 MORENT. All rights reserved</p>
      <ul className="flex gap-12  justify-between ">
        <a href="/">Privacy & Policy</a>
        <a href="/">Terms & Condition</a>
      </ul>
    </div>
  );
};

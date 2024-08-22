import { Avatar, AvatarImage } from "../../ui/avatar";

export const ReviewsDetails = ({ children }: { children?: React.ReactNode }) => {
  return (
    <article className="flex w-full gap-3">
      <section className="flex flex-col gap-3 w-full ">{children}</section>
    </article>
  );
};

ReviewsDetails.UserAvatar = function ReviewUserAvatar({
  imageUrl,
  children,
}: {
  imageUrl: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="flex gap-3">
      <figure className="flex justify-center ">
        <Avatar className="size-12">
          <AvatarImage src={imageUrl} alt={"ed"} />
        </Avatar>
      </figure>
      {children}
    </header>
  );
};

ReviewsDetails.Container = function ReviewsDetailsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex justify-between">{children}</div>;
};

ReviewsDetails.Username = function ReviewsDetailsUserData({
  name,
  children,
}: {
  name: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-12 ">
      <h1 className="font-medium text-lg md:text-xl text-textPrimary">{name}</h1>
      {children}
    </div>
  );
};

ReviewsDetails.UserRole = function ReviewsDetailsUserRole({ title }: { title: string }) {
  return <h2 className="font-light text-textSecondary text-sm">{title}</h2>;
};

ReviewsDetails.PostedTime = function ReviewsDetailsPostedTime({
  date,
  children,
}: {
  date: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between items-end pb-1">
      <time className="font-light text-sm text-textSecondary"> {date}</time>
      {children}
    </div>
  );
};

ReviewsDetails.UserComment = function ReviewsDetailsUserComment({ text }: { text: string }) {
  return <p className="font-light text-gray-600 text-sm px-1 sm:pl-[60px] text-pretty">{text}</p>;
};

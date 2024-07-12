export const SectionCards = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section>
      <div className="bg-red-100 p-4 flex justify-between">
        <h2>{title}</h2>
        <p>SectionCards</p>
      </div>
      {children}
    </section>
  );
};

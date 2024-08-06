interface CarViewProps {
  children: React.ReactNode;
}

export const CarDetail = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="flex bg-backgroundSecondary">
      <section className="flex flex-col w-full ">{children}</section>
    </main>
  );
};

CarDetail.View = function CarDetailView({ children }: CarViewProps) {
  return <div className="flex flex-col md:flex-row">{children}</div>;
};

CarDetail.Sections = function CarDetailRecent() {
  return (
    <section>
      <div className="bg-blue-300">Recent Car</div>
      <div className="bg-orange-300">Recomendation Car</div>
      {/* children */}
    </section>
  );
};

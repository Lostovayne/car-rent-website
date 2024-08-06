interface CarViewProps {
  children: React.ReactNode;
}

export const CarDetail = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="flex bg-backgroundSecondary">
      <section className="flex flex-col w-full lg:pl-4 py-4 gap-10">
        {children}
      </section>
    </main>
  );
};

CarDetail.View = function CarDetailView({ children }: CarViewProps) {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-y-7 gap-x-4">
      {children}
    </div>
  );
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

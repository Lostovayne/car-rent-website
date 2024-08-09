export const TableContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <tbody className="flex flex-col gap-2 max-[390px]:w-full w-1/2">
      {children}
    </tbody>
  );
};

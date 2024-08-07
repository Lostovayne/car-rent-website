interface SpecsItemProps {
  icon: React.ReactNode;
  spec: string | number;
}
export const SpecsItem: React.FC<SpecsItemProps> = ({ icon, spec }) => {
  return (
    <li className="flex items-center gap-2">
      {icon}
      <span className="font-normal">{spec}</span>
    </li>
  );
};

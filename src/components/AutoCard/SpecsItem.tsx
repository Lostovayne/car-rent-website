interface SpecsItemProps {
  icon: React.ReactNode;
  spec: string | number;
  name?: string;
}
export const SpecsItem: React.FC<SpecsItemProps> = ({ icon, spec, name }) => {
  return (
    <li className="flex items-center gap-2">
      {icon}
      <span className="font-normal">
        {spec}
        {name && ` ${name}`}
      </span>
    </li>
  );
};

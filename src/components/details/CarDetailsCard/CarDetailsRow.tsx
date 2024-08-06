type CarDetailsRowProps = {
  label: string;
  value: string;
};

export const CarDetailsRow: React.FC<CarDetailsRowProps> = ({
  label,
  value,
}) => {
  return (
    <tr className="flex justify-between px-3">
      <td className="text-textSecondary">{label}:</td>
      <td>{value}</td>
    </tr>
  );
};

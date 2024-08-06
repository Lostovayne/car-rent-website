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
      <th className="text-textSecondary font-normal">{label}:</th>
      <td className="text-gray-600">{value}</td>
    </tr>
  );
};

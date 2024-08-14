type TableRowProps = {
  label: string;
  value: string | number;
};

export const TableRow: React.FC<TableRowProps> = ({ label, value }) => {
  return (
    <tr className="flex justify-between ">
      <th className="text-textSecondary font-normal sm:font-light">{label}:</th>
      <td className="text-gray-600 font-normal sm:font-light">{value}</td>
    </tr>
  );
};

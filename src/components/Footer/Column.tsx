import { Link } from "react-router-dom";

interface ColumnProps {
  section: {
    title: string;
    links: {
      label: string;
      link: string;
    }[];
  };
}

export const Column: React.FC<ColumnProps> = ({ section }) => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="font-bold text-xl text-textPrimary">{section.title}</h3>
      <ul className="flex flex-col gap-4">
        {section.links.map((link, index) => (
          <li key={index}>
            <Link to={link.link} className="text-textSecondary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

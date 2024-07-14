import { Link } from "react-router-dom"
import { Props } from "../interfaces/Column.interface";


const ColumFooter: React.FC<Props> = ({ section }) => {
    return (
        <div className="flex flex-col gap-8">
            <h3 className="font-bold text-xl">{section.title}</h3>
            <ul className="flex flex-col gap-4">
                {section.links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.link} className="text-[#90A3BF] md:text-[#13131399]">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ColumFooter


export interface Link {
    label: string;
    link: string;
}

export interface Section {
    title: string;
    links: Link[];
}

export interface Props {
    section: Section;
}
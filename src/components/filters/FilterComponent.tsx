interface FilterComponentProps extends React.PropsWithChildren {
  title: string;
}

export function FilterComponent({ title, children }: FilterComponentProps) {
  return (
    <div>
      <p className="uppercase mb-3 text-sm text-secondary tracking-widest">
        {title}
      </p>
      {children}
    </div>
  );
}

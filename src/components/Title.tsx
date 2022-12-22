type titleProps = {
     title: string;
};

export function Title({ title }: titleProps) {
     return <h2 className="title">{title}</h2>;
}

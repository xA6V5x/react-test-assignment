type titleProps = {
     title: string;
};

export function Title({ title }: titleProps) {
     return <label className="title">{title}</label>;
}

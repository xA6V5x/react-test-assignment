type subTitleProps = {
     subTitle: string;
};

export function SubTitle({ subTitle }: subTitleProps) {
     return <label className="title">{subTitle}</label>;
}

type subTitleProps = {
     subTitle: string;
};

export function SubTitle({ subTitle }: subTitleProps) {
     return <label className="sub_title">{subTitle}</label>;
}

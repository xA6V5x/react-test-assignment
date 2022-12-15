interface ScreenProps extends React.ComponentProps<'div'> {}

export function ScreenContainer({ className, ...props }: ScreenProps) {
     return <div {...props} className="app_container" />;
}

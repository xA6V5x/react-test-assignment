import styles from './ScreenContainer.module.css';

interface ScreenContainerProps extends React.ComponentProps<'div'> {}

export function ScreenContainer({ className, ...props }: ScreenContainerProps) {
     return <div {...props} className={styles.app_container} />;
}

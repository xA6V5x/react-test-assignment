import styles from './Button.module.css';

interface buttonProps extends React.ComponentProps<'button'> {
     icon?: JSX.Element;
     iconPosition?: 'right' | 'left';
}

export function Button({ className, icon, iconPosition, ...props }: buttonProps) {
     return (
          <button {...props} className={className}>
               {iconPosition === 'left' ? (
                    <div className={styles.center}>
                         <div className={styles.center}>{icon}</div>
                         <label style={{ marginLeft: '10px' }}>{props.name}</label>
                    </div>
               ) : (
                    <div className={styles.center}>
                         <label style={{ marginRight: '10px' }}>{props.name}</label>
                         <div className={styles.center}>{icon}</div>
                    </div>
               )}
          </button>
     );
}

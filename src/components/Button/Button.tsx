import styles from './Button.module.css';

interface buttonProps extends React.ComponentProps<'button'> {
     icon?: JSX.Element;
     iconPosition?: 'right' | 'left';
}

export function Button({ className, icon, iconPosition, ...props }: buttonProps) {
     return iconPosition === 'left' ? (
          <button {...props} className={className}>
               <div className={styles.center_icon}>{icon}</div>
               <label style={{ marginLeft: '10px' }}>{props.name}</label>
          </button>
     ) : (
          <button {...props} className={className}>
               <label style={{ marginRight: '10px' }}>{props.name}</label>
               <div className={styles.center_icon}>{icon}</div>
          </button>
     );
}

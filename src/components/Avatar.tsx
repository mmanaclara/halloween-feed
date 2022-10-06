import styles from './Avatar.module.css';

interface AvatarProps {
    src: any;
    hasBorder: boolean;
}

export function Avatar({ src, hasBorder = true }: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    );
}
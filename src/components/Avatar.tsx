import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    hasBorder: boolean;
}

export function Avatar({ src, hasBorder = true, ...props }: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} {...props}
        />
    );
}
import styles from './Header.module.css'

import pumpkinIcon from '../assets/pumpkin-icon.png'

export default function Header() {
  return (
    <header className={styles.header}>
        <img src={pumpkinIcon} alt="Ícone de uma abóbora" />
        <strong>Halloween Feed</strong>
    </header>
  )
}

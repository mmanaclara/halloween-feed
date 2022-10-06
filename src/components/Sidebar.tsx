import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

import cover from '../assets/duas-aboboras-em-um-chao-com-folhas-caidas-e-luzes-no-fundo.png'
import avatarImg from '../assets/mulher-loira-sorrindo.png' 

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
            <img src={cover} className={styles.cover} />

            <div className={styles.profile}> 
                <img className={styles.avatar} src={avatarImg} />
                <strong>Sarah Sanderson</strong>
                <span>Bruxa e hipnóloga</span>
            </div>

            <footer>
              <a href="/">
                <PencilLine size={20} />
                Editar seu perfil  
              </a>  
            </footer>
        </aside>
  )
}

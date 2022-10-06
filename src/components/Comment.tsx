import { HandsClapping, Trash } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Comment.module.css'

interface CommentProps {
    author: string;
    content: string;
    src: any;
}

export default function Comment({ author, content, src }: CommentProps) {
  return (
    <div className={styles.comment}>
            <Avatar hasBorder={false} src={src} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author}</strong>
                            <time title="19 de Junho às 17:22" dateTime="2022-06-19 17:22:00">Cerca de 1h atrás</time>
                            {content}
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        
                    </p>
                </div>
                <footer>
                    <button>
                        <HandsClapping />
                        Aplaudir <span>1993</span>
                    </button>
                </footer>
            </div>
        </div>
  )
}

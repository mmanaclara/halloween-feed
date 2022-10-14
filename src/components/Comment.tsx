import { useState } from 'react';
import { HandsClapping, Trash } from 'phosphor-react'

import { Avatar } from './Avatar';

import styles from './Comment.module.css'

import thackeryAvatar from '../assets/garoto-loiro-com-camisa-branca.jpg'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export default function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
        return state + 1
    })
}

  return (
    <div className={styles.comment}>
            <Avatar hasBorder={false} src={thackeryAvatar} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thackery Binx</strong>
                            <time title="19 de Junho às 17:22" dateTime="2022-06-19 17:22:00">Cerca de 1h atrás</time>
                            {content}
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <HandsClapping />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
  )
}

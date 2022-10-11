import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Comment from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

import maryAvatar from '../assets/mulher-com-batom-vermelho-olhando-para-cima.jpg'
import thackeryAvatar from '../assets/garoto-loiro-com-camisa-branca.jpg'

interface PostProps {
    author: {
        name: string;
        role: string;
        avatarUrl: any;
    };
    publishedAt: Date;
    content: any;
}

export default function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(['Ótimo feitiço, Wini! Testei e deu super certo! Você é demais! 👏'])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  })  

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function deleteComment(comment: any) {
    console.log(`Deletar comentário ${comment}`)
  }

  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar hasBorder src={author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>

        <div className={styles.content}>
            {content.map((line:any) => {
                if(line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>
                } else if(line.type === 'link') {
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
            })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
                name='comment'
                placeholder='Deixe um comentário'
                value={newCommentText}
                onChange={handleNewCommentChange}
            />

            <footer>
                <button type="submit">Publicar</button>
            </footer>

        </form>

        <div className={styles.commentList}>
            {comments.map(comment => {
                return (
                    <Comment 
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                )
            })}     
        </div>

    </article>
  )
}

{/* <Comment src={maryAvatar} author="Mary Sanderson" content="Ótimo feitiço, Wini! Testei e deu super certo! Você é demais! 👏" />
<Comment src={thackeryAvatar} author="Thackery Binx" content="Megera! Nem todas as crianças do mundo a farão jovem e bela! 🤮" /> */}


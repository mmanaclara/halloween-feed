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
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  })  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

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

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
                placeholder='Deixe um comentário'
            />

            <footer>
                <button type="submit">Publicar</button>
            </footer>

        </form>

        <div className={styles.commentList}>
            <Comment src={maryAvatar} author="Mary Sanderson" content="Ótimo feitiço, Wini! Testei e deu super certo! Você é demais! 👏" />
            <Comment src={thackeryAvatar} author="Thackery Binx" content="Megera! Nem todas as crianças do mundo a farão jovem e bela! 🤮" />
        </div>

    </article>
  )
}

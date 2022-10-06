import Comment from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

import redWitchImg from '../assets/mulher-ruiva-fazendo-biquinho.jpg'
import witchImg from '../assets/mulher-com-batom-vermelho-olhando-para-cima.jpg'
import boyImg from '../assets/garoto-loiro-com-camisa-branca.jpg'

export default function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar hasBorder src={redWitchImg} />
                <div className={styles.authorInfo}>
                    <strong>Winifred Sanderson</strong>
                    <span>Bruxa e cantora</span>
                </div>
            </div>

            <time title="6 de outubro às 14:00" dateTime="2022-10-06 14:00:00">Publicado há 1 hora</time>
        </header>

        <div className={styles.content}>
            <p>Olá, irmãs! 👋</p>
            <p>Vou compartilhar com vocês um ótimo feitiço de rejuvenescimento 👸</p>

            <p>
                🍵Em um caldeirão, colocar: sangue de coruja com erva vermelha, girar três vezes e acrescentar um pelo de sobrancelha, uma pitada de pústula e o dedão de um homem morto (bem fresquinho). Em seguida, adicionar saliva de lagartixa e um pedaço de sua língua.
            </p>
            <p>
                Agora é só dar para a criança beber e correr pro abraço!
            </p>

            <p>Depois comentem o que acharam.</p>

            <p><a href="#">👉 wini.witch/hocuspocus</a></p>

            <p><a href="#">#100anosmaisjovem #irmassanderson #abracadabra</a></p>
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
            <Comment src={witchImg} author="Mary Sanderson" content="Ótimo feitiço, Wini! Testei e deu super certo! Você é demais! 👏" />
            <Comment src={boyImg} author="Thackery Binx" content="Megera! Nem todas as crianças do mundo a farão jovem e bela! 🤮" />
        </div>

    </article>
  )
}

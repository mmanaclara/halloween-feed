import styles from './Post.module.css';

import redWitchIcon from '../assets/mulher-ruiva-fazendo-biquinho.jpg'

export default function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img 
                    src={redWitchIcon} 
                    alt="Mulher ruiva fazendo biquinho"
                    className={styles.avatar} 
                />
                <div className={styles.authorInfo}>
                    <strong>Winifred Sanderson</strong>
                    <span>Bruxa e cantora</span>
                </div>
            </div>

            <time title="6 de outubro às 14:00" dateTime="2022-10-06 14:00:00">Publicado há 1 hora</time>
        </header>

        <div className={styles.content}>
            <p>Olá, irmãs! 👋</p>
            <p>Vou compartilhar com vocês um feitiço ótimo para rejuvenescer...</p>

            <p>
                🍵Coloque em um caldeirão: Sangue de coruja com erva vermelha, gire três vezes e acrescente um pelo de sobrancelha, uma pitada de pústula e o dedão de um homem morto (bem fresquinho). Depois, adicione saliva de lagartixa e um pedaço de sua língua.
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

    </article>
  )
}

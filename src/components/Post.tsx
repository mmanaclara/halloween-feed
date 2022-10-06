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

            <p>🍵Coloque em um caldeirão: Sangue de coruja com erva vermelha, gire três vezes e acrescente um pelo de sobrancelha, uma pitada de pústula e o dedão de um homem morto (bem fresquinho). Depois, adicione saliva de lagartixa e um pedaço de sua língua.
            </p>

            <p><a href="#">👉 winifred.witch/feiticosinfaliveis</a></p>

            <p><a href="#">#100anosmaisjovem #irmassanderson #abracadabra</a></p>
        </div>

    </article>
  )
}

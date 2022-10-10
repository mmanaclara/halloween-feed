import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Post from "./components/Post"

import './global.css'
import styles from './App.module.css'

import * as maryImage from './assets/mulher-com-batom-vermelho-olhando-para-cima.jpg'
import * as winiImage from './assets/mulher-ruiva-fazendo-biquinho.jpg'

const posts = [
  {
    id: 1,
    author: {
      name: "Winifred Sanderson",
      role: "Bruxa e cantora",
      avatarUrl: {winiImage}
    },
    content: [
      { type: 'paragraph', content: "Olá, irmãs! 👋" },
      { type: 'paragraph', content: "Vou compartilhar com vocês um ótimo feitiço de rejuvenescimento 👸"},
      { type: 'paragraph', content: "🍵Em um caldeirão, colocar: sangue de coruja com erva vermelha, girar três vezes e acrescentar um pelo de sobrancelha, uma pitada de pústula e o dedão de um homem morto (bem fresquinho). Em seguida, adicionar saliva de lagartixa e um pedaço de sua língua."},
      { type: 'paragraph', content: "Agora é só dar para a criança beber e correr pro abraço!"},
      { type: 'paragraph', content: "Depois comentem o que acharam."},
      { type: 'link', content: "👉 wini.witch/hocuspocus"},
      { type: 'link', content: "#100anosmaisjovem #irmassanderson #abracadabra"},
    ],
    publishedAt: new Date('2022-10-07 06:36:00')
  },
  {
    id: 2,
    author: {
      name: "Mary Sanderson",
      role: "Bruxa e couch",
      avatarUrl: {maryImage},
    },
    content: [
      { type: 'paragraph', content: "Olá, irmãs! 👋" },
      { type: 'paragraph', content: "Minha irmã Wini me ensinou um feitiço maravilhoso! Estou belíssima! 👸"},
      { type: 'link', content: "👉 mary.witch/hocuspocus"},
      { type: 'link', content: "#100anosmaisjovem #irmassanderson #abracadabra"},
    ],
    publishedAt: new Date('2022-10-10 16:00:00')
  },
]

export default function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
    </div>
    </>
  )
}


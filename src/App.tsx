import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

export default function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <h3>Posts</h3>
        </main>
    </div>
    </>
  )
}


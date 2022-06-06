import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Peter Mendonça"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iusto rem suscipit voluptate doloremque praesentium quisquam illum nesciunt sapiente. Quas in eaque dignissimos animi soluta reprehenderit cupiditate perferendis, fugit doloremque. "
          />
          <Post
            author="Rakel Moreira"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iusto rem suscipit voluptate doloremque praesentium quisquam illum nesciunt sapiente. Quas in eaque dignissimos animi soluta reprehenderit cupiditate perferendis, fugit doloremque. "
          />
        </main>
      </div>
    </div>

  )
}

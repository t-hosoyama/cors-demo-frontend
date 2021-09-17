import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

type LoginState = {
  login?: boolean
  code?: number
  message?: string
}

const initialLoginState: LoginState = {
  login: false
}

const Home: NextPage = () => {
  const [loginState, setLoginState] = useState<LoginState>(initialLoginState)

  const handleLogin = () => {
    fetch("https://127.0.0.1:4000/api/login", {
      method: 'GET',
      credentials: 'include'      
    })
      .then( res => res.json() )
      .then( res => {
        setLoginState(res);
      })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {!loginState.login
            ? <div>
                <button onClick={handleLogin}>ログイン</button>
              </div>
            : <div>
                <div>ログイン済</div>
                <div>{JSON.stringify(loginState)}</div>
              </div>}
        </div>
      </main>
    </div>
  )
}

export default Home

import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"

type SSRProps = {
  message: string
}

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはサーバーサイドレンダリングによってアクセス時にサーバで描画されたページ</p>
        <p>{ message }</p>
      </main>
    </div>
  )
}

// getServerSidePropsはページのリクエストがあるたびに実行される
export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp} にこのページのgetServerSidePropsが実行された`
  console.log(message)

  return {
    props: {
      message
    }
  }
}

export default SSR

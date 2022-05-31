import Head from 'next/head'
import SignIn from '../components/SignIn';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[url('/image/background.png')]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <SignIn />

    </div>
  )
}

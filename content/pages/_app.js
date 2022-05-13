import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="header">
        <h1>content / {Component.pathName}</h1>
      </div>

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp

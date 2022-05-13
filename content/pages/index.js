import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <h1>Welcome to content web!</h1>

      <a href="/page2">
        Real link with <b>href="/page2"</b> only
      </a>

      <br />
      <a
        href="/page2"
        onClick={(e) => {
          e.preventDefault()
          router.push('/page2')
        }}
      >
        Fake link with <b>href="/page2"</b> and onClick
      </a>

      <br />

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          router.push('/page2')
        }}
      >
        Fake link with <b>href="#"</b> and onClick
      </a>
    </div>
  )
}

Home.pathName = 'home'

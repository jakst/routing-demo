import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h4>Go to this page (/app)</h4>
      <NextLink href="/" />
      <NextLink href="/app" />
      <NextLink href="app" />
      <AHref href="/" />
      <AHref href="/app" />
      <AHref href="app" />

      <h4>Go to page2 (/app/page2)</h4>
      <NextLink href="page2" />
      <NextLink href="/page2" />
      <NextLink href="/app/page2" />
      <AHref href="page2" />
      <AHref href="/page2" />
      <AHref href="/app/page2" />
    </div>
  )
}

function NextLink(props) {
  return (
    <div>
      <Link href={props.href}>Go!</Link>
      <code>{`<Link href="${props.href}">...</Link>`}</code>
    </div>
  )
}

function AHref(props) {
  return (
    <div>
      <a href={props.href}>Go!</a>
      <code>{`<a href="${props.href}">...</a>`}</code>
    </div>
  )
}

Home.pathName = 'home'

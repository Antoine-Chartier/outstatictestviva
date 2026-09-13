import Image from 'next/image'
import Link from 'next/link'
import { load, getDocumentSlugs } from 'outstatic/server'

const Header = async () => {
  const pagesSlug = await generateStaticParams()
  
  return (
    <nav className="layout flex items-center justify-between py-4">
      <div>
        <Link href="/" className="hover:underline">
          <Image
            src="/images/logos/logo.png"
            alt="Logo"
            width={100}
            height={100}
            priority={true}
          />
        </Link>
      </div>
    </nav>
  )
}

async function generateStaticParams() {
  const db = await load()
  const pages = await db
    .find({ collection: 'pages', slug: { $ne: 'home' } })
    .project(['slug'])
    .toArray()

  return pages.map(({ slug }) => ({ slug }))
}

export default Header


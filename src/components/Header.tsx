import Link from 'next/link'
import { getDocumentSlugs } from 'outstatic/server'
import { load } from 'outstatic/server'
import Image from 'next/image'
import localImage from "public/images/logos/logo.png";



const Header = async () => {

const pagesSlug = await generateStaticParams()
// console.log(pagesSlug);

  return (
    <nav className="layout flex items-center justify-between py-4">
      <div>
        <Link href="/" className="hover:underline">
      <Image
        src={localImage}
        alt="Logo"
        width={100}
        height={100}
        priority={true}
      />
        </Link>
      </div>
      <ul className="flex items-center justify-between space-x-3 text-xs md:space-x-4 md:text-base">
        {pagesSlug.map(({slug}) => (
          <li key={slug}>
            <Link href={`/${slug}`} className="hover:underline">
              {slug} 
            </Link>
          </li>
        ))}
      </ul>
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


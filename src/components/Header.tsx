import Image from 'next/image'
import Link from 'next/link'
import { load, getDocumentSlugs } from 'outstatic/server'

async function generateStaticParams() {
  const db = await load()
  // Ajoutez ici la logique de retour de votre base de données si nécessaire
  return [] 
}

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

export default Header
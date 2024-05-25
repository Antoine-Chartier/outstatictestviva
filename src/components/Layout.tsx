import Footer from './Footer'
import Header from './Header';
import ConsoleLog from './frontend/ConsoleLog';

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {


  return (
    <>
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
      <ConsoleLog log="allo"/>
    </>
  )
}

export default Layout

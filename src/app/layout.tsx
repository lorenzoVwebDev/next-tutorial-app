import Footer from '@/components/common/Footer/Footer.js'
import GitHeader from '@/components/common/GitRepositoryHeader/GitRepositoryHeader.js'
import '@/style/index.scss';

function AppLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <GitHeader/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}

export default AppLayout
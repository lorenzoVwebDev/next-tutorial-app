import Header from '@/components/common/Header/Header.js'

function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
 return (
  <>
    <Header/>
    {children}
  </>
 )
}

export default BlogLayout;
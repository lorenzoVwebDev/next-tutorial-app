import Page from '@/pages/page'

function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="eng">
      <body>
        <Page/>
      </body>
    </html>
  )
};

export default RootLayout
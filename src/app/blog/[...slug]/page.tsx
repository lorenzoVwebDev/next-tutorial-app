async function Slug1({
  params
}: {
  params: Promise<{slug: string[]}>
}) {
  const { slug } = await params
  return (
    <div>
      {
        slug.map(value => {
          return <div key={value}>{value}</div>
        })
      }
    </div>
  )
}

export default Slug1
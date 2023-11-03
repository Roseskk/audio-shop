
export async function getData() {
  const url = `${process.env.API}/products?&acf_format=standard&_fields=id,title,acf`;

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}


export default async function Home() {
  const data = await getData()
  return (
    <main>
      {JSON.stringify(data[0])}
    </main>
  )
}




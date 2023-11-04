import Slider from "@/components/slider/slider";

export async function getProducts() {
  const url = `${process.env.API}/products?&acf_format=standard&_fields=id,title,acf,slug`;

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch Products')
  }

  return res.json()
}


export default async function Home() {
  const products = await getProducts()
  return (
    <main>
      <Slider products={products} />
      {/*{JSON.stringify(data[0])}*/}
    </main>
  )
}




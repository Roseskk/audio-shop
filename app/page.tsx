import Slider from "@/components/slider/slider";
import ProductCards from "@/components/productCards/productCards";

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
  const categories = ['headphones', 'speakers', 'earphones'];
  const productsCardsData = categories.map(category => products.find((item: any) => item.acf.category.slug === category));

  return (
    <main>
      <Slider products={products} />
      <ProductCards productsInfo={productsCardsData} />
    </main>
  )
}




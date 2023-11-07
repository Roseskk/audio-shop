import AboutSlug from "@/components/ui/about/aboutSlug";
import {Products} from "@/types/types";
import ProductCardsSlug from "@/components/productCards/productCardsSlug";
import ProductCards from "@/components/productCards/productCards";
import AboutAudio from "@/components/about/aboutAudio";

export async function getProductsData(params: { products: string }) {
    const url = `${process.env.APIV1}/products/${params.products}`

    const result = await fetch(url)

    if (!result.ok) {
        throw new Error('Failed to fetch Products')
    }

    return result.json()
}

export default async function Page({params}: { params: { products: string } }) {
    const result: Products = await getProductsData(params)
    return (
        <main>
            <AboutSlug name={result[0].acf.category.name}/>
            <ProductCardsSlug products={result}/>
            <ProductCards/>
            <AboutAudio/>
        </main>
    )
}

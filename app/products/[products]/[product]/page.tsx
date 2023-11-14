import React from 'react';
import Breadcrumb from "@/components/ui/breadcrumb/breadcrumb";
import ProductCardInfo from "@/components/ui/cards/productCardInfo";
import FeaturesInfo from "@/components/features/featuresInfo";
import Recommendations from "@/components/recommendation/recommendations";
import ProductCards from "@/components/productCards/productCards";
import AboutAudio from "@/components/about/aboutAudio";

async function getProductData(params: { product: string }) {
    const url = `${process.env.APIV1}/product/${params.product}`

    const result = await fetch(url)

    if (!result.ok) {
        throw new Error('Failed to fetch Product')
    }

    return result.json()
}

const Page = async ({params}: { params: { product: string } }) => {
    const data = await getProductData(params)
    return (
        <main>
            <Breadcrumb/>
            <ProductCardInfo data={data}/>
            <FeaturesInfo features={data}/>
            <Recommendations/>
            <ProductCards/>
            <AboutAudio/>
        </main>
    )
}

export default Page;
import React from 'react';
import Breadcrumb from "@/components/ui/breadcrumb/breadcrumb";
import ProductCardInfo from "@/components/ui/cards/productCardInfo";

export async function getProductData(params: { product: string }) {
    const url = `${process.env.APIV1}/product/${params.product}`

    const result = await fetch(url)

    if (!result.ok) {
        throw new Error('Failed to fetch Product')
    }

    return result.json()
}

const Page = async ({params}: { params: { product: string } }) => {
    const data = await getProductData(params)
    console.log(data)
    return (
        <main>
            <Breadcrumb/>
            <ProductCardInfo data={data}/>
        </main>
    )
}

export default Page;
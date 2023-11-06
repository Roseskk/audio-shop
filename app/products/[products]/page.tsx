
export async function getProductsData(params: {products: string}) {
    console.log('123',params)
    const url = `${process.env.APIV1}/products/${params.products}`

    const result = await fetch(url)

    if (!result.ok) {
        throw new Error('Failed to fetch Products')
    }

    return result.json()
}

export default async function Page({ params }: { params: { products: string }}) {
    const result = await getProductsData(params)
    return <div>{JSON.stringify(result)}</div>
}

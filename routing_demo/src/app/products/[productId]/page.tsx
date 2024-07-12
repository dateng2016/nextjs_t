import { Metadata } from "next"

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 1000);

    })
    return { title: `Product ${title}` }
}



export default ({ params }: { params: { productId: string } }) => {
    return <h1>Details about the Product {params.productId}</h1>
}
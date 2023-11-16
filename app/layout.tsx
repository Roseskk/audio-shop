import type {Metadata} from 'next'
import '../styles/main.scss'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ProductCards from "@/components/productCards/productCards";


export const metadata: Metadata = {
    title: 'Audiophile',
    description: 'audiophile',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Header>
            <ProductCards/>
        </Header>
        {children}
        <Footer/>
        </body>
        </html>
    )
}

import { Inter } from 'next/font/google'
import Head from "next/head"
import ChatHeader from '../chats/ChatHeader'

const inter = Inter({ subsets: ['latin'] })


interface LayoutProps {
    title?: string,
    children: React.ReactNode,
}

const Layout = ({ title, children }: LayoutProps) => {

    return (
        <>
            <Head>
                <title>{title} - Nolatech</title>
                <meta name="description" content={`${title} - Nolatech`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`min-h-screen h-full p-1 bg-white dark:bg-slate-800 ${inter.className}`}>
                {children}
            </main>
        </>
    )
}

export default Layout
import Routing from "./Routing";
import Head from 'next/head';

export default function MainContainer({children, keywords, title, description}) {
    return (
        <>
            <Head>
                <meta keywords={keywords}></meta>
                <meta name="description" content={description}/>
                <title>{title}</title>
            </Head>
            <Routing />
            <div>
                {children}
            </div>
        </>
    )
}

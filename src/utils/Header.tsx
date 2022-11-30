import Head from 'next/head';

export const Header = () => {
    return (
        <Head key="title">
            <title>T O D O</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            <link rel="manifest" href="/images/site.webmanifest" />
            <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <meta name="msapplication-TileColor" content="#9f00a7" />
            <meta name="msapplication-config" content="/images/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    );
};

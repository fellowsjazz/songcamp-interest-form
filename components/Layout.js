import Head from 'next/head';

const Layout = ({ title, description, imageUrl }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content="https://bonjourhi.song.camp/" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Your page content here */}
    </>
  );
};

export default Layout;
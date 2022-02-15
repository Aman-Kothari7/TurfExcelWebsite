import Head from "next/head";
import React from "react";
import { PAGE_URL, SEO } from "../utils/constant";
import Footer from "./Footer";
import Header from "./Header";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <link rel="icon" type="image/svg+xml" href="favicon.svg" />
          <link rel="icon" type="image/png" href="favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Playfair+Display&family=Roboto&display=swap"
            rel="stylesheet"
          />

          <title>{`${this.props.title}`}</title>
          <meta
            name="description"
            content={this.props.desc}
            key="meta-description"
          />
          <meta name="robots" content={"index, follow"} />
          <meta property="og:title" content={`${this.props.title}`} />
          <meta property="og:description" content={`${this.props.desc}`} />

          <meta property="og:url" content={PAGE_URL} />
          <meta property="og:site_name" content={`TurfExcel Sports`} />
          <meta name="twitter:title" content={`${this.props.title}`} />
          <meta name="twitter:description" content={this.props.desc} />

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              name: "Turf Grounds in Powai, Mumbai, Maharashtra 400076",
              image: "",
              url: PAGE_URL,
              address: {
                "@type": "PostalAddress",
                addressLocality: SEO.ADDRESS,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                ratingCount: "320",
                bestRating: "5",
              },
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebSite",
              name: SEO.NAME,
              url: PAGE_URL,
            })}
          </script>
        </Head>

        <body
          style={{ fontFamily: "'Roboto', sans-serif" }}
          className="bg-main-bg min-h-screen min-w-screen tracking-wider relative font-secondary font-black"
        >
          <Header />

          <div className="min-h-screen">{this.props.children}</div>

          <Footer />
        </body>
      </>
    );
  }
}

export default Layout;

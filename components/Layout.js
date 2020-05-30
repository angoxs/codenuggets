import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Ángel Vāzquez";
export const siteTitle = "Code Nuggets";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle} - Build powerful apps with code.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Code Nuggets" content="Build powerful apps with code." />
        <meta
          property="og:image"
          content={`https://cl.ly/5f610f7cd882/download/Screen%252520Shot%2525202020-05-20%252520at%25252010.37.11%252520AM.png/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https://cl.ly/5f610f7cd882/download/Screen%252520Shot%2525202020-05-20%252520at%25252010.37.11%252520AM.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <img
              id="img"
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <script
        data-name="BMC-Widget"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="angelVZUR"
        data-description="Support me on Buy me a coffee!"
        data-message="Thank you for visiting. You can now buy me a coffee!"
        data-color="#FF813F"
        data-position="right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

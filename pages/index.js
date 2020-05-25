import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/Date";
import React from "react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [255, 255, 255],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  handleClick() {
    this.setState({
      color: this.chooseColor(),
    });
  }

  formatColor(ary) {
    return "rgb(" + ary.join(", ") + ")";
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  }

  render() {
    const { allPostsData } = this.props;
    return (
      <div>
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
        <Layout home>
          <Head>…</Head>
          <section className={utilStyles.headingMd}>…</section>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <h2 className={utilStyles.headingLg}>
              Code Nuggets - Build powerful apps with code.
            </h2>
            <p>
              👋 Welcome to Code Nuggets! You just embarked for a long coding
              journey full of great and incredible content. Let's do this 🚀
            </p>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </Layout>
      </div>
    );
  }
}

export default Home;

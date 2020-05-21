import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/Date";
import Test from "../components/Test";
import React from "react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const green = "#39D1B4";
const white = "#FFFFFF";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: white,
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color == white ? green : white;
    this.setState({ color: newColor });
  }

  render() {
    const { allPostsData } = this.props;
    return (
      <div style={{ background: this.state.color }}>
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
          <button onClick={this.changeColor}>
            {this.state.color === white ? "Testing" : "Great!"}
          </button>
        </Layout>
      </div>
    );
  }
}

export default Home;

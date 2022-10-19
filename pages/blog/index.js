import Link from "next/link";
import Navbar from "../../components/Navbar";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      allData: data,
    },
  };
};

function blog({ allData }) {
  return (
    <>
      <Navbar />
      <h1>helloo this is my blog</h1>
      {allData.slice(0, 5).map((curElem) => {
        return (
          <div key={curElem.id} className="ssr-styles">
            <h3>{curElem.id}</h3>
            <Link href={`/blog/${curElem.id}`}><h2>{curElem.title}</h2></Link>
          </div>
        );
      })}
    </>
  );
}

export default blog;

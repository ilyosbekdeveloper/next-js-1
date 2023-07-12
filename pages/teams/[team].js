import React from "react";
import Layout from "../../src/components/Layout";
import { useRouter } from "next/router";
// import { boxes } from "../../data";
import { getTeamMember } from "../../api";

const Home = () => {
  const router = useRouter();
  return (
    <Layout>
      <h1 className="mainTitle">{router.query.team}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae illum
        dolore est amet sint ut labore aspernatur, error porro dolor alias
        molestias unde deleniti recusandae quasi eligendi! Non, dicta!
      </p>
      {/* {data
        .map((i, index) => (
          <div key={index} className="box">
            // <h4>{i.title}</h4>
            <p>{i.p}</p>
          </div>
        ))} */}
    </Layout>
  );
};

export default Home;

// export async function getServerSideProps(context) {
//   const teamMember = context.query.team;
//   const res = await getTeamMember(teamMember);
//   return {
//     props: {data: res},
//   };
// }

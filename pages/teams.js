import React, { useEffect, useState } from "react";
import Layout from "../src/components/Layout";
import { useRouter } from "next/router";
import { getDataTeam } from "../api";

const Teams = ({data}) => {
  const router = useRouter();

  // useState example
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   const res = await getDataTeam();
  //   if (res.success) setData(res.data);
  //   else console.log("Error !");
  // };

  // useEffect(() => getData, []);

  return (
    <Layout>
      <h1 className="mainTitle">Teams section</h1>

      <div className="boxes">
        {data &&
          data.map((i, index) => (
            <div
              key={index}
              onClick={() => router.push("/teams/" + i.path)}
              className="box"
            >
              <h4 className="box_title">{i.title}</h4>
              <p>{i.p}</p>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Teams;

export async function getStaticProps(context) {
  const res = await getDataTeam();

  return {
    props: { data: res.data },
  };
}

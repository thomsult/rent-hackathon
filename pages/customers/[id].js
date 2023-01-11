import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import styles from "../../styles/Home.module.scss";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [dataResponse, setdataResponse] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/getdata-lib-router`;
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
        }),
      };

      const response = await fetch(apiUrlEndpoint, postData);
      const res = await response.json();
      setdataResponse(res.data)
      //setdataResponse(res.products);
    }
    getPageData();
  }, [router.query.id, router.isReady]);

  useEffect(() => {
    console.log(dataResponse);
  }, [dataResponse]);

  return (
    <div>{JSON.stringify(dataResponse)}</div>
  );
}
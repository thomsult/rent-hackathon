import { useEffect, useState } from "react";
import React from "react"
export default function Home() {
  const [dataResponse, setdataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/getdata-lib`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setdataResponse(res.data);
    }
    getPageData();
  }, []);
  return (
    <div>
       {dataResponse.map((item,items) => {
        return (
          <h1 key={items}>{item.email}</h1>
        );
      })}
    </div>
  );
}

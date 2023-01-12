import { useEffect, useState } from "react";
import React from "react"
export default function Home() {
  const [dataResponse, setdataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/vehicle`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setdataResponse(res);
      console.log(res)
    }
    getPageData();
  }, []);
  return (
    <div>
       {dataResponse && dataResponse.map((item,items) => {
        return (
          <h1 key={items}>{item.model}</h1>
        );
      })}
    </div>
  );
}

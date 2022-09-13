import React, { useState, useEffect } from "react";
import axios from "axios";
const Cats = () => {
  const [info, setInfo] = useState([]);

  const Api =
    "https://api.thecatapi.com/v1/images/search?api_key=live_CkgElgeMSLuGXXFcW8sA9rbEiLHywwkrWRrkr2PLh5gHO5gTHy84eiogQx8BfZX4";

  useEffect(() => {
    axios
      .get(Api)
      .then((res) => {
        setInfo(res.breeds);
        console.log(Api);
      })
      .catch((error) => {
        console.log("sorry vc n consumiu a api", error);
      });
  }, []);

  return (
    <div>
      <h2>Pagina dos Gatos</h2>
    </div>
  );
};

export default Cats;

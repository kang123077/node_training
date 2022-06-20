import MyLayout from "../component/MyLayout";
import { useCallback, useDebugValue, useEffect, useState } from "react";
import axios from "../node_modules/axios/index";
import DataForm from "../component/DataForm";

export type photoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const Calculator2 = () => {
  const [datas, setDatas] = useState<photoType[]>([]);

  const API_URL = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    if (datas.length) console.log(datas);
  }, [datas]);

  const getAPI = useCallback(
    async (e) => {
      e.preventDefault();
      const result = await axios.get(API_URL);
      // console.log("result.data: ", result.data.slice(1, 30));
      setDatas(result.data.slice(1, 30));
    },
    [API_URL]
  );

  return (
    <div>
      <MyLayout>
        <h1>Restapi</h1>
        <p>get data from "https://jsonplaceholder.typicode.com/photos"</p>
        <button onClick={getAPI}>Fetching Data!</button>
        <DataForm datas={datas} />
      </MyLayout>
    </div>
  );
};

export default Calculator2;

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
  const [idnum, setIdnum] = useState<number>();
  const [datas, setDatas] = useState<photoType[]>([]);

  const API_URL = "https://jsonplaceholder.typicode.com/photos/";

  useEffect(() => {
    if (idnum) console.log(idnum, "idnum");
    if (datas.length) console.log(datas);
  }, [idnum, datas]);

  const getAPI = useCallback(
    async (e) => {
      e.preventDefault();
      const result = await axios.get(API_URL);
      // console.log("result.data: ", result.data.slice(1, 30));
      setDatas(result.data.slice(1, 100));
    },
    [API_URL]
  );

  const getSelAPI = useCallback(
    async (e) => {
      e.preventDefault();
      const result = await axios.get(API_URL);
      // console.log("result.data: ", result.data.slice(1, 30));
      setDatas(result.data.slice(idnum - 1, idnum));
    },
    [idnum, API_URL]
  );

  const onChangeValue = useCallback(
    (e) => {
      setIdnum(e.target.value);
    },
    [idnum]
  );

  return (
    <div>
      <MyLayout>
        <h1>Restapi</h1>
        <p>get data from "https://jsonplaceholder.typicode.com/photos"</p>
        <input
          type="number"
          placeholder="put idnum"
          onChange={onChangeValue}
        ></input>
        <p></p>
        <button onClick={getSelAPI}>Fetching selected Data!</button>
        <p></p>
        <button onClick={getAPI}>Fetching 1~100 Data!</button>
        <DataForm datas={datas} />
      </MyLayout>
    </div>
  );
};

export default Calculator2;

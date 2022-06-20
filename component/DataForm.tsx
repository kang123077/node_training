import React from "react";
import { photoType } from "../pages/restapi";

type Props = {
  datas: photoType[] | undefined;
};

function DataForm(props: Props) {
  const { datas } = props;

  return (
    <div>
      {datas &&
        datas.map((data) => (
          <div key={data.id}>
            <p>title: {data.title}</p>
            <p>url: {data.url}</p>
			<img src={data.url} alt="img from api"></img>
          </div>
        ))}
    </div>
  );
}

export default DataForm;

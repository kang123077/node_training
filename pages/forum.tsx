import MyLayout from "../component/MyLayout";
import ForumHeaderContent from "../component/ForumHeaderContent";
import { useState } from "react";

const Fibonacci = () => {
	const [pathtext, setPathtext] = useState("Forum");

  return (
    <div>
      <ForumHeaderContent pathtext={pathtext}/>
    </div>
  );
};

export default Fibonacci;

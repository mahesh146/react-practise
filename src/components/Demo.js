import { useState, useEffect } from "react";

const Demo = () => {
  const [text, setText] = useState("");
    //console.log("Demo start")
  useEffect(() => {
    console.log("Demo Effect");
    const time = setTimeout(() => {
      setText([]);
    }, 5000);

    return () => clearTimeout(time);
   
  });

  //console.log("Demo end")

  if (text == "") {
    return <p> Loading </p>;
  }
  return <p> {text} </p>;
};

export default Demo;

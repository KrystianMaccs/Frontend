import React, { useState } from "react";

const Ad = ({ publish }) => {
  let [item, setItem] = useState(null);
  

  const random = () => {
    if (publish.results > 0) {
      setItem(
        publish.results[Math.floor(Math.random() * publish.results.length)]
      );
    }
  };
  setInterval(random, 40000);
  return (
    <div>
      {item ? (
        <a
          style={{
            width: "60vw",
            height: "10vh",
            background: "#fff",
            bottom: 0,
            position: "fixed",
            bottom: 0,
            margin: "0 auto",
          }}
          href={item.link}
        >
          <img src={item.file} alt={"well it works"} />
        </a>
      ) : null}
    </div>
  );
};

export default Ad;

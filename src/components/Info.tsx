import { useState } from "react";

const Info = ({ name }: { name: string }) => {
  const [n] = useState<string>(name);
  return <div> Crafted by - @{n}</div>;
};

export default Info;

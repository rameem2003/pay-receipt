import React, { useState } from "react";
import Flex from "./Flex";
import { Button, Input } from "@material-tailwind/react";

const Form1 = () => {
  const [biochemistry, setBiochemistry] = useState({ random: 0, critinine: 0 });

  // console.log(biochemistry);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(biochemistry);
  };

  return (
    <form className=" max-w-[800px] pt-[50px] mx-auto" onSubmit={handleSubmit}>
      <h2 className=" font-bold text-3xl">Medical Report Entry</h2>

      <div className=" w-full mt-10 mb-3">
        <h3 className=" font-semibold text-2xl mb-3">Biochemistry Data</h3>

        <Flex className={` justify-between gap-4`}>
          <Input
            color="blue"
            label="Random"
            onChange={(e) =>
              setBiochemistry({ ...biochemistry, random: e.target.value })
            }
          />
          <Input
            color="blue"
            label="Critinine"
            onChange={(e) =>
              setBiochemistry({ ...biochemistry, critinine: e.target.value })
            }
          />
        </Flex>
      </div>

      <Button
        type="submit"
        style={{ backgroundColor: "#3f51b5" }}
        className="w-full"
      >
        Upload
      </Button>
    </form>
  );
};

export default Form1;

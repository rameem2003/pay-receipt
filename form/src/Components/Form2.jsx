import React, { useState } from "react";
import Flex from "./Flex";
import { Button, Input } from "@material-tailwind/react";

const Form2 = () => {
  const [hepatitis, setHepatitis] = useState({ hbshag: "", antiHCV: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(hepatitis);
  };

  return (
    <form className=" max-w-[800px] pt-[50px] mx-auto" onSubmit={handleSubmit}>
      <h3 className=" font-semibold text-2xl mb-3">Hepatitis-B Medical Data</h3>
      <Flex className={` justify-between gap-4 my-4`}>
        <Input
          color="blue"
          label="HBsAg"
          onChange={(e) =>
            setHepatitis({ ...hepatitis, hbshag: e.target.value })
          }
        />
        <Input
          color="blue"
          label="Anti HCV"
          onChange={(e) =>
            setHepatitis({ ...hepatitis, antiHCV: e.target.value })
          }
        />
      </Flex>

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

export default Form2;

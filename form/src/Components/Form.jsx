import React from "react";
import Flex from "./Flex";
import { Button, Input } from "@material-tailwind/react";

const Form = () => {
  return (
    <form className=" max-w-[800px] pt-[50px] mx-auto">
      <h2 className=" font-bold text-3xl">Medical Report Entry</h2>

      <div className=" w-full mt-10">
        <h3 className=" font-semibold text-2xl mb-3">Biochemistry Data</h3>

        <Flex className={` justify-between gap-4`}>
          <Input color="blue" label="Random" />
          <Input color="blue" label="Critinine" />
        </Flex>

        <Flex className={` justify-between gap-4 mt-4`}>
          <Input color="blue" label="HBsAg" />
          <Input color="blue" label="Anti HCV" />
        </Flex>
      </div>

      <div className=" w-full mt-10">
        <h3 className=" font-semibold text-2xl mb-3">Blood Sample Data</h3>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input color="blue" label="Haemoglobin" />
          <Input color="blue" label="ESR (Westergren Method)" />
        </Flex>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input color="blue" label="Total RBC Count" />
          <Input color="blue" label="Total Platelet Count" />
          <Input color="blue" label="Total WBC Count" />
        </Flex>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input color="blue" label="Neutrophils" />
          <Input color="blue" label="Lymphocytes" />
          <Input color="blue" label="Monocytes" />
        </Flex>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input color="blue" label="Eosinophils" />
          <Input color="blue" label="Basophils" />
        </Flex>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input color="blue" label="HCT/ PCV" />
          <Input color="blue" label="MCV" />
          <Input color="blue" label="MCH" />
        </Flex>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input color="blue" label="MCHC" />
          <Input color="blue" label="RDW-CV" />
          <Input color="blue" label="RDW-SD" />
        </Flex>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input color="blue" label="MPV" />
          <Input color="blue" label="PDW" />
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

export default Form;

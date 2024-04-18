import React, { useState } from "react";
import Flex from "./Flex";
import { Button, Input } from "@material-tailwind/react";

const Form3 = () => {
  const [blood, setBlood] = useState({
    haemoglobin: 0,
    ESR: 0,
    RBC: 0,
    platelet: 0,
    WBC: 0,
    neutrophils: 0,
    lymophocytes: 0,
    monocytes: 0,
    eosinophils: 0,
    basophils: 0,
    hct: 0,
    mcv: 0,
    mch: 0,
    mchc: 0,
    rdw_cv: 0,
    rdw_sd: 0,
    mpv: 0,
    pdw: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blood);
  };
  return (
    <form className=" max-w-[800px] pt-[50px] mx-auto" onSubmit={handleSubmit}>
      <div className=" w-full">
        <h3 className=" font-semibold text-2xl mb-3">Blood Sample Data</h3>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input
            color="blue"
            label="Haemoglobin"
            onChange={(e) =>
              setBlood({ ...blood, haemoglobin: e.target.value })
            }
          />
          <Input
            color="blue"
            label="ESR (Westergren Method)"
            onChange={(e) => setBlood({ ...blood, ESR: e.target.value })}
          />
        </Flex>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input
            color="blue"
            label="Total RBC Count"
            onChange={(e) => setBlood({ ...blood, RBC: e.target.value })}
          />
          <Input
            color="blue"
            label="Total Platelet Count"
            onChange={(e) => setBlood({ ...blood, platelet: e.target.value })}
          />
          <Input
            color="blue"
            label="Total WBC Count"
            onChange={(e) => setBlood({ ...blood, WBC: e.target.value })}
          />
        </Flex>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input
            color="blue"
            label="Neutrophils"
            onChange={(e) =>
              setBlood({ ...blood, neutrophils: e.target.value })
            }
          />
          <Input
            color="blue"
            label="Lymphocytes"
            onChange={(e) =>
              setBlood({ ...blood, lymophocytes: e.target.value })
            }
          />
          <Input
            color="blue"
            label="Monocytes"
            onChange={(e) => setBlood({ ...blood, monocytes: e.target.value })}
          />
        </Flex>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input
            color="blue"
            label="Eosinophils"
            onChange={(e) =>
              setBlood({ ...blood, eosinophils: e.target.value })
            }
          />
          <Input
            color="blue"
            label="Basophils"
            onChange={(e) => setBlood({ ...blood, basophils: e.target.value })}
          />
        </Flex>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input
            color="blue"
            label="HCT/ PCV"
            onChange={(e) => setBlood({ ...blood, hct: e.target.value })}
          />
          <Input
            color="blue"
            label="MCV"
            onChange={(e) => setBlood({ ...blood, mcv: e.target.value })}
          />
          <Input
            color="blue"
            label="MCH"
            onChange={(e) => setBlood({ ...blood, mch: e.target.value })}
          />
        </Flex>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input
            color="blue"
            label="MCHC"
            onChange={(e) => setBlood({ ...blood, mchc: e.target.value })}
          />
          <Input
            color="blue"
            label="RDW-CV"
            onChange={(e) => setBlood({ ...blood, rdw_cv: e.target.value })}
          />
          <Input
            color="blue"
            label="RDW-SD"
            onChange={(e) => setBlood({ ...blood, rdw_sd: e.target.value })}
          />
        </Flex>

        <Flex className={`gap-4 justify-between mb-3`}>
          <Input
            color="blue"
            label="MPV"
            onChange={(e) => setBlood({ ...blood, mpv: e.target.value })}
          />
          <Input
            color="blue"
            label="PDW"
            onChange={(e) => setBlood({ ...blood, pdw: e.target.value })}
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

export default Form3;

import React from "react";
import Container from "../Components/Container";
import Header from "../Components/Header";
import PatientInfo from "../Components/PatientInfo";
import Footer from "../Components/Footer";

const Template1 = () => {
  return (
    <>
      <Container>
        <Header />
        <PatientInfo />

        <main className="mt-5">
          <table class="w-full border-[1px] border-black">
            <tr class="border border-1">
              <td class="font-bold text-xl w-[40%] border-[1px] border-black">
                Test
              </td>
              <td class="font-bold text-xl w-[30%] border-[1px] border-black">
                Result
              </td>
              <td class="font-bold text-xl w-[30%] border-[1px] border-black">
                Reference value
              </td>
            </tr>

            <tr>
              <td class="font-bold">Salmonella typhi O</td>
              <td class="font-bold">4.7 mmol/L</td>
              <td class="font-bold"> 7.8 mmol/L</td>
            </tr>

            <tr>
              <td class="font-bold">Salmonella typhi H</td>
              <td class="font-bold">3.09 mg/dL</td>
              <td class="font-bold">
                Male: 0.7 - 1.3 mg/Dl <br />
                Female: 0.7 - 1.3 mg/Dl <br />
                Children: 0.7 - 1.3 mg/Dl <br />
              </td>
            </tr>

            <tr>
              <td class="font-bold">Salmonella paratyphi AH</td>
              <td class="font-bold">4.7 mmol/L</td>
              <td class="font-bold"> 7.8 mmol/L</td>
            </tr>

            <tr>
              <td class="font-bold">Salmonella paratyphi BH</td>
              <td class="font-bold">4.7 mmol/L</td>
              <td class="font-bold"> 7.8 mmol/L</td>
            </tr>
          </table>
        </main>

        <Footer />
      </Container>
    </>
  );
};

export default Template1;

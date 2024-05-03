import React from "react";
import Container from "../Components/Container";
import Header from "../Components/Header";
import PatientInfo from "../Components/PatientInfo";
import Footer from "../Components/Footer";

const Template6 = () => {
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
              <td class="font-bold">
                P.falciparum a sexual (+ sexsual) <sup>a</sup>{" "}
              </td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>

            <tr>
              <td class="font-bold">P.vivax a sexual </td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">P.falciparum + P.vivax mixed </td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">P.falciparum sexual only </td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
          </table>
        </main>

        <Footer />
      </Container>
    </>
  );
};

export default Template6;

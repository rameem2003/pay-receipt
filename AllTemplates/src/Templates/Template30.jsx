import React from "react";
import Container from "../Components/Container";
import Header from "../Components/Header";
import PatientInfo from "../Components/PatientInfo";
import Footer from "../Components/Footer";

const Template30 = () => {
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
              <td class="font-bold">Hemoglobin</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Total RBC Count</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Paced Cell Volume</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>

            <tr>
              <td class="font-bold">Mean Corpuscular Volume</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>

            <tr>
              <td class="font-bold">MCHC</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">MCH</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Total WBC</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Neutrohils </td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Lymphocytes </td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Eosinophils </td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Monocytes </td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Basophils </td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Platelate Count </td>
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

export default Template30;

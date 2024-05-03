import React from "react";
import Container from "../Components/Container";
import Header from "../Components/Header";
import PatientInfo from "../Components/PatientInfo";
import Footer from "../Components/Footer";

const Template22 = () => {
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
              <td class="font-bold">Color</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Turbidity</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Sp. Gravity</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">pH</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Protein</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>

            <tr>
              <td class="font-bold">Sugar</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>

            <tr>
              <td class="font-bold">Ketones</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Urobilinogen</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Nitrite</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">RBC</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Pus cells</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">Ep. cells</td>
              <td class="font-bold">Negetive/L</td>
              <td class="font-bold"> Negetive</td>
            </tr>
            <tr>
              <td class="font-bold">WBC</td>
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

export default Template22;

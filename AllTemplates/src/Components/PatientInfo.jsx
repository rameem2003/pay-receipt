import React from "react";

const PatientInfo = () => {
  return (
    <>
      <h2 class="font-bold text-2xl uppercase text-center mt-12">
        Biochemistry report
      </h2>

      <div class="border-[1px] border-black flex items-start justify-between mt-5">
        <table>
          <tr>
            <td class="font-bold">Invice No</td>
            <td>: xxxxxxxxx</td>
          </tr>
          <tr>
            <td class="font-bold">Patient Name</td>
            <td>: xxxxxxxxxx</td>
          </tr>
          <tr>
            <td class="font-bold">Referred by</td>
            <td>: xxxxxxxxxx</td>
          </tr>
        </table>

        <table>
          <tr>
            <td class="font-bold">Invice Date</td>
            <td>: xxxxxxxxx</td>
          </tr>

          <tr>
            <td class="font-bold">Gender</td>
            <td>: Male</td>
          </tr>
        </table>

        <table>
          <tr>
            <td class="font-bold">Delivary Date</td>
            <td>: xxxxxxxxx</td>
          </tr>

          <tr>
            <td class="font-bold">Age</td>
            <td>: 26 Y</td>
          </tr>
        </table>

        <table>
          <tr>
            <td class="font-bold text-right">&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td class="font-bold text-right">Contact</td>
            <td>: xxxxxxxxxx</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default PatientInfo;

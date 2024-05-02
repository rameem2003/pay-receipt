import React from "react";

const Footer = () => {
  return (
    <footer class="mt-[80px] absolute bottom-0 left-0 w-full">
      <div class="flex items-end justify-between">
        <div>
          <img
            class="w-[180px] h-[180px] mb-4"
            src="qr_code.png"
            alt="qrcode"
          />
          <p class="font-bold">Printed no: 01 Jan 2024</p>
          <p class="font-bold">
            Managed by <a href="">Lab-Pilot.com</a>
          </p>
        </div>

        <div>
          <div class="border-t-[2px] border-black w-[150px]">
            <p class="font-semibold text-center text-base">Signature</p>
          </div>
        </div>
      </div>

      <p class="p-3 bg-orange-500 font-bold text-lg text-center mt-10">
        BSMMU OPD-2, Shahbag, Dhaka-1000, Bangladesh
      </p>
    </footer>
  );
};

export default Footer;

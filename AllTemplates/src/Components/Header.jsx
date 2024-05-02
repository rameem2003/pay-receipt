import React from "react";

const Header = () => {
  return (
    <header>
      <div class="flex items-start gap-5">
        <img class="w-[80px] h-[80px]" src="bsmmu.png" alt="" />
        <div class="text-center">
          <h1 class="font-semibold text-[22px] uppercase">
            Department of biochemistry & molecular biology
          </h1>
          <h2 class="font-semibold text-2xl uppercase text-red-500">
            বঙ্গবন্ধু শেখ মুজিব মেডিক্যাল বিশ্ববিদ্যালয়
          </h2>
          <h2 class="font-bold text-2xl capitalize text-red-500">
            Bangabandhu sheikh mujib medical university
          </h2>
          <h2 class="font-bold text-2xl capitalize">
            Shahbag Avenue, Dhaka-1000, Bangladesh
          </h2>
        </div>
        <img class="w-[80px] h-[80px]" src="qr_code.png" alt="" />
      </div>
    </header>
  );
};

export default Header;

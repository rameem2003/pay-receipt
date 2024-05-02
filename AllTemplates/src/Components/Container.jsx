import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" max-w-[800px] mx-auto pt-10 px-1 min-h-screen relative">
      {children}
    </div>
  );
};

export default Container;

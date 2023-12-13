import React from "react";

const landingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <main className="h-full pt-40 text-gray-300">{children}</main>
    </div>
  );
};

export default landingLayout;

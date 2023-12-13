import React from "react";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <main className="h-full text-gray-300">{children}</main>
    </div>
  );
};

export default dashboardLayout;

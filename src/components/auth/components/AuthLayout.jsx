import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-2 ">
      <section></section>
      <div className="flex justify-center items-center">
        <section>{children}</section>
      </div>{" "}
    </main>
  );
};

import React from "react";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-center bg-form p-4 w-full text-xs bg-black"
    >
      <div className="flex justify-between items-end text-white">
        <div className="gap-2 flex">
          <p> Special Thanks to</p>
          <a
            href="https://www.devscale.id/"
            target="_blank"
            className="underline text-blue-500"
          >
            devscale.id
          </a>
          ❤️
        </div>

        <p className="font-xs italic max-w-sm">
          Devwiz: Ade Safroni, Ali Anwar, Jordan Maulana
        </p>

        <div className="flex gap-2">
          <p>Design by</p>
          <a
            href="https://www.figma.com/community"
            target="_blank"
            className="underline text-blue-500"
          >
            Figma Community
          </a>
        </div>
      </div>
    </footer>
  );
};

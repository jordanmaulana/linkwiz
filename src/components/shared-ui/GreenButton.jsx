import React from "react";
import { Button } from "@nextui-org/react";

export const GreenButton = ({ type, isDisabled, clicked, title, loading }) => {
  return (
    <Button
      type={type}
      isDisabled={isDisabled}
      className="bg-primary text-white w-full font-semibold"
      onClick={clicked}
      isLoading={loading}
      variant="shadow"
    >
      {title}
    </Button>
  );
};

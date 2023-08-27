"use client"
import { useState } from "react";

export const useTop = () => {
  const [numberOfQuotes, setNumberOfQuotes] = useState<number | null>(100);

  return {
    numberOfQuotes,
    setNumberOfQuotes,
  };
};

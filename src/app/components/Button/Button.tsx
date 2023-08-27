import React from "react";
import Link from "next/link";
import { styled } from "styled-components";

export const LinkButton = styled(Link)`
  color: #fff;
  background-color: #000;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
`;

const Button = () => {
  return <Link href='/quotes/1'>Button</Link>;
};

export default Button;

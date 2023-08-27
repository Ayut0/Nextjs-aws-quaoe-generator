"use client";

import { styled } from "styled-components";
import Image from "next/image";

export const BackgroundImageLeft = styled(Image)`
  position: relative;
  z-index: 1;
  margin-left: 10px;
  margin-top: -10px;
`;

export const BackgroundImageRight = styled(Image)`
  position: fixed;
  z-index: 1;
  right: -60px;
  bottom: 0px;
`;

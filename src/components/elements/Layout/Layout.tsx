"use client";

import { styled } from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackground = styled.div`
  background: linear-gradient(to right, #eda41b, #170537);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  height: 100vh;
  width: 100vw;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

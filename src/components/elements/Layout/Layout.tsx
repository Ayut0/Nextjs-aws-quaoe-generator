"use client";

import { styled } from "styled-components";

export const GradientBackground = styled.div`
  background: linear-gradient(to right, #f3ab27, #3e256b);
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

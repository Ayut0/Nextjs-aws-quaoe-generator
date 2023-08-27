"use client";

import React from "react";
import { GradientBackground } from "./GradientBackground";
import {
  BackgroundImageLeft,
  BackgroundImageRight,
} from "../Images/BackgroundImage";
import { StyledFooter } from "./Footer";

import { useTop } from "../../hooks/useTop";
import { LinkButton } from "../Button/Button";
import { CenteredElement } from "./Flexbox";

const Top = () => {
  const { numberOfQuotes } = useTop();
  return (
    <GradientBackground>
      <BackgroundImageLeft
        src='/assets/kobe_withTrophy.png'
        alt='Kobe Bryant holding Trophy in 2001'
        height={400}
        width={200}
      />
      <CenteredElement>
        <LinkButton href='/quotes/1'>Button</LinkButton>
      </CenteredElement>
      <BackgroundImageRight
        src='/assets/kobe_lebron.png'
        alt='Kobe Bryant and LeBron James'
        height={200}
        width={300}
      />
      <StyledFooter>
        <p>Quotes generated: {numberOfQuotes}</p>
      </StyledFooter>
    </GradientBackground>
  );
};

export default Top;

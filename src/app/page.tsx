import { GradientBackground } from "@/components/elements/Layout/Layout";
import {
  BackgroundImageLeft,
  BackgroundImageRight,
} from "@/components/elements/Images/BackgroundImage";

export default function Home() {
  return (
    <main>
      <GradientBackground>
        <BackgroundImageLeft
          src='/assets/kobe_withTrophy.png'
          alt='Kobe Bryant holding Trophy in 2001'
          height={400}
          width={200}
        />
        <BackgroundImageRight
          src='/assets/kobe_lebron.png'
          alt='Kobe Bryant and LeBron James'
          height={200}
          width={300}
        />
      </GradientBackground>
    </main>
  );
}

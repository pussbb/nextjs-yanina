import YaninaInfoSection from '@/app/Sections/YaninaInfoSection';
import HealthyFeetPrices from '@/app/Sections/HealthyFeet/HealthyFeetPrices';
import HealthyFeetInfo from '@/app/Sections/HealthyFeet/HealthyFeetInfo';
import RegisterForTheCourse from "@/app/Sections/RegisterForTheCourse";
import YaninaPortfolio from "@/app/Sections/YaninaPortfolio";
import HealthyFeetIntro from "@/app/Sections/HealthyFeet/HealthyFeetIntro";
import HealthFeetFeatures from "@/app/Sections/HealthyFeet/HealthFeetFeatures";
import HealthyFeetForYou from "@/app/Sections/HealthyFeet/HealthyFeetForYou";


export default function Home() {

  return (
      <main className="main-page flex min-h-screen flex-col justify-between p-1">
          <YaninaPortfolio/>

          <HealthyFeetIntro />
          <HealthFeetFeatures />
          <HealthyFeetForYou />

          <YaninaInfoSection/>
          <HealthyFeetPrices/>
          <HealthyFeetInfo/>

          <RegisterForTheCourse/>

      </main>
  )
}

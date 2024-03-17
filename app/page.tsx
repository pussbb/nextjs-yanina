import YaninaInfoSection from '@/app/Sections/YaninaInfoSection';
import HealthyFeetPrices from '@/app/Sections/HealthyFeet/HealthyFeetPrices';
import HealthyFeetInfo from '@/app/Sections/HealthyFeet/HealthyFeetInfo';
import RegisterForTheCourse from "@/app/Sections/RegisterForTheCourse";
import YaninaPortfolio from "@/app/Sections/YaninaPortfolio";
import HealthFeetFeatures from "@/app/Sections/HealthyFeet/HealthFeetFeatures";
import HealthyFeetForYou from "@/app/Sections/HealthyFeet/HealthyFeetForYou";
import HealthyFeetIntroShort from "@/app/Sections/HealthyFeet/HealthyFeetIntroShort";


export default function Home() {

  return (
      <main className="main-page flex min-h-screen flex-col justify-between p-">
          <YaninaPortfolio/>

          <HealthyFeetIntroShort />
          <HealthFeetFeatures />
          <HealthyFeetForYou />

          <YaninaInfoSection/>
          <HealthyFeetPrices/>
          <HealthyFeetInfo/>

          <RegisterForTheCourse/>

      </main>
  )
}

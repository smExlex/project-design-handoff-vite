import { Footer } from "../components/Footer/Footer";
import { SignUpForm } from "../components/SignUpForm/SignUpForm";
import { Header } from "../components/Header/Header";
import { HeroText } from "../components/MainInfo/HeroText";
import { Mantra } from "../components/MainInfo/Mantra";
import { Classes } from "../components/Classes/Classes";
import { ClassesText } from "../components/Classes/ClassesText";
import { Articles } from "../components/Articles/Articles";

export const HomePage = () => {
  return (
    <>
      {/* Pass the contentType prop to the Header component */}
      <Header contentType="video" />
      <HeroText />
      <Mantra />
      <Articles />
      <ClassesText />
      <Classes />
      <SignUpForm />
      <Footer />
    </>
  );
};

import { useOutlet } from "react-router-dom";
import { NavBar } from "../../components/molecules/Navs/NavBar/NavBar";
import { Footer } from "../../components/organisms/Footer/Footer";

export const Layout = () => {
  const outlet = useOutlet();

  return (
    <>
      <NavBar />
      {outlet}
      <Footer />
    </>
  );
};

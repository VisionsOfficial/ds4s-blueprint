import { useOutlet } from "react-router-dom";
import { NavBar } from "../../components/organisms/Navs/NavBar/NavBar";
import { Footer } from "../../components/organisms/Footer/Footer";
import { ScrollTop } from "../../components/atoms/Scrollings/ScrollTop/ScrollTop";

export const Layout = () => {
  const outlet = useOutlet();

  return (
    <>
      <ScrollTop>
        <NavBar />
        {outlet}
        <Footer />
      </ScrollTop>
    </>
  );
};

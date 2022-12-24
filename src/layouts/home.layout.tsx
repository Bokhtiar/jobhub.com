import { Outlet } from "react-router-dom";
import { Header } from "components/header";
import { Footer } from "components/footer";

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
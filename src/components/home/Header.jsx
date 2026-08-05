// main-Header
import HeaderContact from "../header/HeaderContact";
import HeaderNavigation from "../header/headerNavigation/HeaderNavigation";
import TopHeader from "../header/TopHeader";

//start
export default function Header() {
  return (
    <>
      <div className="">
        <TopHeader />
        <HeaderContact />
        {/* Navbar */}
        <HeaderNavigation />
      </div>
    </>
  );
}

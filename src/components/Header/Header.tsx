import Container from "../template/Container";
import Landing from "./Landing";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Container>
      <div className="h-screen w-full sm:gap-20 gap-10 items-center place-content-center border border-y-transparent border-x-0 flex flex-col">
        <Logo />
        <Navbar />
        <Landing />
      </div>
    </Container>
  );
};

export default Header;

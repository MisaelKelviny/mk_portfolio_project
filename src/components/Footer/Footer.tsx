import Container from "../template/Container";

function Footer() {
  return (
    <Container>
      <div className="h-[300px] items-center justify-center border border-y-transparent border-x-0 flex flex-col z-20 relative">
        <div className="flex flex-col justify-center text-center">
          <div>
            <a href="mailto: misaelkelviny@gmail.com" type="email">
              misaelkelviny@gmail.com
            </a>
          </div>
          <div>All content of this website are property of Misael Kelviny.</div>
          <div>
            <a
              href="https://github.com/MisaelKelviny/mk_portfolio_project"
              className="underline text-zinc-500"
            >
              https://github.com/MisaelKelviny/mk_portfolio_project
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;

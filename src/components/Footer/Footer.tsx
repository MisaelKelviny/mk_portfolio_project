import Container from "../template/Container";

function Footer() {
  return (
    <Container>
      <div className="h-[300px] items-center justify-center border border-b-0 border-t-zinc-800 border-x-0 flex flex-col z-20 relative">
        <div className="flex flex-col justify-center text-center">
          <div>
            <a href="mailto: misaelkelviny@gmail.com" type="email">
              misaelkelviny@gmail.com
            </a>
          </div>
          <div>
            <p>All content of this website are property of Misael Kelviny.</p>
          </div>
          <div>
            <a
              href="https://github.com/MisaelKelviny/mk_portfolio_project"
              className="underline text-zinc-500"
              style={{ overflowWrap: "anywhere" }}
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

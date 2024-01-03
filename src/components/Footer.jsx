const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center mb-0" style={{ fontSize: "1.2rem" }}>
        <p>
          All rights reserved {year}, developed by
          <span className="text-info fw-bold mx-1 web_link">MetaWebix.com</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;

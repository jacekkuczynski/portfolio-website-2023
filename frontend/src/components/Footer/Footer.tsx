const Footer = async () => {
  const email = "hello@jacekkuczynski.com";

  return (
    <footer className="w-full border-t-2 bg-blackDimmed border-cyan h-auto md:h-[150px] p-6">
      <div className="container flex items-start justify-between h-full sm:items-center">
        <div className="leading text-whiteDimmed">{email}</div>
      </div>
    </footer>
  );
};

export default Footer;

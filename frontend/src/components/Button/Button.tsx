type ButtonT = "primary" | "secondary";

const Button = ({
  variant,
  children,
}: {
  variant: ButtonT;
  children: React.ReactNode;
}) => {
  const variants = {
    primary: "bg-cyan hover:bg-cyanLight text-blackDimmed",
    secondary:
      "bg-transparent border-2 border-grey3 hover:border-whiteDimmed text-whiteDimmed",
  };

  return (
    <button
      className={`flex items-center justify-center font-bold gap-[0.625rem] sm:gap-5 transition-colors ease-in-out px-buttonXSmall md:px-buttonXMedium lg:px-buttonXLarge py-buttonYSmall md:py-buttonYMedium lg:py-buttonYLarge text-contentSmall md:text-contentMedium lg:text-contentLarge ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;

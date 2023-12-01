interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-white px-3 py-1 rounded-full hover:scale-105">
      <span className="text-md font-semibold text-black">{text}</span>
    </button>
  );
};

export { Button };

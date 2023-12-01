interface ButtonProps {
  text: string;
  type: "primary" | "secondary";
}

const Button = ({ text, type }: ButtonProps) => {
  return (
    <button className={`bg-white ${type==='primary'? 'px-8 py-2 font-bold':'px-3 py-1 font-semibold'} rounded-full hover:scale-105`}>
      <span className="text-md text-black">{text}</span>
    </button>
  );
};

export { Button };

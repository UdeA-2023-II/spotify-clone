import { Button } from "./Button";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

const Card = ({ title, description, buttonText }: CardProps) => {
  return (
    <div className="debug flex flex-col light-card items-start">
      <span className="font-semibold text-lg">{title}</span>
      <span className=" text-md">{description}</span>
      <Button text={buttonText} />
    </div>
  );
};

export { Card };

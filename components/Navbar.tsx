import { Button } from "./Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { LogInDialog } from "./Dialogs/LogInDialog";
import { useState } from "react";

const Navbar = () => {
  const [dialogOpen, setOpen] = useState<boolean>(false);

  const handleLogInClick = () => {
    setOpen(true);
  };

  return (
    <nav className="debug bg-spotify-black flex items-center justify-between py-4 px-5 rounded-lg">
      <div className="flex gap-4 text-xl text-spotify-gray2">
        <div className="bg-spotify-chevron-black p-1 rounded-full inactive-chevron-text ">
          <BsChevronLeft />
        </div>
        <div className="bg-spotify-chevron-black p-1 rounded-full inactive-chevron-text ">
          <BsChevronRight />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <span className="menu-text">Premium</span>
        <span className="menu-text">Support</span>
        <span className="menu-text">Download</span>
        <div className="vertical-separator"></div>
        <span className="menu-text">SignUp</span>
        <Button text="Login" type="primary" handleClick={handleLogInClick} />
      </div>
      <LogInDialog setDialogOpen={setOpen} dialogOpen={dialogOpen} />
    </nav>
  );
};

export { Navbar };

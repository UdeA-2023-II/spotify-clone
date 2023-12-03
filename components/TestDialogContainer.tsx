import { useState } from "react";
import { TestDialog } from "./Dialogs/TestDialog";
import { Button } from "./Button";


const TestDialogContainer = () => {

    const [open, setOpen] = useState(false);

    const handleOpenDialogClick =()=>{
        setOpen(true)
    }
  return (
    <div>
      <h1>TestDialogContainer</h1>
      <TestDialog open={open} setOpen={setOpen}/>
    
        <Button text="Open Dialog" handleClick={handleOpenDialogClick} type="secondary" />
    </div>
  );
};

export { TestDialogContainer };

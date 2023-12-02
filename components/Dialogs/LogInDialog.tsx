import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Button } from "../Button";
import { Dispatch, SetStateAction } from "react";

interface LogInDialogProps {
  dialogOpen: boolean;
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const LogInDialog = ({ dialogOpen, setDialogOpen: setOpen }: LogInDialogProps) => {
  return (
    <Dialog open={dialogOpen} onClose={()=>{setOpen(false)}}>
      <DialogTitle className="bg-mid-gray">
        <span>Diálogo de Log In</span>
      </DialogTitle>
      <DialogContent className="bg-mid-gray">
        <div className="flex flex-col gap-2">
          <span>Contenido del Diálogo de Log In</span>

          <div className="flex gap-2 justify-center">
            <Button
              text="Cerrar"
              type="secondary"
              handleClick={() => {
                setOpen(false);
              }}
            />
            <Button text="Log In" type="secondary" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { LogInDialog };

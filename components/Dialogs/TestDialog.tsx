import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { Dispatch, SetStateAction } from "react";
import { Button } from "../Button";


interface TestDialogProps{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}



const TestDialog = ({open, setOpen}: TestDialogProps) => {
  return (

    <Dialog open={open} onClose={()=>setOpen(false)} >
        <DialogTitle>
            Diálogo de Prueba
        </DialogTitle>
        <DialogContent>
            Contenido del Diálogo de Prueba
        </DialogContent>
        <Button text="Close" type="secondary" handleClick={()=>setOpen(false)}/>
    </Dialog>
  )
}

export  {TestDialog}
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Button } from "../Button";
import { Dispatch, SetStateAction } from "react";

interface PlaylistDialogProps {
    dialogOpen: boolean;
    setDialogOpen: Dispatch<SetStateAction<boolean>>;
    handlePlaylistClick: () => void;
    }


const PlaylistDialog = ({dialogOpen, setDialogOpen: setOpen, handlePlaylistClick} : PlaylistDialogProps) => {

  return (
    <Dialog open={dialogOpen} onClose={() => {setOpen(false)}}>
      <DialogTitle className="bg-mid-gray">
        <span>Diálogo de Playlist</span>
      </DialogTitle>
      <DialogContent className="bg-mid-gray">
        <div className="flex flex-col gap-2">
          <span>Contenido del Diálogo de Playlist</span>

          <div className="flex gap-2 justify-center">
            <Button text="Agregar" type="secondary" />
            <Button text="Cerrar" type="secondary" handleClick={() => {
                setOpen(false);
            }}/>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { PlaylistDialog };

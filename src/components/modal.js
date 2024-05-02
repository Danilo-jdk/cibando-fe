import React from "react";

// import per la modale
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Modal = (props) => {
  return (
    <Dialog open={props.open} onClose={props.chiudiModale}>
      <DialogTitle>
        {props.page === "home" && (
          <div>Grazie {props.user?.name} per esserti registrato</div>
        )}
        {props.page === "ricette" && <div>Ecco il nome della ricetta</div>}
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          {props.page === "home" && (
            <div>
              Ecco il riepilogo dei tuoi dati:
              <ul>
                <li>Nome: {props.user?.name}</li>
                <li>Email: {props.user?.email}</li>
              </ul>
            </div>
          )}

          {props.page === "ricette" && (
            <div>
              <h3>{props.titolo}</h3>
            </div>
          )}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        {props.page === "home" && (
          <div>
            {" "}
            <Button onClick={props.chiudiModale} autoFocus variant="contained">
              CHIUDI
            </Button>
          </div>
        )}

        {props.page === "ricette" && (
          <div>
            {" "}
            <Button onClick={props.chiudiModale} autoFocus variant="outlined">
              CHIUDI
            </Button>
          </div>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;

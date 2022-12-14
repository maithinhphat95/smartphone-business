import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteProductRequest } from "../../../../redux/common/productReducer";
import { deleteOrderRequest } from "../../../../redux/common/orderReducer";
import { toast } from "react-toastify";

DeleteDialog.propTypes = {};

function DeleteDialog(props) {
  const { id, open, onClose, category } = props;
  const dispatch = useDispatch();
  // Handle Close Dialog
  const handleClose = async () => {
    onClose();
  };
  const handleDelete = () => {
    if (category == "product") {
      dispatch(deleteProductRequest(id));
      toast("Delete Product Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // onClose();
    } else if (category == "order") {
      dispatch(deleteOrderRequest(id));
      toast("Delete Order Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // onClose();
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        onClose();
        // window.location.reload(true);
        resolve(true);
      }, 3000);
    });
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`Do you want to delete this ${category}?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          If you click the Agree button, you have to be responsible for data
          loss.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleDelete}
          autoFocus
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default DeleteDialog;

import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteProductRequest } from "../../../../redux/common/productReducer";
import {
  deleteOrderRequest,
  updateOrderRequest,
} from "../../../../redux/common/orderReducer";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";

EditDialog.propTypes = {};

function EditDialog(props) {
  const { order, open, onClose } = props;
  const [data, setData] = useState(order);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  // Handle Close Dialog
  const handleClose = async () => {
    onClose();
  };

  // Handle Error Form
  const onHandleError = (error, e) => {
    console.log(error);
  };

  // Handle Submit Form
  const onHandleSubmit = (value, e) => {
    if (value.status == "done") {
      const today = new Date().toLocaleString();
      dispatch(
        updateOrderRequest(data.id, {
          ...data,
          status: value.status,
          completeDate: today,
        })
      );
    } else {
      dispatch(
        updateOrderRequest(data.id, {
          ...data,
          status: value.status,
        })
      );
    }
    toast("Update Order Successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // onClose();

    return new Promise((resolve) => {
      setTimeout(() => {
        onClose();
        resolve(true);
      }, 2000);
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={handleSubmit(onHandleSubmit, onHandleError)}>
        <DialogTitle id="alert-dialog-title">
          Please select the status for this order
        </DialogTitle>
        <DialogContent>
          <Stack className="form-row">
            <Typography className="form-label" variant="h6">
              Status:
            </Typography>
            <select
              className="form-input-text"
              name="brand"
              style={errors.status && { borderColor: "red" }}
              defaultValue={data.status}
              {...register("status", { required: true })}
            >
              <option value="preparing">Preparing</option>
              <option value="delevering">Delevering</option>
              <option value="done">Done</option>
            </select>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success" type="submit" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default EditDialog;

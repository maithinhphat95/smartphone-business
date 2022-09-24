import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
} from "@mui/material";
import React from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
// import {LockOutlinedIcon,Copyright} from '@mui/icons-material/LockOutlined';
function Login({ handleClose }) {
  //history
  const history = useNavigate();

  //useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let arrays = JSON.parse(localStorage.getItem("user")) || [];
  //trả data là object ={}
  const onSubmit = (data) => {
    // console.log(data);
    // e.preventdefault()
    // console.log(arrays["account"]);
    // console.log(data.password);
    const checkLogin = arrays.some(
      (element) =>
        data.account === element["account"] &&
        data.password === element["password"]
    );
    if (checkLogin) {
      toast.success('Đăng nhập thành công!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      toast.error('Đăng nhập thất bại, tài khoản hoặc mật khẩu không đúng!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        return;
    }
    // fake 
    return new Promise (resolve =>{
      setTimeout(() =>{
        history("/");
        resolve(true);
      },3000)
    })
  };
  return (
    <div className="container-fluid login">
      <div className="container">
        <section className="">
          <div className="container style-container">
            <div className="card text-black">
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    {/* <LockOutlinedIcon /> */}
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  {/* component="form" */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Box noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        // required
                        fullWidth
                        id="account"
                        label="Account"
                        name="account"
                        // autoComplete="account"
                        // autoFocus
                        {...register("account", { required: true })}
                      />
                      {errors.account?.type === "required" && (
                        <p className="p-error">Mời bạn nhập Tài khoản</p>
                      )}
                      <TextField
                        margin="normal"
                        // required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        // autoComplete="current-password"
                        {...register("password", {
                          required: true,
                        })}
                      />
                      {errors.password?.type === "required" && (
                        <p className="p-error">Mời bạn nhập mật khẩu</p>
                      )}
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        // onclick={(e) =>{onSubmit(e)}}
                      >
                        Sign In
                      </Button>
                      <ToastContainer />
                      <Grid container>
                        <Grid item xs>
                          <a variant="body2">Forgot password?</a>
                        </Grid>
                        <Grid item>
                          <Link to="/register" variant="body2">
                            {"Don't have an account? Sign Up"}
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </form>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
              </Container>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;

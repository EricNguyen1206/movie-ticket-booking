import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { userRegister,userVerify } from "../../../app/reducers/Auth/userSlice";
import { verifyAccount } from "../../../app/slices/auth";

import CircularProgress from '@mui/material/CircularProgress';
import { useSearchParams, Link, useNavigate } from "react-router-dom";





const theme = createTheme();

export default function SignIn() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [verifying, setVerifying] = useState(true);
    const dispatch = useDispatch();
    let navigate = useNavigate();
  
    const tokenVerify = searchParams.get("token");
    const userEmail = searchParams.get("email")

    const { isLoading,isSuccess, message } = useSelector((state) => state.auth);


    useEffect(() => {
        if (
          (typeof tokenVerify !== "string" && !(tokenVerify instanceof String)) ||
          !userEmail
        ) {
          // navigate("/");
        } else {
          if (verifying) {
            // dispatch(userVerify({ token: tokenVerify, email: userEmail }))
           dispatch(verifyAccount({ token: tokenVerify, email: userEmail }))
          }
        }
      }, [verifying]);

      useEffect(() => {
        setVerifying(false);
        
      }, [isLoading, isSuccess]);

  return (
   
   <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      {verifying ? <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>: <>
    <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon /> 
            </Avatar>
            Lotto Cinema
            <Typography component="h1" variant="h5">
                {message}
            </Typography>
            <Box component="form"  noValidate sx={{ mt: 1 }}>
            
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                    <Link to="/"> Back to home</Link>
                </Button>
                
            </Box>
            </Box>
    </>}
      </Container>
    </ThemeProvider>
    
   
  );
}


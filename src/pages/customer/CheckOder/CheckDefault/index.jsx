import { Box, Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Fade from 'react-reveal/Fade';

function CheckDefault(props) {
    return (
        <Container maxWidth="lg">
            <Container>
            <Fade left>
                <Box className='text-center' sx={{ margin: '0 auto' }}>
                    <Typography variant='h4'>Kiểm tra đơn hàng</Typography>
                    <TextField sx={{margin:"30px 0px",display:"block"}} id="outlined-search" type="search" placeholder='Vui lòng nhập đơn hàng' />
                    <br/>
                    <Button variant="contained" color="success" size="large" endIcon={<SearchIcon />}>
        Tra cứu
      </Button>
                </Box>
                </Fade>
            </Container>
        </Container>
    );
}

export default CheckDefault;
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useContext } from 'react';
import ThemeContext from '../../../components/customer/Context/ThemeContext';


function Cart(props) {
    const {myCart} = useContext(ThemeContext);
    return (
        <Container maxWidth="xl">
            <Container>
            
                <Box className="cart-header-items text-center">
                <Typography variant='h4'>Sản phẩm trong giỏ hàng:</Typography>
                {myCart.slice(1).map((item) => {
                    {console.log(myCart)}
                    return(
                        <Box key={item.id} className="cart-items">
                            <img src={item.img} />
                            <p>{item.name}</p>
                            <p>{item.priceNew} VNĐ</p>
                            <p>{item.priceOld} VNĐ</p>
                        </Box>
                    )
                })}
                </Box>
            </Container>
        </Container>
    );
}

export default Cart;
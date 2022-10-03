import { Container } from '@mui/system';
import React from 'react';


function Cart(props) {
    return (
        <Container maxWidth="xl">
            <Container>
                <Box className="cart-items"></Box>
            </Container>
        </Container>
    );
}

export default Cart;
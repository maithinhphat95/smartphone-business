import { Container, Typography } from '@mui/material';
import React from 'react';


function TitleTogglePhone(props) {
    return (
        <Container className="title-list" sx={{ marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Điện thoại (12 sản phẩm)
        </Typography>
      </Container>
    );
}

export default TitleTogglePhone;
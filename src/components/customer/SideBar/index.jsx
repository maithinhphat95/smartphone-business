import { Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import React from 'react';


function SideBar(props) {
    return (
        <>
             <Grid item={true} xs={12} sm={6} md={3}>
              <Typography variant="h5" gutterBottom>
                Hãng sản xuất
              </Typography>
              <Grid container>
                <Grid item={true} md={6} xs={12} sm={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Tất cả"
                    />
                    <FormControlLabel control={<Checkbox />} label="Sam sung" />
                    <FormControlLabel control={<Checkbox />} label="Vivo" />
                    <FormControlLabel control={<Checkbox />} label="Xiaomi" />
                  </FormGroup>
                </Grid>
                <Grid item={true} md={6} xs={12} sm={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Apple(Iphone)"
                    />
                    <FormControlLabel control={<Checkbox />} label="Oppo" />
                    <FormControlLabel control={<Checkbox />} label="Nokia" />
                  </FormGroup>
                </Grid>
                <Grid container>
                  <FormGroup>
                    <Typography variant="h5" gutterBottom>
                      Mức giá
                    </Typography>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Tất cả"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Dưới 2 triệu"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Từ 2-4 triệu"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Từ 4-7 triệu"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Từ 7-13 triệu"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Trên 13 triệu"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </Grid>
        </>
    );
}

export default SideBar;
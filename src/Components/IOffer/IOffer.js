import React from 'react';

import { Box } from '@mui/system';
import { Container, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import { pink } from '@material-ui/core/colors';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import CodeRoundedIcon from '@material-ui/icons/Code';
import DeviceIcon from '@material-ui/icons/Devices';
import { makeStyles } from '@material-ui/core';
const theme = createTheme({
    typography: {
        h5: {
            fontFamily: "monospace",
            letterSpacing: ".3rem"
        }

    }
})
const IOffer = () => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg" sx={{ border: 1, py: 6, my: 4 }} >
                    <Typography variant="h4" component="div" sx={{ letterSpacing: 4, textAlign: "center", pb: 4 }} style={{ textDecoration: "underline", margin: "5px 5px 40px 5px" }} id="service"  >
                        What service  I offer
                    </Typography>
                    <Grid container spacing={2}  >

                        <Grid item md={4} sx={{ boxShadow: 2, py: 3, border: 1 }}  >
                            <LanguageRoundedIcon fontSize="large" />
                            <Typography variant="h5"  >
                                Web Development
                            </Typography>
                        </Grid>
                        <Grid item md={4} sx={{ boxShadow: 2, py: 3, border: 1 }}>
                            <CodeRoundedIcon fontSize="large" />
                            <Typography variant="h5" >
                                React Development
                            </Typography>
                        </Grid>
                        <Grid item md={4} sx={{ boxShadow: 2, py: 3, border: 1 }}>
                            <DeviceIcon fontSize="large" />
                            <Typography variant="h5" >
                                MERN Development
                            </Typography>
                        </Grid>

                    </Grid>

                </Container>
            </ThemeProvider>
        </>
    );
};

export default IOffer;
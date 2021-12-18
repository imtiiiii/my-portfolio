import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import Nav from './Nav/Nav';
import myPicture from '../../img/imtiazmain.jpeg'
import Typical from 'react-typical'
import { Box, display, styled } from '@mui/system';
import { blue, blueGrey, pink, red } from '@mui/material/colors';
import { cyan, indigo, lightBlue, teal } from '@material-ui/core/colors';
const styles = makeStyles((theme) => ({
    headerButtons: {
        [theme.breakpoints.down('md')]: {
            display: "flex", flexDirection: "column"
        },
        [theme.breakpoints.up('md')]: {
            display: "flex"
        },

    }

}));
const ButtonCustom = styled(Button)`
    
    &.MuiButton-root {
        color:${indigo[500]};
        background-color:${teal[300]}
      }

`


const Header = () => {
    const classes = styles();
    return (
        <div>
            <Nav></Nav>
            <Container sx={{ m: 0, p: 0, width: "100%" }} maxWidth="">
                <Grid container spacing={2}  >
                    <Grid item md={6} xs={11}>
                        <img src={myPicture}
                            alt="myPicture"
                            style={{ borderRadius: "50%" }}
                        ></img>
                    </Grid>
                    <Grid item md={6} xs={11}>
                        <h1>Hey there , I'm </h1>
                        <Typography component="div" sx={{ fontSize: 30 }}>
                            Imtiaz Ahmed
                        </Typography>
                        <Box sx={{ fontSize: 40, letterSpacing: 5, color: "#673ab7" }}>
                            <Typical
                                steps={['WEB DEVELOPER', 1000, 'FRONTEND DEVELOPER', 1000, 'REACT DEVELOPER', 1000]}
                                loop={Infinity}
                            />
                        </Box>
                        <Box className={classes.headerButtons}>
                            <Box component="div">
                                <a href='#contact' style={{ textDecoration: "none" }}>
                                    <ButtonCustom variant="contained" sx={{ m: 2, boxShadow: 2 }}>Hire me</ButtonCustom>
                                </a>
                            </Box>
                            <Box>
                                <a href="https://drive.google.com/file/d/1GQaxLJ2gPI8NKuLqs3qoV82DfljC2llX/view?usp=sharing" style={{ textDecoration: "none" }}>
                                    <Button variant="outlined" sx={{ m: 2 }}>Resume</Button>
                                </a>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>

            </Container>
        </div>
    );
};

export default Header;
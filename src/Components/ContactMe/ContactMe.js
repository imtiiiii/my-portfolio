import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import { LinkedIn } from '@material-ui/icons';
import { Email, Call, Share } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';
const ContactMe = () => {
    return (
        <>
            <Typography variant="h3" component="div" sx={{ textAlign: "center", letterSpacing: 4, my: 5 }}>
                Contact Me-
            </Typography>
            <Grid container spacing={5}>
                <Grid item md={4} >
                    <Box sx={{ my: 10 }}>
                        <Paper elevation={3} style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} sx={{ bgcolor: green.A400 }}>
                            <Box sx={{ textAlign: "center" }}>
                                <Email> </Email>
                            </Box>
                            <Box sx={{ textAlign: "center" }} >
                                Email: <a href='mailto:imtiazahmed026@gmail.com' style={{ color: "black" }}>imtiazahmed026@gmail.com</a>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <Box sx={{ my: 10 }}>
                        <Paper elevation={3} style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} sx={{ bgcolor: green.A400 }} >
                            <Box sx={{ textAlign: "center" }}>
                                <Call></Call>
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                Phone Number :+8801794705874
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <Box sx={{ my: 10 }}>
                        <Paper elevation={3} style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} sx={{ bgcolor: green.A400 }}>
                            <Box sx={{ textAlign: "center" }}>
                                <Share></Share>
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                Social media: <br></br>
                                <a href="https://www.facebook.com/imtiiiiii" style={{ color: "black" }}>
                                    <FacebookIcon></FacebookIcon>
                                </a>
                                <a href="https://github.com/imtiiiii" style={{ color: "black" }} >
                                    <GithubIcon></GithubIcon>
                                </a>
                                <a href='https://www.linkedin.com/in/imtiaz-ahmed-33b147225/' style={{ color: "black" }}>
                                    <LinkedIn></LinkedIn>
                                </a>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>

        </>
    );
};

export default ContactMe;
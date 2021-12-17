import { createTheme, LinearProgress, makeStyles, Typography, ThemeProvider, styled, } from '@material-ui/core';
import { grey, indigo, purple, red, teal } from '@material-ui/core/colors';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { linearProgressClasses, Container, } from '@mui/material';
import { Divider } from '@mui/material';
const theme = createTheme({
    palette: {
        primary: {
            main: teal[300]
        },
        secondary: {
            main: red[500]
        }

    }
})

const styles = makeStyles((theme) => ({
    aboutMeHr: {
        width: "05%",
        backgroundColor: "red",
        height: "4px",

    },
    headLine: {
        textAlign: "center", letterSpacing: 3, marginBottom: "20px", marginTop: "20px"
    },
    container: {
        border: 2
    },
    progressBar: {
        color: theme.palette.primary.main, borderRadius: 4,

    },
    skills: {
        letterSpacing: 2,
        marginTop: 25, marginBottom: 30
    },
    skillBar: {

    }






}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    borderRadius: 5, height: 12, width: "90%",
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 10,
        '&:hover': {
            backgroundColor: indigo[300]
        }

    },


}))





const AboutMe = () => {
    const classes = styles();
    const cpp = 80;
    const cp = 70;
    const DSA = 55;
    const htmlcss = 80;
    const js = 75;
    const react = 70;
    const CRUD = 80;

    return (
        <>
            <ThemeProvider theme={theme}>
                {/* <hr className={classes.aboutMeHr}></hr> */}

                <Typography variant="h4" component="div" sx={{ mt: 3 }} className={classes.headLine}>Learn About Me</Typography>
                <Container className={classes.container}>
                    <Typography variant="h6" component="div">
                        I started my programming journey with competitive programming solving 500+ problems in various online platforms and
                        participating in online and offline  programming contests. Then I switched to developing field and started to learn basic of web development with html, Css and
                        JavaScript. After that I did some projects with technologies like React, Mongodb, express and node.
                    </Typography>
                    <Container maxWidth="xxl" sx={{ my: 10, boxShadow: 0, p: 5 }} id="aboutme">

                        <Typography variant="h5" component="div" className={classes.skills}  >
                            Problem solving:
                            <BorderLinearProgress variant="determinate" value={cp} />
                        </Typography>
                        <Typography variant="h5" component="div" className={classes.skills} >
                            Data Structure and Algo:
                            <BorderLinearProgress variant="determinate" value={DSA} />
                        </Typography>

                        <Typography variant="h5" component="div" className={classes.skills}>
                            Html and Css:
                            <BorderLinearProgress variant="determinate" value={htmlcss} />
                        </Typography>
                        <Typography variant="h5" component="div" className={classes.skills}>
                            JavaScript:
                            <BorderLinearProgress variant="determinate" value={js} />
                        </Typography>
                        <Typography variant="h5" component="div" className={classes.skills}>
                            React basic:
                            <BorderLinearProgress variant="determinate" value={react} />
                        </Typography>

                        <Typography variant="h5" component="div" className={classes.skills}>
                            CRUD operations(Mongodb node express):
                            <BorderLinearProgress variant="determinate" value={CRUD} />
                        </Typography>
                    </Container>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default AboutMe;
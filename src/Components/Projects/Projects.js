import React from 'react';
import { Container, Typography } from '@mui/material';
import { purple, red } from '@material-ui/core/colors';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import fastwatch from '../../img/fastwatch.png'
import travelland from '../../img/travelland.png'
import doconlie from '../../img/doconline.png'
const Projects = () => {
    return (
        <>
            <Container sx={{ my: 20, py: 4, border: 3 }} maxWidth="">
                <Typography variant="h2" component="div" sx={{ letterSpacing: 15, textAlign: "center" }} id="projects">
                    Projects
                </Typography>
                <Grid container spacing={2} sx={{ my: 8 }} >
                    <Grid item md={4}>
                        <Box>
                            <img src={fastwatch} alt="fastwatch" width="100%"></img>
                            <Typography variant="h5" component="div" sx={{ letterSpacing: 4, textAlign: "center", bgcolor: purple[200], py: 2 }}
                                style={{ opacity: "0.8", marginTop: "-29px" }}
                            >
                                <a href="https://fast-watch-imtiaz-mern.netlify.app/"> Fast Watch</a>
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box>
                            <img src={travelland} alt="travelland" width="100%"></img>
                            <Typography variant="h5" component="div" sx={{ letterSpacing: 4, textAlign: "center", bgcolor: purple[200], py: 2 }}
                                style={{ opacity: "0.8", marginTop: "-30px" }}>
                                <a href="https://travel-land-imtiaz-full-stack-mern.netlify.app/">Travel Land</a>
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box>
                            <img src={doconlie} alt="travelland" width="100%"></img>
                            <Typography variant="h5" component="div" sx={{ letterSpacing: 4, textAlign: "center", bgcolor: purple[200], py: 2 }}
                                style={{ opacity: "0.8", marginTop: "-30px" }}>
                                <a href="https://doc-online-imtiaz-react.netlify.app/">Doc Online</a>
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>

            </Container>

        </>
    );
};

export default Projects;
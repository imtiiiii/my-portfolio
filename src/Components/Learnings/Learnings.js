import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { blueGrey, red } from '@mui/material/colors';
import { Warning } from '@material-ui/icons';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from '@mui/system';

const CustomLineDot = styled(TimelineDot, {})`  
    background-color: #673ab7;
    padding:6px;
`;
const TimelineConnectorCustom = styled(TimelineConnector, {})`
    background-color:black;
    
`;



const Learnings = () => {
    return (
        <>

            <Typography variant="h2" component='div' sx={{ textAlign: "center" }} id="timeline">My Learnings Timeline</Typography>
            <Container sx={{ my: 10, boxShadow: 2, borderRadius: 1, p: 3 }} maxWidth="lg" style={{ height: "1000px" }}>
                <Timeline position="alternate">
                    <Box >
                        <TimelineItem style={{ height: "200px", marginBottom: "10px" }}>

                            <TimelineOppositeContent style={{ fontSize: "20px", marginTop: "-5px" }} >
                                2019-2021
                            </TimelineOppositeContent>
                            <TimelineSeparator  >
                                <CustomLineDot />
                                <TimelineConnectorCustom />
                            </TimelineSeparator>

                            <TimelineContent style={{ fontWeight: "bold", fontSize: "20px" }}>
                                Problem Solving with C++
                            </TimelineContent>

                        </TimelineItem>
                    </Box>
                    <Box >
                        <TimelineItem style={{ height: "200px", marginBottom: "5px" }}>
                            <TimelineOppositeContent style={{ fontWeight: "bold", fontSize: "20px" }}>
                                Learned HTML and CSS from Udemy Course
                            </TimelineOppositeContent>
                            <TimelineSeparator >
                                <CustomLineDot />
                                <TimelineConnectorCustom />
                            </TimelineSeparator>

                            <TimelineContent style={{ fontSize: "20px" }}>
                                2021-2021
                            </TimelineContent>
                        </TimelineItem>
                    </Box>
                    <Box >
                        <TimelineItem style={{ height: "200px", marginBottom: "5px" }}>
                            <TimelineOppositeContent style={{ fontSize: "20px" }}>
                                2021-2021
                            </TimelineOppositeContent>
                            <TimelineSeparator >
                                <CustomLineDot />
                                <TimelineConnectorCustom />
                            </TimelineSeparator>

                            <TimelineContent style={{ fontWeight: "bold", fontSize: "20px" }}>Completed Programming Hero course of Web development</TimelineContent>
                        </TimelineItem>
                    </Box>
                    <Box >
                        <TimelineItem style={{ height: "300px", marginBottom: "5px" }}>
                            <TimelineOppositeContent style={{ fontWeight: "bold", fontSize: "20px" }}>
                                <Box sx={{}}>
                                    Did few Projects  with technoligies  including  Mongodb, Express, React, Node
                                </Box>
                            </TimelineOppositeContent>

                            <TimelineSeparator >
                                <CustomLineDot />
                                <TimelineConnectorCustom />
                            </TimelineSeparator>

                            <TimelineContent style={{ fontSize: "20px" }}>
                                2021-Present
                            </TimelineContent>
                        </TimelineItem>
                    </Box>


                </Timeline>

            </Container>


        </>
    );
};

export default Learnings;
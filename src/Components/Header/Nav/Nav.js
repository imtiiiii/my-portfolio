import React, { useState } from 'react';
import { Button, Container, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { blueGrey, grey, lime, red } from '@mui/material/colors';
import MenuIcon from '@material-ui/icons/Menu'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/Inbox'
import { Box } from '@mui/system';
import { styled, useTheme } from '@mui/material/styles';

import MuiAppBar from '@mui/material/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { indigo, purple } from '@material-ui/core/colors';

const drawerWidth = 300;

const useStyle = makeStyles({
    sliderList: {
        backgroundColor: `${indigo[100]}`, height: "100%"
    }
})
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(1),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const Nav = () => {
    const classes = useStyle();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} sx={{ backgroundColor: `${purple[50]}`, boxShadow: 0 }}>
                    <Toolbar>
                        <Typography variant="h4" noWrap sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 6, color: "black" }} component="div">
                            Portfolio
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            sx={{ ...(open && { display: 'none', fontWeight: "bold" }) }}
                            style={{ color: "black" }}
                        >
                            <MenuIcon sx={{ backgroundColor: `${blueGrey[900]}` }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Main open={open}


                >
                    <DrawerHeader />

                </Main>
                <Drawer
                    sx={{
                        width: drawerWidth,

                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                        },
                    }}

                    variant="persistent"
                    anchor="right"
                    open={open}
                >
                    <DrawerHeader sx={{ backgroundColor: `${indigo[100]}` }}>
                        <IconButton onClick={handleDrawerClose} style={{ backgroundColor: "whitesmoke" }} >
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    {/* <Divider sx={{ border: 1, borderColor: `${grey[900]}` }}></Divider> */}
                    <List className={classes.sliderList} >
                        <Container sx={{ border: 1, borderRadius: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Typography variant="body1" component="div" sx={{ my: 2, fontWeight: 500 }} >
                                <a href="#aboutme" style={{ textDecoration: "none", color: "black" }}>About Me</a>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ my: 2, fontWeight: 500 }} >
                                <a href="#service" style={{ textDecoration: "none", color: "black" }}>Services</a>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ my: 2, fontWeight: 500 }} >
                                <a href="#projects" style={{ textDecoration: "none", color: "black" }}>Projects</a>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ my: 2, fontWeight: 500 }} >
                                <a href="#timeline" style={{ textDecoration: "none", color: "black" }}>Learnings</a>
                            </Typography>
                        </Container>

                    </List>


                </Drawer>
            </Box>
        </>
    );
};

export default Nav;
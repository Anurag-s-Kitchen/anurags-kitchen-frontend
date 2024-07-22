import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import AkLogo from '../../assets/AK-logo.png';
import { Avatar } from '@mui/material';

const logoStyle = {
    margin: '5px',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    border: 'none'
};

const menuList = [
    // {
    //     key: 1,
    //     title: "Order Batter",
    //     path: "/order/batter",
    //     drawer: true,
    //     appBar: true
    // },
    // {
    //     key: 2,
    //     title: "Weekend Menu",
    //     path: "/order/weekend-menu"
    // },
    {
        key: 5,
        title: "Home",
        path: "/home",
        drawer: true,
        appBar: true
    },
    {
        key: 4,
        title: "Gallery",
        path: "/gallery",
        drawer: true,
        appBar: true
    },
    {
        key: 3,
        title: "Contact Us",
        path: "/contact-us",
        drawer: true,
        appBar: true
    }
]

function Header() {

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        console.log("newOpen");
        setOpen(newOpen);
    };

    function drawerClickHandler(path: string): void {

        toggleDrawer(false)();
        navigate(path);
    }

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 3,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}
                        >
                            <Avatar
                                // src={AkLogo}
                                style={logoStyle}
                                alt="logo of sitemark"
                                component={"button"}
                                onClick={() => navigate("/home")}
                            >

                                <img style={{ width: '65px' }} src={AkLogo} />
                            </Avatar>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                                {
                                    menuList.map((menuItem) =>
                                    (menuItem.appBar ? (
                                        <MenuItem key={menuItem.key}
                                            onClick={() => navigate(menuItem.path)}
                                            sx={{ py: '6px', px: '12px' }}
                                        >
                                            <Typography variant="body2" color="text.primary">
                                                {menuItem.title}
                                            </Typography>
                                        </MenuItem>
                                    ) : null)
                                    )
                                }

                            </Box>
                        </Box>
                        {/* <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            <Button
                                color="primary"
                                variant="text"
                                size="small"
                                component="a"
                                onClick={() => { navigate("/login") }}
                                target="_blank"
                            >
                                Login
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                size="small"
                                component="a"
                                onClick={() => { navigate("/register") }}
                                target="_blank"
                            >
                                Register
                            </Button>
                        </Box> */}
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                        }}
                                    >
                                    </Box>

                                    {
                                        menuList.map((menuItem) =>
                                        (menuItem.drawer ? (
                                            <MenuItem key={menuItem.key} onClick={() => drawerClickHandler(menuItem.path)}>
                                                {menuItem.title}
                                            </MenuItem>
                                        ) : null)
                                        )
                                    }

                                    <Divider />

                                    {/* <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            component="a"
                                            onClick={() => drawerClickHandler("/login")}
                                            target="_blank"
                                            sx={{ width: '100%' }}
                                        >
                                            Login
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="outlined"
                                            component="a"
                                            onClick={() => drawerClickHandler("/register")}
                                            target="_blank"
                                            sx={{ width: '100%' }}
                                        >
                                            Register
                                        </Button>
                                    </MenuItem> */}
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ScrollTop from "./ScrollTop";
import HideOnScroll from "./HideOnScroll";
import { setUser } from "../../modules/userLogin";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Tooltip,
    MenuItem,
    Fab,
    CssBaseline
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import background from "../../assets/bg2.jpeg";
import finalLogo from "../../assets/finalLogo.png";
import logohat from "../../assets/hatYess.png";

const styles = {
    "&.MuiFab-secondary": {
        backgroundColor: "#897A5F",
    },
};

const pages = [
    {
        text: "텍스트검색",
        path: "/result"
    },
    {
        text: "어바웃",
        path: "/about"
    }
];

const notLoggedIn = [
    {
        text: "회원가입",
        path: "register/termsNConditions",
    },
    {
        text: "로그인",
        path: "/login",
    },
];
interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

const Header = (props: Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [logCheck, setLogCheck] = useState<boolean>(false);
    const refreshTkn = sessionStorage.getItem("usrRfshTkn");
    const accessTkn = sessionStorage.getItem("usrAcsTkn");
    const nickname = sessionStorage.getItem("nickname");
    const user_img = sessionStorage.getItem("img");

    /**
     * 로그인했을 때와 하지 않았을 때에
     * 보여주는 헤더바가 다르기 때문에
     * 세션스토리지에 리프레쉬 토큰이 저장돼있는지를 통해
     * 로그인 여부를 판별한다
     */ 
    useEffect(() => {
        if (refreshTkn) {
            setLogCheck(true);
            setAnchorElUser(null);
        } else {
            setLogCheck(false);
        }
    }, [refreshTkn]);

    const handleLogout = async () => {
        await axios.delete("/api/auth/logout", {
            headers: {
                Authorization: "Bearer " + accessTkn,
            },
        });
    };

    const handleLog = () => {
        handleLogout();
        sessionStorage.clear();
        dispatch(setUser());
        navigate("/");
    };

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const loggedIn = [
        {
            text: "마이페이지",
            path: "/mypage",
            func: handleCloseUserMenu,
        },
        {
            text: "로그아웃",
            path: "/",
            func: handleLog,
        },
    ];

    return (
        <>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundImage: `url(${background})`,
                        height: "5rem",
                    }}
                >
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    mr: 2,
                                    display: { xs: "none", md: "flex" },
                                }}
                                onClick={() => navigate("/")}
                            >
                                <img
                                    src={logohat}
                                    style={{
                                        height: "3rem",
                                        cursor: "pointer",
                                        margin: "1rem",
                                        marginTop: "1rem",
                                    }}
                                    alt="main logo"
                                />
                            </Typography>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "flex", md: "none" },
                                }}
                            >
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: "block", md: "none" },
                                    }}
                                >
                                    {pages.map((page, index) => (
                                        <MenuItem
                                            key={index}
                                            onClick={() => {
                                                handleCloseNavMenu();
                                                navigate(`${page.path}`);
                                            }}
                                        >
                                            <Typography
                                                textAlign="center"
                                                sx={{ fontFamily: "Elice" }}
                                            >
                                                {page.text}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "flex", md: "none" },
                                }}
                            >
                                <img
                                    src={finalLogo}
                                    style={{
                                        height: "40px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => navigate("/")}
                                    alt="main logo"
                                />
                            </Typography>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", md: "flex" },
                                }}
                            >
                                {pages.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => {
                                            handleCloseNavMenu();
                                            navigate(`${item.path}`);
                                        }}
                                    >
                                        <Typography
                                            textAlign="center"
                                            sx={{
                                                color: "#897A5F",
                                                fontSize: "1.2em",
                                                fontFamily: "EliceBold",
                                                fontWeight: "800",
                                            }}
                                        >
                                            {item.text}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Box>
                            {logCheck ? (
                                <>
                                    <Box sx={{ marginRight: "20px" }}>
                                        <Typography
                                            sx={{
                                                color: "#897A5F",
                                                fontSize: "1rem",
                                                fontFamily: "EliceBold",
                                                fontWeight: "800",
                                            }}
                                        >
                                            {`${nickname}`}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ flexGrow: 0 }}>
                                        <Tooltip
                                            title={
                                                <Typography
                                                    sx={{ fontFamily: "Elice" }}
                                                >
                                                    {`${nickname}님 반가워요!`}
                                                </Typography>
                                            }
                                        >
                                            <IconButton
                                                onClick={handleOpenUserMenu}
                                                sx={{ p: 0 }}
                                            >
                                                {user_img && (
                                                    <Avatar
                                                        alt="profile image on the header bar"
                                                        src={user_img}
                                                    />
                                                )}
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            sx={{ mt: "45px" }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: "top",
                                                horizontal: "right",
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: "top",
                                                horizontal: "right",
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            {loggedIn.map((item, index) => (
                                                <MenuItem
                                                    key={index}
                                                    onClick={() => {
                                                        item.func();
                                                        navigate(
                                                            `${item.path}`
                                                        );
                                                    }}
                                                >
                                                    <Typography
                                                        textAlign="center"
                                                        sx={{
                                                            color: "#897A5F",
                                                            fontFamily: "Elice",
                                                        }}
                                                    >
                                                        {item.text}
                                                    </Typography>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Box>
                                </>
                            ) : (
                                notLoggedIn.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => {
                                            handleCloseNavMenu();
                                            navigate(`${item.path}`);
                                        }}
                                    >
                                        <Typography
                                            textAlign="center"
                                            sx={{
                                                color: "#897A5F",
                                                fontSize: "1.2rem",
                                                fontFamily: "EliceBold",
                                                fontWeight: "800",
                                            }}
                                        >
                                            {item.text}
                                        </Typography>
                                    </MenuItem>
                                ))
                            )}
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab
                    color="secondary"
                    size="small"
                    aria-label="scroll back to top"
                    sx={styles}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    );
};

export default Header;

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { ListItemIcon } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

const drawerWidth = 240;
const navItems = [
  { name: "Home", route: "/", icon: <HomeIcon /> },
  { name: "Orders", route: "/orders" , icon:<ViewQuiltIcon/> },
  { name: "Account", route: "/account" , icon:<PersonIcon/> },
  { name: "Cart", route: "/cart" , icon:<ShoppingCartIcon/> },
  { name: "About", route: "/about" , icon: <StoreIcon/> },
];

function CustomAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/">
        <Typography variant="h6" sx={{ my: 2 }}>
          <img
            height="30px"
            src={process.env.PUBLIC_URL + "/images/logo3.png"}
            alt="logo"
          />
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item.name} className="react-link" to={item.route}>
            <ListItem  disablePadding>
              <ListItemButton className="text-start">
                <ListItemIcon> {item.icon} </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <header>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          style={{ background: "radial-gradient(white,lightgrey)" }}
          className="navbar-custom"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <Typography variant="h6" component="div">
                <img
                  height="30px"
                  src={process.env.PUBLIC_URL + "/images/logo3.png"}
                  alt="logo"
                />
              </Typography>
            </Link>
            <Search
              className="search-bar"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIconWrapper style={{ display: "inline-flex" }}>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Link
                  to={item.route}
                  className="react-link navbar-link"
                  key={item.name}
                  sx={{ color: "grey" }}
                >
                  {item.name}
                </Link>
              ))}
            </Box>
            <Box className="cart-icon">
              <Link className="react-link" style={{ color: "grey" }} to="/cart">
                <ShoppingCartIcon />
              </Link>
            </Box>
          </Toolbar>
          <Search
            className="search-bar"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper style={{ display: "inline-flex" }}>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </AppBar>

        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </header>
  );
}

CustomAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default CustomAppBar;

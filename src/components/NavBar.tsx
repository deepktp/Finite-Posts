import { AppBar, Box, Badge, Menu, Toolbar, Typography, styled, InputBase, Avatar, MenuItem } from "@mui/material";
import { Chat, Mail, NotificationsActive } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',

});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "50%"

}))

const Icons = styled((Box))(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    }
}))

const UserBox = styled((Box))(({ theme }) => ({
    display: "none",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        display: "flex",
    }

}))
const NavBar = () => {

    const [topMenuOpen, setTopMenuOpen] = useState<boolean>(false);
    const [topMenuAnchorEl, setTopMenuAnchorEl] = useState<null | HTMLElement>(null);
    return (
        <>
            <AppBar position="sticky" sx={{height: "9vh"}}>
                <StyledToolbar>
                    <Typography variant="h6" component="div" sx={{ display: { xs: "none", sm: "block" } }}>Finite Chats</Typography>
                    <Chat sx={{ display: { xs: "block", sm: "none" } }} />
                    <Search ><InputBase placeholder="search..." /> </Search>
                    <Icons>
                        <Badge badgeContent={4} color="error">
                            <Mail />
                        </Badge>
                        <Badge badgeContent={1} color="error">
                            <NotificationsActive />
                        </Badge>
                        <Avatar 
                            sx={{ width: "30px", height: "30px" }} 
                            src="https://i.pravatar.cc/150?img=45" 
                            onClick= {(e) => {setTopMenuOpen(true); setTopMenuAnchorEl(e.currentTarget)}}
                        />
                    </Icons>
                            
                    <UserBox onClick= {(e) => {setTopMenuOpen(true); setTopMenuAnchorEl(e.currentTarget)}}>
                        <Avatar 
                            sx={{ width: "30px", height: "30px" }} 
                            src="https://i.pravatar.cc/150?img=45" 
                            />
                    </UserBox>
                </StyledToolbar>
                <Menu
                    id="menu-appbar"
                    anchorEl={topMenuAnchorEl}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    open={topMenuOpen}
                    onClose={() => setTopMenuOpen(false)}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </AppBar>
        </>
    );
}

export default NavBar;
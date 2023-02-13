import { Box, AvatarGroup, Avatar, Typography, ImageList, ImageListItem, ListItemButton, List, Divider, ListItemAvatar, ListItemText, styled, useMediaQuery } from "@mui/material";
const StyledListItem = styled((ListItemButton))((theme) => ({
    maxHeight: "60px",
    overflow: "hidden",
    alignItems: "flex-start",
    margin: "10px auto"
}))

const StyledBox= styled((Box))(({theme})=>({

    [theme.breakpoints.down("md")]: {
        position: "absolute",
        top: "9vh",
        right: "0",
        width: "85%",
        height: "100%",
        backgroundColor: "white",
        zIndex: "999"
    },


}))

const RightBar = ({rightBarStatus}: {rightBarStatus: boolean}) => {

    const isMobile = useMediaQuery('(max-width:900px)');
    return (
        <>
            <StyledBox flex= {2} p= {1} 
                style={{ display: isMobile ? (rightBarStatus? "block" : "none") : 'block' }}
                sx={{ maxHeight: "91vh", overflow: "auto"}}
                >
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.secondary", mb: 1 }}>Your Friends</Typography>
                <AvatarGroup max={6} sx={{ justifyContent: "center" }}>
                    <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=1" />
                    <Avatar alt="Travis Howard" src="https://i.pravatar.cc/150?img=2" />
                    <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=3" />
                    <Avatar alt="Agnes Walker" src="https://i.pravatar.cc/150?img=4" />
                    <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?img=5" />
                    <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?img=6" />
                    <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?img=7" />
                    <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?img=8" />
                    <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?img=9" />
                    <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?img=10" />
                </AvatarGroup>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.secondary", mt: 2, mb: 1 }}>Your Media</Typography>
                <ImageList sx={{ width: "100%", height: 105 }} cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src="/a.jpg"
                            srcSet="/a.jpg"
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="/b.jpg"
                            srcSet="/b.jpg"
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="/a.jpg"
                            srcSet="/a.jpg"
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.secondary", mt: 2, mb: 1 }}>Messages</Typography>
                <List sx={{ width: "100%", height: "275px", overflow: "auto" }}>
                    <StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=4" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Friend A"
                            secondary="Some Alien Language Message From Friend A"
                            primaryTypographyProps={{ sx: { maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis" } }}
                        />
                    </StyledListItem>
                    <Divider variant="inset" component="li" />
                    <StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=5" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Friend B"
                            secondary="Some Alien Language Message From Friend B"
                            primaryTypographyProps={{ sx: { maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis" } }}
                        />
                    </StyledListItem>
                    <Divider variant="inset" component="li" />
                    <StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=25" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Friend C"
                            secondary="Some Alien Language Message From Friend C"
                            primaryTypographyProps={{ sx: { maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis" } }}
                        />
                    </StyledListItem>
                    <Divider variant="inset" component="li" />
                    <StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=15" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Friend D"
                            secondary="Some Alien Language Message From Friend D"
                            primaryTypographyProps={{ sx: { maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis" } }}
                        />
                    </StyledListItem>

                </List>
            </StyledBox>
        </>
    );
}

export default RightBar;
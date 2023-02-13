import { Avatar, Box, List, ListItemButton, ListItemAvatar, ListItemText, styled, useMediaQuery } from "@mui/material";

const StyledListItem= styled((ListItemButton))((theme)=>({
    maxHeight: "60px",
    overflow: "hidden",
    alignItems: "flex-start",
    margin: "10px auto"
}))

const StyledBox= styled((Box))(({theme})=>({

    [theme.breakpoints.down("sm")]: {
        position: "absolute",
        top: "9vh",
        left: "0",
        width: "85%",
        height: "100%",
        backgroundColor: "white",
        zIndex: "1000"
    },


}))

const SideBar = ({sideBarStatus}:{sideBarStatus: boolean}) => {
    const isMobile = useMediaQuery("(max-width: 600px)");


    return ( 
        <>
            
            <StyledBox flex= {2} p= {1} 
                style={{ display: isMobile ? (sideBarStatus? "block" : "none") : 'block' }}
                sx={{ maxHeight: "91vh", overflow: "auto"}}
                >
                <List>
                <StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=45"/>    
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Group AAAAAAA" 
                            secondary="dsfsdfsd sl lf nas as;f nsf slmf"
                            primaryTypographyProps={{sx: {maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis"}}}    
                        />
                    </StyledListItem><StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=45"/>    
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Group AAAAAAA" 
                            secondary="dsfsdfsd sl lf nas as;f nsf slmf"
                            primaryTypographyProps={{sx: {maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis"}}}    
                        />
                    </StyledListItem><StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=45"/>    
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Group AAAAAAA" 
                            secondary="dsfsdfsd sl lf nas as;f nsf slmf"
                            primaryTypographyProps={{sx: {maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis"}}}    
                        />
                    </StyledListItem><StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=45"/>    
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Group AAAAAAA" 
                            secondary="dsfsdfsd sl lf nas as;f nsf slmf"
                            primaryTypographyProps={{sx: {maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis"}}}    
                        />
                    </StyledListItem><StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=45"/>    
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Group AAAAAAA" 
                            secondary="dsfsdfsd sl lf nas as;f nsf slmf"
                            primaryTypographyProps={{sx: {maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis"}}}    
                        />
                    </StyledListItem><StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=45"/>    
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Group AAAAAAA" 
                            secondary="dsfsdfsd sl lf nas as;f nsf slmf"
                            primaryTypographyProps={{sx: {maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis"}}}    
                        />
                    </StyledListItem><StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=45"/>    
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Group AAAAAAA" 
                            secondary="dsfsdfsd sl lf nas as;f nsf slmf"
                            primaryTypographyProps={{sx: {maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis"}}}    
                        />
                    </StyledListItem><StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=45"/>    
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Group AAAAAAA" 
                            secondary="dsfsdfsd sl lf nas as;f nsf slmf"
                            primaryTypographyProps={{sx: {maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis"}}}    
                        />
                    </StyledListItem><StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=45"/>    
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Group AAAAAAA" 
                            secondary="dsfsdfsd sl lf nas as;f nsf slmf"
                            primaryTypographyProps={{sx: {maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis"}}}    
                        />
                    </StyledListItem><StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=45"/>    
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Group AAAAAAA" 
                            secondary="dsfsdfsd sl lf nas as;f nsf slmf"
                            primaryTypographyProps={{sx: {maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis"}}}    
                        />
                    </StyledListItem><StyledListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=45"/>    
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Group AAAAAAA" 
                            secondary="dsfsdfsd sl lf nas as;f nsf slmf"
                            primaryTypographyProps={{sx: {maxHeight: "25px", overflow: "hidden", textOverflow: "ellipsis"}}}    
                        />
                    </StyledListItem>
                    
                </List>
            </StyledBox>
        </>
     );
}
 
export default SideBar;
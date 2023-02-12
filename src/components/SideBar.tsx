import { Avatar, Box, List, ListItemButton, ListItemAvatar, ListItemText, styled } from "@mui/material";

const StyledListItem= styled((ListItemButton))((theme)=>({
    maxHeight: "60px",
    overflow: "hidden",
    alignItems: "flex-start",
    margin: "10px auto"
}))


const SideBar = () => {
    return ( 
        <>
            <Box flex= {2} p= {1} 
                sx={{display: { xs: "none", sm: "block"}, maxHeight: "91vh", overflow: "auto"}}>
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
            </Box>
        </>
     );
}
 
export default SideBar;
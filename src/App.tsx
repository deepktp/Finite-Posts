import { Box, Stack } from "@mui/system";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";


function App() {
    
  

  return (
    <>
       <Box>
          <NavBar />
          <Stack direction="row" justify-content="space-between">
            <SideBar />
            <Feed />
            <RightBar />
          </Stack>
       </Box>
    </>
  );
}

export default App;

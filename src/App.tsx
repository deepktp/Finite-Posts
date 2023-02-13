import { useState } from "react";
import { Box, Stack } from "@mui/system";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";


function App() {
    
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [showRightBar, setRightBar] = useState<boolean>(false);

  return (
    <>
       <Box>
          <NavBar setSideBar= {setShowSideBar} sideBarStatus={showSideBar} setRightBar= {setRightBar} rightBarStatus= {showRightBar} />
          <Stack direction="row" justify-content="space-between">
            <SideBar sideBarStatus={showSideBar} />
            <Feed />
            <RightBar rightBarStatus={showRightBar} />
          </Stack>
       </Box>
    </>
  );
}

export default App;

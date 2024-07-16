import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar,styled,Box } from "@mui/material";

const Component=styled(Box)`
height:100vh;
background:#DCDCDC;
opacity:1;
`

const Header=styled(AppBar)`
background-color:#00bfa5;
height:220px;
box-shadow:none
`

const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar>
        
        </Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
};
export default Messenger;

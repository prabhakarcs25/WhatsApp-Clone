import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar,styled } from "@mui/material";


const Header=styled(AppBar)`
background-color:#00bfa5;
height:220px;
box-shadow:none
`

const Messenger = () => {
  return (
    <>
      <Header>
        <Toolbar>
        
        </Toolbar>
      </Header>
      <LoginDialog />
    </>
  );
};
export default Messenger;

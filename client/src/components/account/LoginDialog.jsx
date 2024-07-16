import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";



const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 35px;
`;
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const QrCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const DialogStyled = {
  height: "96%",
  marginTop: "10%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  opacity: "0.9",
};

const LoginDialog = () => {
  const onLoginSuccess = (res) => {

    const jwt_DecodeResult=jwtDecode(res.credential)
    console.log(jwt_DecodeResult)
  };

  const onLoginError = (res) => {
    console.log("Error in page", res)
  };

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: DialogStyled }}>
        <Component>
          <Container>
            <Title> Use WhatsApp on your computer</Title>
            <StyledList>
              <ListItem>1. Tap Menu on Android, or Setting on iPhone</ListItem>
              <ListItem>2. Tap Linked Device and Linked the Device</ListItem>
              <ListItem>3. Open WhatsApp on your Phone</ListItem>
            </StyledList>
          </Container>
          <Box style={{ position: "relative" }}>
            <QrCode src={qrCodeImage} alt="Qr Code Img" />
            <Box
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateX(18%)",
              }}
            >
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </>
  );
};
export default LoginDialog;

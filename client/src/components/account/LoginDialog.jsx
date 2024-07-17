import {
  Dialog,
  Box,
  Typography,
  List,
  ListItem,
  styled,
  Button,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import logo1 from "../../constants/logo1.png";
import Divider from "@mui/material/Divider";

const UpperLayer = styled(Box)`
  height: 100px;
  border-radius: 5px;
  width: 80%;
  border: 2px solid #dcdcdc;
  margin-top: 40px;
  transform: translateX(13%);
`;
const UpperLayerimg = styled("img")({
  height: 80,
  padding: "13px 0 0 25px",
});

const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 32px 0 56px 56px;
`;

const Title = styled(Typography)`
  font-size: 28px;
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
    line-height: 30px;
    color: #4a4a4a;
  }
`;

const QrCode = styled("img")({
  height: 270,
  width: 280,
  margin: "30px 0 0 150px",
});

const DialogStyled = {
  height: "96%",
  marginTop: "12.5%",
  width: "65%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  // overflow: "hidden",
  opacity: "0.9",
};

const LoginDialog = () => {
  const onLoginSuccess = (res) => {
    const jwt_DecodeResult = jwtDecode(res.credential);
    console.log(jwt_DecodeResult);
  };

  const onLoginError = (res) => {
    console.log("Error in page", res);
  };

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: DialogStyled }}>
        <UpperLayer>
          <Box style={{ display: "flex" }}>
            <UpperLayerimg src={logo1} alt="logo1 with upperLayer" />
            <Box>
              <Typography
                style={{
                  margin: "30px 0 0 10px",
                  fontFamily: "revert",
                  fontWeight: "400",
                }}
              >
                Download WhatsApp for Windows
              </Typography>
              <Typography
                style={{
                  margin: "1px 0 0 10px",
                  fontFamily: "inherit",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Get calling, screen sharing and a faster experiance with the new
                Windows app.
              </Typography>
            </Box>
            <Button
              style={{
                backgroundColor: "#017561",
                border: "none",
                borderRadius: "20px",
                color: "white",
                height: "35px",
                width: "120px",
                margin: "35px 0 0 15px",
                textTransform: "unset",
              }}
              href="https://mui.com/"
            >
              Get the app
            </Button>
          </Box>
        </UpperLayer>
        <Component>
          <Container>
            <Title> Use WhatsApp on your computer</Title>
            <StyledList>
              <ListItem>1. Open WhatApp on your phone.</ListItem>
              <ListItem>
                2. Tap
                <Box
                  component="span"
                  style={{ fontWeight: "600", marginLeft: "3px" }}
                >
                  Menu
                </Box>
                <MoreVertIcon style={{ opacity: 0.6 }} /> on Android , or{" "}
                <Box
                  component="span"
                  style={{ fontWeight: "600", marginLeft: "5px" }}
                >
                  Settings
                </Box>{" "}
                <SettingsIcon style={{ opacity: "0.6", marginLeft: "5px" }} />
                on iPhone
              </ListItem>

              <ListItem>
                3. Tap{" "}
                <Box
                  component="span"
                  style={{
                    fontWeight: "600",
                    marginLeft: "5px",
                    marginRight: "4px",
                  }}
                >
                  Linked devices
                </Box>{" "}
                and then
                <Box
                  component="span"
                  style={{
                    fontWeight: "600",
                    marginLeft: "5px",
                    marginRight: "4px",
                  }}
                >
                  Link a device
                </Box>
                .
              </ListItem>
              <ListItem>
                4. Point your phone at this screen to capture the QR code.
              </ListItem>
            </StyledList>
          </Container>
          <Box style={{ position: "relative" }}>
            <QrCode src={qrCodeImage} alt="Qr Code Img" />
            <Box
              style={{
                position: "absolute",
                top: "45%",
                transform: "translateX(59%)",
              }}
            >
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Component>
        <Box sx={{ padding: "0 40px 0 40px" }}>
          <Divider variant="middle" sx={{ opacity: 1 }} />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#017561",
              fontFamily: "inherit",
              fontWeight: "400",
              fontSize: "18px",
              padding: "25px 0 0 60px",
            }}
          >
            Link with phone number
          </Typography>
        </Box>
      </Dialog>
    </>
  );
};
export default LoginDialog;

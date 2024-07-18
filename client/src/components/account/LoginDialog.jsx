import { Dialog } from "@mui/material";
import React, { useState } from "react";
import FrontPageScanner from "./FrontPageScanner";
import FrontPageMobile from "./FrontPageMobile";

const DialogStyled = {
  height: "96%",
  marginTop: "12.5%",
  width: "65%",
  maxWidth: "100%",
  // maxHeight: "100%",
  boxShadow: "none",
  // overflow: "hidden",
  opacity: "0.9",
};

const LoginDialog = () => {
  const [showComponent2, setShowComponent2] = useState(true);

  const handleComponent2ButtonClick = () => {
    setShowComponent2(false);
  };

  const handleComponent3ButtonClick = () => {
    setShowComponent2(true);
  };

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: DialogStyled }} sx={{userSelect:'none'}}>
        {/* <FrontPageScanner /> */}

        {showComponent2 ? (
        <FrontPageScanner onClick={handleComponent2ButtonClick} />
      ) : (
        <FrontPageMobile onClick={handleComponent3ButtonClick} />
      )}


      </Dialog>
    </>
  );
};
export default LoginDialog;

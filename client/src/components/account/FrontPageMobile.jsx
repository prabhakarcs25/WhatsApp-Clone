//

import {
  Typography,
  Box,
  styled,
  TextField,
  Button,
  Link,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
const OuterLayer = styled(Box)`
  text-align: center;
  padding: 60px 0 0 0;
  border: 2px solid red;
`;

const FrontPageMobile = ({ onClick }) => {
  return (
    <>
      <OuterLayer>
        <Typography
          sx={{ fontSize: "28px", fontFamily: "inherit", fontWeight: "200" }}
        >
          Enter phone number
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            lineHeight: "45px",
            fontFamily: "inherit",
            fontWeight: "400",
            opacity: ".6",
          }}
        >
          {" "}
          Select a country and enter your WhatsApp phone number.
        </Typography>

        <FormControl sx={{ m: 1, width: 300, mt: 2 }}>
          <Select sx={{ height: "50px", borderRadius: "20px" }}>
            <Box
              sx={{
                display: "flex",
                height: "40px",
                background: "#DCDCDC",
                margin: "1px 20px 0px 20px",
                borderRadius: "10px",
              }}
            >
              <SearchIcon sx={{ height: "45px", ml: "5px" }} />
              <TextField sx={{ width: "100%" }} />
            </Box>

            <MenuItem>India +91</MenuItem>
            <MenuItem>America</MenuItem>
            <MenuItem>NewZeland +91</MenuItem>
            <MenuItem>Pakkistan +91</MenuItem>
            <MenuItem>Bagladesh +91</MenuItem>
          </Select>
        </FormControl>

        <Box>
          <TextField
            id="outlined-start-adornment"
            sx={{
              m: 1,
              width: "300px",
              borderRadius: "20px",
              background: "#DCDCDC",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
          />
        </Box>
        <Button
          style={{
            backgroundColor: "#017561",
            border: "none",
            borderRadius: "20px",
            color: "white",
            height: "35px",
            width: "80px",
            margin: "15px 0 0 0",
            textTransform: "unset",
          }}
          href="https://mui.com/"
        >
          Next
        </Button>
        <Typography
          sx={{
            color: "#017561",
            fontFamily: "inherit",
            fontWeight: "500",
            lineHeight: "50px",
          }}
        >
          Link with QR code
        </Typography>
        <Typography
          sx={{
            mt: 12,
            fontSize: "30px",
            fontFamily: "inherit",
            fontWeight: "300",
          }}
        >
          Tutorial
        </Typography>
        <Typography>
          <Link sx={{ color: "#017561", fontSize: "14px", lineHeight: "40px" }}>
            Need help to get started.?
          </Link>
        </Typography>
      </OuterLayer>
    </>
  );
};

export default FrontPageMobile;

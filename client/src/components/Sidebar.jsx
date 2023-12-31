import {
  Avatar,
  Stack,
  useTheme,
  IconButton,
  Divider,
  Switch,
  Menu,
  MenuItem,
} from "@mui/material";
import logo from "../assets/logo.png";
import {
  ChatCircleDots,
  Users,
  Phone,
  Gear,
  User,
  SignOut,
} from "@phosphor-icons/react";

import { faker } from "@faker-js/faker";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const profileMenu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Signout",
    icon: <SignOut />,
  },
];

const getUrlPath = (idx) => {
  switch (idx) {
    case 0:
      return "/profile";
    case 1:
      return "/settings";
    case 2:
      return "/auth/login";
    default:
      return "";
  }
};

const Sidebar = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const HandleMenuItem = (idx) => {
    setAnchorEl(null);
    const path = getUrlPath(idx);
    navigate(path);
  };

  return (
    <Stack
      spacing={3}
      sx={{
        width: "70px",
        maxHeight: "100%",
        alignItems: "center",
        backgroundColor: "#F0F4FA",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Avatar
        variant="rounded"
        src={logo}
        sx={{ width: "60px", height: "60px" }}
      />

      <Link to="/chat">
        <IconButton>
          {" "}
          <ChatCircleDots color="#080707" />{" "}
        </IconButton>
      </Link>
      <Link to="/group">
        {" "}
        <IconButton>
          {" "}
          <Users color="#080707" />{" "}
        </IconButton>
      </Link>
      <Link to="/call">
        <IconButton>
          {" "}
          <Phone color="#080707" />{" "}
        </IconButton>
      </Link>
      <Divider sx={{ width: "80%" }} />
      <Link to="/settings">
        <IconButton>
          {" "}
          <Gear color="#080707" />{" "}
        </IconButton>
      </Link>

      <Stack
        spacing={3}
        flex={1}
        alignItems="center"
        justifyContent="end"
        p={4}
      >
        <Switch
          onChange={() => {
            theme.palette.mode = "dark";
          }}
        />
        <IconButton onClick={handleOpen}>
          <Avatar src={faker.image.avatar()} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {profileMenu.map(({ title, icon }, idx) => {
            return (
              <MenuItem key={idx} onClick={() => HandleMenuItem(idx)}>
                <Stack
                  direction="row"
                  width="100px"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>{title}</span>
                  <span>{icon}</span>
                </Stack>
              </MenuItem>
            );
          })}
        </Menu>
      </Stack>
    </Stack>
  );
};

export default Sidebar;

import { Container, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Contact from "./Contact";

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          {data.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Contact
                title={item.title}
                subTitle={item.subTitle}
                link={item.link}
                Icon={item.Icon}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
const data = [
  {
    title: "Call us",
    subTitle: "tel:123 456 7890",
    Icon: CallIcon,
    link: "#",
  },
  {
    title: "Book Appointment",
    subTitle: "mailto:info@example.com",
    Icon: MailOutlineIcon,
    link: "#",
  },
  {
    title: "Opening Hours",
    subTitle: "Mon-Fri : 8:00 - 17:00",
    Icon: AccessTimeIcon,
    link: "#",
  },
];

export default Navbar;

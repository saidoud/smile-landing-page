import { Card, CardContent, CardMedia, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

function PostCard({ title, date, userName, detail, imageUrl }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia component="img" image={imageUrl} alt={title} loading="lazy" />
      <CardContent style={{ padding: "30px 20px" }}>
        <p className={classes.title}> {title}</p>
        <Stack flexDirection="row" style={{ paddingBottom: "20px" }}>
          <AccessTimeIcon style={{ marginRight: "5px" }} />
          <p className={classes.date}>{date}</p>
          <PersonIcon style={{ marginRight: "5px" }} />
          <p className={classes.userName}>{userName}</p>
        </Stack>
        <p className={classes.detail}> {detail}</p>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "500px",
  },
  title: {
    font: "normal 700 18px/22px Lato",
    color: theme.palette.secondary.black,
    paddingBottom: "20px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  detail: {
    font: "normal 400 20px/30px Lato",
    color: theme.palette.secondary.main,
  },
  date: {
    font: "normal 400 14px  ",
    color: "#727272",
    marginRight: "25px",
  },
  userName: {
    font: "normal 400 14px  ",
    color: "#727272",
  },
}));

export default PostCard;

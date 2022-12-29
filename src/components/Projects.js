import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Tooltip,
  Typography,
  Button,
  Link,
  Fade,
} from "@mui/material";

import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { AddOutlined, Remove } from "@mui/icons-material";
import ReactCardFlip from "react-card-flip";
import { projects } from "../data/DataProjects";

function Projects() {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  const Title = styled("div")(({ theme }) => ({
    background: "transparent",
    fontFamily: "Seymour One",
    fontStyle: "italic",
    fontWeight: 700,
    boxShadow: "none",
    ...theme.typography.h4,
    color: "#123455",
    padding: theme.spacing(1),
  }));

  const Section = styled("div")(({ theme }) => ({
    background: theme.palette.text.primary,
  }));

  const Item = styled("div")(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    color: theme.palette.text.secondary,
  }));

  return (
    <Box id="Projects" sx={{ flexGrow: 1 }} ref={ref}>
      <Section>
        <Title>Projects</Title>

        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 2, sm: 8, lg: 12, xl: 16 }}
        >
          {projects.map((item, index) => (
            <Grid item xs={2} sm={4} key={index}>
              <Item>
                <CustomProjectItem
                  item={item}
                  index={index}
                  isVisible={isVisible}
                  time={(projects.length + index) /5 }

                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Box>
  );
}

function CustomProjectItem({ item, index, isVisible, time }) {
  const [mouseOver, setMouseOver] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded(!expanded);

  return (
    <ReactCardFlip isFlipped={expanded} flipDirection="horizontal">
      <Box id="Front">
        <Fade in={isVisible} timeout={400 * time}>
          <Card sx={{ borderRadius: 5, height: "100%", paddingBottom: 1 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ background: item.color }} aria-label="recipe">
                  {item.icon}
                </Avatar>
              }
              title={
                <Link
                  color="#ffffff"
                  href={item.link}
                  underline={item.link != null ? "hover" : "none"}
                  target="_blank"
                >
                  <Typography component="div" variant="h5">
                    {item.title}
                  </Typography>
                </Link>
              }
              subheader={item.technology.map((item, index) => (
                <Tooltip title={item.name} placement="bottom" key={index}>
                  <Avatar
                    variant="square"
                    src={item.img}
                    sx={{
                      display: "inline-block",
                      width: 20,
                      height: 20,
                      mr: 1.5,
                      mt: 1,
                      transition: "transform 0.15s ease-in-out",
                      "&:hover": { transform: "scale3d(1.5, 1.5, 1)" },
                    }}
                  />
                </Tooltip>
              ))}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.shortDescription}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button
                variant="outlined"
                startIcon={<AddOutlined />}
                onClick={handleExpandClick}
                sx={{ ml: 1 }}
              >
                Show More
              </Button>
            </CardActions>
          </Card>
          </Fade>

        </Box>

        <Box id="back">
          <Card sx={{ borderRadius: 5, height: "100%" }}>
            <CardContent>
              <Typography paragraph>{item.description}</Typography>
            </CardContent>

            <CardActions disableSpacing>
              <Button
                variant="outlined"
                startIcon={<Remove />}
                onClick={handleExpandClick}
                sx={{ ml: 1 }}
              >
                Show Less
              </Button>
            </CardActions>
          </Card>
      </Box>
    </ReactCardFlip>
  );
}

export default Projects;
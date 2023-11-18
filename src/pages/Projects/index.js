import React from "react";
import "./index.styling.css";
import data from "../../data/projects.json";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip"
import LinearProgressWithLabel from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Project = (props) => {
  const {
    name,
    start,
    end,
    about,
    hobbies,
    photo,
    progress,
    total,
    tags
  } = props.data;

  return (
    <Card className="card">
      <CardMedia
        sx={{ height: 400 }}
        image={photo!== "" ? require(`../../assets/projects/${photo}`):null}
        title="green iguana"
      />
      <CardHeader
        title={name}
        subheader={`${start} - ${end ?? "on going" }` }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" className="max-lines">
          {about}  {hobbies}
        </Typography>
        {tags?.map((tag)=> <Chip key={`${tag}-${name}`} label={tag} />)}
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgressWithLabel variant="determinate" value={progress} />
      </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            total,
          )}km`}</Typography>
        </Box>
    </Box>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
};

export const Projects = () => {
  return (
    <div className="projects-container">
      {data.map((item, index) => {
        return (
          <div>
            <Project key={`${item.name}-${index}`} data={item} />
          </div>
        );
      })}
    </div>
  );
};

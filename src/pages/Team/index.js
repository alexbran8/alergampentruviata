import React from "react";
import "./index.styling.css";
import data from "../../data/team.json";
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

const TeamMember = (props) => {
  const {
    firstName,
    lastName,
    age,
    about,
    hobbies,
    photo,
    memberSince,
    progress,
    total,
    tags
  } = props.data;

  return (
    <Card className="card">
      <CardMedia
        sx={{ height: 200 }}
        image={photo!== "" ? require(`../../assets/team/${photo}`):null}
        title="green iguana"
      />
      <CardHeader
        title={`${firstName} ${lastName}`}
        subheader={`joined: ${memberSince}`}
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          {firstName} {lastName}
        </Typography> */}
    
        <Typography variant="body2" color="text.secondary">
          {about} {age} {hobbies}
        </Typography>
        {tags?.map(tag=> <Chip key={tag} label={tag} />)}
        
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
        <Button size="small">Share</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
};

export const Team = () => {
  return (
    <div className="team-container">
      {data.map((item, index) => {
        return (
          <div>
            <TeamMember key={`${item.firstName}-${index}`}  data={item} />
          </div>
        );
      })}
    </div>
  );
};

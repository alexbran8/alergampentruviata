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
        sx={{ height: 400 }}
        image={photo!== "" ? require(`../../assets/team/${photo}`):null}
        title="green iguana"
      />
      <CardHeader
        title={`${firstName} ${lastName}`}
        subheader={`joined: ${memberSince}`}
      />
      <CardContent>
        <Typography variant="body" color="text.secondary">
          {about}  {hobbies}
        </Typography>
        <Box paddingTop={1}>
        {tags?.map(tag=> <Chip  key={`${firstName}-${lastName}-${tag}`}  label={tag} />)}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%'}}>
        <LinearProgressWithLabel variant="determinate" value={progress} />
      </Box>
        <Box>
          <Typography variant="body" color="text.secondary">{`${Math.round(
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
    <div>
      <Box>
      <p className="subtitle">Am crescut de la an la an si am ajuns sa fim urmatorii alergatori de fapte bune. Fiecare dintre noi si-a asumat ca va contribui cat de mult va putea pentru fiecare cauza, motivatie pentru a strange cat mai multi km in fiecare luna.</p>
      </Box>
    <div className="team-container">
      {data.filter(item=> item.isActive).map((item, index) => {
        return (
          <div>
            <TeamMember key={`${item.firstName}-${item.lastName}-${index}`}  data={item} />
          </div>
        );
      })}
    </div>
    </div>
  );
};

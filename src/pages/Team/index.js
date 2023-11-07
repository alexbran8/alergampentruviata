import React from "react";
import "./index.styling.css";
import data from "../../data/team.json"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const TeamMember = (props) => {
  const {firstName, lastName, age, about, hobbies} = props.data
  return (
    <Card className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firstName} {lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {about} {age} {hobbies}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}


export const Team = () => {

  return (
     
      <div className="team-container">
      {data.map(item=> {
        return <div>
           <TeamMember 
           data={item}/>
           </div>
      })

      }      
     </div>
  
  );
};

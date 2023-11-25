import React, { useRef, useState } from "react";
import "./index.styling.css";
import { TextField, Button, Typography, Box,FormHelperText } from "@mui/material";
import emailjs from '@emailjs/browser';

export  const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("")
  const handleSubmit = (e) => {
    
   
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
  
    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_API_KEY)
      .then((result) => {
          // show the user a success message
          form.current.reset()
          setStatus('success')
      }, (error) => {
          // show the user an error
          setStatus('error')
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "10%",
        marginTop: "1%",
        height: "80%"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 600,
          mx: "auto",
          p: 2,
        }}
      >
        <Typography variant="h4" align="center" mb={2}>
          Contacteaza-ne!
        </Typography>
        
        <form  ref={form} onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="name"
            label="Nume"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Mesaj"
            name="message"
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#111",
              },
            }}
          >
            Trimite
          </Button>
        </form>
        {status === "success" &&<FormHelperText>Multumim pentru mesaj. Vom incerca sa raspundem in cel mai scurt timp posibil.</FormHelperText>}
          {status === "error" &&<FormHelperText error={true}>Te rugam sa mai incerci mai tarziu, sau sa ne contactezi direct pe adresa noastra de <a href="mailto:alergampentruviata@gmail.com">email</a>.</FormHelperText>}
      </Box>
    </Box>
  );
}
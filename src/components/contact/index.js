import React from "react";
import "./styles.scss";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const ContactPage = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h1>Let's chat.</h1>
        <h1>Tell me about your</h1>
        <h1>project</h1>
      </div>
      <div className="about-right">
        <div className="form">
          <h2>Contact</h2>
          <FormControl variant="standard" fullWidth className="form-control">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" />
          </FormControl>
          <FormControl variant="standard" fullWidth className="form-control">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" />
          </FormControl>
          <FormControl variant="standard" fullWidth className="form-control">
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <Input id="phone" />
          </FormControl>
          <FormControl
            variant="standard"
            fullWidth
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="age-label">Age</InputLabel>
            <Select labelId="age-label" id="age">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <TextField
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
            />
          </FormControl>
          <Button
            type="submit" // This makes the button a submit button
            variant="contained" // You can choose a style (outlined, contained, etc.)
            color="primary" // You can choose a color (primary, secondary, etc.)
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

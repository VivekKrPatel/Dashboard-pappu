import React from "react";
import AdmissionTable from "./AdmissionTable";

import {
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Icon,
  Modal,
  Box,
  Input
} from "@mui/material";

// function (name, address, date, phone, email) {
//   return { name, address, date, phone, email };
// }
const rows = [
  { name: 'Shyam', address: 159, date: '6/9/2023', phone: 9987469489, email: "shyam@gmail.com" },
  { name: 'Dinesh', address: 237, date: '9/9/2023', phone: 8760978456, email: "dinesh@gmail.com" },
  { name: 'Supriya', address: 262, date: '16/9/2023', phone: 9874903748, email: "supriya@gmail.com" },
  { name: 'Aman', address: 305, date: '3/9/2023', phone: 9783674985, email: "aman@gmail.com" },
  { name: 'Kirti', address: 356, date: '16/9/2023', phone: 9874048926, email: "kirti@gmail.com" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const fieldStyle = {
  width: 350,
  mt: 2,
};

const AdmissionForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="content">
      <Button
        color="primary"
        variant="contained"
        type="submit"
        sx={{ float: "right" }}
        onClick={handleOpen}>
        {/* <Icon>add</Icon> */}
        Add
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid container spacing={4}>

            <Grid item lg={4} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="name"
                id="standard-basic"
                errorMessages={["this field is required"]}
                label="Name"
                sx={fieldStyle}
              />
              <TextField
                type="number"
                name="phone"
                label="Phone"
                sx={fieldStyle}
                errorMessages={["this field is required"]}
              />
              <TextField
                type="text"
                name="email"
                label="Email"
                sx={fieldStyle}
                errorMessages={["this field is required"]}
              />

              <FormControl sx={fieldStyle}>
                <InputLabel id="demo-simple-select-label">Source</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Source"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>


            <Grid item lg={4} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="address"
                label="Address"
                sx={fieldStyle}
                // validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextField
                type="text"
                name="description"
                label="Description"
                sx={fieldStyle}
                // validators={["required"]}
                errorMessages={["this field is required"]}
              />


              <FormControl sx={fieldStyle}>
                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Class"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <TextField
                type="number"
                name="follow up date"
                label="Follow Up Date"
                sx={fieldStyle}
                // validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>


            <Grid item lg={4} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <FormControl sx={fieldStyle}>
                <InputLabel id="demo-simple-select-label">Assigned</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Assigned"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={fieldStyle}>
                <InputLabel id="demo-simple-select-label">Refrence</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Refrence"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <TextField
                rows={4}
                type="text"
                name="note"
                label="Note"
                multiline
                sx={fieldStyle}
                // validators={["required"]}
                errorMessages={["this field is required"]}
              />

            </Grid>
          </Grid>

          <Grid sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="btn-fill"
              color="primary"
              variant="contained"
              type="submit"
              sx={{ mt: 2 }}
            >
              Save
            </Button>
          </Grid>

          {/* <div>
                <Typography gutterBottom variant="h4" align="center">
                    ADD VISITOR
                </Typography>
                <Card style={{ margin: '0 auto', padding: '20px 5px' }}>
                    <CardContent>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={4} item>
                                    Purpose *
                                    <TextField label="Select" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Meeting Width *
                                    <TextField label="select" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Visitor Name *
                                    <TextField variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    Phone
                                    <TextField type="number" label="Phone" placeholder="Enter Your Mobile no" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Id Card:
                                    <TextField variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Number Of Person
                                    <TextField variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Date
                                    <TextField label="25/07/2023" variant="outlined" fullWidth required />
                                </Grid>


                                <Grid xs={12} sm={4} item>
                                    In Time
                                    <TextField label="11:38 AM" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Out Time
                                    <TextField label="11:38 AM" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Attach Document
                                    <TextField variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    Note
                                    <TextField variant="outlined" fullWidth required />
                                </Grid>


                                <Grid xs={12} sm={2} item>
                                    <Button type="Save" variant="contained" color="primary" fullWidth>Save</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div> */}
        </Box>
      </Modal>

      <AdmissionTable rows={rows} />
    </div>
  );
};

export default AdmissionForm;

import React from "react";
import { Typography, Card, CardContent, Grid, Select, MenuItem, TextField, Button, Modal, Box, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Search';

import { VscFiles, HiOutlinePencil } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
import { Margin } from "@mui/icons-material";

import { Table } from "reactstrap";
import { AddCircle } from "@mui/icons-material";
// radio
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};



const Addleave = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (

        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={4} item>
                                Class *
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="10">10<sup>th</sup></MenuItem>
                                    <MenuItem value="12">12<sup>th</sup></MenuItem>
                                    <MenuItem value="O lebel">O LEBEL</MenuItem>
                                    <MenuItem value="Pursuing MCA">MCA</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Section
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="a">A</MenuItem>
                                    <MenuItem value="b">B</MenuItem>
                                    <MenuItem value="c">C</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={2} style={{ marginTop: '20px' }} item>
                                <Button variant="contained" endIcon={<SearchIcon />}>Search</Button>
                            </Grid>

                            <Grid xs={12} sm={2} style={{ marginTop: '20px' }} item>
                                <Button variant="contained" onClick={handleOpen} startIcon={<AddCircle />}>Add</Button>

                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>

                                        <Card style={{ margin: '0 auto' }}>
                                            <Typography gutterBottom variant="h4">
                                                Add Leave
                                            </Typography>
                                            <CardContent>
                                                <form>
                                                    <Grid container spacing={1}>



                                                        <Grid xs={12} sm={4} item>
                                                            Class *
                                                            <Select variant="outlined" size="small" fullWidth >
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value="10">10<sup>th</sup></MenuItem>
                                                                <MenuItem value="12">12<sup>th</sup></MenuItem>
                                                                <MenuItem value="O lebel">O LEBEL</MenuItem>
                                                                <MenuItem value="Pursuing MCA">MCA</MenuItem>
                                                            </Select>
                                                        </Grid>


                                                        <Grid xs={12} sm={4} item>
                                                            Section *
                                                            <Select variant="outlined" size="small" fullWidth >
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value="a">A</MenuItem>
                                                                <MenuItem value="b">B</MenuItem>


                                                            </Select>
                                                        </Grid>


                                                        <Grid xs={12} sm={4} item>
                                                            Student *
                                                            <Select variant="outlined" size="small" fullWidth >
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value="ajay">Ajay</MenuItem>
                                                                <MenuItem value="vijay">Vijay</MenuItem>

                                                            </Select>
                                                        </Grid>
                                                        <Grid xs={12} sm={4} item>
                                                            Apply Date *
                                                            <TextField type="number" variant="outlined" size="small" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Form Date *
                                                            <TextField type="number" variant="outlined" size="small" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            To Date *
                                                            <TextField type="number" variant="outlined" size="small" fullWidth />
                                                        </Grid>


                                                        <Grid xs={12} item>
                                                            Reason
                                                            <TextField type="text" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            <Typography>
                                                                Leave Status *
                                                            </Typography>
                                                            <FormControl>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group" >

                                                                    <FormControlLabel size="small" sx={{ height: 30, width: 95, paddingLeft: 1 }} value="Pending" control={<Radio size="small" sx={{ height: 40, width: 40 }} />} label="Pending" />
                                                                    <FormControlLabel size="small" sx={{ height: 30, width: 120, paddingLeft: 1 }} value="Disapprove" control={<Radio size="small" sx={{ height: 40, width: 60 }} />} label="Disapprove" />
                                                                    <FormControlLabel size="small" sx={{ height: 30, width: 90, paddingLeft: 1 }} value="Approve" control={<Radio size="small" sx={{ height: 40, width: 50 }} />} label="Approve" />




                                                                </RadioGroup>
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid xs={12} item>
                                                            Attach Document
                                                            <TextField type="file" variant="outlined" size="small" fullWidth />
                                                        </Grid>
                                                        <Grid xs={12} sm={2} style={{ marginLeft: '680px' }} item>
                                                            <Button variant="contained">Save</Button>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Modal>
                            </Grid>
                        </Grid>


                        <Grid style={{ padding: '200px 5px' }} container spacing={1}>
                            <Typography gutterBottom variant="h4">
                                Approve Leave List
                            </Typography>
                            <Grid xs={12} item>
                                <Grid xs={12} sm={4} item>
                                    <TextField type="text" placeholder="Search...." size="small" variant="outlined" fullWidth />
                                </Grid>
                            </Grid>

                            <Grid xs={12} item>
                                <Grid style={{ marginLeft: '900px' }}>
                                    <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                </Grid>
                            </Grid>

                            <Grid xs={12} item>
                                <Table bordered={true}>
                                    <thead>
                                        <tr>
                                            <th>Student Name</th>
                                            <th>Class</th>
                                            <th>Section</th>
                                            <th>Apply Date</th>
                                            <th>Form Date</th>
                                            <th>To Date</th>
                                            <th>Status</th>
                                            <th>Approve Disapprove By</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                        </tr>
                                    </tbody>
                                </Table>

                            </Grid>

                        </Grid>
                    </form>
                </CardContent>
            </Card>


        </div>
    )
}

export default Addleave;




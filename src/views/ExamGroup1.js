import React from "react";
import { Row, Col, Input, Card, Table } from 'reactstrap';
import { Typography, CardContent, Grid, Select, Button, MenuItem, TextField, Modal, Box, Stack } from "@mui/material";


const ExamGruop1 = () => {
    return(
<div className="content">
            <Typography gutterBottom variant="h4">
                Select Criteria
            </Typography>
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>

                            <Grid xs={12} sm={4} item>
                                ExamGroup
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem value="class1">Class1</MenuItem>
                                    <MenuItem value="class2">Class2</MenuItem>
                                    <MenuItem value="class3">Class3</MenuItem>
                                    <MenuItem value="class4">Class4</MenuItem>
                                    <MenuItem value="class5">Class5</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Exam
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem value="English">English</MenuItem>
                                    <MenuItem value="Hindi">Hindi</MenuItem>
                                    <MenuItem value="Physics">Physics</MenuItem>
                                    <MenuItem value="Chemistry">Chemistry</MenuItem>
                                    <MenuItem value="Biology">Biology</MenuItem>
                                </Select>
                            </Grid>


                            <Grid xs={12} sm={4} item>
                                Session
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem value="a">2017-2018</MenuItem>
                                    <MenuItem value="b">2018-2019</MenuItem>
                                    <MenuItem value="c">2019-2020</MenuItem>
                                    <MenuItem value="d">2021-2022</MenuItem>
                                    <MenuItem value="e">2022-2023</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Class
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem value="class1">Class1</MenuItem>
                                    <MenuItem value="class2">Class2</MenuItem>
                                    <MenuItem value="class3">Class3</MenuItem>
                                    <MenuItem value="class4">Class4</MenuItem>
                                    <MenuItem value="class5">Class5</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                               Section
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem value="a">A</MenuItem>
                                    <MenuItem value="b">B</MenuItem>
                                    <MenuItem value="c">C</MenuItem>
                                    <MenuItem value="d">D</MenuItem>
                                    <MenuItem value="e">E</MenuItem>
                                </Select>
                            </Grid>


                            <Grid xs={12} sm={4} item>
                                Marksheet Template
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem value="class1">Class1</MenuItem>
                                    <MenuItem value="class2">Class2</MenuItem>
                                    <MenuItem value="class3">Class3</MenuItem>
                                    <MenuItem value="class4">Class4</MenuItem>
                                    <MenuItem value="class5">Class5</MenuItem>
                                </Select>
                            </Grid>

<Grid xs={12} sm={4} sx={{marginLeft: "900px" , marginTop: "20px", marginBottom: "20px"}}>
    <Button variant="contained">
        Search
    </Button>
</Grid>

{/* </Grid> */}

                        </Grid>
                    </form>
                    <Typography gutterBottom variant="h5" sx={{float: "left"}}>
                Student List
            </Typography>
                    <Button variant="contained" sx={{float: "right"}}>
        Bulk Download
    </Button>
                </CardContent>
            </Card>
        </div>

    )
}

export default ExamGruop1;
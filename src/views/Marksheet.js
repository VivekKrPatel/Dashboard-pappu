import { Typography, Card, CardContent, Grid, TextField, Stack, Pagination } from "@mui/material";
import { Col, Row, Table } from "reactstrap";


//icon

import { VscFiles, HiOutlinePencil } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
import { Margin } from "@mui/icons-material";


const Marksheet = () => {
    return (
        <div className="content">
            <Row>
                <Col md={4}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography gutterBottom variant="h4">
                                            Add Marksheet
                                        </Typography>

                                        <Grid xs={12} item>
                                            Template *
                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Exam Name
                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            School Name
                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Exam center
                                            <TextField type="number" variant="outlined" size="small" fullWidth />
                                        </Grid>


                                        <Grid xs={12} item>
                                            Body Text
                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Footer text
                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Printing Date
                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Header Image
                                            <TextField type="file" variant="outlined" size="small" fullWidth />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Typography gutterBottom variant="h4">
                                        Marksheet List
                                    </Typography>
                                    <Grid xs={12} sm={8} item>
                                        <TextField type="search" placeholder="Search" size="small" />
                                    </Grid>

                                    <Grid xs={12} sm={4} item>
                                        <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                    </Grid>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Certificate Name</th>
                                                <th>Background Image</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                    </Table>


                                    <Grid xs={12} item>

                                        <Pagination count={5} variant="contained" shape="rounded" />
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Marksheet;
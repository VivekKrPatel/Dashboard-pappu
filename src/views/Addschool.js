import { Typography, Card, CardContent, Grid, Button, TextField, Select, MenuItem, Stack, Pagination } from "@mui/material";
import { Col, Row } from "reactstrap";


const Addschool = () => {
    return (
        <div className="content">
            <Row>
                <Col md={4}>
                    <Typography>
                        Add School House
                    </Typography>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        Name *
                                        <TextField type="text" variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Grid xs={12} item>
                                            Description
                                            <TextField type="text" variant="outlined" fullWidth required />
                                        </Grid>
                                        <Grid xs={12} sm={2} style={{ marginLeft: "200px", marginTop: '10px' }} item>
                                            <Button variant="contained">Save</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>

                </Col>
                <Col md={8}>
                    <Typography>
                        Student House List
                    </Typography>
                    <Card>
                        <CardContent>
                            <form>
                                <Grid spacing={1}>
                                    <Grid xs={12} sm={4} sx={{ mb: 1 }} item >
                                        <TextField type="search" variant="outlined" placeholder="Search..." size="small" />
                                    </Grid>
                                    <Stack direction="row" gap={1}>

                                        <Select variant="outlined" size="small" fullWidth>

                                            <MenuItem>Class</MenuItem>
                                            <MenuItem value="red">Red</MenuItem>
                                            <MenuItem value="blue">Blue</MenuItem>
                                            <MenuItem value="green">Green</MenuItem>
                                            <MenuItem value="orange">Orange</MenuItem>
                                            <MenuItem value="white">white</MenuItem>
                                        </Select>

                                        <Select variant="outlined" size="small" fullWidth>

                                        </Select>

                                        <Select variant="outlined" size="small" fullWidth>
                                            <MenuItem>House ID</MenuItem>
                                            <MenuItem value="one">1</MenuItem>
                                            <MenuItem value="two">2</MenuItem>
                                            <MenuItem value="three">3</MenuItem>
                                            <MenuItem value="four">4</MenuItem>
                                            <MenuItem value="five">5</MenuItem>
                                        </Select>

                                    </Stack>

                                    <Grid xs={12} sm={4} sx={{ m: 2 }} item>
                                        <Pagination count={5} variant="outlined" shape="rounded" />
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
export default Addschool;
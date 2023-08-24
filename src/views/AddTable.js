import { CardContent, Card, Grid, Typography, Table } from "@mui/material";
//icon

import { AiOutlineFilePdf } from 'react-icons/ai'


const AddTable = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }} >
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography gutterBottom variant="h4">
                                    Exam Schedule
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={10} item>
                                <Typography gutterBottom variant="h5">
                                    Monthly Text ( August -2023 )
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <AiOutlineFilePdf size={30} />
                            </Grid>

                            <Grid xs={12} item>
                                <Table border="1">
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Date</th>
                                            <th>StartTime</th>
                                            <th>Duration (minutes)</th>
                                            <th>Room No.</th>

                                        </tr>
                                    </thead>
                                </Table>
                            </Grid>

                            <Grid xs={12} sm={10} item>
                                <Typography gutterBottom variant="h5">
                                    Monthly Examination-( Chapter Wise )
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <AiOutlineFilePdf size={30} />
                            </Grid>

                            <Grid xs={12} item>
                                <Table border="1">
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Date</th>
                                            <th>StartTime</th>
                                            <th>Duration (minutes)</th>
                                            <th>Room No.</th>

                                        </tr>
                                    </thead>
                                </Table>
                            </Grid>

                            <Grid xs={12} sm={10} item>
                                <Typography gutterBottom variant="h5">
                                    Quiz Text
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <AiOutlineFilePdf size={30} />
                            </Grid>

                            <Grid xs={12} item>
                                <Table border="1">
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Date</th>
                                            <th>StartTime</th>
                                            <th>Duration (minutes)</th>
                                            <th>Room No.</th>

                                        </tr>
                                    </thead>
                                </Table>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default AddTable;
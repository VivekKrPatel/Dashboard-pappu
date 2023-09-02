import { Row, Col, Button, Input, Card, Table } from 'reactstrap';
import {Checkbox,FormControlLabel,FormGroup} from '@mui/material';
import { Select } from "@mui/material";
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'

const MarksGrade = () => {
    return (
        <div className="content">
            <Row>
                <Col md="4">
                    <Card style={{ padding: "20px" }}>
                        <h3>Assign Class Teacher</h3>
                        <label>Class</label>
                        <Select size="small" />
                        <label>Section</label>
                        <Input type="text" />
                        <label>Class Teacher</label>
                        <FormGroup>
  <FormControlLabel control={<Checkbox />} label="Shivam Mehra (9002)" />
  <FormControlLabel  control={<Checkbox />} label="Jason Sharlton (900002301)" />
  <FormControlLabel  control={<Checkbox />} label="Albert Thomas (52201)" /></FormGroup>
                        <Button style={{ marginLeft: "140px", marginTop: "20px", width: "150px" }}>Save</Button>
                    </Card>
                </Col>

                <Col md="8">
                    <Card style={{
                        padding
                            : "20px"
                    }}>
                        <h3>Class Teacher List</h3>
                        <Row>
                            <Col><Input type="search" placeholder="Search..." style={{ width: "300px" }} /></Col>
                            <Col style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}><VscFiles size={20} /><PiFileX size={20} /><LuFileSpreadsheet size={20} /><AiOutlineFilePdf size={20} /><RiFileExcel2Line size={20} /></Col>
                        </Row>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Section</th>
                                    <th>Class Teacher</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default MarksGrade;
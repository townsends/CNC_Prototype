import React, {Component} from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';

class TopSelect extends Component{

    render(){
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data) =>
                <option 
                    key={data.id}
                    value={data.id}
                >
                    {data.id}
                </option>
            );
        
            return (
                
                <div>
                    <div align="right">
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Check type="radio" name="system-select" defaultChecked disabled={!this.props.radioView} onClick={this.props.onViewChange} label="VMI" />
                                </Col>
                                <Col>
                                    <Form.Check type="radio" name="system-select" disabled={this.props.radioView} onClick={this.props.onViewChange} label="AIRES" />
                                </Col>
                                <Col>
                                    <Form.Control as="select" onChange={(e) => this.props.onTopChange(e.target.value)}  disabled={!this.props.localSelect}>
                                        {options}
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button variant="outline-primary">Select CMM</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Check type="checkbox" label="Select Saved CMM" onClick={this.props.handleSelect} />
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div align="left">
                        <Button variant="outline-primary">Imported PDF</Button>
                        <Button variant="outline-primary">Edit Data and Validate</Button>
                        <Button variant="outline-primary">Converted Data to Save</Button>
                    </div>
                </div>
        )
    }
}

export default TopSelect;
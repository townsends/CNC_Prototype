import React from 'react';
import LowerPageSelect from './LowerPageSelect.js';
import UpperPageSelect from './UpperPageSelect.js';
import SingelPageSelect from './SinglePageSelect.js';
import {Form, Row, Col, Button} from 'react-bootstrap';


function TopBar(props) {

    return (
    <div>
        <Form>
            <Row>
                <Col>
                    <Form.Label>Start Row:</Form.Label>
                    <Form.Control type="number" onChange=""/>
                </Col>
                <Col>
                    <Form.Label>Fig Item:</Form.Label>
                    <Form.Control type="number" onChange=""/>
                </Col>
                <Col>
                    <Form.Label>Item/PN:</Form.Label>
                    <Form.Control type="number" onChange=""/>
                </Col>
                <Col>
                    <Form.Label>PN/Text:</Form.Label>
                    <Form.Control type="number" onChange=""/>
                </Col>
                <Col>
                    <Form.Label>Text/EFF:</Form.Label>
                    <Form.Control type="number" onChange=""/>
                </Col>
                <Col>
                    <Form.Label>EFF/Qty:</Form.Label>
                    <Form.Control type="number" onChange=""/>
                </Col>
                <Col>
                    <Form.Label>End Row:</Form.Label>
                    <Form.Control type="number" onChange=""/>
                </Col>
            </Row>
        </Form>
        <Button variant="outline-primary"  onClick="" >Extend Changes</Button>
        <div>
            <Form>
                <Row>
                    <LowerPageSelect select={props.select} arrayOfData={props.pageArray} onLowerChange={props.handleLowerChange} />
                    <UpperPageSelect select={props.select} arrayOfData={props.pageArray} onUpperChange={props.handleUpperChange} />
                    <Col>
                        <Form.Check type="checkbox" label="Single Page" onClick={props.handleSelect}></Form.Check>
                    </Col>
                    <SingelPageSelect select={props.select} arrayOfData={props.pageArray} onSingleChange={props.handleSingleChange} />
                </Row>
            </Form>
        </div>
    </div>
    );
}

export default TopBar;
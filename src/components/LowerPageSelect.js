import React, {Component} from 'react';
import { Form, Col } from 'react-bootstrap';

class LowerPageSelect extends Component{

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
                <Form.Group as={Col}>
                    <Form.Control as="select" name="lowerPage" className="lowerPage-select" onChange={(e) => this.props.onLowerChange(e.target.value)} disabled={this.props.select}>
                        {options}
                    </Form.Control>
                </Form.Group>
        )
    }
}

export default LowerPageSelect;
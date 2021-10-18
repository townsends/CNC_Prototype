import React, {Component} from 'react';
import {Form, Col} from 'react-bootstrap';

class UpperPageSelect extends Component{

    render(){
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data, i) => {
            if(arrayOfData.length === i + 1)
                return (
                <option key={data.id} value={data.id} selected>
                    {data.id}
                </option>
                )
            else 
                return (
                <option key={data.id} value={data.id}>
                    {data.id}
                </option>
                )
        }
            );
        
            return (
                <Form.Group as={Col}>
                    <Form.Control as="select" name="upperPage" className="upperPage-select" onChange={(e) => this.props.onUpperChange(e.target.value)} disabled={this.props.select} >
                        {options}
                    </Form.Control> 
                </Form.Group>
        )
    }
}

export default UpperPageSelect;
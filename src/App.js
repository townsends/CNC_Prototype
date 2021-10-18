import React, {Component} from 'react';
import styles from "./styles.js";
import TopBar from './components/TopBar.js';
import TopSelect from './components/TopSelect.js';
import FigTable from './components/FigTable.js';
import table from './Data/parsedRows.js';
import pageArray from './Data/pages.js';

class App extends Component{

  constructor(props) {
      super(props);
      this.state = {
        visable: true,
        selected: false,
        view: false,
        localSelected: false,
        table: table,
        pageArray: pageArray
      };

      this.availableFilesArray = [
        {
          id: 'Something.pdf'
        }
      ];

      this.user = "Jim Sterling(1432)";

      this.ViewChange = this.ViewChange.bind(this);
      this.localSelect = this.localSelect.bind(this);
      this.Select = this.Select.bind(this);
    }

    ViewChange() {
      this.setState({
        view : !this.state.view
      })
    }
    
    localSelect() {
      this.setState({
        localSelected : !this.state.localSelected
      })
    }

    Select() {
      if (this.state.selected) {
        this.setState({
          selected: false
        })
      } else {
        this.setState({
          selected: true
        })
      }
    }

    render(){

    return (
        <div style={styles.ConStyles}>
            <TopSelect arrayOfData={this.availableFilesArray} onViewChange={this.ViewChange} radioView={this.state.view} handleSelect={this.localSelect} localSelect={this.state.localSelected} />
            <TopBar pageArray={this.state.pageArray} select={this.state.selected} handleSelect={this.Select} handleLowerChange={onLowerChange} handleUpperChange={onUpperChange} handleSingleChange={onSingleChange} clickSubmit={this.SubmitClick} clickHome={this.HomeClick}/>
            {this.state.visable && <FigTable table={this.state.table} /> }            
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
        </div>
    );

    }
}

function onLowerChange(value) {
  console.log(value);
  return value;
}

function onUpperChange(value) {
  console.log(value);
  return value;
}

function onSingleChange(value) {
  console.log(value);
  return value;
}





export default App;
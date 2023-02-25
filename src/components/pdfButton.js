import React from 'react';
import ReactToPrint from 'react-to-print';
import DataComponent from './DataComponent';
class PdfComponent extends React.Component {
    
    render() {
      return (
        <div>
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button className="btt" >Print to PDF!</button>}
          />
          <div className="inv">
          <DataComponent ref={(response) => (this.componentRef = response)} />
          </div>
         
        </div>
      );
    }
}
export default PdfComponent; 
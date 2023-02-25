
import ReactToPrint from 'react-to-print';
import DataComponent from './DataComponent';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";

function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const navigate = useNavigate();
    const token = localStorage.getItem("jwt");

    useEffect(() => {
      if (!token) {
        navigate('/');
      }
    }, [navigate, token]);

    if (!token) {
      return null;
    }
    return <Component {...props} />;
  };
}

class PdfComponent extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => <button className="btt">Print to PDF!</button>}
        />
        <div className="inv">
          <DataComponent ref={(response) => (this.componentRef = response)} />
        </div>
      </div>
    );
  }
}

export default withAuth(PdfComponent);
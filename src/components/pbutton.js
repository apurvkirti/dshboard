import React from "react";
import PDFFile from './pdf';
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function Pbutton() {
  return (
    
    <div>
      <PDFDownloadLink document={<PDFFile />} filename="FORM">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}



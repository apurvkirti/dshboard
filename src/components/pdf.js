
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Page, Text,Document, StyleSheet } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },

  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  // added new
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "30%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    backgroundColor: "#bfbfbf",
    color: "#424242",
    fontSize: 12,
    padding: 5,
    fontWeight: "bold",
  },
  tableCol: {
    width: "70%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    fontSize: 10,
    padding: 0,
  },
});

const PDFFile = () => {
    const jwt = localStorage.getItem("jwt");
    const [data, setData] = useState([]);
    const vardata = [0,0,0];
    useEffect(() => {
      const apiUrl = `http://localhost:3000/api/getCluster/?form_Id=1001&cluster=PATNA`;
      const headers = {
        Authorization: `Bearer ${jwt}`,
      };
      axios
        .get(apiUrl, { headers })
        .then((response) => {
          setData(response.data);
        //   console.log(data[0].Cluster);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [jwt]);


  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>ITI Name</Text>
              <Text style={styles.tableCol}>Govt. ITI Motihari Sadar , East Champaran</Text>
              <Text style={styles.tableCol}>Govt. ITI Chakiya , East Champaran</Text>
              <Text style={styles.tableCol}>Govt. Women ITI Hathua , Gopalganj</Text>
              <Text style={styles.tableCol}>Govt. ITI Sheohar</Text>
              <Text style={styles.tableCol}>Govt. ITI Siwan Sadar , Siwan</Text>
              <Text style={styles.tableCol}>Govt. ITI Bettiah , West Champaran</Text>
              <Text style={styles.tableCol}>Govt. ITI Narkatiyaganj , West Champaran</Text>
            
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Basic Infra</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Flooring</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>False Ceiling</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Internal Painting</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Windows</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Doors</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Aluminium Partition</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>AC</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>MCB</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Networking</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>LT Panel</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Electric Supply</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>UPS</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>External Painting</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Cleaning</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
              <Text style={styles.tableCol}> {( data && data.length > 1)?data[0].Flooring:vardata[0]}</Text>
            </View>
          </View>
        </View>
      </Page>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Tata Technology
        </Text>

        <Text style={styles.text}>dsfdsfdsf</Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};
export default PDFFile;


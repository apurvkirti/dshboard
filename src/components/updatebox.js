import React, { useState, useEffect } from "react";
import axios from "axios";

const LastChanges = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/api/lastChanges");
      setData(result.data.tmp_changes);
    };
    fetchData();
  }, []);
  const sortedChanges = data.sort((a, b) => b.changeId - a.changeId);

  // function formatDate(date) {
  //   let d = new Date(date);
  //   let hours = d.getHours();
  //   let minutes = d.getMinutes();
  //   let day = d.getDate();
  //   let month = d.getMonth() + 1;
  //   let year = d.getFullYear();

  //   return `${hours}:${minutes} ${day}st ${month}, ${year}`;
  // }
  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  
    // console.log(formattedDate);
    const dateParts = formattedDate.split(",");
    const finalday = dateParts[0].trim().split(" ");

    return `${dateParts[2].trim()} ${finalday[1].trim()} ${finalday[0].trim()}, ${dateParts[1].trim()}`;
  }

  function helper(str){
    if(str === "yts"){
        return "Yet to Start";
    }else if(str === "wip"){
        return "Work in progress";
    }else if(str === "cpl"){
        return "Completed";
    }else return "NaN";
  }
  function helper2(str){
    let s= str.split("_");
   if(s.length>1) return `${s[0].trim()} ${s[1].trim()}`;
   if(s.length>2) return `${s[0].trim()} ${s[1].trim()} ${s[2].trim()}`;
   if(s.length>3) return `${s[0].trim()} ${s[1].trim()} ${s[2].trim()} ${s[3].trim()}`;
   if(s.length>4) return `${s[0].trim()} ${s[1].trim()} ${s[2].trim()} ${s[3].trim()} ${s[4].trim()}`;
   else return str;
  }

  return (
    <div style={{width: '150px', height: '177px', overflow: 'auto'}}>
      <h3 style={{textAlign:'center'}}>Last Changes:</h3>
      {sortedChanges.map((change) => (
        <div key={change._id}>
          {/* <h3>Change ID: {change.changeId}</h3> */}
          {/* <p>User ID: {change.userId}</p> */}
          {/* <p>User Name: {change.userName}</p> */}
          {/* <p>College Name: {change.collegeName}</p> */}
          {/* <p>Spec: {change.spec}</p> */}
          {/* <p>Status: {change.status}</p> */}
          {/* <p>Form ID: {change.formId}</p> */}
          {/* <h4>Changes:</h4> */}
          {Object.keys(change.changes).map((key) => (
            <div key={key} >
               {/* eslint-disable-next-line   */}
              <marquee  width="100%" direction="left"  scrollamount="3" >
                Updated {helper2(key)} to "{helper(change.changes[key][2])}" of college:{" "}
                {change.collegeName} at {formatDate(change.dateUpdate)}
              </marquee>
            </div>
          ))}
          {/* <p>Date Update: {change.dateUpdate}</p> */}
        </div>
      ))}
    </div>
  );
};

export default LastChanges;

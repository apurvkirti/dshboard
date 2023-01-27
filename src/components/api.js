
//     const [data, setData] = useState({});
//     useEffect(() => {
//       const apiUrl = `http://localhost:3000/api/dataDashboard/?form_Id=1001`;
//       const headers = {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTY3NDczNDM5Mn0.QOlymyyu-XPFTdryPa6EeLAKlk-WYSGYgz8XAn8iQQs",
//       };
//       axios
//         .get(apiUrl, { headers })
//         .then((response) => {
//           setData(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }, []);

//     const dataa = [
//         { name: 'Total', value: data.tot },
//         { name: 'Work in Progress', value: data.wip },
//         { name: 'Completed', value: data.cpl },
//         { name: 'Yet to Start', value: data.yts },
//         // { name: 'May', value: 50 }
//       ]
    

//     return (
//       <BarChart width={600} height={300} data={dataa}>
//         <XAxis dataKey="name"/>
//         <YAxis/>
//         <CartesianGrid strokeDasharray="3 3"/>
//         <Tooltip/>
//         <Bar dataKey="value" fill="#8884d8"/>
        
//         <Bar dataKey="value" 
//      isAnimationActive={false}
//      style={(data) => {
//         let color = '#f44336';
//         if(data.name === 'Total') color = '#f44336';
//         if(data.name === 'February') color = '#9c27b0';
//         if(data.name === 'March') color = '#3f51b5';
//         if(data.name === 'April') color = '#03a9f4';
//         // if(data.name === 'May') color = '#4caf50';
//         return { fill: color }
//      }}
// />

  

//         </BarChart>
//   );

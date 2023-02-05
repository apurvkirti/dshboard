// import React, { useRef, useState } from "react";
// import html2canvas from "html2canvas";
// import Login from "../Login"

// const Screenshot = () => {
//   const targetRef = useRef(null);
//   const [screenshot, setScreenshot] = useState(null);

//   const handlescreenClick = () => {
//     html2canvas(targetRef.current).then(canvas => {
//       const dataURL = canvas.toDataURL();
//       setScreenshot(dataURL);
//       const link = document.createElement("a");
//       link.download = "screenshot.png";
//       link.href = dataURL;
//       link.click();
//     });
//   };

//   return (
//     <div>
//       <div ref={targetRef}>
//         {<Login/>}
//       </div>
//       <button onClick={handlescreenClick}>Take Screenshot</button>
//     </div>
//   );
// };

// export default Screenshot;

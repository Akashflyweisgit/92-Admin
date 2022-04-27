import React from "react";
// import ReactDOM from "react-dom";
import FileViewer from "react-file-viewer";
// import file from 'simple.pdf'
import img from './sample.pdf'
// import "./styles.css";

// const file = {img}
const type = "pdf";

const onError = e => {

  console.log(e, "error in file-viewer");

};



// export function ViewLegalForm() {

//   return (
//          <FileViewer fileType={type} filePath={img} onError={onError} />
//    );
// }
const ViewLegalForm = () => {
    
    return (
        <>
           <FileViewer fileType={type} filePath={img} onError={onError} />
        </>
    )
}
export default ViewLegalForm;


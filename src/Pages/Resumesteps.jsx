import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Resumesteps() {
  return (
    <>
      <div style={{minheight:'90vh'}} className='mt-5'>
        <h1 className='text-center'>Create an ATS Friendly Resume in Minutes with AI</h1>
        <div className='container mt-5'>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4 rounded p-5 shadow text-center">
              <IoDocumentTextOutline className='fs-1 text-primary mb-3' />
              <h4>Add Your Details</h4>
              <p>Our AI will generate skills and Summary</p>
              <h5>Step 1</h5>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 rounded p-5 shadow text-center">
              <FaFileDownload  className='fs-1 text-danger mb-3' />
              <h4>Download Your Resume</h4>
              <p>Download CV as PDF and start applying</p>
              <h5>Step 2</h5>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Link to={'/form'} style={{backgroundColor:'#714a2f'}} className='btn text-light'>
          LET'S START
          </Link>
        </div>
      </div>
    </>
  )
}

export default Resumesteps

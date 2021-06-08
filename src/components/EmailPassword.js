import React from 'react'
import { Link } from 'react-router-dom'

function EmailPassword() {
    return (
        <>
            <div className="d-flex align-items-center flex-wrap ">
        <h1 className="fw-light">Email and password</h1>
        <Link /*to="/Gallery"*/ ><h6 style={{marginLeft:"16px", fontSize: "14px", color:"#4737FF"}}><i class="fas fa-edit"></i> Edit</h6></Link>  
        </div>
        <div className="row mt-5">
            <div className="col-sm-3">
                <h6>Email</h6>
            </div>
            <div className="col-sm-9">
                <p>johndoe@gmail.com</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Old password</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Enter old password</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>New password</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Enter new password</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Confirm password</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Retype password</p>
            </div>
        </div>
        </>
    )
}

export default EmailPassword

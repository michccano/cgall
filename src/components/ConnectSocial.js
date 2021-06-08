import React from 'react'
import { Link } from 'react-router-dom'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
function ConnectSocial() {
    return (
        <>
    <div className="d-flex align-items-center flex-wrap mt-5">
        <h1 className="fw-light">Connected Social Accounts</h1>
        <Link /*to="/Gallery"*/ ><h6 style={{marginLeft:"16px", fontSize: "14px", color:"#4737FF"}}><i class="fas fa-edit"></i> Edit</h6></Link>  
        </div>
        <div className="row mt-5">
            <div className="col-sm-3 align-self-center">
                <h6><i class="fab fa-facebook"></i> Facebook</h6>
            </div>
            <div className="col-sm-9">
            <FormControlLabel
                value="start"
                control={<Switch color= "primary" />}
            />
            </div>
        </div>
        
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6><i class="fab fa-google"></i> Google</h6>
            </div>
            <div className="col-sm-9">
            <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
            />
            </div>
        </div>
        
        </>
    )
}

export default ConnectSocial

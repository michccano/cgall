import React from 'react'
import { Link } from 'react-router-dom'

function Social_link() {
    return (
        <>
        <div className="d-flex align-items-center flex-wrap pt-5">
        <h1 className="fw-light">Social Link</h1>
        <Link /*to="/Gallery"*/  ><h6 style={{marginLeft:"16px", fontSize: "14px", color:"#4737FF"}}><i class="fas fa-edit"></i> Edit</h6></Link>  
        </div>
        <div className="row mt-5">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fas fa-globe"></i>&nbsp; Website</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Website URL</p>
            </div>
        </div>
        
        <div className="row">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fab fa-instagram"></i> Instagram</h6>
            </div>
            <div className="col-sm-9">
                <p>johndoe123</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fab fa-twitter"></i>&nbsp; Twitter</h6>
            </div>
            <div className="col-sm-9">
                <p>johndoetweets</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fab fa-youtube"></i>&nbsp; Youtube</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Channel URL</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fab fa-discord"></i>&nbsp; Discord</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Include #Code</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fab fa-twitch"></i>&nbsp; Twitch</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Twitch Username</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fab fa-tiktok"></i>&nbsp; Tiktok</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Tiktok Username</p>
            </div>
        </div>
        
        </>
    )
}

export default Social_link

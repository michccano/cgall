import React from 'react'
import { Link } from 'react-router-dom'


function Basic_info() {
    
    

    return (
        <>
        <div className="basic_info">
        <div className="d-flex align-items-center flex-wrap ">
        <h1 className="fw-light">Basic Info</h1>
        <Link   /*to="/Gallery"*/  ><h6 style={{marginLeft:"16px", fontSize: "14px", color:"#4737FF"}}><i class="fas fa-edit"></i> Edit</h6></Link>  
        </div>
        <div className="row mt-5">
            <div className="col-sm-3">
                <h6>Name</h6>
            </div>
            <div className="col-sm-9">
                <p>John Doe</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Username</h6>
            </div>
            <div className="col-sm-9">
                <p>@johndoe123</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Custom URL</h6>
            </div>
            <div className="col-sm-9">
                <p>chain.gallery/johndoe123</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Short Bio</h6>
            </div>
            <div className="col-sm-9">
                <p>Lorem mi velit at faucibus magna in integer quis. Vitae urna morbi libero, nibh duis risus. Habitant amet, amet, sem aliquet velit ullamcorper aenean eleifend. Malesuada nec aliquet.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Avatar</h6>
            </div>
            <div className="col-sm-9">
                <div className="w-100">
                <img src="/img/pro_pic2.png" className="w-auto rounded-circle" alt="" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Banner</h6>
            </div>
            <div className="col-sm-9">
            <div className="w-100">
                <img src="/img/cover.png" className="w-100" alt="" />
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Basic_info

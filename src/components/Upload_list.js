import React from "react";
import Button from "@material-ui/core/Button";
import Preview_card from "./Preview_card";

function Upload_list() {
    function one_go(){
        document.getElementById("upload_list").style.display="none";
        document.getElementById("upload_list2").style.display="block";
        loading_time();
    }
    function fewSec() {
        document.getElementById("upload_list2").style.display = "none";
    }
    function fewSec2() {
        document.getElementById("upload_list3").style.display = "block";
    }
    function fewSec3() {
        document.getElementById("upload_list3").style.display = "none";
        
    }
    function fewSec4(){
        document.getElementById("upload_list4").style.display = "block";
    }

    function loading_time() {
        setTimeout(() => {
            fewSec();
        }, 2000);

        setTimeout(() => {
            fewSec2();
        }, 2000);

        setTimeout(() => {
            fewSec3();
        }, 4000);

        setTimeout(() => {
            fewSec4();
        }, 4000);
        

    }

    return (
        <>
            <div className="upload_list" id="upload_list">
                <div className="all_upload_info">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="fw-light mb-5">List your NFT</h1>
                            <div className="row">
                                <div className="col-sm-4 align-self-center">
                                    <h6>Put on Market</h6>
                                </div>
                                <div className="col-sm-8">
                                    <select
                                        className="px-3"
                                        name=""
                                        id=""
                                        style={{
                                            width: "100%",
                                            backgroundColor: "transparent",
                                            border: "1px solid #DEDEDE",
                                            height: "55px",
                                            color: "#707070",
                                        }}
                                    >
                                        <option value="">Fixed price</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 mt-2">
                                    <h6>Price</h6>
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        type="text"
                                        className="w-100 px-3"
                                        style={{
                                            height: "55px",
                                            border: "1px solid #DEDEDE",
                                        }}
                                        placeholder="0.2"
                                    />
                                </div>
                                <div className="col-sm-2 ps-sm-0">
                                    <select
                                        className="px-3"
                                        name=""
                                        id=""
                                        style={{
                                            width: "100%",
                                            backgroundColor: "transparent",
                                            border: "1px solid #DEDEDE",
                                            height: "55px",
                                        }}
                                    >
                                        <option value="">ETH</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 mt-2"></div>
                                <div className="col-sm-6">
                                    <p
                                        style={{
                                            color: "#707070",
                                        }}
                                    >
                                        Service fee
                                        <h6 className="d-inline-block">
                                            &nbsp;10%
                                        </h6>
                                        <br />
                                        You will receive
                                        <h6 className="d-inline-block">
                                            &nbsp; 0.18 ETH ($418.10)
                                        </h6>
                                    </p>
                                </div>
                                <div className="col-sm-2 ps-sm-0"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 ">
                                    <h6 className="mt-3">Royalties</h6>
                                </div>
                                <div className="col-sm-8">
                                    <nav className="navbar navbar-light  p-0 rounded-0 mb-3">
                                        <form className="container-fluid p-0">
                                            <div className="input-group">
                                                <input
                                                    className="px-3 rounded-0"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="15%"
                                                    style={{
                                                        height: "55px",
                                                        border: "1px solid #DEDEDE",
                                                    }}
                                                />
                                                <span
                                                    className="input-group-text rounded-0"
                                                    id="basic-addon1"
                                                >
                                                    %
                                                </span>
                                            </div>
                                        </form>
                                    </nav>
                                    <p
                                        style={{
                                            color: "#707070",
                                        }}
                                    >
                                        Suggested: 10%, 20%, 30%
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 align-self-center">
                                    <h6>Number of copies</h6>
                                </div>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className="w-100 px-3"
                                        style={{
                                            height: "55px",
                                            border: "1px solid #DEDEDE",
                                        }}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="mt-3 mb-5">Preview</h5>
                            <Preview_card />
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        className="font-weight-light mt-5 mb-5"
                        onClick={one_go}
                        style={{
                            backgroundColor: "#4737FF",
                            color: "#fff",
                            border: "1px solid #red",
                            width: "241px",
                            height: "62px",
                            borderRadius: 0,
                            letterSpacing: "2px",
                            boxShadow: " 0 0 1px 5px #A3B9FF",
                            webkitBoxShadow: " 0 0 1px 5px #A3B9FF",
                        }}
                    >
                        List Your NFT
                    </Button>
                </div>
            </div>
        
                {/* Waiting for confirmation...  */}
            <div
                className="upload_list2"
                id="upload_list2"
                style={{ display: "none" }}
            >
                <div className="all_upload_info">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="fw-light mb-5">Waiting for confirmation...</h1>

                            <p className="mb-5">
                            To list this NFT, please confirm this transaction with your wallet.
                            </p>
                            <h6>Connected to</h6>
                            <button style={{display: "flex", alignItems:"center", justifyContent:"center", backgroundColor:"#f4f4f4", width:"158px", height:"40px", borderRadius:"30px"}}><img className="mb-0" src="/img/green_btn.png" style={{width: "10px"}}/> <p className="mb-0 ms-2">0x01a...234N</p></button>

                            <img
                                    src="/img/loadline.png"
                                    alt=""
                                    style={{ maxWidth: "64px" }}
                                    className="my-4 spining_load"
                                />
                            
                        </div>
                        <div className="col-lg-4">
                            <h5 className="mt-3 mb-5">Preview</h5>
                            <Preview_card />
                        </div>
                    </div>
                </div>
            </div>

   {/* Your NFT is being listed...  */}
   <div
                className="upload_list3"
                id="upload_list3"
                style={{ display: "none" }}
            >
                <div className="all_upload_info">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="fw-light mb-5">Your NFT is being listed...</h1>

                            <p className="mb-5">
                            Your NFT has been submitted to be listed in Market. You may leave this page if you like. It will be live as soon as the transaction is processed.

                            </p>
                            <a href="#" 
                            style={{fontSize:"14px", color:"rgba(0,0,0,50%)", display:"block"}}><i class="fas fa-external-link-alt"></i> &nbsp;  View on Etherscan</a>
                            <img
                                    src="/img/loadline.png"
                                    alt=""
                                    style={{ maxWidth: "64px" }}
                                    className="my-4 spining_load"
                                />
                            
                        </div>
                        <div className="col-lg-4">
                            <h5 className="mt-3 mb-5">Preview</h5>
                            <Preview_card />
                        </div>
                    </div>
                </div>
            </div>


   {/*Your NFT is now listed!  */}
   <div
                className="upload_list4"
                id="upload_list4"
                style={{ display: "none" }}
            >
                <div className="all_upload_info">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="fw-light mb-5">Your NFT is now listed!</h1>

                            <p className="mb-5">
                            Congratulations! Your artwork has been successfully listed in Market.

                            </p>
                        
                            
                            
                            <Button
                        variant="contained"
                        className="fw-light my-3"
                        
                        style={{
                            letterSpacing: "3px",
                            backgroundColor: "rgb(71, 55, 255)",
                            color: "#fff",
                            width: "241px",
                            height: "62px",
                            borderRadius: 0,
                            boxShadow: "rgb(163, 185, 255) 0px 0px 1px 5px",
                        }}
                    >
                        View Your NFT
                    </Button>

                    <a href="#" 
                            style={{fontSize:"14px", color:"rgba(0,0,0,50%)", display:"block"}}><i class="fas fa-external-link-alt"></i> &nbsp;  View on Etherscan</a>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="mt-3 mb-5">Preview</h5>
                            <Preview_card />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Upload_list;

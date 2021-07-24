import React from "react";
import Button from "@material-ui/core/Button";
import Preview_card from "./Preview_card";
function Upload_mint() {
    function go_1(){
        document.getElementById("upload_mint").style.display= "none";
        document.getElementById("upload_mint2").style.display="block";
        loading_time();
    }
    function fewSec() {
        document.getElementById("upload_mint2").style.display = "none";
    }
    function fewSec2() {
        document.getElementById("upload_mint3").style.display = "block";
    }

    function loading_time() {
        setTimeout(() => {
            fewSec();
        }, 2000);

        setTimeout(() => {
            fewSec2();
        }, 2000);
    }

    return (
        <>
            <div className="upload_mint" id="upload_mint">
                <div className="all_upload_info">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="fw-light mb-5">NFT Info</h1>

                            <div className="row">
                                <div className="col-sm-3 align-self-center">
                                    <h6>Title*</h6>
                                </div>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="w-100 px-3"
                                        style={{
                                            height: "55px",
                                            border: "1px solid #DEDEDE",
                                        }}
                                        placeholder="artwork name"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3 mt-2">
                                    <h6>Description</h6>
                                </div>
                                <div className="col-sm-9">
                                    <textarea
                                        type="text"
                                        className="w-100 p-3"
                                        style={{
                                            height: "124px",
                                            border: "1px solid #DEDEDE",
                                            resize: "none",
                                        }}
                                        placeholder="Describe the ideas behind your artwork"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3 align-self-center">
                                    <h6>Format</h6>
                                </div>
                                <div className="col-sm-9">
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
                                        <option value="">Digital NFT</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3 align-self-center">
                                    <h6>Subformat</h6>
                                </div>
                                <div className="col-sm-9">
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
                                        <option value="">Birth</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <h6 className="mt-2">Subformat</h6>
                                </div>
                                <div className="col-sm-9">
                                    <nav className="navbar navbar-light  p-0 rounded-0 mb-3">
                                        <form className="container-fluid p-0">
                                            <div className="input-group">
                                                <span
                                                    className="input-group-text rounded-0"
                                                    id="basic-addon1"
                                                >
                                                    Resolution
                                                </span>
                                                <input
                                                    className="px-3 rounded-0"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="1920x1920"
                                                    style={{
                                                        height: "55px",
                                                        border: "1px solid #DEDEDE",
                                                    }}
                                                />
                                            </div>
                                        </form>
                                    </nav>
                                    <nav className="navbar navbar-light  p-0 rounded-0">
                                        <form className="container-fluid p-0">
                                            <div className="input-group">
                                                <span
                                                    className="input-group-text rounded-0"
                                                    id="basic-addon1"
                                                >
                                                    File size
                                                </span>
                                                <input
                                                    className="px-3 rounded-0"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="30mb"
                                                    style={{
                                                        height: "55px",
                                                        border: "1px solid #DEDEDE",
                                                    }}
                                                />
                                            </div>
                                        </form>
                                    </nav>
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
                        onClick={go_1}
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
                        MINT Your NFT
                    </Button>
                </div>
            </div>


              {/* mint your NFT */}

            <div
                className="upload_mint2"
                id="upload_mint2"
                style={{ display: "none" }}
            >
                <div className="all_upload_info">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="fw-light mb-5">Mint your NFT</h1>

                            <p className="mb-5">
                            To continue, please confirm this transaction with your wallet. <br/>
This will sign your wallet as the original creator of the NFT.
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


              {/*Your NFT is now minted! */}

            <div
                className="upload_mint3"
                id="upload_mint3"
                style={{ display: "none" }}
            >
                <div className="all_upload_info">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="fw-light mb-5">Your NFT is now minted!</h1>

                            <p className="mb-5">
                            Congratulations! Your artwork has officially been minted as an NFT on the Ethereum blockchain.</p>
                            <Button
                        variant="contained"
                        className="fw-light mt-5"
                        
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
                        List Your NFT
                    </Button>

                            
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

export default Upload_mint;

import React from "react";
import Button from "@material-ui/core/Button";
import Artdetailtab from "./Artdetailtab";
function Artdetail() {
    return (
        <>
            <section className="art_detail">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Here goes the artwork name</h1>
                            <div className="art_profile">
                                <div className="art_pro_img">
                                    <img src="/img/profile_demo.png" alt="" />
                                </div>
                                <div className="art_pro_name">
                                    <h5>@artistname</h5>
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-sm-4">
                                    <p>Reserve Price</p>
                                    <h2>2.00 ETH</h2>
                                    <p>$3,428.04</p>
                                </div>
                                <div className="col-sm-8">
                                    <p className="mb-4">
                                        Augue aenean turpis diam in nulla ac
                                        dignissim morbi. Consequat tortor
                                        aliquam sodales tellus.
                                    </p>
                                    <a href="#">
                                        Learn more about making an offer
                                    </a>
                                </div>
                            </div>
                            <Button
                                variant="contained"
                                className="font-weight-light mt-4 mb-5"
                                style={{
                                    backgroundColor: "#4737FF",
                                    color: "#fff",
                                    border: "1px solid #red",
                                    padding: "6px 60px",
                                    borderRadius: 0,
                                    letterSpacing: "2px",
                                    width: "100%",
                                    boxShadow: " 0 0 1px 5px #A3B9FF",
                                    webkitBoxShadow: " 0 0 1px 5px #A3B9FF",
                                }}
                            >
                                SIGN UP TO MAKE AN OFFER
                            </Button>
                            <ul
                                className="d-flex"
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                }}
                            >
                                <li className="mr-3">
                                    <i class="fas fa-heart"></i> 17
                                </li>
                                <li className="mr-3">
                                    <i class="fas fa-comment"></i> 53
                                </li>
                                <li className="mr-3">
                                    <i class="fas fa-eye"></i>138
                                </li>
                                <li className="mr-3">
                                    <i class="fas fa-share-alt"></i> Share
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <Artdetailtab />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Artdetail;

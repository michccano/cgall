import React from "react";
import Button from "@material-ui/core/Button";

function Upload_NFT() {
    return (
        <>
            <div className="upload_nft">
                <h1 className="fw-light">Upload an NFT </h1>

                <div
                    className="uploading my-5  p-5 text-center"
                    style={{
                        backgroundColor: "#f4f4f4",
                        maxWidth: "627px",
                        border: "2px dashed #DEDEDE ",
                    }}
                >
                    <div
                        className="upload_img "
                        style={{
                            width: "51px",
                            margin: "0 auto",
                        }}
                    >
                        <img src="/img/Upload.png" alt="" width="51px" />
                    </div>
                    <p className="mb-5">
                        Upload a PNG, JPG or MP4 video. <br /> Maximum file size
                        of 50MB.
                    </p>
                    <div className="d-flex justify-content-center flex-wrap">
                        <p>Drag and drop a file here or &nbsp;</p>
                        <Button
                            variant="contained"
                            className="fw-normal"
                            style={{
                                backgroundColor: "#ffffff",
                                color: "#4032E5",
                                border: "1px solid #4032E5",
                                width: "204px",
                                height: "27px",
                                borderRadius: 0,
                                boxShadow: "none",
                            }}
                        >
                            browse File
                        </Button>
                    </div>
                </div>

                <Button
                    variant="contained"
                    disabled
                    className="fw-normal"
                    style={{
                        backgroundColor: "#E0E0E0",
                        color: "#fff",
                        border: "5px solid #F4F4F4",
                        width: "241px",
                        height: "62px",
                        borderRadius: 0,
                        boxShadow: "none",
                    }}
                >
                    Next
                </Button>
            </div>
        </>
    );
}

export default Upload_NFT;

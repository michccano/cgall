import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button, Typography } from "@material-ui/core";
import Facebook_btn from "./Facebook_btn";
import Google_btn from "./Google_btn";

function Reg_Form() {
    const [user, setUser] = useState({
        name: "",
        fullName: "",
        email: "",
        cemail: "",
        password: "",
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    };
    return (
        <>
            <section className="reg_form  bg-white">
                <div className="container">
                    <div
                        className="reg_form_div"
                        style={{
                            maxWidth: "540px",
                            margin: "0 auto",
                        }}
                    >
                        <h1
                            className="py-5"
                            style={{
                                fontWeight: "300",
                                textAlign: "center",
                            }}
                        >
                            Register
                        </h1>
                        <TextField
                            id="filled-basic"
                            label="Username "
                            variant="filled"
                            className="w-100"
                            required
                            // value={user.name}
                            // onChange={handleInputs}
                        />

                        <TextField
                            id="filled-basic"
                            label="Your name (shown to the public)"
                            variant="filled"
                            className="w-100 my-3"
                            required
                            // value={user.fullName}
                            // onChange={handleInputs}
                        />

                        <TextField
                            id="filled-basic"
                            label="Your email"
                            variant="filled"
                            type="email"
                            className="w-100"
                            required
                            // value={user.email}
                            // onChange={handleInputs}
                        />

                        <TextField
                            id="filled-basic"
                            label="Confirm email"
                            variant="filled"
                            type="email"
                            className="w-100 my-3"
                            required
                            // value={user.cemail}
                            // onChange={handleInputs}
                        />

                        <TextField
                            id="filled-basic"
                            label="Password"
                            variant="filled"
                            type="Password"
                            className="w-100 mb-3"
                            required
                            // value={user.password}
                            // onChange={handleInputs}
                        />

                        <p
                            style={{
                                fontSize: "12px",
                                fontWeight: "300",
                            }}
                        >
                            Password must be at least 8 characters and contain 1
                            special character or number.
                        </p>
                        <FormControlLabel
                            value="end"
                            onChange={handleInputs}
                            control={
                                <Checkbox
                                    style={{
                                        transform: "scale(.7)",
                                        paddingRight: "1px",
                                    }}
                                    color="primary"
                                />
                            }
                            label={
                                <Typography
                                    style={{
                                        fontSize: "12px",
                                        color: "#707070",
                                    }}
                                >
                                    Stay updated with Chain Gallery.
                                </Typography>
                            }
                            labelPlacement="end"
                        />
                        <Button
                            variant="contained"
                            className="font-weight-light mt-2 mb-4"
                            style={{
                                backgroundColor: "#4737FF",
                                color: "#fff",
                                border: "1px solid #red",
                                padding: "15px 60px",
                                borderRadius: 0,
                                letterSpacing: "2px",
                                width: "100%",
                                boxShadow: " 0 0 1px 5px #A3B9FF",
                                webkitBoxShadow: " 0 0 1px 5px #A3B9FF",
                            }}
                        >
                            SIGN UP
                        </Button>
                        <p>
                            By signing up, you agree to our{" "}
                            <a
                                href="#"
                                style={{
                                    color: "#4032E5",
                                }}
                            >
                                Terms of Use
                            </a>{" "}
                            and{" "}
                            <a
                                href="#"
                                style={{
                                    color: "#4032E5",
                                }}
                            >
                                Privacy Policy .
                            </a>
                        </p>

                        <h4
                            style={{
                                color: "#707070",
                                textAlign: "center",
                            }}
                        >
                            OR
                        </h4>
                        <Facebook_btn />
                        <Google_btn />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Reg_Form;

import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
        <>
            <section className="Log_in_form mt-sm-5">
                <div className=" px-sm-5 pt-5">
                    <h1 className=" mb-4" style={{
                        fontWeight:"300"
                        
                    }}>Login</h1>
                    
                    <TextField id="filled-basic" label="Your email" variant="filled" className="w-100" />
                    <TextField id="filled-basic" label="Your password" variant="filled" type="password" className="w-100 my-3 " />
                    <div className="row p-0 text-center">
                        <div className="col-md-4">
                            <p>Forgot password?</p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-7">
                            <p className="">Don’t have an account? 
                            <Link to="/Register" style={{color: "unset", textDecoration: 'none' }}>  <a href="#" style={{
                        color: "#4032E5"
                    }}> Sign up</a></Link>
                            </p>
                        </div>
                    </div>
                    <Link to="/Home_login" style={{color: "unset", textDecoration: 'none' }}>
                    <Button
                                variant="contained"
                                className="font-weight-light  mb-4"
                                style={{
                                    backgroundColor: "#4737FF",
                                    color: "#fff",
                                    border: "1px solid #red",
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: 0,
                                    letterSpacing: "2px",
                                    width: "100%",                               
                                }}
                            >
                                Continue
                            </Button>
                    </Link>
                       

                                <h4 style={{
                                    color: '#707070',
                                    textAlign: 'center'
                                }}>OR</h4>
                   <div className="CW_img w-100 mt-4">
                   <Link to="/Home_login" style={{color: "unset", textDecoration: 'none' }}>
                                <Button variant="outlined" style={{
                                    width: "100%",
                                    height: "50px",
                                    backgroundColor: "#1C77F2",
                                    color: "#fff",
                                    borderRadius: "0",
                                    position: "relative",
                                    border: "none",
                                    textTransform: "unset", fontSize: "18px"
                                }}>&nbsp; Continue with Facebook <img style={{
                                    position: "absolute",
                                    left: "13px"
                                }} src="/img/facebook_logo.png" alt="" /> </Button>
                    
                    </Link>
                    </div>
                    <div className="CW_img  w-100 mt-3 mb-4">
                    <Link to="/Home_login" style={{color: "unset", textDecoration: 'none' }}>
                    <Button variant="outlined" style={{
                                    width: "100%",
                                    height: "50px",
                                    backgroundColor: "#fff",
                                    color: "#808080",
                                    borderRadius: "0",
                                    position: "relative",
                                    textTransform: "unset",
                                    fontSize: "18px"
                                }}>Continue with google<img style={{
                                    position: "absolute",
                                    left: "13px"
                                }} src="/img/google_logo.png" alt="" /> </Button>
                                </Link>
                    </div>
                    <p>By logging in, you agree to our <a href="#" style={{
                        color: "#4032E5"
                    }}>Terms of Use</a> and <a href="#" style={{
                        color: "#4032E5"
                    }}>Privacy Policy .</a>
                    </p>
                </div>
            </section>
        </>
    )
}

export default LoginForm

import React from 'react'
import Button from '@material-ui/core/Button';



function Userdetails() {
    return (
        <>

            
            <section className="user_details">
                <div className='container'>
                
                
                <div className="row">
                    <div className="col-md-6">
                        <h1>User Name </h1>

                        <h6>@username</h6>

                        <div className="bio">
                            <p>User bio cras quam blandit scelerisque lorem gravida eget faucibus nisl. Volutpat ac turpis consectetur gravida malesuada lorem.</p>

                        <div className="icons mb-5"> 
                            <i class="fas fa-globe me-3"></i>
                            <i class="fab fa-instagram me-3"></i>
                            <i class="fab fa-twitter me-3"></i>
                            <i class="fab fa-facebook me-3"></i>
                            <i class="fab fa-youtube me-3"></i></div>
                        </div>
                    </div>
                    <div className="col-md-6 text-end merawala">
                    <div className="w-100 mb-5">
                    <Button variant="contained" className="font-weight-light me-2" style={{
                    backgroundColor: "#FFF",
                    color:"#4032E5",
                    border: "1px solid #4032E5"
                    }}>
                    SHARE
                    </Button>
                    <Button variant="contained" className="font-weight-light" style={{
                    backgroundColor: "#4032E5",
                    color:"#ffffff"
                    }}>
                    EDIT PROFILE
                    </Button>
                    </div>
                    <div className="follow w-100 mb-4">
                    <ul >
                        <li> <b>10</b> followers</li>
                        <li> <b>32</b> following</li>
                        <li> <b>9</b> views</li>
                    </ul>
                    </div>
                    
                    <p className="">Joined: April 2021</p>

                    </div>
                </div>
                    
                
                

                </div>
            </section>
        </>
    )
}

export default Userdetails


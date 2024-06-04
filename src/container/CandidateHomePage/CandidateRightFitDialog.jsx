import React from "react";
import candidaterightfit from "../../assets/candidaterightfit.png"


const CandidateRightFitDialog = ({ primaryColor, primaryFontColor }) => {

    return (
        <div className="container-fluid ms-5 me-5" style={{ background: primaryColor, borderRadius: "40px"}}>
            <div className="row">
                <div className="col-md-6 p-5">
                    <h2 className="" style={{ color: primaryFontColor }}>See Right away</h2>
                    <h2 className="" style={{ color: primaryFontColor }}>Wheather candidates</h2>
                    <h2 className="" style={{ color: primaryFontColor }}>are the right fit.</h2>
                    <h6 className="" style={{ color: primaryFontColor }}>
                        Giving you a better pool of qualified candidates to choose from.
                    </h6>

                    
                 {/* please make view more button here*/}
                </div>
                <div className="">
                    <div className="hero-image">
                        <div className="hero-image d-flex justify-content-end">
                            <img src={candidaterightfit} alt="Hero" style={{ width: '100px', height: '100px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidateRightFitDialog;
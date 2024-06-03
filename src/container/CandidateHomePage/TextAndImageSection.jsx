import React from 'react';


const TextAndImageSection = ({ primaryColor, primaryFontColor }) => {
    return (
        <div className="container-fluid h-50" style={{height:"200px",  background:primaryColor }} >
            <div className="row">

                <div className="col-md-6 mt-4" style={{  display: 'flex', flexDirection: 'column' }}>
                    <h2 className="text-center" style={{ color: primaryFontColor }}>Find The Perfect Job For You</h2>
                    <h6 className="text-center" style={{ color: primaryFontColor }}>Search your career opportunity through 12,800 jobs.</h6>
                    {/* Add search functionality here */}
                </div>


                <div className="col-md-6">
                    <img src="your-image-url" alt="Image" className="img-fluid" />
                </div>

            </div>
        </div>
    );
};

export default TextAndImageSection;


import React, { useEffect, useState } from "react";
import Navbar from "../../components/Common/Navbar";
import TextAndImageSection from "./TextAndImageSection";

const CandidateHomePage = ({name}) => {

    const links = [
        { text: 'Home', url: '#' },
        { text: 'Find Job', url: '#' },
        { text: 'Company', url: '#' },
        { text:'Blog', url: '#'}
    ];
    const [primaryColor, setPrimaryColor] = useState('');
    const [primaryFontColor, setPrimaryFontColor] = useState('');

    useEffect(() => {
        // Fetch the CSS variables after component mounts
        const rootStyles = getComputedStyle(document.documentElement);
        setPrimaryColor(rootStyles.getPropertyValue('--primary-color').trim());
        setPrimaryFontColor(rootStyles.getPropertyValue('--primary-font-color').trim());
    }, []);

    return(
        <div>
              {/* Include the Navbar component */}
              <Navbar
                logo="/logo.png"
                links={links}
                primaryFontColor={primaryFontColor}
                primaryColor={primaryColor}
            />
            <TextAndImageSection
                primaryColor={primaryColor}
                primaryFontColor={primaryFontColor}
            />
        </div>
    );
}


export default CandidateHomePage;
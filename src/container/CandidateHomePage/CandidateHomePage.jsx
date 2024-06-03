import React, { useEffect, useState } from "react";
import Navbar from "../../components/Common/Navbar";
import TextAndImageSection from "./TextAndImageSection";
import SearchByCategory from "./SearchByCategory";
const CandidateHomePage = ({name}) => {

    const links = [
        { text: 'Home', url: '#' },
        { text: 'Find Job', url: '#' },
        { text: 'Company', url: '#' },
        { text:'Blog', url: '#'}
    ];
    const [primaryColor, setPrimaryColor] = useState('');
    const [primaryFontColor, setPrimaryFontColor] = useState('');
    const [secondaryFontColor, setSecondaryFontColor] = useState('');
    const [cardColor, setcardColor] = useState('');



    useEffect(() => {
        // Fetch the CSS variables after component mounts
        const rootStyles = getComputedStyle(document.documentElement);
        setPrimaryColor(rootStyles.getPropertyValue('--primary-color').trim());
        setPrimaryFontColor(rootStyles.getPropertyValue('--primary-font-color').trim());
        setSecondaryFontColor(rootStyles.getPropertyValue('--secondary-font-color').trim());
        setcardColor(rootStyles.getPropertyValue('--card-color').trim());

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
            <SearchByCategory
                SecondaryFontColor={secondaryFontColor}
                CardColor={cardColor}
            />
        </div>
    );
}


export default CandidateHomePage;
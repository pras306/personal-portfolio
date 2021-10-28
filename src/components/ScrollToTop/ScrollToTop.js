import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { y: pageYOffset } = useWindowScroll();

    useEffect(() => {
        if(pageYOffset > 400){
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [pageYOffset]);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const renderScroll = () => {
        if(!isVisible) {
            return null;
        } else {
            return (
                <div className="stt">
                    <KeyboardArrowUpIcon className="stt__icon" onClick={handleScrollToTop} />
                </div>
            )
        }
    }

    return (
        <React.Fragment>
            {renderScroll()}
        </React.Fragment>
    );
};

export default ScrollToTop;

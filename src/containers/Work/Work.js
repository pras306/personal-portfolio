import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Work.css';
import ImageCard from '../../components/ImageCard/ImageCard';
import { PROJECT_DETAILS } from '../../constants/Projects';

const Work = () => {
    const renderProjects = PROJECT_DETAILS.map((project) => {
        return <ImageCard key={uuidv4()} imageSrc={project.image} title={project.title} contentTitle={project.contentTitle} content={project.content} footerTitle={project.footerTitle} footerContent={project.footerContent} siteLink={project.siteLink} codeLink={project.codeLink} />
    });


    return (
        <div className="work">
            {renderProjects}
        </div>
    );
};

export default Work;

import React from 'react';

import './Skills.css';
import SkillCard from '../../components/SkillCard/SkillCard';
import { SKILLS } from '../../constants/SkillDetails';

const Skills = () => {
    const renderComponent = SKILLS.map((skill, idx) => {
        return <SkillCard key={idx} image={skill.image} content={skill.content} footerTitle={skill.footerKey} footerContent={skill.footerValue} />
    })

    return (
        <div className="skills">
            {renderComponent}
        </div>
    );
};

export default Skills;

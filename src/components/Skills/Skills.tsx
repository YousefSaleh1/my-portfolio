import OneSkill from '../OneSkill/OneSkill'
import { TSkill } from '../../types/type';
import { useAppContext } from '../../contexts/AppContext';
import SectionTitleAnimation from '../animation/SectionTitleAnimation';


export default function Skills() {

    const { skillsData } = useAppContext();

    return (
        <>
            <div className="container">

                <div className="section-title mb-5">
                    <SectionTitleAnimation>
                        <h1>Skills</h1>
                    </SectionTitleAnimation>
                </div>

                {skillsData?.map((skill: TSkill, index) => {
                    return (
                        <div key={index} className="skills-tag">
                            <div className="title-with-line">
                                <div className="before-line"></div>
                                <h2>{skill.skill_name}</h2>
                                <div className="after-line"></div>
                            </div>
                            <div className="row">
                                {skill.skill_items?.map((item) => (
                                    <div className="col-lg-4 col-md-11 col-sm-11" key={item.id}>
                                        <OneSkill id={item.id} item={item.item} image={item.image} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import OneSkill from '../OneSkill/OneSkill'
import axios from 'axios';
import { TSkill } from '../../types/type';


export default function Skills() {

    const [skillsData, setSkillsData] = useState<TSkill[]>([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/skills", {
                headers: {
                    Accept: "application/json"
                }
            })
            .then((response) => {
                setSkillsData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className="container">
                <div className="section-title mb-5">
                    <h1>Skills</h1>
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

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { TAppContextProps, TEducation, THeroDate, THeroSlider, TProject, TSkill, TTraining } from '../types/type';


const AppContext = createContext<TAppContextProps | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [educationData, setEducationData] = useState<TEducation[]>([]);
    const [title, setTitle] = useState('');
    const [heroSliders, setHeroSliders] = useState<THeroSlider[]>([]);
    const [projects, setProjects] = useState<TProject[]>([]);
    const [skillsData, setSkillsData] = useState<TSkill[]>([]);
    const [trainingData, setTrainingData] = useState<TTraining[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/educations")
            .then(response => setEducationData(response.data.data))
            .catch(error => console.log(error));

        axios.get<THeroDate>('http://127.0.0.1:8000/api/hero', {
            headers: { Accept: 'application/json' }
        })
            .then(response => {
                const data = response.data.data;
                setTitle(data.title);
                setHeroSliders(data.hero_sliders);
            })
            .catch(error => console.error(error));

        axios.get("http://127.0.0.1:8000/api/projects")
            .then(response => setProjects(response.data.data))
            .catch(error => console.error(error));

        axios.get("http://127.0.0.1:8000/api/skills", {
            headers: { Accept: "application/json" }
        })
            .then(response => setSkillsData(response.data.data))
            .catch(error => console.log(error));

        axios.get("http://127.0.0.1:8000/api/trainings", {
            headers: { Accept: "application/json" }
        })
            .then(response => setTrainingData(response.data.data))
            .catch(error => console.log(error))
            .finally(()=>setLoading(false));
    }, []);

    return (
        <AppContext.Provider value={{ educationData, title, heroSliders, projects, skillsData, trainingData, loading }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export { AppProvider, useAppContext };
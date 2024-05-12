export type TEducation = {
    id: number;
    title: string;
    description: string;
    photo: string;
}

export type THeroSlider = {
    id: number;
    photo_slide: string;
    photo_title: string;
}

export type THeroDate = {
    title: string;
    my_cv: string;
    hero_sliders: THeroSlider[];
}

export type TSkillItem = {
    id: number;
    item: string;
    image: string;
}

export type TSkill = {
    id: number;
    skill_name: string;
    skill_items: TSkillItem[];
}

export type TTraining = {
    id: number;
    training_name: string;
    company_name: string;
    description: string;
    company_logo: string;
    company_link: string;
    certificate_link: string;
    recomendation_letter_link: string;
}

export type TProject = {
    id: number;
    title: string;
    description: string;
    published: string;
    demo_link: string;
    github_link: string;
    project_photos: TProjectPhoto[];
    skills: TSkillItem[];
}

export type TProjectPhoto = {
    photo: string;
}

export type TParams = {
    id: string
}
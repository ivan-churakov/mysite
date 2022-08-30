import * as React from 'react';
import {SkillCard} from "./SkillCard";

export const Skills = () => {
    const skills = ['React', 'Redux', 'React Router', 'TypeScript', 'REST', 'GraphQl', 'Axios', 'Sass', 'TailwindCSS', 'Webpack', 'Gulp', 'HTML', 'CSS', 'БЭМ', 'npm', 'yarn', 'Git']

    const printCard = () => {
        let cards: any = [];
        skills.map((skill: string) => {
            cards.push(<SkillCard title={skill}/>);
        })
        return cards;
    }
    return (
        <div className='container mx-auto h-full p-8 mt-10'>
            <h2 className="font-bold text-3xl w-fit pb-2 border-b-2 border-black/90">Знаю</h2>
            <div className="flex flex-row flex-wrap gap-4 mt-10">
                {printCard()}
            </div>
        </div>
    );
};
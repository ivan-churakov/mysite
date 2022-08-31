import * as React from 'react';
import {SkillCard} from "./SkillCard";
import hh from './assets/hh.png'

export const Skills = () => {
    const skills = ['React', 'Redux', 'React Router', 'TypeScript', 'JavaScript', 'REST', 'GraphQl', 'Axios', 'Sass', 'TailwindCSS', 'Webpack', 'Gulp', 'HTML', 'CSS', 'БЭМ', 'npm', 'yarn', 'Git', 'Vite', 'Figma']

    const printCard = () => {
        let cards: any = [];
        skills.map((skill: string) => {
            cards.push(<SkillCard title={skill}/>);
        })
        return cards;
    }
    return (
        <div className='container mx-auto h-fit px-8 my-40'>
            <div className="flex flex-row items-start gap-12">
                <div className="flex flex-row flex-wrap gap-4 mt-10">
                    {printCard()}
                </div>
                <div className="mt-10 bg-white flex justify-center items-center rounded-2xl shadow-[21px_21px_42px_#d4d4d4,-21px_-21px_42px_#ffffff]">
                    <div className="bg-white flex justify-center items-center m-12 w-32 h-32 rounded-xl shadow-[inset_14px_14px_30px_#d4d4d4,inset_-14px_-14px_30px_#ffffff] z-10">
                        <a href='https://hh.ru/resume/b83d417aff08eb21980039ed1f5743796e6b6f' className='cursor-pointer'>
                            <img src={hh} alt="hh резюме Иван Чураков" className="w-16 rounded-full shadow-[21px_21px_42px_#d4d4d4,-21px_-21px_42px_#ffffff]"/>
                        </a>
                    </div>
                    <div className="bg-white w-32 h-32 rounded-xl shadow-[inset_17px_17px_33px_#d4d4d4,inset_-17px_-17px_33px_#ffffff] z-0 absolute animate-ping opacity-50"></div>
                </div>
            </div>
        </div>
    );
};
import loon from './assets/video.mp4'
import day from './assets/weather-day.webp'
import dayM from './assets/weather-day-m.webp'
import dayP from './assets/weather-day.png'
import night from './assets/weather-night.webp'
import nightM from './assets/weather-night-m.webp'
import nightP from './assets/weather-night.png'
import surveyP from './assets/survey.png'
import surveyM from './assets/survey-m.webp'
import survey2P from './assets/survey2.png'
import survey2M from './assets/survey2-m.webp'
import github from './assets/GitHub.png'
import vk from './assets/vk.png'
import telegram from './assets/telegram.png'
import sinomobi1 from './assets/sinomobi1.webp'
import sinomobi1P from './assets/sinomobi1.png'
import sinomobi1M from './assets/sinomobi1-m.webp'
import sinomobi2 from './assets/sinomobi2.webp'
import sinomobi2P from './assets/sinomobi2.png'
import sinomobi2M from './assets/sinomobi2-m.webp'
import plexcar1 from './assets/plexcar1.webp'
import plexcar1P from './assets/plexcar1.png'
import plexcar1M from './assets/plexcar1-m.webp'
import plexcar2 from './assets/plexcar2.webp'
import plexcar2P from './assets/plexcar2.png'
import plexcar2M from './assets/plexcar2-m.webp'
import email from './assets/email.png'
import phone from './assets/phone.png'
import arrow from './assets/arrow.png'
import {Skills} from "./Skills";
import {MeCard} from "./MeCard";
import * as React from "react";
import hh from "./assets/hh.png";

function App() {

    return (
        <>
            <div className="w-full h-full relative flex flex-col justify-center items-center">
                <div className="z-10 p-8 sm:p-10 md:p-14 rounded-xl sm:rounded-2xl md:rounded-3xl text-white bg-white/10 backdrop-blur-md">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium">Чураков Иван</h1>
                    <h2 className="font-bold text-xl sm:text-2xl md:text-3xl w-fit opacity-80 ml-auto md:mt-2">Frontend developer</h2>
                </div>
                <video autoPlay muted loop className="w-full h-full absolute top-0 object-cover z-0">
                    <source src={loon}/>
                </video>
                <img src={arrow} alt="arrow" className="w-8 z-10 opacity-60 animate-bounce absolute bottom-10 left-[calc(100% - 16px)]"/>
            </div>
            <Skills/>
            <MeCard/>
            <div className="container mx-auto h-fit mt-20 sm:mt-32 mb-20 sm:mb-40 px-4 sm:px-8 flex flex-col gap-12">
                <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-center w-fit py-2 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-[inset_7px_7px_14px_#e6e6e6,inset_-7px_-7px_14px_#ffffff] md:shadow-[inset_8px_8px_16px_#d9d9d9,inset_-8px_-8px_16px_#ffffff]">Мои работы</h3>
                <div className='flex flex-col lg:flex-row flex-wrap gap-12'>
                    <div
                        className="w-full lg:w-[500px] min-h-full p-6 sm:p-8 flex flex-col flex-1 rounded-xl bg-white shadow-[10px_10px_21px_#d9d9d9,-10px_-10px_21px_#ffffff]">
                        <div className="relative lg:h-60 xl:h-80 2xl:h-96 mb-4 cursor-pointer">
                            <a href="https://github.com/ivan-churakov/show-weather">
                                <picture>
                                    <source
                                        type="image/webp"
                                        media="(max-width: 640px)"
                                        srcSet={dayM}
                                    />
                                    <source
                                        type="image/png"
                                        media="(max-width: 640px)"
                                        srcSet={dayP}
                                    />
                                    <source
                                        type="image/webp"
                                        media="(min-width: 640px)"
                                        srcSet={day}
                                    />
                                    <source
                                        type="image/png"
                                        media="(min-width: 640px)"
                                        srcSet={dayP}
                                    />
                                    <img src={day} alt="Приложение погоды, день"
                                         className='rounded-lg w-full h-full object-cover'/>
                                </picture>
                                <picture>
                                    <source
                                        type="image/webp"
                                        media="(max-width: 640px)"
                                        srcSet={nightM}
                                    />
                                    <source
                                        type="image/png"
                                        media="(max-width: 640px)"
                                        srcSet={nightP}
                                    />
                                    <source
                                        type="image/webp"
                                        media="(min-width: 640px)"
                                        srcSet={night}
                                    />
                                    <source
                                        type="image/png"
                                        media="(min-width: 640px)"
                                        srcSet={nightP}
                                    />
                                    <img src={night} alt="Приложение погоды, ночь"
                                         className='rounded-lg w-full h-full object-cover absolute top-0 opacity-0 hover:opacity-100 transition-opacity'/>
                                </picture>
                            </a>
                        </div>
                        <a href="https://github.com/ivan-churakov/show-weather"
                           className="font-bold text-lg cursor-pointer">Weather</a>
                        <p className="font-medium">Приложение погоды, написано на React/Redux, TailwindCSS. Работа с открытым
                            API <a
                                href='https://openweathermap.org/'
                                className='font-bold hover:opacity-70'>
                                OpenWeather.
                            </a> Требует разрешения к местоположению
                        </p>
                    </div>
                    <div
                        className="w-full lg:w-[500px] min-h-full p-6 sm:p-8 flex flex-col flex-1 rounded-xl bg-white shadow-[10px_10px_21px_#d9d9d9,-10px_-10px_21px_#ffffff]">
                        <div className="relative lg:h-60 xl:h-80 2xl:h-96 mb-4 cursor-pointer">
                            <a href="https://github.com/ivan-churakov/survey-maker-front">
                                <picture>
                                    <source
                                        type="image/webp"
                                        media="(max-width: 640px)"
                                        srcSet={surveyM}
                                    />
                                    <source
                                        type="image/png"
                                        media="(max-width: 640px)"
                                        srcSet={surveyP}
                                    />
                                    <source
                                        type="image/png"
                                        media="(min-width: 640px)"
                                        srcSet={surveyP}
                                    />
                                    <img src={surveyP} alt="Опросник" className='rounded-lg w-full h-full object-cover'/>
                                </picture>
                                <picture>
                                    <source
                                        type="image/webp"
                                        media="(max-width: 640px)"
                                        srcSet={survey2M}
                                    />
                                    <source
                                        type="image/png"
                                        media="(max-width: 640px)"
                                        srcSet={survey2P}
                                    />
                                    <source
                                        type="image/png"
                                        media="(min-width: 640px)"
                                        srcSet={survey2P}
                                    />
                                    <img src={survey2P} alt="Опросник с вопросами"
                                         className='rounded-lg w-full h-full object-cover absolute top-0 opacity-0 hover:opacity-100 transition-opacity'/>
                                </picture>
                            </a>
                        </div>
                        <a href='https://github.com/ivan-churakov/survey-maker-front'
                           className="font-bold text-lg cursor-pointer">Survey Maker</a>
                        <p className="font-medium">Опросник по типу google forms, написан на React/Redux, React Router,
                            TypeScript, Sass. Работа с API с помощью REST</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row flex-wrap gap-12'>
                    <div
                        className="w-full lg:w-[500px] min-h-full p-6 sm:p-8 flex flex-col flex-1 rounded-xl bg-white shadow-[10px_10px_21px_#d9d9d9,-10px_-10px_21px_#ffffff]">
                        <div className="relative lg:h-48 xl:h-64 2xl:h-80 mb-4 cursor-pointer">
                            <a href="https://www.sinomobi.express/">
                                <picture>
                                    <source
                                        type="image/webp"
                                        media="(max-width: 640px)"
                                        srcSet={sinomobi1M}
                                    />
                                    <source
                                        type="image/png"
                                        media="(max-width: 640px)"
                                        srcSet={sinomobi1P}
                                    />
                                    <source
                                        type="image/webp"
                                        media="(min-width: 640px)"
                                        srcSet={sinomobi1}
                                    />
                                    <source
                                        type="image/png"
                                        media="(min-width: 640px)"
                                        srcSet={sinomobi1P}
                                    />
                                    <img src={sinomobi1} alt="Sinomobi"
                                         className='rounded-lg w-full h-full object-cover'/>
                                </picture>
                                <picture>
                                    <source
                                        type="image/webp"
                                        media="(max-width: 640px)"
                                        srcSet={sinomobi2M}
                                    />
                                    <source
                                        type="image/png"
                                        media="(max-width: 640px)"
                                        srcSet={sinomobi2P}
                                    />
                                    <source
                                        type="image/webp"
                                        media="(min-width: 640px)"
                                        srcSet={sinomobi2}
                                    />
                                    <source
                                        type="image/png"
                                        media="(min-width: 640px)"
                                        srcSet={sinomobi2P}
                                    />
                                    <img src={sinomobi2} alt="Sinomobi other page"
                                         className='rounded-lg w-full h-full object-cover absolute top-0 opacity-0 hover:opacity-100 transition-opacity'/>
                                </picture>
                            </a>
                        </div>
                        <a href="https://www.sinomobi.express/"
                           className="font-bold text-lg cursor-pointer">Sinomobi</a>
                        <p className="font-medium">Занимался версткой страниц для сайта по макету в фигме, работал в команде
                        </p>
                    </div>
                    <div
                        className="w-full lg:w-[500px] min-h-full p-6 sm:p-8 flex flex-col flex-1 rounded-xl bg-white shadow-[10px_10px_21px_#d9d9d9,-10px_-10px_21px_#ffffff]">
                        <div className="relative lg:h-48 xl:h-64 2xl:h-80 mb-4 cursor-pointer">
                            <a href="https://github.com/ivan-churakov/survey-maker-front">
                                <picture>
                                    <source
                                        type="image/webp"
                                        media="(max-width: 640px)"
                                        srcSet={plexcar1M}
                                    />
                                    <source
                                        type="image/png"
                                        media="(max-width: 640px)"
                                        srcSet={plexcar1P}
                                    />
                                    <source
                                        type="image/webp"
                                        media="(min-width: 640px)"
                                        srcSet={plexcar1}
                                    />
                                    <source
                                        type="image/png"
                                        media="(min-width: 640px)"
                                        srcSet={plexcar1P}
                                    />
                                    <img src={plexcar1} alt="Plexcar" className='rounded-lg w-full h-full object-cover'/>
                                </picture>
                                <picture>
                                    <source
                                        type="image/webp"
                                        media="(max-width: 640px)"
                                        srcSet={plexcar2M}
                                    />
                                    <source
                                        type="image/png"
                                        media="(max-width: 640px)"
                                        srcSet={plexcar2P}
                                    />
                                    <source
                                        type="image/webp"
                                        media="(min-width: 640px)"
                                        srcSet={plexcar2}
                                    />
                                    <source
                                        type="image/png"
                                        media="(min-width: 640px)"
                                        srcSet={plexcar2P}
                                    />
                                    <img src={plexcar2} alt="Plexcar other picture"
                                         className='rounded-lg w-full h-full object-cover absolute top-0 opacity-0 hover:opacity-100 transition-opacity'/>
                                </picture>
                            </a>
                        </div>
                        <a href='https://github.com/ivan-churakov/survey-maker-front'
                           className="font-bold text-lg cursor-pointer">Plexcar</a>
                        <p className="font-medium">Занимался созданием сайта в команде вместе с дизайнерами и бекендерами</p>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full shadow-[16px_-16px_42px_#dedede,-16px_16px_42px_#ffffff]">
                <div className="container mx-auto p-4 sm:p-8 flex flex-row justify-evenly sm:justify-center sm:gap-6">
                    <a href="https://github.com/ivan-churakov">
                        <img src={github} alt="GitHub" className='w-10 sm:w-14'/>
                    </a>
                    <a href="https://vk.com/iseeyouforever">
                        <img src={vk} alt="vk" className='w-10 sm:w-14 rounded-full'/>
                    </a>
                    <a href="https://t.me/Ivanchurakof">
                        <img src={telegram} alt="telegram" className='w-10 sm:w-14'/>
                    </a>
                    <a href="mailto:ivanchurakof@gmail.com">
                        <img src={email} alt="ivanchurakof@gmail.com" className='w-10 sm:w-14'/>
                    </a>
                    <a href="tel:+79309208901">
                        <img src={phone} alt="+79309208901" className='w-10 sm:w-14'/>
                    </a>
                    <a href='https://hh.ru/resume/b83d417aff08eb21980039ed1f5743796e6b6f'>
                        <img src={hh} alt="hh резюме Иван Чураков" className="w-10 sm:w-14 rounded-full"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default App

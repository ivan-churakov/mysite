import loon from './assets/video.mp4'
import day from './assets/weather-day.png'
import night from './assets/weather-night.png'
import survey from './assets/survey.png'
import survey2 from './assets/survey2.png'
import github from './assets/GitHub.png'
import vk from './assets/vk.png'
import telegram from './assets/telegram.png'
import {Skills} from "./Skills";
import {MeCard} from "./MeCard";

function App() {

    return (
        <>
            <div className="w-full h-full relative flex flex-col justify-center items-center">
                <div className="z-10 p-14 rounded-3xl text-white bg-white/10 backdrop-blur-md">
                    <h1 className="text-6xl font-medium">Чураков Иван</h1>
                    <h2 className="font-bold text-3xl w-fit opacity-80 ml-auto mt-2">Frontend developer</h2>
                </div>
                <video autoPlay muted loop className="w-full h-full absolute top-0 object-cover z-0">
                    <source src={loon}/>
                </video>
            </div>
            <Skills/>
            <MeCard/>
            <div className="container mx-auto h-fше mt-40 mb-44 px-8 flex flex-col">
                <h2 className="font-bold text-3xl mb-12">Мои работы</h2>
                <div className='flex flex-row flex-wrap gap-12'>
                    <div
                        className="w-[500px] h-fit p-8 rounded-xl bg-white shadow-[10px_10px_21px_#d9d9d9,-10px_-10px_21px_#ffffff]">
                        <div className="relative h-72 mb-4 cursor-pointer">
                            <a href="https://github.com/ivan-churakov/show-weather">
                                <img src={day} alt="Приложение погоды, день"
                                     className='rounded-lg w-full h-full object-cover'/>
                                <img src={night} alt="Приложение погоды, ночь"
                                     className='rounded-lg w-full h-full object-cover absolute top-0 opacity-0 hover:opacity-100 transition-opacity'/>
                            </a>
                        </div>
                        <a href="https://github.com/ivan-churakov/show-weather"
                           className="font-bold text-lg cursor-pointer">Weather</a>
                        <p className="font-medium">Приложение погоды, написано на React/Redux, TailwindCSS. Работа с
                            API <a
                                href='https://openweathermap.org/'
                                className='font-bold hover:opacity-70'>OpenWeather</a></p>
                    </div>
                    <div
                        className="w-[500px] h-fit p-8 rounded-xl bg-white shadow-[10px_10px_21px_#d9d9d9,-10px_-10px_21px_#ffffff]">
                        <div className="relative h-72 mb-4 cursor-pointer">
                            <a href="https://github.com/ivan-churakov/survey-maker-front">
                                <img src={survey} alt="Опросник" className='rounded-lg w-full h-full object-cover'/>
                                <img src={survey2} alt="Опросник с вопросами"
                                     className='rounded-lg w-full h-full object-cover absolute top-0 opacity-0 hover:opacity-100 transition-opacity'/>
                            </a>
                        </div>
                        <a href='https://github.com/ivan-churakov/survey-maker-front'
                           className="font-bold text-lg cursor-pointer">Survey Maker</a>
                        <p className="font-medium">Опросник по типу google forms, написан на React/Redux, React Router,
                            TypeScript. Работа с API с помощью REST</p>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full shadow-[16px_-16px_42px_#dedede,-16px_16px_42px_#ffffff]">
                <div className="container mx-auto p-8 flex flex-row justify-center gap-6">
                    <a href="https://github.com/ivan-churakov">
                        <img src={github} alt="GitHub" className='w-14'/>
                    </a>
                    <a href="https://vk.com/iseeyouforever">
                        <img src={vk} alt="vk" className='w-14 rounded-full'/>
                    </a>
                    <a href="https://t.me/Ivanchurakof">
                        <img src={telegram} alt="telegram" className='w-14'/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default App

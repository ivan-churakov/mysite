import loon from './assets/video.mp4'
import {Skills} from "./Skills";

function App() {

  return (
      <>
          <div className="w-full h-full relative flex flex-col justify-center items-center">
              <div className="z-10 p-14 rounded-3xl text-white bg-white/10 backdrop-blur-md">
                  <h1 className="text-6xl ">Чураков Иван</h1>
                  <h2 className="font-bold text-3xl opacity-80 ml-24 mt-2">Frontend developer</h2>
              </div>
              <video autoPlay muted loop className="w-full h-full absolute top-0 object-cover z-0">
                  <source src={loon}/>
              </video>
          </div>
          <Skills/>
      </>
  )
}

export default App

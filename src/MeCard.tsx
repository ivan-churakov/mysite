import avatar from './assets/avatar.png'
import bg from './assets/mecard-img.png'

export const MeCard = () => {
    return (
        <div className='w-full h-[700px] sm:h-[600px] lg:h-96 relative'>
            <div className='container mx-auto h-full relative'>
                <div
                    className="w-[calc(100% - 8rem)] z-10 absolute top-1/2 translate-y-[-50%] left-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-20 py-8 px-4 sm:p-8 mx-4 sm:mx-8 bg-white/10 backdrop-blur-md rounded-xl">
                    <img src={avatar} alt="Иван Чураков" className='w-40 rounded-full'/>
                    <p className="text-lg sm:text-xl text-white text-center md:text-left">
                        Имею опыт коммерческой разработки сайтов более <span className='font-bold'>года</span>. Работал с
                        крупными интернет-магазинами (например, поставщики
                        дверей и фурнитур, автомобильные бизнесы). Имел опыт работы в командах, в том числе на
                        руководящей
                        должности. Активно развиваюсь как Frontend специалист, прокачиваю soft и hard скиллы.
                    </p>
                </div>
            </div>
            <img src={bg} alt='background' className='z-0 w-full h-full object-cover absolute top-0'/>
        </div>
    );
};
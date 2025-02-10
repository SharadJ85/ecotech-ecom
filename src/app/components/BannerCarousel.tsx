

import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
    slides: React.ReactNode[]
    options?: EmblaOptionsType
}

export default function BannerCarousel({ slides, options }: PropType) {

    const [emblaRef] = useEmblaCarousel(options, [Autoplay()])
    return (
        <section className="max-w-3xl w-full mx-auto">
            <div className="overflow-hidden"  ref={emblaRef}>
                <div className="flex touch-pan-y ml-[-1.2rem]">
                    {slides.map((each, index) => (
                        <div className="translate-z-0 flex-none min-w-0 pl-[1.2rem] w-full" key={index}>
                            <div className="shadow-inner border-2 border-gray-500 rounded-[1.8rem] text-4xl font-semibold flex items-center justify-center h-[19rem] select-none">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
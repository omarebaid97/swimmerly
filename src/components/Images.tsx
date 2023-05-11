import Image from 'next/image'

export default function Images() {
    return (
        <div className="carousel rounded-box space-x-10 space-y-10 py-10 px-5 items-baseline">
            <div className="carousel-item max-h-52">
                <Image
                    className="relative rotate-6"
                    src="/swimmerly1.webp"
                    alt="Swimmerly private swimming lessons"
                    priority
                    width={300}
                    height={300}
                />
            </div>
            <div className="carousel-item max-h-52">
                <Image
                    className="relative -rotate-6"
                    src="/swimmerly3.webp"
                    alt="Swimmerly private swimming lessons"
                    priority
                    width={300}
                    height={300}
                />
            </div>
            <div className="carousel-item max-h-52">
                <Image
                    className="relative rotate-6"
                    src="/swimmerly5.webp"
                    alt="Swimmerly private swimming lessons"
                    priority
                    width={300}
                    height={300}
                />
            </div>
            <div className="carousel-item max-h-52">
                <Image
                    className="relative -rotate-6"
                    src="/swimmerly4.webp"
                    alt="Swimmerly private swimming lessons"
                    priority
                    width={300}
                    height={300}
                />
            </div>
        </div>
    )
}
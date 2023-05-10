import Image from 'next/image'

export default function Images() {
    return (
        <div className="relative flex place-items-center space-x-10 my-10">
            <Image
                className="relative rotate-6"
                src="/swimmerly1.webp"
                alt="Swimmerly private swimming lessons"
                priority
                width={300}
                height={300}
            />
            <Image
                className="relative -rotate-6"
                src="/swimmerly3.webp"
                alt="Swimmerly private swimming lessons"
                priority
                width={300}
                height={300}
            />
            <Image
                className="relative rotate-6"
                src="/swimmerly5.webp"
                alt="Swimmerly private swimming lessons"
                priority
                width={300}
                height={300}
            />
            <Image
                className="relative -rotate-6"
                src="/swimmerly4.webp"
                alt="Swimmerly private swimming lessons"
                priority
                width={300}
                height={300}
            />
        </div>
    )
}
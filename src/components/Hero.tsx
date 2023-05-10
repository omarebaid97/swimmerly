import Image from 'next/image'

export default function Hero() {
    return (
        <div className="hero bg-base-200 py-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    className="max-w-sm rounded-lg shadow-2xl"
                    src="/swimmerly2.webp"
                    alt="Swimmerly private swimming lessons"
                    priority
                    width={300}
                    height={300}
                />
                <div>
                    <h1 className="text-5xl font-bold">Make a Splash with Swimmerly: Private Swimming Lessons for Kids</h1>
                    <p className="py-6">Affordable group and private lessons available now! Is your child eager to reach new swim goals? Sign up for private swim lessons! These 45 minute classes have a low student-instructor ratio for personalized training!</p>
                </div>
            </div>
        </div>
    )
}
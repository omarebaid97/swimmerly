import Image from 'next/image'

export default function Info() {
    return (
        <div className="relative flex-col place-items-center space-x-10 mt-5">
            <div className="w-full max-w-5xl items-center justify-between">
                <p className="font-normal text-xl py-3">
                    Welcome to Swimmerly, where we help you rule the pool this year! We offer private swimming lessons for youth ages 3-10 in the comfort of your own home. Our classes are designed to help your child reach their swim goals with personalized training and attention.
                </p>
                <p className="font-normal text-xl py-3">
                    Our 45-minute classes have a student-instructor ratio for the best possible learning experience. With our private lessons, your child will receive one-on-one instruction, ensuring that they get the most out of each session.
                </p>
            </div>
            <div className="w-full max-w-5xl items-center justify-between flex space-x-10 my-10">
                <Image
                    className="relative rotate-3"
                    src="/swimmerly2.webp"
                    alt="Swimmerly private swimming lessons"
                    priority
                    width={300}
                    height={300}
                />
                <div className="flex flex-col items-center justify-between">
                    <p className="font-normal text-xl py-3">
                        We offer a variety of pricing options to fit your needs. Our group lessons are available weekly, with a monthly rate of $80 per student for one lesson per week or $150 per student for two lessons per week. Please note that groups must have a minimum of three children and a maximum of six.
                    </p>
                    <p className="font-normal text-xl py-3">
                        For those who prefer a more personalized approach, we offer private lessons at a monthly rate of $125 per student for one lesson per week or $240 per student for two lessons per week. Private lessons can accommodate up to two children per class.
                    </p>
                    <p className="font-normal text-xl py-3">
                        At Swimmerly, we are committed to helping your child become a confident swimmer. Sign up for private swimming lessons today and help your child reach their full potential in the pool!
                    </p>
                </div>
            </div>
        </div>
    )
}
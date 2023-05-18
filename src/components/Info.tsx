import Image from 'next/image'
import Link from 'next/link'

export default function Info() {
    return (
        <div className="relative flex-col place-items-center my-5 p-5">
            <div className="w-full max-w-5xl items-center justify-between flex flex-col md:flex-row space-x-10 my-10 ">
                <div className="w-full max-w-5xl items-center justify-between">
                    <p className="font-normal text-xl py-3">
                        Welcome to Swimmerly, where we help you rule the pool this year! We offer private swimming lessons for youth ages 3-10 in the comfort of your own home. Our classes are designed to help your child reach their swim goals with personalized training and attention.
                    </p>
                    <p className="font-normal text-xl pt-3">
                        Our 40-minute classes have a student-instructor ratio for the best possible learning experience. With our private lessons, your child will receive one-on-one instruction, ensuring that they get the most out of each session. Don&apos;t have a pool? No problem! We can provide a swimming area or meet at a local pool.
                    </p>
                </div>
                <Image
                    className="relative -rotate-3 mt-10"
                    src="/swimmerly8.webp"
                    alt="Swimmerly private swimming lessons"
                    priority
                    width={300}
                    height={300}
                />
            </div>
            <div className="w-full max-w-5xl items-center justify-between flex flex-col-reverse md:flex-row md:space-x-10 my-10">
                <Image
                    className="relative rotate-3 mt-10"
                    src="/swimmerly6.webp"
                    alt="Swimmerly private swimming lessons"
                    priority
                    width={300}
                    height={300}
                />
                <div className="flex flex-col items-center justify-between">
                    <p className="font-normal text-xl">
                        Private lessons offer numerous benefits that make them an excellent choice for individuals seeking personalized swimming instruction. With dedicated one-on-one attention from experienced instructors, students can progress at their own pace and work towards specific goals. These lessons are customized to each individual&apos;s ability, ensuring the instruction is tailored to their needs. Additionally, private lessons provide the convenience of a flexible schedule, allowing students to find a time that works best for them. They also offer a unique opportunity to overcome water fears, with instructors creating a supportive environment and providing personalized feedback for rapid improvement and increased confidence.
                    </p>
                </div>
            </div>
            <div className="w-full max-w-5xl items-center justify-between">
                <p className="font-normal text-xl pb-3">
                    At Swimmerly, we are committed to helping your child become a confident swimmer. Sign up for private swimming lessons today and help your child reach their full potential in the pool!
                </p>
                <Link href='#get-started' className="btn btn-primary mb-5">Get in Touch</Link>
            </div>
        </div>
    )
}
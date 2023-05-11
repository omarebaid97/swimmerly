import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 max-w-7xl">
            <div className="navbar-start flex-col text-left place-self-start">
                <Link className="self-start" href="/">
                    <Image
                        className="max-w-sm rounded-lg"
                        src="/Swimmerly-Logo-White.png"
                        alt="Swimmerly Logo"
                        priority
                        width={100}
                        height={100}
                    />
                </Link>
            </div>
            <div className="navbar-end">
                <Link href='#get-started' className="btn btn-accent">Get started now</Link>
            </div>
        </div>
    )
}
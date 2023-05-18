import Link from "next/link";

export default function Pricing() {
    return (
        <div className="overflow-x-auto mt-10">
            <h2 className="text-3xl font-bold text-center mb-5">Pricing</h2>
            <div className="flex flex-col md:flex-row text-left">
                <div className="card w-80 bg-neutral text-neutral-content m-5">
                    <div className="card-body">
                        <h2 className="card-title">1 Group Lesson Weekly</h2>
                        <p>Please note that group lessons are a minimum of 3 students and a maximum of 6.</p>
                        <div className="card-actions justify-end">
                            <h3 className="card-title">$80/Student/Month</h3>
                        </div>
                        <Link href='#get-started' className="btn btn-secondary w-fit self-end">Join Now</Link>
                    </div>
                </div>
                <div className="card w-80 bg-accent text-accent-content m-5">
                    <div className="card-body">
                        <h2 className="card-title">2 Group Lessons Weekly</h2>
                        <p>Please note that group lessons are a minimum of 3 students and a maximum of 6.</p>
                        <div className="card-actions justify-end">
                            <h3 className="card-title">$150/Student/Month</h3>
                        </div>
                        <Link href='#get-started' className="btn btn-secondary w-fit self-end">Join Now</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row text-left">
                <div className="card w-80 bg-secondary text-secondary-content m-5">
                    <div className="card-body">
                        <h2 className="card-title">1 Private Lesson Weekly</h2>
                        <p>Please note that private lessons have a maximum of 2 children.</p>
                        <div className="card-actions justify-end">
                            <h3 className="card-title">$125/Student/Month</h3>
                        </div>
                        <Link href='#get-started' className="btn btn-accent w-fit self-end">Join Now</Link>
                    </div>
                </div>
                <div className="card w-80 bg-primary text-primary-content m-5">
                    <div className="card-body">
                        <h2 className="card-title">2 Private Lessons Weekly</h2>
                        <p>Please note that private lessons have a maximum of 2 children.</p>
                        <div className="card-actions justify-end">
                            <h3 className="card-title">$240/Student/Month</h3>
                        </div>
                        <Link href='#get-started' className="btn btn-accent w-fit self-end">Join Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
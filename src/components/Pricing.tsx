export default function Pricing() {
    return (
        <div className="flex p-10 space-x-5 text-left">
            <div className="card w-96 bg-secondary text-secondary-content shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Group Sessions</h2>
                    <p>We offer a variety of pricing options to fit your needs. Our group lessons are available weekly, with a monthly rate of $80 per student for one lesson per week or $150 per student for two lessons per week. Please note that groups must have a minimum of three children and a maximum of six.</p>
                    <div className="card-actions justify-end">
                        <h3 className="card-title">$80/Student</h3>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Private Sessions</h2>
                    <p>For those who prefer a more personalized approach, we offer private lessons at a monthly rate of $125 per student for one lesson per week or $240 per student for two lessons per week. Private lessons can accommodate up to two children per class.</p>
                    <div className="card-actions justify-end">
                        <h3 className="card-title">$125/Student</h3>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-accent text-accent-content">
                <div className="card-body">
                    <h2 className="card-title">Private Sessions</h2>
                    <p>For those who prefer a more personalized approach, we offer private lessons at a monthly rate of $125 per student for one lesson per week or $240 per student for two lessons per week. Private lessons can accommodate up to two children per class.</p>
                    <div className="card-actions justify-end">
                        <h3 className="card-title">$125/Student</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
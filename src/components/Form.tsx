export default function Form() {
    return (
        <form className="max-w-xl w-full mb-12">
            <div className="form-control space-y-5">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p>Fill out the form below to get started!</p>
                <input type="text" placeholder="Name" className="input input-bordered w-full" />
                <input type="text" placeholder="Email" className="input input-bordered w-full" />
                <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                <input type="text" placeholder="Child's Age" className="input input-bordered w-full" />
                <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Additional Questions or Comments"></textarea>
                <button className="btn btn-primary">Submit</button>
                <h6 className="text-sm text-center">We will get back to you within 24 hours.</h6>
            </div>
        </form>
    )
}
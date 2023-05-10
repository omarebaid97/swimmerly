export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start flex-col text-left place-self-start">
                <a className="normal-case text-xl self-start" href="/">Swimmerly</a>
                <h6 className="text-sm self-start">Swim Lessons At Home!</h6>
            </div>
            <div className="navbar-end">
                <a className="btn btn-accent">Get started now</a>
            </div>
        </div>
    )
}
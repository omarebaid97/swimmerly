export default function Navbar() {
    return (
        <div className="overflow-x-auto w-full p-5">
            <h2 className="text-3xl font-bold text-center mb-5 w-full">Schedule</h2>
            <table className="table-zebra w-full hidden md:table">
                <thead>
                    <tr>
                        <th>Tuesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4:00 PM - 4:40 PM</td>
                        <td>5:05 PM - 5:45 PM</td>
                        <td>6:10 PM - 6:50 PM</td>
                        <td>7:15 PM - 7:55 PM</td>
                    </tr>
                    <tr>
                        <td>4:00 PM - 4:40 PM</td>
                        <td>5:05 PM - 5:45 PM</td>
                        <td>6:10 PM - 6:50 PM</td>
                        <td>7:15 PM - 7:55 PM</td>
                    </tr>
                    <tr>
                        <td>4:00 PM - 4:40 PM</td>
                        <td>5:05 PM - 5:45 PM</td>
                        <td>6:10 PM - 6:50 PM</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>9:00 AM - 9:40 AM</td>
                        <td>10:05 AM - 10:45 AM</td>
                        <td>11:10 AM - 11:50 AM</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <table className="table-zebra w-full table md:hidden">
                <thead>
                    <tr>
                        <th>Tuesday</th>
                        <th>Thursday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4:00 PM - 4:40 PM</td>
                        <td>5:05 PM - 5:45 PM</td>
                    </tr>
                    <tr>
                        <td>4:00 PM - 4:40 PM</td>
                        <td>5:05 PM - 5:45 PM</td>
                    </tr>
                    <tr>
                        <td>4:00 PM - 4:40 PM</td>
                        <td>5:05 PM - 5:45 PM</td>
                    </tr>
                    <tr>
                        <td>9:00 AM - 9:40 AM</td>
                        <td>10:05 AM - 10:45 AM</td>
                    </tr>
                </tbody>
            </table>
            <table className="table-zebra w-full table md:hidden mt-10">
                <thead>
                    <tr>
                        <th>Friday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>6:10 PM - 6:50 PM</td>
                        <td>7:15 PM - 7:55 PM</td>
                    </tr>
                    <tr>
                        <td>6:10 PM - 6:50 PM</td>
                        <td>7:15 PM - 7:55 PM</td>
                    </tr>
                    <tr>
                        <td>6:10 PM - 6:50 PM</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>11:10 AM - 11:50 AM</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
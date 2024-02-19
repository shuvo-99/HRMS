
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Dashboard</Link>
            <Link to='/employees'>Employees</Link>
            <Link to='/teamManagement'>Team Management</Link>
            <Link to='/myCalender'>My Calender</Link>
            <Link to='/attendance'>Attendance</Link>
            <Link to='/payroll'>Payroll</Link>
            <Link to='/userManagement'>User Management</Link>
            <Link to='/setting'>Setting</Link>
        </div>
    );
};

export default Navbar;
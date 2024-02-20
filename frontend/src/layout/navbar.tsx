
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div >
            <ul style={{ listStyleType: 'none' }}>
                <li>
                    <Link style={{textDecoration:'None', color:'white'}} to='/'>Dashboard</Link>
                </li>
                <li>
                    <Link style={{textDecoration:'None', color:'white'}} to='/employees'>Employees</Link>
                </li>
                <li>
                    <Link style={{textDecoration:'None', color:'white'}} to='/teamManagement'>Team Management</Link>
                </li>
                <li>
                    <Link style={{textDecoration:'None', color:'white'}} to='/myCalender'>My Calender</Link>
                </li>
                <li>
                    <Link style={{textDecoration:'None', color:'white'}} to='/attendance'>Attendance</Link>
                </li>
                <li>
                    <Link style={{textDecoration:'None', color:'white'}} to='/payroll'>Payroll</Link>
                </li>
                <li>
                    <Link style={{textDecoration:'None', color:'white'}} to='/userManagement'>User Management</Link>
                </li>
                <li>
                    <Link style={{textDecoration:'None', color:'white'}} to='/setting'>Setting</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
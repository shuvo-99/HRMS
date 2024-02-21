
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {

    const pages = ['Dashboard', 'Employees', 'Team Management', 'My Calender', 'Attendance', 'Payroll', 'User Management', 'Setting']
    const links = ['/','/employees','/teamManagement','/myCalender','/attendance','/payroll','/userManagement','/setting']

    return (
        <div >
            <ul style={{ listStyleType: 'none',}}>
                {pages.map((page, i) => (
                    <li key={i} style={{ marginTop: '10%', marginBottom: '10%' }}>
                        <Link style={{ textDecoration: 'None', color: 'white' }} to={links[i]}>{page}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
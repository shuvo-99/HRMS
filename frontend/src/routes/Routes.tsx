import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../views/dashboard";
import Employees from "../views/employees";
import TeamManagement from "../views/team_management";
import Calender from "../views/calender";
import Attendance from "../views/attendance";
import Payroll from "../views/payroll";
import UserManagement from "../views/user_management";
import Settings from "../views/settings";
import ErrorPage from "../views/error_page";
import Home from "../layout";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/employees",
                element: <Employees></Employees>,
            },
            {
                path: "/teamManagement",
                element: <TeamManagement></TeamManagement>,
            },
            {
                path: "/myCalender",
                element: <Calender></Calender>,
            },
            {
                path: "/attendance",
                element: <Attendance></Attendance>,
            },
            {
                path: "/payroll",
                element: <Payroll></Payroll>,
            },
            {
                path: "/userManagement",
                element: <UserManagement></UserManagement>,
            },
            {
                path: "/setting",
                element: <Settings></Settings>,
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default Routes;


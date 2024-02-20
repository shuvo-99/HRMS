
import Navbar from "./navbar.tsx";
import {Outlet} from "react-router-dom";
import Grid from "@mui/material/Grid";

const Home = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2} sx={{ backgroundColor : '#002E30'}}>
                <Navbar></Navbar>
            </Grid>
            <Grid item xs={10}>
                <Outlet></Outlet>
            </Grid>
        </Grid>
    );
};

export default Home;
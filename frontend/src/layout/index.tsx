
import Navbar from "./navbar.tsx";
import {Outlet} from "react-router-dom";
// import Grid from "@mui/material/Grid";

const Home = () => {
    return (
        // <Grid container spacing={2}>
        //     <Grid item xs={2} sx={{ backgroundColor : '#002E30', maxHeight:'100%'}}>
        //         <Navbar></Navbar>
        //     </Grid>
        //     <Grid item xs={10}>
        //         <Outlet></Outlet>
        //     </Grid>
        // </Grid>
        <div style={{display: 'flex', height: '100vh'}}>
            <div style={{backgroundColor: '#002E30', width: '20%'}}>
                <Navbar></Navbar>
            </div>
            <div style={{flex: 1}}>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Home;
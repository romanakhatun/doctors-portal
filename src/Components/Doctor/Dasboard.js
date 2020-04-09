import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Dashboard = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('https://ro-doctors-portal.herokuapp.com/products').then(res => res.json()).then(data => {
            setAppointments(data);
        });
    }, []);

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    let count = 1;

    const classes = useStyles();

    return (
        <section className="dashboardPage">
            <h4 style={{ fontSize: "20px" }}>Dashboard</h4>

            <div className="appointmentSummary">
                <div className="pendingAppoint">
                    <h2>09</h2>
                    <p>Pending Appointments</p>
                </div>
                <div className="todaysAppoint">
                    <h2>19</h2>
                    <p>Todays Appointments</p>
                </div>
                <div className="totalAppoint">
                    <h2>34</h2>
                    <p>Total Appointments</p>
                </div>
                <div className="totalPatients">
                    <h2>78</h2>
                    <p>Total Patients</p>
                </div>
            </div>

            <TableContainer component={Paper} style={{ marginTop: "35px" }}>
                <h3 className="colorPrimary" style={{ margin: "15px" }}>Recent Appointments</h3>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sr. No</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Contact</TableCell>
                            <TableCell align="center">Prescription</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            appointments.map(appointment => <TableRow key={appointment.name}>
                                <TableCell component="th" scope="row">{count++}</TableCell>
                                <TableCell><p style={{ maxWidth: "240px" }}>{appointment.date}</p></TableCell>
                                <TableCell>{appointment.time}</TableCell>
                                <TableCell>{appointment.name}</TableCell>
                                <TableCell align="center">{appointment.phone}</TableCell>
                                <TableCell align="center"><button className='btn'>{appointment.prescription}</button></TableCell>
                                <TableCell align="center"><button className='btn'>{appointment.action}</button></TableCell>
                            </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
};

export default Dashboard;
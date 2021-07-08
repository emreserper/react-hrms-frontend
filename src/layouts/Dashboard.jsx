import React from 'react'
import { Container, Grid } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import JobAdvertisement from "../pages/JobAdvertisement";
import CandidateRegister from '../pages/loginprocesses/CandidateRegister';
import EmployerRegister from '../pages/loginprocesses/EmployerRegister';
export default function Dashboard() {
    return (
        <div className="dashboard">
          
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Sidebar />
              </Grid.Column>
              <Grid.Column width={12}>
                <JobAdvertisement />
              </Grid.Column>
            </Grid.Row>

          </Grid>

      
        </Container>
      </div>
    )
}

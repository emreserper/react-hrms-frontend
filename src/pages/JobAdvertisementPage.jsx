import React from 'react'
import Sidebar from "../layouts/Sidebar";
import JobAdvertisement from "../layouts/JobAdvertisement";
import { Grid, Container } from 'semantic-ui-react'
export default function JobAdvertisementPage() {
    return (
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
    )
}

import React from 'react'
import CandidateRegister from './CandidateRegister'
import EmployerRegister from './EmployerRegister'
import { Button, Grid } from 'semantic-ui-react'
export default function Register() {
    return (

        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>

                <Button.Group size='huge'>
                    <Button color='teal'>İş Arayan Hesabı</Button>
                    <Button.Or />
                    <Button color='violet'>İş Veren Hesabı</Button>
                </Button.Group>
                <hr />
              
                <EmployerRegister></EmployerRegister>
            </Grid.Column>
        </Grid>

    )
}

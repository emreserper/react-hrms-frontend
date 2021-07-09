import React from 'react'
import CandidateRegister from './CandidateRegister'
import EmployerRegister from './EmployerRegister'
import { Button, Grid } from 'semantic-ui-react'
import { useState } from 'react'
export default function Register() {

    const [toggle, setToggle] = useState(true)


    return (

        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>

                <Button.Group size='huge'>
                    <Button  onClick={() => setToggle(true)} color='teal'>İş Arayan Hesabı</Button>
                    <Button.Or />
                    <Button  onClick={() => setToggle(false)}color='violet'>İş Veren Hesabı</Button>
                </Button.Group>
                <hr />
                {toggle? <CandidateRegister/>: <EmployerRegister/>}
               
            </Grid.Column>
        </Grid>

    )
}

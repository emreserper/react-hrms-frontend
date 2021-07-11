import React from 'react'
import CandidateRegister from '../layouts/user-operations/CandidateRegister'
import EmployerRegister from '../layouts/user-operations/EmployerRegister'
import { Button, Grid ,Message} from 'semantic-ui-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Register() {

    const [toggle, setToggle] = useState(true)


    return (

        <Grid textAlign='center' /*style={{ height: '100vh' }} */ verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Button.Group size='huge'>
                    <Button onClick={() => setToggle(true)} color='teal'>İş Arayan Hesabı</Button>
                    <Button.Or />
                    <Button onClick={() => setToggle(false)} color='violet'>İş Veren Hesabı</Button>
                </Button.Group>
                <hr />
                {toggle ? <CandidateRegister /> : <EmployerRegister />}
                <Message>
                    Zaten hesabın var mı? <Link to="/login">Giriş yap</Link>
                </Message>
            </Grid.Column>
        </Grid>

    )
}

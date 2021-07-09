import React from 'react'

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
export default function Login() {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
          Giriş yap
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='envelope' iconPosition='left' placeholder='Email Adresi' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Şifre'
                type='password'
              />
    
              <Button color='teal' fluid size='large'>
                Giriş yap
              </Button>
            </Segment>
          </Form>
          <Message>
            Hesabın yok mu? <a href='#'>Kayıt ol</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
}

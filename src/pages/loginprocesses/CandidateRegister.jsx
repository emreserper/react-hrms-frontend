import React from 'react'

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
export default function CandidateRegister() {
  return (

    <div>
      <Header as='h2' color='teal' textAlign='center'>
        Yeni bir iş bulmak için kayıt ol!
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Ad*' />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Soyad*' />
          <Form.Input fluid icon='calendar altarnate outline' iconPosition='left' placeholder='Doğum Tarihi*' />
          <Form.Input fluid icon='user secret' iconPosition='left' placeholder='Tc Kimlik No*' />
          <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail adresi*' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Şifre*'
            type='password'
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Şifre Tekrar*'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Kayıt Ol
          </Button>
        </Segment>
      </Form>
      <Message>
        Zaten hesabın var mı? <a href='#'>Giriş yap</a>
      </Message>
    </div>

  )
}

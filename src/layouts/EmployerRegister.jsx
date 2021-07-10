import React from 'react'

import { Button, Form, Header, Message, Segment } from 'semantic-ui-react'
export default function EmployerRegister() {
  return (

    <div>
      <Header as='h2' color='violet' textAlign='center'>
        İş ilanları paylaşmak için iş veren olarak kayıt ol!
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='users' iconPosition='left' placeholder='Şirket Adı*' />
          <Form.Input fluid icon='phone' iconPosition='left' placeholder='Telefon*' />
          <Form.Input fluid icon='linkify' iconPosition='left' placeholder='Web Sitesi' />
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

          <Button color='violet' fluid size='large'>
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

import React from 'react'
import { Button} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
export default function LoginButtons() {
    return (
        <div className="ui item">
        <Button.Group>
          <Button color='teal' as={NavLink} to="/login">Giriş Yap</Button>
          <Button.Or />
          <Button color='violet' as={NavLink} to="/register">Kayıt Ol
          </Button>
        </Button.Group>
      </div>
    )
}

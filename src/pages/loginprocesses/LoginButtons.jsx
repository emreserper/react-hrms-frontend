import React from 'react'
import { Button} from 'semantic-ui-react'
export default function LoginButtons() {
    return (
        <div className="ui item">
        <Button.Group>
          <Button color='teal'>Giriş Yap</Button>
          <Button.Or />
          <Button color='violet'>Kayıt Ol
          </Button>
        </Button.Group>
      </div>
    )
}

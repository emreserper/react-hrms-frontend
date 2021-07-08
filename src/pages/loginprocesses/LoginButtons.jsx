import React from 'react'
import { Button, Dropdown} from 'semantic-ui-react'
export default function LoginButtons() {
    const options = [
        { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
        { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
        { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
      ]
    return (
        <div class="ui item">
        <Button.Group>
          <Button color='teal'>Giriş Yap</Button>
          <Button.Or />
          <Button color='violet'>Kayıt Ol
          </Button>
        </Button.Group>
      </div>
    )
}

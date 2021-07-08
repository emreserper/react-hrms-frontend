import React from 'react'
import LoginButtons from '../pages/loginprocesses/LoginButtons'
import { Header, Container } from 'semantic-ui-react'

export default function Navi() {
  return (
    <div>
    <Container>
      <div class="ui secondary  menu ">
        <div class="item">
          <Header color='teal' as='h2'>
            Arayiş
          </Header>
        </div>
        <a class="item">
          <i class="search link icon"></i> İş ara
        </a>
        <a class="item ">
          Anasayfa
        </a>

        <a class="item">
          Friends
        </a>

        <div class="right menu">
        <LoginButtons/>
        </div>
      
      </div>
     
    </Container>
    <hr color='teal'/>
    </div>
  )
}

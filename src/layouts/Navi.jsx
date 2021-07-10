import React from 'react'
import LoginButtons from './LoginButtons'
import { Header, Container } from 'semantic-ui-react'
import { NavLink,Link } from 'react-router-dom'
export default function Navi() {
  return (
    <div className="Navbar">
      <Container>
        <div className="ui secondary  menu ">
          <div className="item">
            <Header color='teal' as='h2'>arayis.net</Header>
          </div>
          <a className="item" ><Link to="/jobadvertisement"><i className="search link icon"></i> İş ara</Link></a>
          <a className="item ">Anasayfa</a>
          <a className="item">Anasayfa</a>
          <div className="right menu">
            <LoginButtons />
          </div>

        </div>

      </Container>
      <hr color='lightgray' />
    </div>
  )
}

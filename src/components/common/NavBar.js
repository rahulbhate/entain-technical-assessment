import logo from 'assets/img/entain-logo.jpeg'
import React, { useState } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

{
  /* 
    Navbar component displays authenticated links 
    if the user is logged in via portal successfully.
  */
}
const NavBar = ({ ...props }) => {
  const history = useHistory()

  const [searchText, setSearchText] = useState('')

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }

  const keyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      history.push(`/${e.target.value}`)
    }
  }

  return (
    <>
      <Navbar expand="xl" className="dashboard-navbar navbar-dark" sticky="top">
        <Container>
          <Link className="navbar-brand" to="/dashboard">
            <img width={70} height={70} src={logo} alt="logo" />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Form inline>
                <Form.Control
                  type="text"
                  id="searchstyle"
                  placeholder="Search"
                  className="mr-sm-2 dashboard-search"
                  onChange={handleSearch}
                  onKeyDown={keyPress}
                />
              </Form>
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

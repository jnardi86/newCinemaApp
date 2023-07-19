import React from 'react'
import { Container } from '@nextui-org/react'
import Nav from '../../components/Nav'

const GeneralLayout = ({children}) => {
  return (
    <Container>
      <Nav/>
      {children}
    </Container>
  )
}

export default GeneralLayout
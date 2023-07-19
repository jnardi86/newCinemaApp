import React from 'react'
import { Navbar, Text, Link } from "@nextui-org/react";

const NavBarItem = ({routes}) => {
    return (
        <div>
            <Navbar.Content>
            {routes.map((route) => (
                <Navbar.Item key={route.name}>
                    <Link to={route.to}>
                        <Text h5>{route.name}</Text>
                    </Link>
                </Navbar.Item>
            ))}
            </Navbar.Content>
        </div>
    )
}

export default NavBarItem
import React from 'react'
import { Navbar, Text, Button, Link } from "@nextui-org/react";
import { useAuth } from '../core/auth/hooks/useAuth';
import { signOut } from '../services/firebase.services';
import { routes } from '../core/router/app.router';
import NavBarItem from './NavBarItem';


const Nav = () => {

    const { logout } = useAuth()

    const handleLogout = async () => {
        logout();
        await signOut();
    }

    return (
        <div>
            <Navbar>
                <Navbar.Brand>
                    <Text>
                        CinemApp
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <NavBarItem routes={routes}/>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Item>
                        <Button auto flat as={Link} href="#" onClick={handleLogout}>
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
        </div>
    )
}

export default Nav
import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Box, Container, Toolbar} from "@mui/material";
import {useHeaderStyle} from "./style";


const Navbar = () => {
    const myStyle = useHeaderStyle()
    const pages = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

    return (
        <Fragment>
            <AppBar className={myStyle.appBar}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <h6>
                            <Link className={myStyle.logo} to={`/`}>NewsApp</Link>
                        </h6>
                        <Box className={myStyle.linkBox}>
                            {pages.map((page) => (
                                <Link to={`/${page}`}>{page}</Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Fragment>
    )
}


export default Navbar

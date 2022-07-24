import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Typography} from "@mui/material";
import {useHeaderStyle} from "./style";
import {Grid, useMediaQuery} from "@material-ui/core";
import {useTheme} from '@mui/material/styles';


const Navbar = () => {
    const [showLink, setShowLink] = useState('none')
    const myStyle = useHeaderStyle({
        linksDisplay: showLink
    })
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(960));
    const pages = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

    const showLinksHandler = () => {
        if (matches) {
            setShowLink(showLink === 'none' ? 'block' : 'none')
        }
    }

    return (
        <Fragment>
            <AppBar className={myStyle.appBar}>
                {/*<Container maxWidth="xl">*/}
                <Toolbar disableGutters>
                    <Grid container>
                        <Grid item md={2} lg={2} xl={2} sm={12} xs={12} className={myStyle.logo}>
                            <Typography component={'h6'} variant={'h6'} onClick={showLinksHandler}>
                                News4You
                            </Typography>
                        </Grid>
                        <Grid item md={10} lg={10} xl={10} sm={12} xs={12} className={myStyle.linkBox}>
                            <Grid container spacing={2}>
                                {pages.map((page) => (
                                    <Grid item onClick={showLinksHandler}>
                                        <Link to={`/${page}`}>{page}</Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
                {/*</Container>*/}
            </AppBar>
        </Fragment>
    )
}


export default Navbar

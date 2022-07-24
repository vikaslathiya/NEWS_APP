import {Fragment} from "react";
import {Typography} from "@mui/material";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const Footer = () => {

    const useFooterStyle = makeStyles((theme) => ({
        footer: {
            textAlign: 'center',
            backgroundColor: '#363434',
            color: 'white',
            padding: 8,
            position: 'fixed',
            bottom: 0,
            width: '100%',
            zIndex: 1000,
            "& .MuiTypography-root": {
                fontWeight: 600,
                fontSize: '1rem'
            }

        }
    }))
    const myStyle = useFooterStyle()
// const myStyle = {
//     textAlign: 'center',
//     backgroundColor: 'gray',
//     padding: 8,
//     position: 'fixed',
//     bottom: 0,
//     width: '100%',
//     "& .MuiTypography-root": {
//         fontWeight: 600,
//     }
//
// }

    return (
        <Fragment>
            <Grid item xs={12} className={myStyle.footer}>
                <Typography component={'p'} variant={'body2'}>
                    Designed by Vikas Lathiya
                </Typography>
            </Grid>
        </Fragment>
    )
}

export default Footer;
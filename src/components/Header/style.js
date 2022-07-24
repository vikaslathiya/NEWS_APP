import {makeStyles} from "@material-ui/core/styles";

export const useHeaderStyle = makeStyles((theme) => ({
    appBar: {
        "&.MuiPaper-root": {
            backgroundColor: '#363434'
        }
    },
    logo: {
        padding: 10,
        paddingRight: 0,
        justifyContent: 'center',
        display: 'flex',
        "& .MuiTypography-root ": {
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            fontSize: '1.6rem',
            "&:hover": {
                color: 'gray'
            }
        }
    },
    linkBox: {
        flexGrow: 1,
        display: "flex",
        padding: '8px',
        alignItems: 'center',
        [theme.breakpoints.down(960)]: {
            display: props => props.linksDisplay,
            // transition: `display 2s linear 1s`
        },
        '& .MuiGrid-root': {
            justifyContent: 'left',
            [theme.breakpoints.between(740, 960)]: {
                justifyContent: 'center',
            },
        },

        '& a': {
            margin: 6,
            color: 'white',
            display: 'block',
            textDecoration: 'none',
            fontWeight: 400,
            fontSize: '1.1rem',
            // minWidth: 50,
            "&:hover": {
                color: 'gray'
            },

        },

    }

}))
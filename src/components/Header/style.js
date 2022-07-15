import {makeStyles} from "@material-ui/core/styles";

export const useHeaderStyle = makeStyles(() => ({
    appBar: {
        "&.MuiPaper-root": {
            backgroundColor: '#1b1919d9'
        }
    },
    logo: {
        marginRight: 25,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        fontSize: '1.6rem',
        "&:hover": {
            color: 'gray'
        }
    },
    linkBox: {
        flexGrow: 1,
        display: "flex",
        '& a': {
            marginRight: 20,
            color: 'white',
            display: 'block',
            textDecoration: 'none',
            fontWeight: 400,
            fontSize: '1.1rem',
            "&:hover": {
                color: 'gray'
            }
        }
    }
}))
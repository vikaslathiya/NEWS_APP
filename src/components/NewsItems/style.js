import {makeStyles} from "@material-ui/core/styles";

export const useNewsItemStyle = makeStyles(() => ({
    card: {
        '&:hover' : {
            boxShadow: '0px 0px 10px 10px gray'
        }
    },
    badge: {
        margin: 18,
       "& .MuiBadge-anchorOriginTopRightRectangle" : {
           right: 60
       }
    },
    cardContent: {
        height: 200,
        '& .MuiTypography-h5' : {
            fontWeight: 600
        },
        '& .MuiTypography-body1': {
            marginBottom: 8
        }
    },
    cardAction: {
    '& a' : {
        textDecoration: 'none',
        margin: '10px'
    }
    }
}))
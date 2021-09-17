import { makeStyles, withTheme } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 45,
        margin: '15px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 30px',
        backgroundColor: 'rgba(0, 172, 193, 0.7)',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    heading: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '40px'


    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',

    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    Button: {
        padding: '10px'
    },
    buttonstyle: {
        margin: '0px 10px 0px 0px '
    }

}));
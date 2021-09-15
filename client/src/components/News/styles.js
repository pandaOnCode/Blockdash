import { makeStyles, withTheme } from '@material-ui/core/styles';

export default makeStyles({


    media: {
        height: 0,
        paddingTop: '45.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
        height: '100%',

    },
    border: {
        border: 'solid',

    },
    fullHeightCard: {
        height: '100%',

    },
    card: {

        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '50%',
        position: 'relative',
        transform: 'scale(0.9)'
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',

    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
        transform: 'scale(0.8)'
    },
    grid: {
        display: 'flex',


    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',

    },
    title: {
        padding: '0 10px',

    },
    heading: {
        padding: '20px',

    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',

    },
    newsHead: {
        color: 'white',
        padding: '0 10px',
    }
});

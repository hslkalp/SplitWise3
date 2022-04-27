import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, IconButton, Box, Avatar } from '@mui/material';

const useStyles = makeStyles({
  navBar: {
    top: 0,
    position: 'sticky'
  },
  toolBar: {
    backgroundColor: '#FFFFFF',
    color: '#000000'
  },
  avatar: {
    width: '48px',
    height: '48px',
    border: 'solid 1px'
  }
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navBar}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton>
            <Avatar
              alt="Remy Sharp"
              src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
              className={classes.avatar}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

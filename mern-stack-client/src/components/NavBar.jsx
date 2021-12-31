import React from 'react';
import { AppBar, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar position="static" color="primary">
          <Link to='/'>
            <Typography
              variant="h2"
              align="center"
              >
              Blog Post
            </Typography>
          </Link>
        </AppBar>
    );
}
 
export default NavBar;
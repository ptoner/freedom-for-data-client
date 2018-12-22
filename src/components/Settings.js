import React, { Component } from 'react';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import TablePagination from '@material-ui/core/TablePagination';
// import { Link } from 'react-router-dom'

// //Putting this here for now
// const PLAYER_REPO = 1;

class Settings extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            ipfsHost: 'localhost',
            ipfsPort: '5001'
        };
    }


    async componentDidMount() {

        if (!this.props.freedom) return;

        
    }

  
    render() {

        //Won't be set the first time it loads.
        // if (!this.props.freedom) { return (<div>Loading...</div>) }

        return (
            <div></div>
        );
    }
}

export default Settings;

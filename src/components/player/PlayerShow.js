import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';


// import buffer from 'buffer';

//Putting this here for now
const PLAYER_REPO = 1;


class PlayerShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    async componentDidMount() {

        if (!this.props.freedom) return;
        
        console.log('componentDidMount');

        // let count = await this.props.freedom.count(PLAYER_REPO);

        // this.setState({
        //     count: count
        // });

        // // console.log(`count ${count}`);

        // await this._fetchPage(this.state.page, this.state.limit);
        
    }


    render() {

        //Won't be set the first time it loads.
        if (!this.props.freedom) { return (<div>Loading...</div>) }

        return (
            <h2>{this.props.match.params.playerId}</h2>
        );
    }
}

export default PlayerShow;

import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';

//Putting this here for now
const PLAYER_REPO = 1;

class Home extends Component {

    async componentDidMount() {

        if (this.props.freedom) {
            
            let recordList = await this.props.freedom.readList(PLAYER_REPO, 10, 0);

            this.setState({
                players: recordList
            });

        }
    }

    _renderPlayers() {
        if (!this.state || !this.state.players) return;
        
        return this.state.players.map( (player) => 
        
            <ListItem button key={player.id} >
                <ListItemText primary={player.firstName + player.lastName} />
            </ListItem>
        )
    }

    render() {

        //Won't be set the first time it loads.
        // if (!this.props.freedom) { return (<div>Loading...</div>) }

        return (
            <div>
                <Button href="/player/create">Create Player</Button>
                <List>
                    <ListSubheader>Player List</ListSubheader>
                    {this._renderPlayers()}
                </List>
            </div>
        );
    }
}

export default Home;

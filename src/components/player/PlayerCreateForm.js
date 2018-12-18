import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

//Putting this here for now
const PLAYER_REPO = 1;

class PlayerCreateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            position: '',
            description: ''
        };

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handlePosition = this.handlePosition.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstName(event) {
        this.setState({
            firstName: event.target.value
        });
    }

    handleLastName(event) {
        this.setState({
            lastName: event.target.value
        });
    }

    handlePosition(event) {
        this.setState({
            position: event.target.value
        });
    }

    handleDescription(event) {
        this.setState({
            description: event.target.value
        });
    }



    async handleSubmit(event){
        event.preventDefault();

        const player = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            position: this.state.position,
            description: this.state.description
        }

        let result = await this.props.freedom.create(PLAYER_REPO, player);


        window.location.href = "/";
        

    }

    render() {

 
        //Won't be set the first time it loads.
        if (!this.props.freedom) { return (<div>Loading...</div>) }

        return (
            <form onSubmit={this.handleSubmit}>
                <Card>
                    <CardHeader 
                        title="Create Player" 
                    />
                    <CardContent>
                        
                            <TextField label="First Name" value={this.state.firstName} onChange={this.handleFirstName}/> <br />
                            <TextField label="Last Name" value={this.state.lastName} onChange={this.handleLastName}/> <br />
                            
                        
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="secondary" type="submit">Save Player</Button>
                    </CardActions>
                </Card>
            </form>
        );
    }
}

export default PlayerCreateForm;

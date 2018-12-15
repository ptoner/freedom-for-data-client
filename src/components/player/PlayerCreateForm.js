import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Putting this here for now
const PLAYER_REPO = 1;

class PlayerCreateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        };

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
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


    async handleSubmit(event){

        const player = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }

        let result = await this.props.freedom.create(PLAYER_REPO, player);

        console.log(result);
        event.preventDefault();

    }

    render() {

 
        //Won't be set the first time it loads.
        if (!this.props.freedom) { return (<div>Loading...</div>) }

        return (


            <form>
                <TextField he value={this.state.firstName} onChange={this.handleFirstName}/>
                <TextField value={this.state.lastName} onChange={this.lastName}/>
 
                <Button
                    label="Submit"
                    type='submit'
                    onClick={e => this.handleSubmit(e)}
                />

            </form>








            // <form onSubmit={this.handleSubmit}>
            //     <label>
            //         First Name:
            //     </label>
            //     <input type="text" value={this.state.firstName} onChange={this.handleFirstName} />

            //     <label>
            //         Last Name:
            //     </label>
            //     <input type="text" value={this.state.lastName} onChange={this.handleLastName} />

                
            // </form>
        );
    }
}

export default PlayerCreateForm;

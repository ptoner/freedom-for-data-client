import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import buffer from 'buffer';

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



    async handleSubmit(event) {

        event.preventDefault();

        const imageCid = await this._uploadImage();

        const player = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            position: this.state.position,
            description: this.state.description,
            imageCid: imageCid
        }

        let result = await this.props.freedom.create(PLAYER_REPO, player);

        window.location.href = "/";

    }

    async _uploadImage() {

        const self = this;

        const profilePic = document.getElementById("profilePic");

        let ipfsCid = '';

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = async function () {
                const buf = buffer.Buffer(reader.result)

                if (buf) {
                    ipfsCid = await self.props.freedom.ipfsPutFile(buf);
                }

                resolve(ipfsCid);
            };

            if (profilePic.files.length > 0) {
                reader.readAsArrayBuffer(profilePic.files[0]);
            } else {
                resolve(ipfsCid);
            }

        });
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

                        <TextField label="First Name" value={this.state.firstName} onChange={this.handleFirstName} /> <br />
                        <TextField label="Last Name" value={this.state.lastName} onChange={this.handleLastName} /> <br />

                        <FormControl>
                            <InputLabel htmlFor="position-select">Position</InputLabel>
                            <Select
                                value={this.state.position}
                                onChange={this.handlePosition}
                                inputProps={{
                                    name: 'position',
                                    id: 'position-select',
                                }}
                            >
                                <MenuItem value="">
                                    <em>Choose a position</em>
                                </MenuItem>
                                <MenuItem value="1B">1B</MenuItem>
                                <MenuItem value="2B">2B</MenuItem>
                                <MenuItem value="3B">3B</MenuItem>
                                <MenuItem value="C">C</MenuItem>
                                <MenuItem value="SS">SS</MenuItem>
                                <MenuItem value="OF">OF</MenuItem>
                                <MenuItem value="P">P</MenuItem>
                            </Select>
                        </FormControl>

                        <br />

                        <input
                            id="profilePic"
                            accept="image/*"
                            type="file"
                        />
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

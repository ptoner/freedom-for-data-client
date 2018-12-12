import React, { Component } from 'react';



class Home extends Component {

    componentDidMount() {

        // check this out.
        console.log('Home.js: props: ', this.props.freedom);
    }

    render() {

        if(!this.props.freedom) {
            return (
              <div>Just a beautiful loading screen......</div>
            )
        } else {
            return (
                <div></div>
              );
        }


    }
  }
  
  export default Home;
  
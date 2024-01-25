import React, {Component} from 'react';


class Home extends Component {

    constructor() {
        super();

        this.state = ({
            clicked: 0
        });

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.prevState.clicked !== this.state.clicked)
            console.log("Ha cambiado")
    }

    componentDidMount() {
        fetch("http://localhost/5000/users")
    }


    componentWillUnmount() {
    }

    componentWillMount(nextProps, nextState) {
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

    }

    componentWillReceiveProps(nextProps, nextContext) {

    }

    handleClick() {
        this.setState({
            clicked: this.state.clicked +1
        })
    }

    render() {
        const color = "#FFFFF";



        return (
            <>
                <p style={{color: color}}>{this.state?.clicked}</p>
                <button onClick={this.handleClick}>Click me!</button>
            </>
        )
    }
}

export default Home;


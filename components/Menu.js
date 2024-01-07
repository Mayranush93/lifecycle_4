import React, {Component} from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 3
        }
        console.log(1, "constructor")

    }

    static getDerivedStateFromProps(props, state){
        console.log("props: ", props)
        console.log("state: ", state)
        // return null
        return { num1: props.num }
    }

    // componentWillMount() {// hin method
    //     console.log('es eka xabar talu')
    // }

    // ays method@ ashxatum e ayn jamnak erb browseri vra react fil@ bacvum e  kam voreve ban cnvum e
    componentDidMount() {
        console.log(3, "cnvec")
    }


// hin metod e vor@ tesnum e miayn propsov poxancvac hatkutyunnern u arjeqner@
//     componentWillReceiveProps(nextProps) {
//         console.log(nextProps)
//         console.log("propsi popoxutyun")
//     }

//ays method@ ashxatum e naxqan renderi tpvel@, vor@ tuyl e talu popoxutyun@ nkarvi
// kam chnkari, ir mej petq e return anenq boolean, voric el kaxvac e linelu
    // render linel@
    shouldComponentUpdate(nextProps, nextState) {
        console.log("should", nextProps)
        console.log(nextState)
        //return false
        return true// default true e
    }

// sa ashxatum  e ayn jamanak erb voreve method vor@ kaxel enq html elementiic
// avartum enq , kap pakum enq , ashxatum e ayn jamanak erb component@ mahanum e
    componentWillUnmount() {
        console.log(4, "mahacav")
    }

    handleClick = () => {
        const {num1} = this.state;
        this.setState({num1: num1 + 10})
    }

    render() {
        const {num} = this.props;
        const {num1} = this.state;
        console.log(2, "render")
        return (
            <div>
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>{num}</li>
                    <li>
                        <button onClick={this.handleClick}>Add</button>
                        {num1}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;
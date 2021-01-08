import { React, Component} from "react"

class Registro extends Component {
    constructor(props){
        super(props);
        this.state = {
            urls: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:1337/utms-urls")
            .then(response => response.json())
            .then(data => this.setState({urls: data}))
    }

    render(){
        let urlsArray = this.state.urls;

        return (

            <div className="App">
                {
                    urlsArray.map(url => url.id + url.URL)
                }
            </div>

        )
    }
}

export default Registro;
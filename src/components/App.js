import { React, Component} from "react"
import Navigation from "./Navigation"
import Home from "./Home"
import Container from 'react-bootstrap/Container'

class App extends Component {
    render(){

        return (
            <Container fluid style={ {margin: 0, padding: 0 }}>
                <Navigation></Navigation>
                <Home></Home>
            </Container>
        )
    }
}

export default App;
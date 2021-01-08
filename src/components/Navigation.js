import { React, Component} from "react";
import { Navbar, NavDropdown, Nav  } from 'react-bootstrap';

class Navigation extends Component {

    constructor(props){
        super(props);
        this.state = {
            paises: [],
            pais: "El Salvador"
        }
        this.setPais = this.setPais.bind(this);
    }

    componentDidMount(){

        fetch("http://localhost:1337/pais")
            .then(response => response.json())
            .then(data => this.setState({ paises: data }))

    }

    setPais(e){
        this.setState({
            pais: e
        })
    }

    render(){
        let paises = this.state.paises;

        return (

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                
                <Navbar.Brand>UTMS</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title={this.state.pais} id="collasible-nav-dropdown" onSelect={this.setPais}>
                            {
                                paises.map(pais => <NavDropdown.Item key={pais.id} eventKey={pais.pais}>{pais.pais}</NavDropdown.Item>)
                            }
                        </NavDropdown>
                    </Nav>
                    
                    <Nav>
                        <Nav.Link href="#deets">Registros</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            CONF
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Navbar>

        )
    }
}

export default Navigation;
import { React, Component} from "react"
import  { Col, Form, FormControl, InputGroup } from 'react-bootstrap'

class Formulario extends Component {

    constructor(props){
        super(props);
        this.state = {
            utmsSource: [],
            utmsMedium: [],
            utmSource: ''
        }

        this.handlerSource = this.handlerSource.bind(this);
        this.generateURL = this.generateURL.bind(this);

    }

    componentDidMount(){

        fetch("http://localhost:1337/utm-sources")
            .then(response => response.json())
            .then(data => this.setState({ utmsSource: data }))
    }

    handlerSource(e){
        let id = e.target.value;
        fetch("http://localhost:1337/utm-mediums?_where[utm_source.id]="+id)
             .then(response => response.json())
             .then(data => this.setState({ utmsMedium: data}))
    }   

    generateURL(e, utm_type){
        let utm_source = '';

        switch (utm_type) {
            case "":
                utm_source = e.target.value;
                break;
    
            default:
                break;
        }

        let urlParams = {
            utm_source: utm_source
        }

        console.log(e);

    }

    render(){
        let utmsSource = this.state.utmsSource;
        let utmsMedium = this.state.utmsMedium;

        return (
            
            <Form>
                
                <Form.Row className="my-2">
                    <Col xsm={6} md={2}>
                        <Form.Label>UTM Source</Form.Label>
                        <Form.Control as="select" onChange={this.handlerSource} id="utm-source">
                            {
                                utmsSource.map(utm => <option value={utm.id} key={utm.id}>{utm.utm}</option>)
                            }
                        </Form.Control>
                    </Col>
                    <Col xsm={6} md={2}>
                        <Form.Label>UTM Medium</Form.Label>
                        <Form.Control as="select" id="utm-medium">
                            {
                                utmsMedium.map(utm => <option key={utm.id}>{utm.utm}</option>)
                            }
                        </Form.Control>                    
                    </Col>
                    <Col>
                        <Form.Label>UTM Campaign</Form.Label>
                        <Form.Control placeholder="UTM Campaign" id="utm-campaign" />
                    </Col>
                </Form.Row>
                <Form.Row className="my-3">
                    <InputGroup>

                        <FormControl id="generando_url" placeholder="Generar URL" defaultValue=""/>
                        <InputGroup.Prepend>
                            <InputGroup.Text>COPIAR</InputGroup.Text>
                        </InputGroup.Prepend>
                
                    </InputGroup>
                </Form.Row>
            </Form>

        )
    }
}

export default Formulario;
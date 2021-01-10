import { React, Component} from "react"
import  { Button, Card, Row } from 'react-bootstrap'
import Formulario from "./Formulario"
import Registro from "./Registro"

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            utmsSource: [],
            utmsMedium: [],
            formNum: 0,
            forms: []
        }
        this.agregarForm = this.agregarForm.bind(this);
        this.agregarRegistro = this.agregarRegistro.bind(this);
        // this.eliminarForm = this.eliminarForm.bind(this);
    }

    agregarForm(){
        let n = parseInt(this.state.formNum) +1
        let newForm = this.state.forms;
        newForm.push(n)
        this.setState({
            formNum: n,
            forms: newForm
        });
    }

    // eliminarForm(e){
        
    //     let d = this.state.forms;
    //     let pos = d.indexOf(e);
    //     let dThen = d.splice(pos, 1);
    //     this.setState({
    //         forms: dThen
    //     });
    // }

    agregarRegistro(){
        console.log("SAVE")
    }

    render(){
        let forms = this.state.forms;
        return(
            <div className="mx-2">
                
                {
                    forms.map(function(form){
                        return(
                            <Card key={form} className="shadow p-1 mb-2 bg-white rounded my-3">
                                <Card.Body className="px-3 py-1">
                                    
                                    <Formulario key={form} />

                                </Card.Body>
                            </Card>
                        )
                    }, this)
                }
                
                <Row className="my-2 justify-content-center">
                    <Button variant="outline-primary mx-2" onClick={this.agregarForm} size="sm">Agregar url</Button>
                    <Button variant="outline-info" onClick={this.agregarRegistro} size="sm">Guardar registro</Button>
                </Row>
                <Row>
                    <Registro></Registro>
                </Row>
            </div>
        )
    }
}

export default Home;
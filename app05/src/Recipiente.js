import React from 'react';
import Garrafa from './Garrafa.js';

class Recipiente extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mostrar: true
        };
    }

    removerCabecalho = () => {
        this.setState({mostrar: false});
    }

    render(){
        if (this.state.mostrar == true){
            var meuCabecalho = <Garrafa/>;
        }

        return (
            <div>
                <h3>{meuCabecalho}</h3>
                <button type="button" onClick={this.removerCabecalho}>Remover Cabeçalho</button>
            </div>
        );
    }
}

export default Recipiente;
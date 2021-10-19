import React from 'react';

class Cabecalho extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            corFavorita: "vermelho"
        };
    }

    render(){
        return <h1>A minha cor favorita é {this.state.corFavorita}</h1>;
    }
}

export default Cabecalho;
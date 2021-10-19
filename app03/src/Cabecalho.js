import React from 'react';

class Cabecalho extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            corFavorita: "vermelho"
        }
    }

    componentDidMount() {
        setInterval(() => this.configurarTempoLimite(), 1000);
    };

    configurarTempoLimite = () => {
        this.setState({corFavorita: "amarelo"});
    }


    render() {
        return (
            <div>
                <h1>A minha cor favorita é {this.state.corFavorita}.</h1>
            </div>
        );
    }
}

export default Cabecalho;
import React from 'react';

class Cabecalho extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            corFavorita: "vermelho"
        };
    }

    componentDidMount(){
        setInterval(() => this.configurarTempoLimite(), 1000);
    }

    configurarTempoLimite = () => {
        this.setState({corFavorita: "amarelo"});
    }

    componentDidUpdate(prevProps){
        if (prevProps.corFavorita !== this.props.corFavorita) {
            this.id['meuDiv'].innerHTML= <h1>A minha cor favorita é {this.state.corFavorita}</h1>;
        }
    }

    render(){
        return(
            <div>
                <h1>A minha cor favorita é {this.state.corFavorita}.</h1> 

                <div id="meuDiv">
                    <h1>A minha cor favorita atualizada é {this.state.corFavorita}</h1>
                </div>
            </div>
        );
    }
}

export default Cabecalho;
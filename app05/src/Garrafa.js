import React from 'react';

class Garrafa extends React.Component {

    componentWillUnmount(){
        alert("O componente chamado Cabecalho está prestes a ser desmontado.");
    }

    render(){
        return <h1>Olá, React!</h1>;
    }

}

export default Garrafa;
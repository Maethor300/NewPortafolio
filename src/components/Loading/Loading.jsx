import React, { Component } from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    // Aquí se simula una carga asincrónica
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? <div className="loading">Cargando...</div> : <div>Tu aplicación aquí</div>}
      </div>
    )
  }
}

export default Loading;
 





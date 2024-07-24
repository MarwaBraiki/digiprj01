import React from "react"

class Tick extends React.Component {
    constructor(props) {
        super(props)
        this.state= {date : new Date ()}
    }

    render()
    {
    return (
      <div>
        <h1>Horloge</h1>
        <h2>Il est 
         {this.props.date.toLocaleTimeString()}.
         </h2>
      </div>
     )
    }
  }

  export default Tick
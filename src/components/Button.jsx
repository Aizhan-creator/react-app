import React from 'react'

export default class Button extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         name: "Удалить все записи"
      };

      this.handleClick = this.handleClick.bind(this);
   }
   handleClick(){
      this.setState({
         name: "Удалено"
      })
   }

   render(){
      return (
         <div>
            <h2>Class component {this.state.name}</h2>
            <button onClick={this.handleClick}>Click</button>
         </div>
      );
   }
}
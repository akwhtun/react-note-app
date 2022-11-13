import React from 'react';
import Toolbar from './Toolbar';
// class Item extends React.Component{
//    render() {
//       return <li>
//          {this.props.name},
//          ${this.props.price}
//       </li>
//    }
// }

// class App extends React.Component{
//    state = {
//      items : [
//          {id : 1, name : 'Apple', price: 2},
//          {id : 2, name : 'Orange', price: 1.99},
//          {id : 3, name : 'Banana', price: 1.19},
//       ]
//    };


//    add = (name, price) => {
//       let id = this.state.items.length + 1;
//       this.setState({
//          items: [
//             ...this.state.items,
//          { id,name,price}
//         ]
//       })
//    }

//    render() {
//       return (<div>
//          <h1>Hello React</h1>
//          <ul>
//             {this.state.items.map(i => {
//                return (
//                   <Item key={i.id} name={i.name} price={i.price} />
//                )
//             })}
//          </ul>
//          <Addform add={this.add} />
//       </div>)
//    }
// }

// class Addform extends React.Component{
//    nameRef = React.createRef();
//    priceRef = React.createRef();
//    add = () => {
//     let  name = this.nameRef.current.value;
//    let  price = this.priceRef.current.value;

//       this.props.add(name, price);

//    }
//    render() {
//       return (<div>
//          <input type="text" ref={this.nameRef} /> <br/>
//          <input type="text" ref={this.priceRef} /> <br/>
//          <button  onClick={this.add}>Add</button>
//       </div>)
//    }
// }

class App extends React.Component{
   render() {
      return (
         <div>
 <Toolbar>
 <h1>Hello React</h1>
 <h2>Component composition</h2>
 </Toolbar>
 </div>
      )
   }
}

export default App;
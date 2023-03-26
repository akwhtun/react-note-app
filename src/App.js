import React from "react"
import { useState, createRef } from "react"

// class Item extends React.Component{
//   render() {
//     return (
//              <ul>
//               <li>{this.props.name}, ${this.props.pirce}</li>
//             </ul> 
//             )
//   }

// }

// class AddForm extends React.Component{
//   nameRef = React.createRef();
//   priceRef = React.createRef();

//   addItem = () =>{
//   let name = this.nameRef.current.value;
//   let price = this.priceRef.current.value;
//     this.props.add(name, price)
//   }

//   render(){

//     return (<div>
//       <input type="text" ref={this.nameRef} /> <br/>  
//       <input type="text" ref={this.priceRef} /> <br/>  
//       <button onClick={this.addItem}>Add Item</button>
//     </div>)
//   }
// }

// class App extends React.Component{
//   state = {
//     items : [
//       {id : 1, name: 'Apple', price : 2.9},
//       {id : 2, name: 'Orange', price : 1.9},
//     ]
//   }

//   add = (name, price) => {
//     let id = this.state.items.length + 1;
  
//     this.setState({
//       items: [
//           ...this.state.items,
//           {id, name, price} 
//       ]
//     });
//     document.getElementsByTagName("input")[0].value="";
//     document.getElementsByTagName("input")[1].value="";
//   }
//   render () {
//     return (
//       <div>
//         {this.state.items.map(i => {
//           return (<Item key={i.id} name={i.name} pirce={i.price}/>) 
//         }
//           )}
//           <AddForm add={this.add}/>
//      </div>
//     )
//   }
// }

const Item = ({name, price}) => (<li>{name}, ${price}</li>)


const App = (props) => {
  const[item, setItem] = useState([
    {id : '1', name: 'Apple', price : '1.99'},
    {id : '2', name: 'Orange', price : '1.59'},
  ])

  let nameRef = createRef()
  let priceRef = createRef()
  
  
  let id = item.length + 1
  const add = () => {
    let name = nameRef.current.value
    let price = priceRef.current.value
   setItem([
    ...item,
    {id:id, name:name , price: price}
   ]); 
  }

return (
 <>
 {item.map((i) => <Item key={i.id} name={i.name} price={i.price}/>)}
  <br/>
  <input type="text" ref={nameRef} /> <br/>
  <input type="text" ref={priceRef} /> <br/>
<button onClick={add}>Add Item</button>
 </>

)

}

export default App

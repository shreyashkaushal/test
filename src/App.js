import React,{Component} from 'react';
import styles from  './App.module.css';
import InputItems from './Components/Input/InputItems';
import List from './Components/List/List';
import uuid from 'uuid';


class App extends Component {
  state={
    list:[],
    id:uuid(),
    value:''
  }

  changeHandler=(event)=>
  {
    this.setState({
    value:event.target.value
    })
  }

  submitListHandler=(event)=>

  {
    event.preventDefault();
    const newValue={
      id: this.state.id,
      title:this.state.value
    }
    console.log(newValue);
    const updatedList =[...this.state.list,newValue]
    this.setState({
      list:updatedList,
      value:'',
      id: uuid()
    })
  }

  clearListHandler=()=>
  {
    this.setState({
      list:[]
    })
  }
  
  
   
   render() {
    return (
      
      <>
      <div className={styles.App}>
      <h1>TODO LIST</h1>
      <InputItems 
      value={this.state.value} 
      change={this.changeHandler}
      submitList={this.submitListHandler}

      />
       </div>
       <div className={styles.List}>
       <h1>LIST</h1>
       <List list={this.state.list}
        clear={this.clearListHandler}
      />

       </div>
           
      </>)
      }
      
    }
export default App;
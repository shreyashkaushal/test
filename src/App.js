import React,{Component} from 'react';
import styles from  './App.module.css';
//import Input from '../src/Input/Input';
//import Output from './Output/Output'

class App extends Component {
  state={
    value:''
  }

  handleChange=(event)=>{ 
    return this.setState({value: event.target.value});
  }
  saveChanges =()=>{
    const output = this.state.value;
    console.log(output);
  }
  
  
   
   render() {
    return (
      
      <>
      <div className={styles.App}>
      <form className={styles.Form} >
        <label><strong>
           TODO</strong><br></br><br></br>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label><br></br><br></br>
        <input className={styles.Button} type="submit" value="ADD" onClick={this.saveChanges} />
      </form>
      <div className={styles.Post}>
      <p>{this.state.value}</p>
      </div>
      
      </div>
       </>
    );
  }
}
export default App;
import React, {Component} from 'react';
import '../css/styles.css';

// const getYear = () =>{
//     const newDate = new Date();
//     return newDate.getFullYear();
// }

// const user = {
//     name:'Fernando',
//     lastName:'Santos',
//     age:16 
// }


class Header extends Component { 

    state = {
        active: false,
        keywords: 'hello'
    }
h
    inputChangeHandler = (event) => {
        const value = event.target.value === '' ? false:true;
        this.setState({
            active: value,
            keywords: event.target.value
        });
    }

    render(){
        // const styles = {
        //     header:{
        //         background:'#03a9f4'
        //     },
        //     logo:{
        //         color: '#fff',
        //         fontFamily:'Roboto',
        //         textAlign: 'Center',
        //         fontSize: '2rem'
        //     }
        // } 

    // const style = {
    //     background: 'red'
    // }

    // if(this.state.keywords !== ''){
    //     style.background = 'blue'
    // }else{
    //     style.background = 'red'
    // }
    return (
        <header style={{background: `${this.state.active ? "red":"blue"}`}} >
            <div className="logo">Logo</div> 
            <input 
                type="text" 
                onChange={this.inputChangeHandler} />
        </header> 
    )
}
}

export default Header;
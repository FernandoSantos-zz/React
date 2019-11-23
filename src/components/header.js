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


const Header = (props) => { 

//     state = {
//         keywords: 'hello'
//     }
// h
//     inputChangeHandler = (event) => {
//         this.setState({
//             keywords: event.target.value
//         });
//     }

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
        <header>
            <div className="logo">Logo</div> 
            <input 
                type="text" 
                onChange={props.keywords} />
        </header> 
    )
}

export default Header;
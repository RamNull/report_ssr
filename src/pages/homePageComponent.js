import React from 'react';

class Home extends React.Component{

    exampleMethod(){
        console.log('js is runnig ');
    }

    render(){
        return(
            <div>
                <h1>
                    My Home Page
                </h1>
                <p>
                    some Content
                </p>   
                <button onClick = {()=> this.exampleMethod()} > console </button>            
            </div>
        )
    }
}

export default Home
import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.value,
    };
    
    //constructor(){ // for older use
    //    super();
    //    this.handleIncrement = this.handleIncrement.bind(this);
    //}

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1});
        // this is incrementing the count has we click on the button
    };

    render() {   
        return( 
        <div>
            <span  className={this.getBadgeClasses()} >{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button> 
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.state
        return value === 0 ? 'Zero' : value;
    }

}
 
export default Counter ;
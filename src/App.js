import React, { Component } from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox';
import Scroll from './Scroll'

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            search: ''
        }
    }
    componentDidMount(){
     
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then (users => this.setState({robots: users}))                     
    }
    onChange = (e) => {

        this.setState({
            search: e.target.value
        })
    };

    render() {

            if(this.state.robots.length !== 0) {
                const filtredrobots = this.state.robots.filter(robots => {
                    return robots.name.toLowerCase().includes(this.state.search.toLowerCase());
                });
                return (
                    <div className='pa6'>
                        <h1 className='tc'>Robots Friends</h1>
                        <SearchBox onSearching={this.onChange} />  
                        <Scroll>
                            <CardList listrobots={filtredrobots} text={this.state.search} />
                        </Scroll>                     
                    </div>
                )
            } else{
                return (
                    <header className='pa2'>
                        <h1 className='tc'>Robots Friends</h1>
                        <SearchBox onSearching={this.onChange} />
                        <h2 className='tc'>No Robots to display</h2>
                    </header>
                )
            }
        
    };

}

export default App;
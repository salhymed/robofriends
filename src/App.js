import React, { Component } from 'react';
import { robots } from './robots.js';
import CardList from './CardList'
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            search: ''
        }
    }
    onChange = (e) => {

        this.setState({
            search: e.target.value
        })
    };

    render() {
        const filtredrobots = this.state.robots.filter(robots => {
            return robots.roboName.toLowerCase().includes(this.state.search.toLowerCase());
        });
        return (
            <div>
                <h1 className='tc'>Robots Friends</h1>
                <SearchBox onSearching={this.onChange} />
                <CardList listrobots={filtredrobots} text={this.state.search} />
            </div>
        )
    };

}

export default App;
import React, { Component } from 'react';
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry';

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
        const {robots, search} = this.state;
        if(robots.length) {
            const filtredrobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(search.toLowerCase());
        });
                return (
                    <div className='pa6'>
                        <h1 className='tc'>Robots Friends</h1>
                        <SearchBox onSearching={this.onChange} />  
                        <Scroll>
                            <ErrorBoundry>
                               <CardList listrobots={filtredrobots} text={search} /> 
                            </ErrorBoundry>
                            
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
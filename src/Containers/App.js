import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry';
import { setSearchField, requestRobots  } from '../actions';

const mapStateToPropos = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount(){
       this.props.onRequestRobots();                     
    }

    render() {
        const { searchField, onSearchChange, robots, isPending, error} = this.props;
       if(isPending) {
        return (
            <header className='pa2'>
            <h1 className='tc'>Robots Friends</h1>
            <SearchBox onSearching={onSearchChange} />
            <h2 className='tc'>Loading robots !</h2>
        </header>
        )
       }
        if(robots.length) {
            const filtredrobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
             });
                return (
                    <div className='pa6'>
                        <h1 className='tc'>Robots Friends</h1>
                        <SearchBox onSearching={onSearchChange} />  
                        <Scroll>
                            <ErrorBoundry>
                               <CardList listrobots={filtredrobots} text={searchField} /> 
                            </ErrorBoundry>
                            
                        </Scroll>                     
                    </div>
                )
            } else if(error !== 'no'){
                return (
                    <header className='pa2'>
                        <h1 className='tc'>Robots Friends</h1>
                        <SearchBox onSearching={onSearchChange} />
                        <h2 className='tc'>Something went wrong</h2>
                    </header>
                )
            }
            else 
            return (
                <header className='pa2'>
                    <h1 className='tc'>Robots Friends</h1>
                    <SearchBox onSearching={onSearchChange} />
                    <h2 className='tc'>No Robotos to display</h2>
                </header>
            )
        
    };

}

export default connect(mapStateToPropos, mapDispatchToProps)(App);
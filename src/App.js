import { h, Component } from 'preact';

// Components
import { Heading } from './components/heading';
import { Image } from './components/image';
import { Paragraph } from './components/paragraph';

// Assets
import './style.scss';
import InfiniteWorkoutLogo from 'images/infinite_workout.png';

class App extends Component {

    render() {
        return(
            <div class="app">
                <Heading content={"This is a heading"}/>
                <Image source={InfiniteWorkoutLogo}/>
                <Paragraph content={"This is a paragraph"}/>
            </div>
        );
    }
}

export default App;
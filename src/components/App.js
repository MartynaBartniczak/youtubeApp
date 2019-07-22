import React,{Component} from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'


class App extends Component {
    state = {videos : []}

handleSubmit = async term => {
    const response = await youtube.get('/search', {
        params: {
            q: term
     }
})
this.setState({videos: response.data.items})
}

    render() {
        return(
            <div className="ui container">
                <SearchBar onSubmit={this.handleSubmit}/>
                {this.state.videos.length}
            </div>
        )
    }
}

export default App
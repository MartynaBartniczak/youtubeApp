import React, {Component} from 'react'


class SearchBar extends Component {

state= {
    term: ''
}

handleChange = event => {
   this.setState({term: event.target.value})
}
handleSubmit = event => {
    event.preventDefault()

   this.props.onSubmit(this.state.term)
}

    render() {
        return(
            <div className="search-bar ui segment">
           <form className="ui form" onSubmit={this.handleSubmit}>
               <div className="field">
                   <label>
                       Video Search
                   </label>
               <input type="text"
                onChange={this.handleChange} 
                value={this.state.term}
                />
               </div>
            </form>
            </div>
        )
    }
}

export default SearchBar
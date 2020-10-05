import React from 'react'

class SearchBar extends React.Component {

  state = { term:'' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} onChange={(event) => this.setState({ term:event.target.value })} placeholder={this.props.defaultTerm}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

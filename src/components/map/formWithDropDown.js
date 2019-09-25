import React from 'react';

export default class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // change options based on the needs of the form field 
      options: {
        dropDown: false, 
        search: false, 
        textArea: false,
        submit: false, 
        date: false, 
      },
    }
  }

  componentDidMount() {
    this.setState({
      options: this.props.options,
    });
  };

  render() {
    // temporary array of options 
    const tempOptions = ['option', 'option', 'option', 'option', 'option', 'option',];
    return (
      <div id={`${this.props.category}-dropdown`}>
        <form id={`${this.props.category}-form`}>
        {this.state.options.search ?
          <div>
            <label>{`Search ${this.props.category}`}</label>
            <input type='text' placeholder={this.props.placeholder}/>
            <input type='submit' /> 
          </div> : null
        }
        {this.state.options.date ? 
          <div>
            <label>{this.props.category}</label>
            <input type='date' />
            <input type='submit' />
          </div> : null
        }
        {this.state.options.dropDown ? 
          <div>
            <label>{this.props.category}</label>
            <select>
              {tempOptions.map(options => (
                <option value={options}>{options}</option>
              ))}
            </select> 
          </div> : null
        }
        {this.state.options.textArea ? 
          <div>
            <label>{`${this.props.category}`}</label>
            <textarea type='text' placeholder={this.props.placeholder}/>
          </div> : null
        }
        {this.state.options.submit ? 
          <div>
            <label>{`Add ${this.props.category}`}</label>
            <input type='text' placeholder={this.props.placeholder}/>
            <input type='submit' /> 
          </div> : null
        }
        </form>
      </div>
    )
  }
};
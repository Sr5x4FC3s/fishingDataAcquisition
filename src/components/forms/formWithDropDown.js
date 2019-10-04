import React from 'react';

export default class FormWithDropDown extends React.Component {
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
        time: false, 
      },
    }
  }

  componentDidMount() {
    this.setState({
      options: this.props.options,
    });
  };

  render() {
    return (
      <div id={`${this.props.category}-dropdown`}>
        <form id={`${this.props.category}-form`}>
        {this.state.options.search ?
          <div>
            <label>{`Search ${this.props.category}`}</label>
            <input type='text' placeholder={this.props.placeholder} onChange={() => this.props.capture(event, this.props.type)}/>
            <input type='submit' /> 
          </div> : null
        }
        {this.state.options.date ? 
          <div>
            <label>{this.props.category}</label>
            <input type='date' onChange={() => this.props.capture(event, this.props.type)}/>
            <input type='submit' />
          </div> : null
        }
        {this.state.options.time ? 
          <div>
            <input type='time' onChange={() => this.props.capture(event, this.props.type)}/>
            <input type='submit' />
          </div> : null
        }
        {this.state.options.dropDown ? 
          <div>
            <label>{this.props.category}</label>
            <select 
              id={`${this.props.category}-dropDown`} 
              onChange={() => this.props.capture(event, this.props.type)}
            >
              {this.props.dropDown.map(options => (
                <option value={options}>{options}</option>
              ))}
            </select> 
          </div> : null
        }
        {this.state.options.textArea ? 
          <div>
            <label>{`${this.props.category}`}</label>
            <textarea type='text' placeholder={this.props.placeholder} onChange={() => this.props.capture(event, this.props.type)}/>
          </div> : null
        }
        {this.state.options.submit ? 
          <div>
            <label>{`Add ${this.props.category}`}</label>
            <input type='text' placeholder={this.props.placeholder} onChange={() => this.props.capture(event, this.props.type)}/>
            <input type='submit' /> 
          </div> : null
        }
        </form>
      </div>
    )
  }
};
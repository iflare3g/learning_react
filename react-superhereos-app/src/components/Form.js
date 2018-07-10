import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.pattern = /^[a-zA-Z0-9][a-zA-Z0-9'\- ]+$/;
    this.emptyPattern = /^\s*$/;
    this.state = {value: '', pristine:true, dirty:false, vaild:false};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = this.state.value
    if (this.pattern.test(this.state.value) === true){
      this.props.onSubmit({ value, error: false})
      this.setState({value: '', dirty: false, valid: false})
    }
  }

  onChange(e) {
    const value = e.target.value;
    if (this.pattern.test(value) === true){
      this.setState({dirty: true, valied: true, value});
    } else {
      this.setState({dirty: true, valid:false, value});
    }
  }

  onBlur(e) {
    const target = e.target;
    if (this.emptyPattern.test(target.value)){
      target.value = '';
      this.setState({dirty: false});
    }
  }

  onFocus(e) {
    if (this.state.pristine) {
      this.setState({ pristine: false});
    }
  }

  render() {
    let disabled = true;
    let classes = '';
    if (this.state.dirty) {
      classes="dirty";
    }
    if (this.state.valid) {
      disabled = false;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={classes}
          type="text"
          name="nome"
          id="nome"
          value={this.state.value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
        <label htmlFor="nome">Aggiungi un nuovo supereroe</label>
        <span></span>
        <input type="submit" value="Aggiungi" />
      </form>
    );
  }
}

export default Form;

class Basic extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: 'Vipul' };
  }

  handleTextChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div>
      <input type="text" onChange={this.handleTextChange.bind(this)} />
      <h1>Hello, {this.props.name}</h1>
      <h1>My name is, {this.state.name}</h1>
    </div>);
  }
}

Basic.propTypes = {
  name: React.PropTypes.string.isRequired,
}


import React from 'react';
import ReactDOM from 'react-dom';

class MyCoolButton extends React.Component {
  render() {
    return (
      <button className='btn' onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

class TestReact extends React.Component {
  render() {
    return (
      <h1>
        If you see this message means my supposes are working and this is
        awsome!
      </h1>
    );
  }
}

class HelloMessage extends React.Component {
  test() {
    console.log('TEST CLICK');
  }
  render() {
    return (
      <div>
        Привет, {this.props.name}
        <div>
          <MyCoolButton label='Button text' onClick={this.test} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name={prompt('ENter name')} />,
  document.querySelector('.blog__common-title')
);

ReactDOM.render(<TestReact />, document.querySelector('.signature'));

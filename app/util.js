import React from 'react';
import {findDOMNode} from 'react-dom';

export function range(start, end) {
  const arr = [];
  for (let i=start; i<end; i=i+1) {
    arr.push(i);
  }

  return arr;
}

export function as(T) {
  return (...traits) => traits.reverse().reduce((T, M) => M(T), T);
}

export function dropdown(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false
      };

      this.activeListener = null;
    }

    componentDidMount() {
      if (this.activeListener !== null) {
        return;
      }

      this.activeListener = (ev) => {
        const dropdownTrigger = findDOMNode(this).querySelector('[data-control]');
        if (! dropdownTrigger.contains(ev.target) && this.state.open) {
          this.toggleDropdown();
        }
      };

      document.addEventListener('click', this.activeListener);
    }

    componentWillUnmount() {
      if (this.activeListener === null) {
        return;
      }

      document.removeEventListener('click', this.activeListener);
    }

    dropdownClass() {
      return this.state.open ? 'dropdown clearfix open' : 'dropdown clearfix';
    }

    toggleDropdown(ev) {
      if (ev) {
        ev.preventDefault();
      }

      this.setState({open: !this.state.open});
    }

    render() {
      return <Component {...this.props} {...this.state}
                dropdownClass={this.dropdownClass.bind(this)}
                toggleDropdown={this.toggleDropdown.bind(this)} />;
    }
  };
}

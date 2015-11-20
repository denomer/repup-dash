import React from 'react';
import {findDOMNode} from 'react-dom';

export default function dropdown(Component) {
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
      this.activeListener = null;
    }

    dropdownClass(prefix) {
      return this.state.open ? `${prefix} open` : prefix;
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

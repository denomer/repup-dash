import React from 'react';
import DropModal from 'boron/DropModal';

export default class CommonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

showModal(){
    this.refs.modal.show();
}
 hideModal(){
    this.refs.modal.hide();
}
  render() {
      return (
          <div>
              <button onClick={this.showModal.bind(this)}>Open</button>
              <DropModal ref="modal">
                  <h2>I'm a dialog</h2>
                  <button onClick={this.hideModal.bind(this)}>Close</button>
              </DropModal>
          </div>
      );
  }
};
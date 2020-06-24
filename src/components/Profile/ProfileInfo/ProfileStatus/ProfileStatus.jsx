import React from 'react';
import css from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
componentDidMount() {
}
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({editMode:true})
  }

  deactivateEditMode = () => {
    this.setState({editMode:false})
    this.props.updateStatus(this.state.status)
  }
  changeStatus = (e) => {

    let text = e.target.value;
    this.setState({
      status: text
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {

    return (
      <div>
        {
          this.state.editMode
            ? <input value={this.state.status} 
              onChange={this.changeStatus}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
            />
            : <span onDoubleClick={this.activateEditMode}>
              {this.props.status || 'Write somesing'}
            </span>
        }

      </div>
    )
  }
}

export default ProfileStatus;
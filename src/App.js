import React from 'react';
import axios from 'axios'
import { API } from "./backend";
import UserCard from "./Components/UserCard";
import Buttons from "./Components/Buttons";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      users: []
    }

  }

  componentDidMount = () => {
    this.fetchusers()
  }

  fetchusers = () => {
    axios.get(`${API}/api/users/${this.state.id}/next`).then(res => {
      this.setState({
        users: res.data.users,
      })
    })
  }


  onNext = (newId) => {
    axios.get(`${API}/api/users/${newId}/next`).then(res => {
      this.setState({
        users: res.data.users,
        id: newId,
      })
    })
  };

  onPrevious = (newId) => {
    axios.get(`${API}/api/users/${newId}/next`).then(res => {
      this.setState({
        users: res.data.users,
        id: newId,
      })
    })
  };


  render() {
    return (
      <div className="th-container">
        <h1 style={{ textAlign: 'center' }}>User Data</h1>
        <UserCard users={this.state.users} />
        <Buttons id={this.state.id} onNext={this.onNext} onPrevious={this.onPrevious} />
      </div>
    );
  }
}
export default App;
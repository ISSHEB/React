import React from 'react';
import Header from "./components/Header"
import Users from './components/Users';
import AddUser from './components/AddUser';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: 1,
          Firstname: 'Bob',
          lastname: 'Marly',
          bio: 'Loren ispsum dolor sit amet consectetur',
          age: 40,
          isHappy: true

        },
        {
          id: 2,
          Firstname: 'Msha',
          lastname: 'Tasha',
          bio: 'Loren ispsum dolor sit amet consectetur',
          age: 22,
          isHappy: false
        }
      ]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editeUser = this.editeUser.bind(this)
  }

  render() {
    return (
      <div>
        <Header title="Список пользывателей" />
        <main>
          <Users users={this.state.users} onEdite={this.editeUser} onDelete={this.deleteUser} />
        </main>
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>)
  }

  deleteUser(id){
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })

  }

  editeUser(user){
    let allUsers = this.state.users
    allUsers[user.id - 1] = user
    this.setState({users:[]}, () => {
      this.setState({users:[...allUsers]})
    })
  }
  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, {id, ...user}]})
  }

}

export default App;

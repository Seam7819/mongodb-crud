import './App.css'

function App() {

  const handleAddUser = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name,email}
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <form onSubmit={handleAddUser}>
      <input type="text" name="name" id="" />
      <br />
      <input type="email" name="email" id="" />
      <br />
      <input type="submit" value="Add User" />
      </form>
      
    </>
  )
}

export default App

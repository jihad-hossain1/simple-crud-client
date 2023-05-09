
import './App.css'

function App() {

  
  const handleUser = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('user added successfull')
          form.reset()
        }
    })

}

  return (
    <>
      <h2>Simple CRUD</h2>
      <form onSubmit={handleUser}>
        <input type="text" name='name' /> <br />
        <input type="email" name='email' /> <br />
        <input type="submit" value='add user' /> <br />
      </form>
    </>
  )
}

export default App

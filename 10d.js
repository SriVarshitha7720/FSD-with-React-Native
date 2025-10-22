const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const USER = { username: 'admin', password: '1234' };

app.get('/', (req, res) => {
  res.send(`
    <h2>Login</h2>
    <form method="POST" action="/login">
      <input name="username" placeholder="Username" required/><br/>
      <input type="password" name="password" placeholder="Password" required/><br/>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password)
    res.send(`<h3>Welcome, ${username}!</h3>`);
  else
    res.send('<h3>Invalid credentials. <a href="/">Try again</a></h3>');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

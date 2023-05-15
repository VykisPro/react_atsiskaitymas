const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/api/users', (req, res) => {
  const { name, email, password } = req.body;
  let users = [];
  try {
    users = JSON.parse(fs.readFileSync('users.json'));
    console.error(error);
  }

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'Email address already exists' });
  }
  const newUser = { name, email, password };
  users.push(newUser);
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
  res.json({ message: 'User registration successful' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

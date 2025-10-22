const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mydb')
  .then(() => console.log('MongoDB Connected'));

const User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }));

app.post('/users', async (r, s) => s.send(await User.create(r.body)));
app.get('/users', async (r, s) => s.send(await User.find()));
app.put('/users/:id', async (r, s) => s.send(await User.findByIdAndUpdate(r.params.id, r.body, { new: true })));
app.delete('/users/:id', async (r, s) => s.send(await User.findByIdAndDelete(r.params.id)));

app.listen(3000, () => console.log('Server running on 3000'));

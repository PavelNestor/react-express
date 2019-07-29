const express = require('express');

const app = express();

const posts = [
  {
    title: 'Hello',
    text: 'world'
  },
  {
    title: 'Hello2',
    text: 'world2'
  },
  {
    title: 'Hello3',
    text: 'world3'
  },
  {
    title: 'Hello4',
    text: 'world4'
  }
];

app.get('/api/text', (req, res) => {
  return res.json(posts)
});

const port =5000;
app.listen(port, () => console.log(`SERVER START AT ${port}`));

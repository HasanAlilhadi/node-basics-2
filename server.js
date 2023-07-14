const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connected successfully');
  });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Define your routes and file operations here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

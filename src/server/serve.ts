import { createServer } from 'http';

// # import express app from routes folder
import app from '../routes/app';

// Get port from environment and store in Express.
const port = Number(process.env.PORT) || 5000;
app.set('port', port);

const server = createServer(app);
const onError = (error: Error) => {
  if (error.message.includes('EACCES')) {
    throw new Error(`port ${port} requires elevated privileges`);
  }
  if (error.message.includes('EADDRINUSE')) {
    throw new Error(`port ${port} is already in use`);
  }
  throw error;
};
const onListening = () => {
  console.log(`API Server is Running on port ${port}`);
};

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

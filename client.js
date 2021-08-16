const { IP, PORT } = require('./constants');
const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');   // interpret incoming data as text
  conn.on('connect', () => {
    console.log('Connected!');
    conn.write('Name: BDL');
  });
  return conn;
};

module.exports = { connect };
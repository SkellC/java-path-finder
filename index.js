const { exec } = require('child_process');
const os = require('os');

const getJavaPath = (callback) => {
  const command = os.platform() === 'win32' ? 'where java' : 'which java';
  exec(command, (error, stdout, stderr) => {
    if (error) {
      callback(`Error executing command: ${error}`, null);
      return;
    }
    callback(null, stdout.trim());
  });
};

getJavaPath((error, javaPath) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Java is installed at: ${javaPath}`);
  }
});

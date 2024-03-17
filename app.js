const Docker = require('dockerode');
const docker = new Docker(); 

async function startExistingContainer() {
  const container = docker.getContainer('metabase'); // Assuming 'my-container' exists
  await container.start();
  console.log('Container started!');
}

startExistingContainer(); 
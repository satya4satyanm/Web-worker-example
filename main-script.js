var worker = new Worker('respond.js'); // Create a web worker instance

// Setup an event listener that will handle messages received from the worker.
worker.addEventListener('message', function(e) {
  document.write(e.data);

  // Terminate a worker from your application.
  worker.terminate();
}, false);

worker.postMessage(['Add', 20, 30]); // send a msg to worker

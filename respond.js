// Setup an event listener that will handle messages sent to the worker.
self.addEventListener('message', function(e) {
  // Send the message back.

  if(e.data[0] === "Add") {
    var sum = e.data[1]+e.data[2];
    self.postMessage(`The total of ${e.data[1]} and ${e.data[2]} is: ` + sum);
  }


}, false);

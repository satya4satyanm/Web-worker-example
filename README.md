Web workers are a special instance of the executor which runs out side the window in the browser.

They can be executed only from a server.

Main execution context can deligate some task to the web workers and can get the data back.

They use messages to communicate.

To load a slow javascript one should use a web worker so that the main execution does not restrict the loading of the page.

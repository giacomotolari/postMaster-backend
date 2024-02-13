/**
 * Logs all the endpoints of the Express app.
 * @param {Object} app - The Express app.
 * @param {number} port - The port number on which the app is running.
 */
export default function logEndpoints(app, port) {
  if (app._router && app._router.stack) {
    app._router.stack.forEach((r) => {
      if (r.route && r.route.path) {
        const url = `http://localhost:${port}${r.route.path}`;
        const method = Object.keys(r.route.methods)[0].toUpperCase();
        console.log(`${method} ${url}`);
      }
    });
  }
}

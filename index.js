const core = require('@actions/core');
const github = require('@actions/github');

try {
  //who-to-greet definido en actions.yml
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hola ${nameToGreet}! Soy una JavaScript Action`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time); // parametro de salida
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

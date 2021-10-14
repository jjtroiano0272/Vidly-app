import Raven from 'raven-js';

function init() {
  // Raven.config(
  //   'https://1841f983764e4ffc934316f0d968605e@o1034187.ingest.sentry.io/6000755',
  //   { release: '1-0-0', environment: 'development-test' }
  // ).install();
}

function log(error) {
  // Raven.captureException(error);

  console.error(error);
}

export default {
  init,
  log,
};

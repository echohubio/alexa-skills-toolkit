import program from 'commander';
import fs from 'fs';

import { updateCode, getCode } from '../alexa-skills-toolkit';

program
  .version('0.0.1')
  .option('-a, --action [type]', 'The action to perform', /^(getcode|updatecode)$/)
  .option('-i, --appId <appId>', 'The amazon application Id e.g. amzn1.echo-sdk-ams.app.xxx', /^(amzn1.echo-sdk-ams.app.[0-f-]+)$/)
  .option('-d, --data <file>', 'File to to upload in update action')
  .option('-l, --locale <locale>', 'Locale e.g. en_US', 'en_US')
  .parse(process.argv);

const execute = () => {
  let file;

  if (program.data) {
    file = fs.readFileSync(program.data, { encoding: 'binary' });
  }

  switch (program.action) {
    case 'getcode':
      return getCode(program.appId, program.locale)
        .then(data => console.log(data)); // eslint-disable-line no-console
    case 'updatecode':
      return updateCode(program.appId, file, program.locale)
        .then(() => console.log('Code updated')); // eslint-disable-line no-console
    default:
      throw new Error('Unknown action');
  }
};


execute(program).catch((err) => {
  if (err.name === 'LoginError') {
    console.error('Credentials are no longer valid, please login to https://developer.amazon.com and retry');
    process.exit(1);
  } else {
    throw err;
  }
});

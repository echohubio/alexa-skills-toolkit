# Alexa Skills Toolkit

Some handy tools to manage Amazon Alexa skills

## Installation

``` bash
yarn install alexa-skills-toolkit
```

## Usage

Shell

``` bash
# Download the current model
alexa-skills-toolkit --action getcode --appId amzn1.echo-sdk-ams.app.XXX

# Update the model
alexa-skills-toolkit --action updatecode --appId amzn1.echo-sdk-ams.app.XXX --data file.json
```

API

``` javascript

import * as ast from 'alexa-skills-toolkit';

const data = ast.getCode(appId);

ast.updateCOde(appId, data);
```

## Development

After checking out the repo, run `npm test` to run the tests.

To release a new version:

* yarn test
* yarn publish

This will run the tests, update the version, create a git tag for the version, push git commits and tags. Publish the module file to [npmjs.com](https://npmjs.com).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/echohubio/alexa-skills-toolkit. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [ISC License](http://opensource.org/licenses/ISC).

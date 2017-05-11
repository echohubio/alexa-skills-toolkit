# Alexa Skills Toolkit

Some handy tools to manage Amazon Alexa skills

## Installation

``` bash
yarn install alexa-skills-toolkit
```

## Usage

Shell

``` bash
alexa-skills-toolkit --update-json skill.json
```

API

``` javascript

import ast from 'alexa-skills-toolkit';

// TBA
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

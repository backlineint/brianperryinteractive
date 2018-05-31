# BackstopJS Visual Regression Testing

## Setup

Install nodejs (https://nodejs.org/en/) then, from the root of this directory run

`npm install`

## Tests

To test against the existing baseline screenshots, run:

`npm run test`

These test screenshots will be ignored by git.

To commit udpates to the reference screenshots that we're testing against, run:

`npm run approve`

Any changes in the bitmaps_reference directory will be tracked by version control.
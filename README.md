# Formula 1 Results Single Page App

This web app was designed to use the Ergast Developer API to display Formula 1 racing results in quick and convenient fashion.  This work was created as part of the Phase 1 final project for the Software Engineering program at the Flatiron School.  In order to demonstrate the capabilities of the app in the most controlled manner possible, information from the Ergast Developer API was stored in the results.json file for ten races.  This means that the library of results is much smaller than what is available in the actual API.  I encourage racing fans and curious developers to check out this wonderful tool on the [Ergast API website](http://ergast.com/mrd/).

## Setup

In order to use this app on your own machine, first make sure that you have [json-server](https://www.npmjs.com/package/json-server) installed. From there fork and clone this repository and get the database running with the following commands in the terminal from the same folder as the repo:

```bash
json-server --watch results.json
```

Keep this local server running, then open the index.html file to see the page.  It should look and function as described below.

## Usage

![](https://github.com/apatari/Phase-1-Project/blob/main/f1page.gif)

Simply select the year and race you'd like to see the results for.  Note that there is a handy button to see the most recent race.  Don't forget to vote for your favorite race of 2023.

## Roadmap

I may connect this page back to the API after my project review in order to make full use of the API.  Stay tuned.

## Acknowledgment and Contributions

I thank the folks behind the Ergast API for providing and maintaining the resource that this work is based on.  [Please send contributions their way](https://liberapay.com/ergast)  I'd also like to thank the folks at Flatiron school for giving me the skills and tools necessary to create this work.

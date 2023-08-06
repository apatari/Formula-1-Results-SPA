# Formula 1 Results Single Page App

This web app was designed to use the Ergast Developer API to display Formula 1 racing results in quick and convenient fashion.  I encourage racing fans and curious developers to check out this wonderful tool on the [Ergast API website](http://ergast.com/mrd/).  This work was created as part of the Phase 1 final project for the Software Engineering program at the Flatiron School.  This version of the app directly accesses the API.  There is another version which relies fully on json-server for its data in order to ensure its function during my project review.  [That repo can be found here.](https://github.com/apatari/Phase-1-Project)

## Setup

In order to use this app on your own machine, first make sure that you have [json-server](https://www.npmjs.com/package/json-server) installed. From there fork and clone this repository and get the database running with the following commands in the terminal from the same folder as the repo:

```bash
json-server --watch favorites.json
```

Keep this local server running, then open the index.html file to see the page.  It should look and function as described below.

## Usage

![](https://github.com/apatari/Phase-1-Project/blob/main/f1page.gif)

Simply select the year and race you'd like to see the results for.  Note that there is a handy button to see the most recent race.  Don't forget to vote for your favorite race of 2023.

## Roadmap

I do not plan on updating or improving this app.

## Acknowledgment and Contributions

I thank the folks behind the Ergast API for providing and maintaining the resource that this work is based on.  [Please send contributions their way](https://liberapay.com/ergast)  I'd also like to thank the folks at Flatiron school for giving me the skills and tools necessary to build it.

## The node.js Movie Finder app

The node.js example app which used to find movie details using Public API

- consume content from API End point http://www.omdbapi.com/
- Getting Input using commandline
- parse the result and showing basic movie details including 'Rotten Tomatoes' Rating


## What is OMDb API?

[Contentful](http://www.omdbapi.com/) The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users. 


## Requirements

* Node 8
* Git
* The OMDb API (Need to get access key)

Without any changes, this app is connected to a OMDb API. For development we need to generate access key in http://www.omdbapi.com/

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/rmksiva/MovieFinder.git
cd MovieFinder
```

```bash
npm install
npm start YourMovieName
```
Example : npm start Titanic 

For re-run the application

```bash
node index.js
```


# Movie Recommendation App

https://github.com/MarekPrantl/movie-recommendation-app/tree/master

The application isn't deployed anywhere and is purely local and only for personal use (no commercial use).

## About the project

The application is a catalog of movies of different genres. Each movie has a title, description, film director, list of actors, and image(s) from the main playbill. Each movie is categorized into one or more genres. Only the administrator can create, remove and update the list of movies. Users can rate the movies according to different criteria (e.g, how novel are the ideas of the movie, their final score, etc.). The main feature of the system is that users can pick one movie and get the list of similar movies and/or movies that were liked the most by other users watching the same movie (no need for complex algorithms, some simple recommendation is enough!).

### __IMPORTANT__ 
I chose to use the public TMDB database of movies to demonstrate how requests work using JavaScript fetch and redux-saga. Because of this there are real movies in the application, but there is not real interaction with those movies - you cannot rate them, edit them or remove them. Therefore the rating, editing and removing of the movies is only a mockup. When you try to do any of these interactions, there is an UI for it, but there is no side-effect handling the interaction and no state managment (rating doesn't stay, the movie is not edited/removed). Also the sign-in is a mockup. When you login the authentication is simply done by comparing data from a JSON file (there is one user and one admin) and there is no session (when you reload the application you will be signed out).

## Setup/Installation

Before you try to run the application you'll need to create a __.env__ file in the root.
Into the file you'll need to insert the __TMDB_API_KEY__ which I've sent in the email.

The .env file should look something like this:
```
TMDB_API_KEY=<secret_api_key>
```

To run the application you either need __NPM__ or __Yarn__.

Using yarn:
```
1. yarn install
2. yarn start
3. Open localhost:3000 in your browser
```

Using npm:
```
1. npm install
2. npm start
3. Open localhost:3000 in your browser
```

If you are unable to install the Javascript packages - try to remove the npm/yarn.log and node_modules and run the install again.

## Sign-In

To sign-in into the application there are two "accounts" - one user and one admin.

The mock up files and user configurations can be found in `src/assets/mock/users`.

### Admin
Username: admin

Password: root123

### User
Username: user

Password: letmein

## Technologies

* React
* Redux, redux-saga
* JavaScript, ECMAScript 2021
* CSS, SCSS
* HTML5

## Credits

Marek Prantl <<prantlm99@gmail.com>>

## License

MIT
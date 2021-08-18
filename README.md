# Firebase-Auth

A static site that allows a user to 
sign-in with their Github account and then prints the
users authorization result from firebase to the page.

## Run

- go run main.go
- visit http://localhost:8081/firebase-test/home.html

## Config

This requires firebase project setup and a github app
- Create a firebase project and enable github as an auth provider
- Create a github app and generate a client secret
- Configure your github app with the firebase project redirect URL
- Configure your firebase project github auth with your github app client and secret
- Update firebase configuration code in home.html with the config for your github project


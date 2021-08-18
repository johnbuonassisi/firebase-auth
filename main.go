package main

import (
	"log"
	"net/http"
	"os"
)

func main() {

	fs := http.FileServer(http.Dir("."))
	http.Handle("/firebase-test/", http.StripPrefix("/firebase-test", fs))
	err := http.ListenAndServe(":8081", nil)
	if err != nil {
		log.Printf("%v\n", err)
		os.Exit(1)
	}
}

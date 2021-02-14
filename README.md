# YYC Watchtower

## Inspiration
Crime is an important metric for a city's well-being. It can be an indicator to help drive city development and social improvements. We were inspired to connect Calgary's crime data with Google Firebase and Google Maps API to provide the community with real-time crime data in their neighborhoods.

## What it does
Each crime in Calgary's open data is presented as a marker on google maps. Areas with high crime rates have larger clusters of markers. Clicking on a marker gives you some additional information about the crime.

## How we built it
We sourced data from data.calgary.ca and exported the JSON file to Google Firebase real-time database. We connected Firebase to our Vue.js frontend web application along with a Google Maps API instance. We pulled data from Firebase to populate the map with markers indicating crimes that have been committed.

## Challenges we ran into
Our biggest challenges were connecting and configuring Firebase in Vue and reading Firebase and Maps documentation to get as many functionalities as we could in the time allowed.

## Accomplishments that we're proud of
This was our group's first time working with Google Maps and Firebase. We are proud to have been able to successfully implement and query a cloud database to work with an API. We are proud to have a live prototype with a passable design and flowing data.

## What we learned
We developed a better understanding of Vue.js and how to implement dynamic components. We learned how to set up and implement a Firebase database along with querying data and the data objects that are returned. We learned a lot about how to interact with maps and how the map is structured.

## What's next for YYC Watchtower
We'd like to add more datasets, along with data filters to give a more interactive experience to feed curiosities. We wanted to include Machine Learning in this hackathon but we were focused on providing a complete web app - With the current data set, we want to build a machine learning model that will predict what type of crimes are likely to happen in which community. We also need to learn and understand how to better optimize our app. Once the prototype is more polished it can be implemented for more cities and become a useful open data tool for curious citizens and city planners alike. 

![yesguys](https://cdn.discordapp.com/emojis/672480796447211546.png)

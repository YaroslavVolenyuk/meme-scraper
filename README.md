Command line cheatsheet steps (setup for Node.js project)

- [I] Create a folder called '"memes'\*
- [] Access the website (send a request to the website / "fetching") - [1 Search for the 'section' in the string of HTML that comes back (in the "response")
  from the website
- [ ] Search for the first 10 image sources in the 'section'
- [] Two options
- [1] One option: jog' - this is in the HTML code of the website
- [1] Another option: '<img'
- [I] Get the 'src' URL strings from the "ima
- [1] Add the first 10 image URL strings to an array
- [] Loop over the first 10 image URLs and:
- [1] Create a file (named correctly) in the 'memes" folder (eg. '01.jpg', '02.jpg', etc)
- [1] Access the image URL
- [ ] In this file, store the image data that comes back (in the "response") from the website

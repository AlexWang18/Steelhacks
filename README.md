


## resu.me

[See the website here](https://shielded-chamber-18134.herokuapp.com/)  (subject to dyno sleeping)

## Available Endpoints
   * GET  https://shielded-chamber-18134.herokuapp.com/api/info  
          
          Returns number of resumes currently stored in the repository.
   
   * GET  https://shielded-chamber-18134.herokuapp.com/api/pdf
           
          Returns the list of resumes currently available in the repository        
   * GET  https://shielded-chamber-18134.herokuapp.com/api/pdf/AlexWang
        
          Parameter: file name excluding the extension. (Case sensitive)
          Fetch an individual pdf stored in the repository. Note this does return the raw binary data, it must be converted.
   
   * POST https://shielded-chamber-18134.herokuapp.com/upload
 
          Key: resume     Value: yourFile.pdf     (In form data) 
          Add your resume to your repository for storage. Note that there are no repeats and usage is subject to daily quotas.
          
   * GET  https://shielded-chamber-18134.herokuapp.com/check/AlexWang
  
          Parameter: file name excluding the extension.
          Replace AlexWang with the PDF file you want to scan for possible spelling mistakes. Returns an array of problematic words. Note the PDF file must have been uploaded already
   
    

## Built With

* Express
* React
* Sass
* Swift
* Heroku

## Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AlexWang18/Personal-Website
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
### Run the API server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for Node

```bash
npm install package-name --save
```


### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](frontend/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd frontend/

# Initial setup
npm install

# Start the server
npm start
```


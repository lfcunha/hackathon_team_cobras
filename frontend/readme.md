#WIKI

## Development

```
> npm install
> gulp local
```


## structure:
    index.js:
        render root component (containers/root) into the app div, with the configured store
            (store configuration sets up the reducers, among other middleware)
        root component renders the provider (which connects the     mapStateToProps and  mapDispatchToProps)
            and sets up the routes (routes.js)
        the routes define the base component (App), which defines the base structure of the app, and where all children components get rendered
            - defines the "index" component (home)
            - and defines all the routes (link -> associated component)
            
            
     conceptually, containers should define all logic, and the associated component should be "dumb" and only do rendering
     however, I'm not following this convention. My containsers are just a wrapper for the associated component.


## Build and Deploy:

gulp <local|dev|stag|prod>

- default env starts a development server, with hot module reloading
- prod turns off redux logging
- all produce a "bundle.js file in ./dist/<env>"


prod script automatically uglifies bundle. Optionally, any other bundle can be uglified with "gulp compress"

include the bundle in a script in your html (can be sourced from s3 or cloudfront)

Below is a minimum html template for php. Additionally, an application token must be obtained
from the api. See the api serving of the html below for an example, and the notes at the botom.


```
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>SWT</title>
    <link rel="icon"
          type="image/png"
          src="./assets/favicon.ico">
    <link rel='stylesheet' id='ceirs-bootstrap-stylesheet-css'  href='https://s3.amazonaws.com/ceirs-dev-publicweb/css/bootstrap.css' type='text/css' media='all' />
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
    <script src="https://code.jquery.com/jquery-2.2.2.min.js"   integrity="sha256-36cp2Co+/62rEAAYHLmRCPIych47CvdM+uTBJwSzWjI="   crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="'stylesheet">
    <script src="https://use.fonticons.com/25da900b.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="./assets/js/js2pdf/jspdf.min.js"></script>
    <script src="./assets/js/js2pdf/jspdf.plugin.autotable.js"></script>
    <script>
        var authorization_token = '<?php echo $data['token']  ?>'

        var config = {
            user: {
                id: ""
            },
            api: {
                url: '<?php echo $data['api_ip'] ?>'
            }
        };

    </script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <style type="text/css">
        body, input{
            font-size: 18px !important;
        }
    </style>
</head>
<body>
<div id="app" class="container-fluid">
</div>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="'stylesheet">
<script type="text/javascript" src='<?php echo $data['react_bundle_url'] ?>' charset="utf-8"></script>
</body>
</html>
```


##Autorization of API access:

1) website serving app must get a token from backend api :
        http://<ip>/authorizationtoken/{username}
        
2) api generated a secrete_key for each request, saves redis with username: secret_key
    generates a token with that secret_key and sends back the token to the website
    
3) website serving app adds the token in a authorization_token var inside a script tag to be available to the react app

ATTENTION:  named header AuthToken   because aws server, behind apache, was not getting a header named "Authorization"
(worked fine in my local machine)

4) USERNAME must be set in the token. This means the server of the website must post the username to the API with the
token request
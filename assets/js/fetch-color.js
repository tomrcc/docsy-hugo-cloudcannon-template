const fs = require('fs');
// read theme color from _data/site.json
fs.readFile('./data/colors.json', 'utf8', function(err, dataFile){
    
    if(err){
        console.log(err);
        return;
    }
    
    // parse file to JSON so that the variables can be accessed
    dataFile = JSON.parse(dataFile);
    // TODO: Check if dataFile.primary_theme_color is set
    // Open variables.scss and search/replace "$theme: ..." with color from data file
    fs.readFile('./assets/scss/_variables.scss', 'utf-8', function (err, scssFile) {

        if(err){
            console.log(err);
            return;
        }

        var replaced = scssFile;

        // Change the variables to whatever was set in the data file
        if (dataFile.primary_color) {
            const replacementString = dataFile.primary_color;
            replaced = replaced.replace(/\$primary: .*/g, ('$primary: ' + replacementString + ' !default' + ';'));
        } 
        // Write result back to variables.scss
        fs.writeFile('./assets/scss/_variables.scss', replaced, 'utf-8', function (err) {
            if(err){
                console.log(err);
            }
        });
    });
});
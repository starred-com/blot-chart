# Looker Priority Matrix Chart

This repo is using [D3.js](https://d3-graph-gallery.com/index.html) as a library to create SVG visuals.

## You can find the latest version by file name followed by latest version number, example: scotterPlot31

### Script.js
Script is a file that using **D3.js** to create SVG visualizations that interact with Local Data Source only. Means you need to add the data object manaually as JSON file or object. script.js is been called from index.html to display the page locally without any server.

### Looker.js and any other files end with version number
Is the same code as **script.js** but this file contains a structure that could work for Looker only, means you will not be able to see the visual locally. 

You can notice the structure start with **updateAsync** function and ended with **doneRendering()** function. Please follow the steps in the [custom visualizations from looker](https://www.notion.so/9-Custom-Visualisations-1d25c710994049b28d74f7832a6b2ee0)

Inside the updateAsync function you will be able to use and access the properties of data and queryResponse to determine how your visual should act and what to display in the visualization based on real looker data.

### Important note, if you dont use vis as an id, example id="vis" then you might face problem and errors with rendering your chart.


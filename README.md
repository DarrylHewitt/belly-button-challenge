# Belly Button Biodiversity Dashboard Challenge

**https://darrylhewitt.github.io/belly-button-challenge/**

## Project Overview

This project involved creating an interactive dashboard to explore the Belly Button Biodiversity dataset, cataloging the microbes that colonize human navels. The dataset revealed that a small handful of microbial species, termed operational taxonomic units (OTUs), were present in more than 70% of people, while the rest were relatively rare.

## Project Setup

1. **Repository Creation:**
   - A new repository, named belly-button-challenge, was created specifically for this project. It was not added to any existing repository.

2. **Local Setup:**
   - The project repository was cloned to the local machine.

3. **File Copy:**
   - Files (index.html, samples.json, and the static folder) from the StarterCode folder within the Module 14 Challenge zip file were copied into the local repository.
     - Note: While not required to access the samples.json file locally, it was provided for reference.

4. **GitHub Actions:**
   - Changes made locally were committed and pushed to the GitHub repository.

5. **Deployment:**
   - The project repository was deployed to GitHub Pages for public access.

## Instructions

1. **Data Retrieval:**
   - Used the D3 library to read in samples.json from the URL [samples.json](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).

2. **Horizontal Bar Chart:**
   - Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in an individual.
     - Used sample_values as the values for the bar chart.
     - Used otu_ids as the labels for the bar chart.
     - Used otu_labels as the hovertext for the chart.

3. **Bubble Chart:**
   - Created a bubble chart that displayed each sample.
     - Used otu_ids for the x values.
     - Used sample_values for the y values.
     - Used sample_values for the marker size.
     - Used otu_ids for the marker colors.
     - Used otu_labels for the text values.

4. **Sample Metadata Display:**
   - Displayed the sample metadata, including an individual's demographic information.
   - Displayed each key-value pair from the metadata JSON object on the page.

5. **Dynamic Updates:**
   - Ensured that all plots were updated dynamically when a new sample was selected.

6. **Deployment:**
   - Deployed the app to GitHub Pages for easy access and sharing.

7. **Submission:**
   - Submitted the links to the deployed project and the GitHub repository.
   - Maintained regular commits and provided a comprehensive README.md file.

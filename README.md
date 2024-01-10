<style> .table-wrapper { overflow-x: scroll; } </style>

<h1 align="center">Penelope King</h1>
<div align="center">
  <a href="https://www.linkedin.com/in/penelopeking">Linkedin</a>
  •
  <a href="https://github.com/PenelopeKing">GitHub</a>
  <br>
  </div>
  
## About Me
Hello! I'm Penelope King, an aspiring data scientist with a background in machine learning, programming, and collaborative teamwork. I am currently a third year data science undergraduate at University of California, San Diego and expecting to graduate in March 2025.

Currently I am working at Glass Lab at UCSD School of Medicine, and am looking for future opporunities where I can extend and grow my data science skillsets.

While I have more projects un-related to data science, the projects listed here will only be comprised of my data science related projects.
  
## Projects: 
* [Restaurant Recommender System](#restaurant-rating-prediction-recommender-system)
* [Travel Regression Modeling](#travel-analysis)
* [Power Outage Classification](#power-outage-model)
* [Tumor Cell Classification](#breast-cancer-tissue-classification)


### Restaurant Rating Prediction / Recommender System
* [Project Link](https://drive.google.com/file/d/1hPbwxCA0s6dhh3w1OPSqWd2b3721-QjR/view?usp=sharing){:target="_blank" rel="noopener"}
* Python project (sklearn, seaborn, numpy, matplotlib, pandas, tensorflow)
![Alt text](figures/f1_scores_restaurant.png?raw=true "Model Performance Using F-1 Score")
![Alt text](figures/tfidf_restaurant.png?raw=true "Comparing most relevant words by restaurant rating")
![Alt text](figures/eda_restaurant.png?raw=true "EDA")

In this project I trialed different recommender system modeling methods for a prediction problem using a Google resturant review dataset. Some of the methods involved techniques such as utilizing latent factors, while others involved no latent factors. In addition to testing multiple machine learning models, I also performed exploratory data analysis on the dataset, feature engineering, and explored past literature.


### Travel Analysis
* [Project Link](https://github.com/PenelopeKing/travel-analysis/){:target="_blank" rel="noopener"}
* Python project (pandas, sklearn, seaborn, statsmodels, numpy)
<iframe src="figures/eda_travel.png" height = 600 width = 500 frameBorder=0></iframe>

In this group project, I explored into international traveler behavior coming into the US to analyze if the strength of the USD and the appearance of natural disasters and federal emergencies had a significant impact on tourism into the United States. 

We tested multiple regression models to our analysis and looked into why some models may have performed better than others in the context of our data. In this project I took a lead role in the design, EDA, and modeling stages. 


### Power Outage Model
* [Project Link – EDA](https://garveyjli.github.io/power_outage_data_exploration/){:target="_blank" rel="noopener"}  •  [Project Link – Model](https://penelopeking.github.io/power-outage-model/){:target="_blank" rel="noopener"}
* Python project (pandas, sklearn, numpy, matplotlib)
<iframe src="figures/chloro.html" height = 600 width = 500 frameBorder=0></iframe>
<iframe src="figures/missingness-cdfs.html" height = 600 width = 500 frameBorder=0></iframe>

This project focuses on predicting the cause of a power outage. Sometimes power outages may occur due to unexpected reasons and the cause for it would be unclear. 

This project aims to build a classifier using information that is available shortly after a power outage. Aside from model testing and feature engineering, this project also consisted of EDA, looking at past research, and studying the fairness of our final model through hypothesis testing.


### Breast Cancer Tissue Classification
* [Project Link](https://drive.google.com/file/d/1LI0R1Y18HjTU_nr6GSBPy8-FssIv5OMI/view?usp=sharing){:target="_blank" rel="noopener"}
* Python project (pandas, statsmodels, numpy, matplotlib, seaborn)
<iframe src="figures/f1scores_tumor.png" height = 600 width = 500 frameBorder=0></iframe>

This project aimed to predict the malignancy of breast tumors using various information about the tumor’s cell nuclei’s shape and appearance using a dataset of processed tumor images. Being able to accurately predict a tumor cell’s malignancy using its nucleus would be a very important tool to help cancer patients go forward with treatment before they reach a more critical stage of cancer. 

In our project, we aimed to classify breast tumor mass cells as either malignant or benign using a logistic regression classification model based on data about the tissue’s nuclei measurements. We used k-folds cross validation for hyperparameter tuning, with stratified random sampling. In addition to studying past research, this project also consisted of EDA, feature engineering, hyperparameter selection, and model testing.



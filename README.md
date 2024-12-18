<style> .table-wrapper { overflow-x: scroll; } </style>

<h1 align="center">Penelope King</h1>
<div align="center">
  <a href="https://www.linkedin.com/in/penelopeking">Linkedin</a>
  •
  <a href="https://github.com/PenelopeKing">GitHub</a>
  <br>
  </div>
  
# About Me
Hello! I'm Penelope King, a fourth year data science undergraduate at University of California, San Diego. I will be graduating in June 2025 and I am looking for a role where I can apply my data science and machine learning skills.
  
# Projects: 
* [Comparing Graph Neural Networks Against Transformer Based Graph Learning](#comparing-graph-neural-networks-against-transformer-based-graph-learning)
* [Winning Hackathon Project](#winning-hackathon-project-for-image-anomaly-detection)
* [Restaurant Recommender System](#restaurant-rating-prediction-and-recommender-system)
* [Travel Regression Modeling](#travel-analysis)
* [Power Outage Classification](#power-outage-model)
* [Tumor Cell Classification](#breast-cancer-tissue-classification)
* [Data Visualization Projects](#data-visualization-projects)

## Comparing Graph Neural Networks Against Transformer Based Graph Learning
* [Repo Link](https://github.com/PenelopeKing/graph-learning-model-benchmarking){:target="_blank" rel="noopener"}
* [Paper Link](https://drive.google.com/file/d/1tk5ZDKl9fCXoj5ItmffMOLiCzFO8uxzG/view?usp=sharing){:target="_blank" rel="noopener"}
* Python project (Pytorch, Pytorch Geometric)

This project explores the use of transformer-based graph learning models, specifically GraphGPS, and benchmarks their performance against state-of-the-art graph neural networks (GNNs) such as GCN, GIN, and GAT across diverse datasets like CORA, IMDB-BINARY, ENZYME, and PEPTIDES-FUNC. The study highlights the strengths and limitations of these architectures, focusing on their ability to capture local and global dependencies. While simpler GNNs excel in less complex tasks, GraphGPS demonstrates its advantage in handling long-range interactions, particularly in datasets requiring such dependencies, offering insights into advancing graph-based machine learning applications.

## English-to-Japanese Translation Deep Learning Model
* [Repo Link](https://github.com/PenelopeKing/translation-project){:target="_blank" rel="noopener"}
* [Paper Link](https://drive.google.com/file/d/1dnhZI4gRV_cFv4He9Lk6sHGCDm5o3rId/view?usp=sharing){:target="_blank" rel="noopener"}
* Python project (Pytorch, Pandas)

This project explores and compares the performance of four Seq2Seq architectures—CNNs, GRUs, LSTMs, and Transformers—on an English-to-Japanese translation task using the Japanese-English Subtitle Corpus (JESC). The models were evaluated based on their translation accuracy, with CNNs outperforming the others due to their ability to converge faster and effectively capture local connections in short sequences. The study highlights CNNs' suitability for handling Japanese's shorter sentence structures and suggests future directions, including testing on longer documents and other language pairs. The code for this project is available on GitHub.

## Winning Hackathon Project for Image Anomaly Detection 
* [Devpost Link](https://devpost.com/software/dino-nuggetology){:target="_blank" rel="noopener"}
* Python project (Pytorch, Scikit-Image)

<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/u6qkNwPRhec" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>

This project won UCSD's 2024 DataHacks hackathon, which was judged by data science professors and researchers. In this project I collaborated with two other data science students, developing an autoencoder based neural network model. Ultimately this project is an image based anomaly detection. In the project team, I acted as the project team lead, designing and directing data collection and methodoly, while also writing code to build and test the deep learning architectures.

## Restaurant Rating Prediction and Recommender System
* [Project Link](https://drive.google.com/file/d/1hPbwxCA0s6dhh3w1OPSqWd2b3721-QjR/view?usp=sharing){:target="_blank" rel="noopener"}
* Python project (sklearn, seaborn, numpy, matplotlib, pandas, tensorflow)

![Alt text](figures/f1_scores_restaurant.png?raw=true "Model Performance Using F-1 Score")
![Alt text](figures/tfidf_restaurant.png?raw=true "Comparing most relevant words by restaurant rating")

In this project I trialed multiple recommender system modeling methods for a prediction problem using a Google resturant review dataset. Some of the methods involved techniques such as utilizing latent factors, while others involved no latent factors. In addition to testing multiple machine learning models, I also performed exploratory data analysis on the dataset, feature engineering, and explored past literature. 

Features used to train the model consisted of natural language processing (TF-IDF) to figure out what words were associated with positive or negative reviews, as well as figuring out how to deal with the sparsity of the data we were using. 


## Travel Analysis
* [Project Link](https://github.com/PenelopeKing/travel-analysis/){:target="_blank" rel="noopener"}
* Python project (pandas, sklearn, seaborn, statsmodels, numpy)
<iframe src="figures/eda_travel.png" height = 500 width = 600 frameBorder=0></iframe>

In this group project, I explored into international traveler behavior coming into the US to analyze if the strength of the USD and the appearance of natural disasters and federal emergencies had a significant impact on tourism into the United States.

We tested multiple regression models to our analysis and looked into why some models may have performed better than others in the context of our data. In this project, I took a lead role in outlining key deadlines, assigning work, and the project design. I also wrote code for exploratory data analysis (EDA) and training and trialing the models.



## Power Outage Model
* [Project Link – EDA](https://garveyjli.github.io/power_outage_data_exploration/){:target="_blank" rel="noopener"}  •  [Project Link – Model](https://penelopeking.github.io/power-outage-model/){:target="_blank" rel="noopener"}
* Python project (pandas, sklearn, numpy, matplotlib)
<iframe src="figures/chloro.html" height = 500 width = 700 frameBorder=0></iframe>
<iframe src="figures/missingness-cdfs.html" height = 500 width = 600 frameBorder=0></iframe>

This project focuses on predicting the cause of a power outages. Sometimes power outages may occur due to unexpected reasons and the cause for it would be unclear. 

This project consisted of building a decision tree-based classifier using information that is available shortly after a power outage. Aside from model testing and feature engineering, this project also consisted of EDA, looking at past research, and studying the fairness of our final model through hypothesis testing.


## Breast Cancer Tissue Classification
* [Project Link](https://drive.google.com/file/d/1LI0R1Y18HjTU_nr6GSBPy8-FssIv5OMI/view?usp=sharing){:target="_blank" rel="noopener"}
* Python project (pandas, statsmodels, numpy, matplotlib, seaborn)
<iframe src="figures/f1scores_tumor.png" height = 500 width = 600 frameBorder=0></iframe>

This project aimed to predict the malignancy of breast tumors using various information about the tumor’s cell nuclei’s shape and appearance using a dataset of processed tumor images. Being able to accurately predict a tumor cell’s malignancy using its nucleus would be a very important tool to help cancer patients go forward with treatment before they reach a more critical stage of cancer. 

In our project, we aimed to classify breast tumor mass cells as either malignant or benign using a logistic regression classification model based on data about the tissue’s nuclei measurements. We used k-folds cross validation for hyperparameter tuning, with stratified random sampling. In addition to studying past research, this project also consisted of EDA, feature engineering, hyperparameter selection, and model testing.

## Data Visualization Projects
 * [Dijkstra Tutorial](https://penelopeking.github.io/dijkstra-visualization/){:target="_blank" rel="noopener"}
 * [California wildfires visualization](https://garveyjli.github.io/CAtching-fire/){:target="_blank" rel="noopener"}



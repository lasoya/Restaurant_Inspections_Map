import pandas as pd
import numpy as np

# read in the dataset and store in a variable
# data = pd.read_csv('https://media.githubusercontent.com/media/lasoya/Mod3_Project/master/data/DOHMH_New_York_City_Restaurant_Inspection_Results.csv', dtype=str)

# print(data.columns)

# data.drop(['PHONE', 'CUISINE DESCRIPTION', 'INSPECTION DATE', 'ACTION', 'VIOLATION DESCRIPTION', 'GRADE DATE', 'RECORD DATE', 'INSPECTION TYPE'], axis=1, inplace=True)

# data.dropna(subset=['SCORE', 'GRADE'], inplace=True)

# data.to_csv('./data/NYC_Restaurant_Inspections_Data_Subset.csv')

# read in dataset saved from above and store in a variable
data_sub = pd.read_csv('./data/NYC_Restaurant_Inspections_Data_Subset.csv', dtype=str)

# grab only the citations that are listed as critical violations
data_critical = data_sub[data_sub['CRITICAL FLAG'] == 'Critical']

print(data_critical.head())

print(data_critical.shape)

print(data_critical.info())

# grab only the citations that are listed as non-critical violations
data_noncritical = data_sub[data_sub['CRITICAL FLAG'] == 'Not Critical']

print(data_noncritical.head())

print(data_noncritical.shape)

print(data_noncritical.info())
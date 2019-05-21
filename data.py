import pandas as pd
import numpy as np

# read in the dataset and store in a variable
data = pd.read_csv('https://media.githubusercontent.com/media/lasoya/Mod3_Project/master/data/DOHMH_New_York_City_Restaurant_Inspection_Results.csv', dtype=str)

# drop unnecessary columns
data.drop(['PHONE', 'CUISINE DESCRIPTION', 'ACTION', 'VIOLATION CODE', 'VIOLATION DESCRIPTION', 'GRADE DATE', 'RECORD DATE', 'INSPECTION TYPE'], axis=1, inplace=True)

# drop all rows that have an Inspection Date of 1/1/1900 (represent new restaurants that do not have any inspection results)
data = data[data['INSPECTION DATE'] != '01/01/1900'].copy()

# drop any citations that have null values for Score and Grade
data.dropna(subset=['SCORE', 'GRADE'], inplace=True)

# set all A grades to 1
data.loc[data['GRADE']=='A', 'GRADE'] = 1

# set all non-A grades to 0
data.loc[data['GRADE']!='A', 'GRADE'] = 0

# convert Inspection Date to datetime object
data['INSPECTION DATE'] = pd.to_datetime(data['INSPECTION DATE'])

# split out the year from Inspection Date to a new column
data['INSPECTION YEAR'] = data['INSPECTION DATE'].dt.year

# keep only the citations from 2018-2019
data_recent = data[(data['INSPECTION YEAR']==2018) | (data['INSPECTION YEAR']==2019)].copy()

# create dummies of the Critical Flag series
flag_dummies = pd.get_dummies(data['CRITICAL FLAG'])

# concat the dummies dataframe to main dataframe
data_flag = pd.concat([data_recent, flag_dummies], axis=1)

# rename columns of dataframe
data_flag = data_flag.rename({
                            'CAMIS':'ID', 
                            'DBA':'RESTAURANT NAME', 
                            'BORO':'BOROUGH', 
                            'Critical':'NUMBER OF CRITICAL VIOLATIONS', 
                            'Not Critical': 'NUMBER OF NON-CRITICAL VIOLATIONS'}, axis=1)

# create a subset of citations of critical violations
data_critical = data_flag[data_flag['CRITICAL FLAG']=='Critical'].copy()

# drop unnecessary columns
data_critical.drop(['CRITICAL FLAG', 'SCORE', 'Not Applicable', 'NUMBER OF NON-CRITICAL VIOLATIONS'], axis=1, inplace=True)

# group and aggregate up rows by restaurant and inspection date
data_critical = data_critical.groupby(['ID', 'RESTAURANT NAME', 'BOROUGH', 'BUILDING', 'STREET', 'ZIPCODE', 'INSPECTION DATE', 'INSPECTION YEAR']).agg({
    'GRADE':'max',
    'NUMBER OF CRITICAL VIOLATIONS': 'sum'
}).reset_index()

# group and aggregate up rows this time by restaurant and inspection year - average the number of violations
data_critical_mean = data_critical.groupby(['ID', 'RESTAURANT NAME', 'BOROUGH', 'BUILDING', 'STREET', 'ZIPCODE', 'INSPECTION YEAR']).agg({
    'GRADE':'max',
    'NUMBER OF CRITICAL VIOLATIONS': 'mean'
}).reset_index()

# convert the dtype for Inspection Year to integer
data_critical_mean['INSPECTION YEAR'] = data_critical_mean['INSPECTION YEAR'].astype(int)

# create a subset of citations of non-critical violations
data_noncritical = data_flag[data_flag['CRITICAL FLAG']=='Not Critical'].copy()

# drop unnecessary columns
data_noncritical.drop(['CRITICAL FLAG', 'SCORE', 'Not Applicable', 'NUMBER OF CRITICAL VIOLATIONS'], axis=1, inplace=True)

# group and aggregate up rows by restaurant and inspection date
data_noncritical = data_noncritical.groupby(['ID', 'RESTAURANT NAME', 'BOROUGH', 'BUILDING', 'STREET', 'ZIPCODE', 'INSPECTION DATE', 'INSPECTION YEAR']).agg({
    'GRADE':'max',
    'NUMBER OF NON-CRITICAL VIOLATIONS': 'sum'
}).reset_index()

# group and aggregate up rows this time by restaurant and inspection year - average the number of violations
data_noncritical_mean = data_noncritical.groupby(['ID', 'RESTAURANT NAME', 'BOROUGH', 'BUILDING', 'STREET', 'ZIPCODE', 'INSPECTION YEAR']).agg({
    'GRADE':'max',
    'NUMBER OF NON-CRITICAL VIOLATIONS': 'mean'
}).reset_index()

# convert the dtype for Inspection Year to integer
data_noncritical_mean['INSPECTION YEAR'] = data_noncritical_mean['INSPECTION YEAR'].astype(int)

# save dataframes to csv files
# data_critical_mean.to_csv('./data/NYC_Restaurant_Inspections_Data_Critical.csv')
# data_noncritical_mean.to_csv('./data/NYC_Restaurant_Inspections_Data_Not_Critical.csv')

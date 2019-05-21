import pandas as pd
import numpy as np
import pickle
import json

"""
Work with the dataset regarding NYC Restaurant Inspections: non-critical violations.
"""

# read in and save to a variable the dataset of restaurants with non-critical violations
noncritical = pd.read_csv('./data/NYC_Restaurant_Inspections_Data_Not_Critical.csv').drop('Unnamed: 0', axis=1)

# create a new column with the full address concatenated from the columns: BUILDING, STREET, BOROUGH, ZIPCODE
noncritical['ADDRESS'] = noncritical['BUILDING'] + ' ' + noncritical['STREET'] + ' ' + noncritical['BOROUGH'] + ' NY ' + noncritical['ZIPCODE'].astype(str)

# drop unnecessary columns
noncritical.drop(['BOROUGH', 'BUILDING', 'STREET', 'ZIPCODE', 'GRADE'], axis=1, inplace=True)

# grab restaurants with non-critical violations from 2018
noncritical_2018 = noncritical[noncritical['INSPECTION YEAR']==2018].copy()

# grab restaurants with non-critical violations from 2019
noncritical_2019 = noncritical[noncritical['INSPECTION YEAR']==2019].copy()


"""
Work with the dataset regarding NYC Restaurant Inspections: critical violations.
"""

# read in and save to a variable the dataset of restaurants with critical violations
critical = pd.read_csv('./data/NYC_Restaurant_Inspections_Data_Critical.csv').drop('Unnamed: 0', axis=1)

# create a new column with the full address concatenated from the columns: BUILDING, STREET, BOROUGH, ZIPCODE
critical['ADDRESS'] = critical['BUILDING'] + ' ' + critical['STREET'] + ' ' + critical['BOROUGH'] + ' NY ' + critical['ZIPCODE'].astype(str)

# drop unnecessary columns
critical.drop(['BOROUGH', 'BUILDING', 'STREET', 'ZIPCODE', 'GRADE'], axis=1, inplace=True)

# grab restaurants with critical violations from 2018
critical_2018 = critical[critical['INSPECTION YEAR']==2018].copy()

# grab restaurants with critical violations from 2019
critical_2019 = critical[critical['INSPECTION YEAR']==2019].copy()

# create a list of addresses of restaurants with critical violations in 2018
critical_addresses = critical_2018.ADDRESS.unique().tolist()

# pickle list of restaurants with critical violations in 2018
# open output file for writing
# with open('critical_addresses.data', 'wb') as f:  
#     # store the data as binary data stream
#     pickle.dump(critical_addresses, f)


"""
Create and save list of addresses.
"""

# create list of addresses combined from both dataframes
addresses = list(set(critical.ADDRESS.unique().tolist() + noncritical.ADDRESS.unique().tolist()))

# pickle list to file
# open output file for writing
# with open('addresses.data', 'wb') as f:  
#     # store the data as binary data stream
#     pickle.dump(addresses, f)

# use json to save list to txt file
# open output file for writing
# with open('addresses.txt', 'w') as f:  
    # dump the data in file
    # json.dump(addresses, f)


"""
Save dataframes to CSV files
"""

# critical_2018.to_csv('./data/NYC_Restaurant_Inspections_Data_Critical_2018.csv')
# noncritical_2018.to_csv('./data/NYC_Restaurant_Inspections_Data_Not_Critical_2018.csv')
# critical_2019.to_csv('./data/NYC_Restaurant_Inspections_Data_Critical_2019.csv')
# noncritical_2019.to_csv('./data/NYC_Restaurant_Inspections_Data_Not_Critical_2019.csv')

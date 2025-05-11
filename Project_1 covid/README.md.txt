# Project 1: COVID-19 Exploratory Data Analysis & Dashboard

**Dataset:**  
Our World in Data – global daily COVID-19 case counts, deaths, tests, and more  
CSV link: https://github.com/owid/covid-19-data/raw/master/public/data/owid-covid-data.csv

**Objective:**  
Understand temporal and geographic trends in COVID-19 spread and testing.

**Key Questions:**  
1. How have new case counts evolved globally and by continent over time?  
2. Which countries experienced the highest peaks, and when?  
3. What’s the relationship between testing rates and detected cases?  
4. How do rolling averages (7-day) smooth out reporting noise?

**Success Criteria:**  
- Cleaned dataset saved as `data/cleaned/owid-covid-data.csv`  
- Jupyter notebook `notebooks/eda.ipynb` with EDA, charts, and commentary  
- Streamlit app `app/app.py` with at least three interactive filters:
  - Date range selector  
  - Continent/country dropdown  
  - Metric toggle (new cases, new cases per million, tests)

**Deliverables:**  
- `data/` (raw & cleaned)  
- `notebooks/eda.ipynb`  
- `app/app.py` + `requirements.txt`  
- Updated `README.md` with project overview

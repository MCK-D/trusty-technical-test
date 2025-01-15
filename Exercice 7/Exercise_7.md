# Exercise 7: Data Export

## Objective
Test skills in exporting data and managing files.

## Instructions
- Add a feature to export the data returned by the API into a **CSV** file.
- The route should be: `/exportOpenJobsInfos/{{companyName}}`.

## Input
- Request: `/exportOpenJobsInfos/homa-games`.

## Expected Output
- A generated CSV file with columns such as:
  - `Job ID`, `Name`, `Department`, `Contract`, `Location`, `Published At`, etc.
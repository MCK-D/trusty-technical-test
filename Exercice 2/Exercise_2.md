# Exercise 2: Adding Filters

## Objective
By using the API from the previous exercice, enable filtering the results returned by the API based on certain criteria to test the candidate's ability to manipulate data on the server side.

## Instructions
- Modify your API to allow filtering results by:
  - **Department** (e.g., `Operations`).
  - **Contract type** (e.g., `Full-time` or `Part-time`).
  - **Location** (e.g., `Paris, Île-de-France, France`).
- Filters should be passed as query parameters. Example: `/getOpenJobsInfos/{{companyName}}?department=Operations&contract=Full-time`.
- Document the new parameters in your API documentation.

## Input
- Request: `/getOpenJobsInfos/homa-games?department=Operations&contract=Full-time`.

## Expected Output
```json
{
    "companyName": "Homa",
    "endpointats": "https://apply.workable.com/api/v1/widget/accounts/homa-games?details=true",
    "nbrOpenJob": 1,
    "openJobs": [
        {
            "ats_id": "66A69B39D2",
            "name": "Business Analyst",
            "jobUrl": "https://apply.workable.com/homa-games/j/66A69B39D2",
            "department": "Operations",
            "contract": "Full-time",
            "education": "",
            "experience": "Director",
            "position": "Project Manager",
            "location": "Paris, Île-de-France, France",
            "publishedAt": "2020-06-27T14:42:22.585Z"
        }
    ]
}
```


# Exercice 1 : Retrieve the list of opened jobs in a Company

## Objective
In this exercice, we're going to ask you to develop an endpoint API on the plateform called [Workable]("https://www.workable.com"), the list of opened jobs in a Company.

## Instructions
- When call API endpoint `/getOpenJobsInfos/{{companyName}}` retrieve information about jobs opened on Workable platform for this `companyName`.
- Write a small documentation about your API

## Enter 
You will use the job board open source data from this endpoint : 
`https://apply.workable.com/api/v1/widget/accounts/{{companyName}}?details=true`

For example, you can take `companyName = 'homa-games'`

## Input
- Request: `/getOpenJobsInfos/homa-games`.

## Expected Output
```json
{
    "companyName":"Homa",
    "endpointats": "https://apply.workable.com/api/v1/widget/accounts/homa-games?details=true",
    "nbrOpenJob":4,
    "openJobs":[
        {   
            "ats_id":"66A69B39D2",
            "name":"Business Analyst",
            "jobUrl":"https://apply.workable.com/homa-games/j/66A69B39D2",
            "department":"Operations",
            "contract":"Full-time",
            "education": "",
            "experience": "Director",
            "position": "Project Manager",
            "location": "Paris, Île-de-France, France",
            "publishedAt": "2020-06-27T14:42:22.585Z"
        },
        {
            "[key]":"value"
        },
        {   
            "ats_id":"8CC6579FDC",
            "name":"Lead Producer - All in Hole",
            "jobUrl":"https://apply.workable.com/homa-games/j/8CC6579FDC",
            "department":"Operations",
            "contract":"Full-time",
            "education": "",
            "experience": "Director",
            "position": "Business Analyst",
            "location": "Paris, Île-de-France, France",
            "publishedAt": "2020-06-27T14:42:22.585Z"
        }
        
    ]
}
```
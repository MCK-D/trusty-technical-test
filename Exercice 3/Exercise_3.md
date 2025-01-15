# Exercise 3: Error Handling and API Rate Limiting

## Objective
Test error handling and the robustness of the implementation.

## Instructions
- Implement error handling for:
  - Connection errors with the external API (e.g., Workable is unavailable).
  - Non-existent `companyName`.
  - Invalid filters.
  - ....
- Add a rate-limiting mechanism to prevent API abuse (e.g., 10 requests per minute per user).

## Input
- Request with an invalid `companyName`: `/getOpenJobsInfos/invalid-company`.
- Too many successive requests from the same IP.

## Expected Output
- A JSON response with an error code and a descriptive message. Example:
```json
{
    "code": "429",
    "error": "Rate limit exceeded",
    "message": "You have exceeded the maximum number of requests allowed. Try again later."
}
```
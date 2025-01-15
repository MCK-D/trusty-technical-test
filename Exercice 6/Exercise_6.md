# Exercise 6: API Security

## Objective
Test the candidate's ability to secure an API.

## Instructions
- Add authentication to your API using **JWT**.
- Only authenticated requests should be able to access the API.
- Implement input validation to prevent **Injection** attacks.

## Input
- Request without a token: `/getOpenJobsInfos/homa-games`.
- Request with an invalid token.
- Request with a valid token.

## Expected Output
- JSON response with appropriate status codes:
  - 401 for unauthenticated requests.
  - 403 for requests with invalid tokens.
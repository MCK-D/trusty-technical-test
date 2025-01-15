# Exercise 5: Performance Optimization

## Objective
Test skills in optimizing queries and implementing caching.

## Instructions
- Implement a caching layer for API responses using **Redis** or another caching mechanism.
- Responses for the same `companyName` should be cached for 5 minutes.
- Document the implementation and scenarios where the cache is used.

## Input
- Two consecutive requests with the same `companyName`.

## Expected Output
- The first request interacts with the Workable API.
- The second request uses cached data.
# Atelierx

## Tech Stack
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23323330.svg?style=for-the-badge&logo=postgresql&logoColor=336791){width=100px}](https://www.postgresql.org/)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)


![AWS](https://img.shields.io/badge/AWS-%23323330.svg?style=for-the-badge&logo=amazon-aws&logoColor=232F3E)
![NGINX](https://img.shields.io/badge/NGINX-%23323330.svg?style=for-the-badge&logo=nginx&logoColor=269539)

![Jest](https://img.shields.io/badge/Jest-%23323330.svg?style=for-the-badge&logo=jest&logoColor=C21325)
![K6](https://img.shields.io/badge/K6-%23323330.svg?style=for-the-badge&logo=k6&logoColor=E10098)
![Loader.io](https://img.shields.io/badge/Loader.io-%23323330.svg?style=for-the-badge&logo=loaderio&logoColor=FFA500)


## Overview
**_Atelierx_** is a back-end solution for an e-commerce platform. The goal is to replace the existing Atelier API with a robust RESTful architecture consisting of multiple microservices. These microservices are designed to support the full dataset of the project and can scale to meet the demands of production traffic.

## Task
An explicit goal for this challenge was to replace an existing API - an implicit expectation was to create a **_better_** API. The rebuilt API needed to meet the following specifications:
* Maximum latency of 2 seconds (2000 ms)
* Minimum requests per second of 1000/second
* Servers and Database deployed on separate EC2 instances

## Actions
The following systems were implemented to build "Aterlierx":
* Raw .csv data transferred to the PostgreSQL database
* Backend reconfigured with optimized queries for PostgreSQL database
* Local query speed tested with K6








| K6 Screenshot | Optimized Query Result |
|---|---|
| ![reviews](https://github.com/SDC-Tubular-Tomatoes/RatingsAndReviews-T/assets/115767154/f7477cf1-7cb9-49dd-b986-d246c195be9d) | Tested: 1100 VUs/30 seconds<br />Latency: 170 ms<br />Requests: 191,036total, or 6332.624/s |

* Deployed backend and database to separate EC2 instances through AWS
* Tested response time through loader.io

| Loader.io Screenshot | Post-Deployment |
|---|---|
| ![1500 no chaching](https://github.com/SDC-Tubular-Tomatoes/RatingsAndReviews-T/assets/115767154/0065aec1-5b69-4c2b-9d1a-02be70272450) | Tested: 1500 clients/30 seconds<br />Latency: 987 ms<br />Requests: 44988 total, or 1499.6/s |

* PROBLEM: Latency increased to 987 ms
* Deployed one additional EC2 instance of server and load balancer (NGINX) to lower latency to 47 ms while increasing client load to 2500 clients

| Loader.io Screenshot | Post-Load-Balancing |
|---|---|
| ![loadbalance no caching](https://github.com/SDC-Tubular-Tomatoes/RatingsAndReviews-T/assets/115767154/9004c659-c2e7-4ac8-b6b7-0494e5189f8e)| Tested: 2500 clients/30 seconds<br />Latency: 47 ms<br />Requests: 74,980 total, or 2499.3/s/s |

* Implemented caching (NGINX) to improve stability to allow for larger client load over a narrow API endpoint range

| Loader.io Screenshot | Post-Caching |
|---|---|
| ![4000 with caching](https://github.com/SDC-Tubular-Tomatoes/RatingsAndReviews-T/assets/115767154/445b0890-2be1-49e0-9005-173cda065d77) | Tested: 4000 clients/30 seconds<br />Latency: 38 ms<br />Requests: 119,959 total, or 3998.63/s |

## Results
Through implementing the above measures, the resultant API is highly performant and easily horizontally scaled. The results exceed the minimum metrics laid out in the Tasks section. Through this project, I've gained mastery over PostgreSQL, backend development principles, and testing tools like K6 and Loader.io.

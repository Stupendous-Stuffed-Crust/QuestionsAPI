# questions-api
Questions and Answers API

Tech Stack: ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) | ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) | ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) | ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white) | ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) | ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) | Loader.io

Goal: Redesign a monolithic API into microservices for an E-commerce application. Then build and scale the service to handle web-scale traffic.

- ETL over 5 million rows of product data from 3 CSV files into a PostgreSQL database

- Designed the architecture of the Questions & Answers microservice and scaled from 2 to 5 EC2 T2 micro instances, including the Postgres database, NGINX load balancer, and 3 express servers; comfortably handling 2000 RPS with a 23 ms latency and 0% error rate

-Implemented NGINX load balancer after using the CLI tool, htop, to identify the express server CPU usage as the bottleneck of the original 2-instance system, then horizontally scaled from 1 to 3 server instances, increasing throughput by 280%

- Integrated the least connected NGINX load balancing technique, increasing throughput by an additional 15% compared to round-robin


![Loader.io](https://github.com/Stupendous-Stuffed-Crust/questions-api/assets/90667844/7dcf5a05-adae-4d93-bb98-ec5653a08bd1)
![htop](https://github.com/Stupendous-Stuffed-Crust/questions-api/assets/90667844/e7d87c80-45aa-4118-a40b-7d5d54cd1438)

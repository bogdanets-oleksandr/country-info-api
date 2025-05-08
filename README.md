#Country Information API

This is a NestJS-based RESTful API that fetches and stores public holiday events using a PostgreSQL database. The app is fully containerized with Docker and ready for local development or deployment.

---

## Features

- Shows available countries
- Fetches country info such as: List of Border countries, Population Data, Flag Image URL
- Fetches public holidays by country
- Stores events for a user in a PostgreSQL database
- Uses Docker and Docker Compose for easy setup
- Environment-based configuration with `.env` 
- API documentation via Swagger

## Installation

1. Clone the repository

```bash
git clone https://github.com/bogdanets-oleksandr/country-info-api
```
2.Move to the new directory
```bash
cd country-info-api
```
3. Run with Docker
```bash
docker compose up
```

#Environment

You can make adjustments to your environment by changing variables in .env file


#URL

Base url for the api
http://localhost:3000

Swagger url
http://localhost:3000/api

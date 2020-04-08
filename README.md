# Test Task

App allows user to manage profiles.

## Requirements:

- Docker

## Launch instructions:

```bash
docker-compose up -d
docker exec -w /var/www/html/test test-php php artisan migrate
```

Next you need to create `.env` file. You can just copy and rename `.env.example` file.
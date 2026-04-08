## Student
- Name: Руслан Кірюхін
- Group: ФІСТ 232/2
- University: Європейський Університет

## Практичне заняття №3 — CRUD REST API для MiniShop

### Структура репозиторію
```text
.
├── src/
│   ├── categories/          # Модуль категорій (Entity, Module, Service, Controller)
│   ├── products/            # Модуль продуктів (Entity, Module, Service, Controller)
│   ├── migrations/          # Файли міграцій БД
│   ├── data-source.ts       # Конфігурація TypeORM CLI
│   └── app.module.ts        # Головний модуль застосунку
├── Dockerfile
├── docker-compose.yml
└── README.md


 Schema |    Name    | Type  |  Owner   
--------+------------+-------+----------
 public | categories | table | nestuser
 public | migrations | table | nestuser
 public | products   | table | nestuser
(3 rows)


ruslan@MacBook-Air-Ruslan docker % curl -X POST http://localhost:3000/api/categories -H "Content-Type: application/json" -d '{"name": "Electronics", "description": "Gadgets"}'
{"id":1,"name":"Electronics","description":"Gadgets","createdAt":"2026-04-08T21:02:31.702Z"}%   

ruslan@MacBook-Air-Ruslan docker % curl -X POST http://localhost:3000/api/products -H "Content-Type: application/json" -d '{"name": "iPhone 15", "price": 999.99, "stock": 50, "categoryId": 1}'
{"id":1,"name":"iPhone 15","description":null,"price":999.99,"stock":50,"isActive":true,"category":{"id":1},"createdAt":"2026-04-08T21:03:13.181Z","updatedAt":"2026-04-08T21:03:13.181Z"}%           

ruslan@MacBook-Air-Ruslan docker % curl http://localhost:3000/api/products/999
{"message":"Product #999 not found","error":"Not Found","statusCode":404}%                                                                             
ruslan@MacBook-Air-Ruslan docker % 
## Student
- Name: Кірюхін Руслан
- Group: ФІСТ 232/2

## Практичне заняття №5 — JWT Authentication + Guards + RBAC

### Тест реєстрації
(Встав вивід curl POST /auth/register, який ми робили раніше)

### Тест логіну
{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoicnVzbGFuQHRlc3QuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzc3NTc1NzExLCJleHAiOjE3Nzc1NzkzMTF9.7V5BaUUgNtZezNB1mWIDWcWcSaMHcAcPkhGpSsptJGo"}

### Тест 401 — запит без токена
{"message":"Missing token","error":"Unauthorized","statusCode":401}

### Тест успішного створення від admin
{"id":2,"name":"SK-CARS Detailing Kit","description":null,"price":1200,"stock":5,"isActive":true,"createdAt":"2026-04-30T19:03:31.490Z","updatedAt":"2026-04-30T19:03:31.490Z"}
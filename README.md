## Student
- [cite_start]Name: Руслан Кірюхін [cite: 296]
- Group: [ФІСТ 232/2]
- [cite_start]University: Європейський Університет [cite: 297]

## [cite_start]Практичне заняття №2 — NestJS + PostgreSQL + Redis у Docker [cite: 298]

## [cite_start]Структура репозиторію [cite: 299]
.
[cite_start]├── src/                # NestJS source code [cite: 302]
[cite_start]├── Dockerfile [cite: 303]
[cite_start]├── docker-compose.yml [cite: 304]
[cite_start]├── .env.example        # шаблон змінних оточення [cite: 305]
[cite_start]└── README.md [cite: 306]

## [cite_start]Запуск проекту [cite: 308]
```bash
cp .env.example .env
docker compose up --build [cite: 310-311]
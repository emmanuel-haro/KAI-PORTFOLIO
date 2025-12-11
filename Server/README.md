# KAI Portfolio - Server

### 1) Environment
Create `Server/.env` (or copy `.env.example`) and set:
```
DATABASE_URL=mongodb+srv://user:pass@cluster/mydb
PORT=3000
# optional
API_KEY=your-api-key
```

### 2) Run locally
```
cd Server
npm install
npm run dev
```
Server runs at `http://localhost:3000`.

### 3) API (used by the client)
- `GET    /api/portfolio` – list projects
- `GET    /api/portfolio/:id` – single project
- `POST   /api/portfolio` – create project
- `PUT    /api/portfolio/:id` – update project
- `DELETE /api/portfolio/:id` – delete project
If `API_KEY` is set, send `x-api-key: <value>` header.

### 4) Postman quick start
- Import a collection with the above routes (base URL `http://localhost:3000`).
- Add an `x-api-key` header to the collection if you set `API_KEY`.
- Body for create/update (JSON):
```json
{
  "title": "Portfolio Website",
  "description": "React + Tailwind site",
  "imageUrl": "https://.../screenshot.png",
  "liveUrl": "https://my-site.com",
  "githubUrl": "https://github.com/me/repo",
  "technologies": ["React", "Tailwind"],
  "tags": ["frontend"]
}
```

### 5) Deploy notes
- Set `DATABASE_URL`, `PORT`, and optional `API_KEY` in your host’s env.
- Ensure MongoDB is reachable from the host (allow IP / VPC).
- The client expects the server base URL in `VITE_API_URL`.
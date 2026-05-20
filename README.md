```
머리카락 실시간으로 빠지는 중
머리카락만 빠지면 다행인듯
```
## Getting Started
```
[npm run dev]
[backend\venv\Scripts\python.exe -m uvicorn app.main:app --app-dir backend --port 8010]
Open [http://localhost:3000]
Backend API [http://localhost:8010]
```
## Getting push to git
```
[git remote show origin]
```
```
수정 취소 [git restore --staged app/login/page.tsx]
[git add .]
[git commit -m "수정 내용"]
[git push] or [git push origin (branch name)]
```
## Compare with git
```
git status

수정 사항 있을 때   modified: app/page.tsx
git보다 뒤쳐질 때 [git full]    >Your branch is behind 'origin/main'
git보다 앞서갈 때 [git push]    >Your branch is ahead of 'origin/main'
```
## List to do
```
제재자 접근 권한 변경 기능 추가
개인간 채팅 기능 추가
```

## 빠른 시작(데이터 베이스)
Docker 설치 후 cmd 관리자 권한으로 3개 실행해서 밑의 명령어 구동하면 됩니다.

### 1. Docker 실행
docker run --name mysql -e MYSQL_ROOT_PASSWORD=mysql_password -e MYSQL_DATABASE=shutdown_db -p 3306:3306 -d mysql:8.0

### 2. Backend 실행 (자동으로 DB 테이블 생성됨)
cd backend && python -m uvicorn app.main:app --reload --port 8010

### 3. Frontend 실행
cd frontend && npm install && npm run dev
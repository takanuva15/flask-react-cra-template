# flask-react-cra-template
Full-stack app using create-react-app for the frontend and flask for the backend

Followed this tutorial: https://dev.to/nagatodev/how-to-connect-flask-to-reactjs-1k8i
And this SO question: https://stackoverflow.com/a/45634550

## Install steps
```
# Open terminal
cd frontend
npm i
cd ../backend
py -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

## Development steps
Run frontend in one terminal:
```
cd frontend
npm start
# Open browser to http://localhost:3000
```

Run backend in another terminal:
```
cd backend
.venv\Scripts\activate
flask run
# Backend runs on http://localhost:5000
```

## Deployments
```
cd frontend
npm run build

cd ../backend
.venv\Scripts\activate
flask run
# visit http://localhost:5000 and you'll see your built React UI
```

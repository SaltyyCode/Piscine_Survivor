# Incredible project

## before starting

### Backend server
#### Create .env file
Copy the .env.example file in a .env file and fill in the variables
```
cp backend/.env.example backend/.env
# Then fill in the variables
```

#### Start Postgre docker
From the root of the project, run:
```
docker-compose up -d
```
This will start a PostgreSQL database in a docker container

#### install dependencies
Go in the backend folder and run:
```
npm install
```

#### Run migrations
Still in the backend folder, run:
```
npx prisma generate
npx prisma push db
```
This will create the database schema in your PostgreSQL database

#### Launch server
Still in the backend folder, run:
```
npm run dev
```

## Launch project
Now go back to the root of the project and go in the frontend folder **my-app**:
```
npm install
npm run dev
```

#### author:

- [@Clement Bouret](https://github.com/SaltyyCode)
- [@Lenny Tassart](https://github.com/Niouthte)
- [@Romaric Loevenbruck](https://github.com/SaltyyCode)
- [@Matisse Dufour](https://github.com/Dufour-Matisse)

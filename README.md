### Deploy: 

https://main--wonderful-otter-f21a09.netlify.app/

### Production docker:

build:

    docker  build -f ./deploy/Dockerfile -t buildname .

run:

    docker run -itp 3000:3000 buildname

### Development:

    docker compose watch

### Development (without Docker):

    nvm use 
    npm i
    npm run dev
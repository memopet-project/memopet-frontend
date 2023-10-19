#도커파일 시작 - 위에서부터 순서대로 진행됨
#명령어: docker build -t cosy-pet .

#이미지에 쓰일 노드 버전 in 도커서버
FROM node:20-alpine AS base

#파일을 담을 디렉토리 설정
WORKDIR /app

#의존성 설치를 위해 package.json을 담음
COPY package.json ./

#npm install
RUN npm install

#이미지를 빌드한 디렉토리의 모든 파일들을 app 디렉토리(컨테이너)로 복사
COPY . .

#npm run build
RUN npm run build

#개발환경에서 보여줌
CMD [ "npm", "run", "dev" ]
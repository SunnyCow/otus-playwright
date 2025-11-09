FROM node:22
WORKDIR /opt/workdir

COPY package.json package-lock.json ./

RUN npm ci && \
    npx playwright install --with-deps

COPY . .

CMD ["node"]

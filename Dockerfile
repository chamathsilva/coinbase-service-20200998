# Builder
FROM public.ecr.aws/bitnami/node:12.22.6 AS builder
WORKDIR /app
COPY . /app/
RUN npm i
RUN npm run build

# Prod Deploy Ready Image
FROM public.ecr.aws/bitnami/node:12.22.6 AS prod
EXPOSE 8080
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
CMD ["node", "dist/app.js"]


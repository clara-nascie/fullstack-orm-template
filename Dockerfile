FROM node:22-alpine

WORKDIR /app

# Copy package configurations
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy Prisma schema and generate client
COPY prisma ./prisma
RUN npx prisma generate

# Copy the rest of the application files
COPY . .

EXPOSE 3334

# Run dev command (starts tsx watch)
CMD ["npm", "run", "dev"]

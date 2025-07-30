# --- STAGE 1: builder ---
FROM node:22-slim AS builder
WORKDIR /app

# 1) Install only app deps
COPY app/package*.json ./
RUN npm ci

ARG RESEND_API_KEY
ENV RESEND_API_KEY=${RESEND_API_KEY}

# 2) Copy source & build
COPY app/ ./
RUN npm run build
RUN npm prune --production

# --- STAGE 2: runtime ---
FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV TRUST_PROXY=1
# 3) Copy build output and prod deps
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
# 4) Launch the SvelteKit Node server
CMD ["node", "build/index.js"]
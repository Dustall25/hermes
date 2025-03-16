# Hermes - Inbox Today. Done Tomorrow.

Turn your emails into calendar appointments automatically with AI-powered intelligence.

## 🚀 Features

- **Smart Email Processing**: Automatically analyzes emails and extracts actionable items
- **AI-Powered Calendar Management**: Intelligently schedules events and tasks
- **Multiple Calendar Views**: Month, Week, Timeline, and Agenda views
- **Task Management**: Handle both time-bound Commitments and floating Tasks
- **Email Provider Integration**: Supports Gmail, Outlook, Yahoo, and other major providers
- **Voice Commands**: Create events and tasks using voice input
- **Smart Filtering**: Automatically filters spam and non-actionable emails
- **Vector Search**: Contextually aware event scheduling using embedded memory
- **Multi-Calendar Sync**: Seamless synchronization with connected calendars

## 📋 Prerequisites

### Development Environment
- Node.js (v18.0.0 or higher)
- MongoDB (v6.0 or higher)
- Docker and Docker Compose
- Git

### API Keys and Services
- OpenAI API key
- Stripe account and API keys
- OAuth2 credentials for:
  - Google (Gmail + Calendar)
  - Microsoft (Outlook)
  - Yahoo

## 🛠 Installation

### Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/your-org/hermes.git
cd hermes
```

2. Install dependencies:
```bash 
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
```bash
# In backend directory
cp .env.example .env

# In frontend directory
cp .env.example .env
```

4. Configure environment variables:

Backend (.env):
```env
# Server
PORT=3001
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/hermes

# OpenAI
OPENAI_API_KEY=your_openai_key

# OAuth2
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
OUTLOOK_CLIENT_ID=your_outlook_client_id
OUTLOOK_CLIENT_SECRET=your_outlook_client_secret
YAHOO_CLIENT_ID=your_yahoo_client_id
YAHOO_CLIENT_SECRET=your_yahoo_client_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRY=7d

# Email Processing
EMAIL_BATCH_SIZE=50
EMAIL_PROCESSING_INTERVAL=300000 # 5 minutes
```

Frontend (.env):
```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

5. Start development servers:

```bash
# Start MongoDB (if not using Docker)
mongod

# Start ChromaDB (using Docker)
docker-compose up -d chroma

# Start backend (in backend directory)
npm run dev

# Start frontend (in frontend directory)
npm start
```

### Docker Setup

1. Build and run using Docker Compose:
```bash
docker-compose up --build
```

This will start:
- Frontend container
- Backend container
- MongoDB container
- ChromaDB container
- Redis container (for caching)

## 🔧 Configuration

### Email Provider Setup

1. Google (Gmail + Calendar):
   - Go to Google Cloud Console
   - Create a new project
   - Enable Gmail and Calendar APIs
   - Create OAuth2 credentials
   - Add authorized redirect URIs
   - Update .env with credentials

2. Microsoft (Outlook):
   - Go to Azure Portal
   - Register a new application
   - Enable necessary permissions
   - Create client secret
   - Update .env with credentials

3. Yahoo:
   - Go to Yahoo Developer Console
   - Create a new application
   - Enable email and calendar permissions
   - Update .env with credentials

### Stripe Setup

1. Create a Stripe account
2. Set up products and pricing
3. Configure webhooks
4. Update .env with API keys

## 📦 Production Deployment

### Prerequisites
- Domain name
- SSL certificate
- Production server (recommended: 4 CPU cores, 8GB RAM minimum)

### Deployment Steps

1. Set up server:
```bash
# Install Docker and Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

2. Configure environment:
```bash
# Create production .env files
cp .env.example .env
# Update with production values
```

3. Build and deploy:
```bash
# Production build
docker-compose -f docker-compose.prod.yml up -d
```

4. Set up reverse proxy (Nginx example):
```nginx
server {
    listen 443 ssl;
    server_name app.yourdomain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🧪 Testing

### Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# E2E tests
npm run test:e2e
```

### Test Coverage
```bash
# Backend coverage
cd backend
npm run test:coverage

# Frontend coverage
cd frontend
npm run test:coverage
```

## 📊 Monitoring

### Application Monitoring
- PM2 for process management
- Morgan for HTTP request logging
- Winston for application logging

### Error Tracking
- Sentry integration for error tracking
- Custom error pages and handling

### Performance Monitoring
- New Relic or DataDog integration (optional)
- Custom performance metrics

## 🔄 Backup and Recovery

### Database Backup
```bash
# Automated MongoDB backup
docker-compose -f docker-compose.prod.yml exec -T mongodb mongodump --archive > backup_$(date +%Y%m%d).gz
```

### Vector Database Backup
```bash
# ChromaDB backup
docker-compose -f docker-compose.prod.yml exec -T chroma cp -r /chroma/data /backup/chroma_$(date +%Y%m%d)
```

## 🛡️ Security

- OAuth2 for authentication
- JWT for session management
- Rate limiting on API endpoints
- Input validation and sanitization
- XSS protection
- CSRF protection
- Secure headers
- Regular security updates

## 🔍 Troubleshooting

### Common Issues

1. Email Processing Issues:
   - Check API rate limits
   - Verify OAuth tokens
   - Check email provider connectivity

2. Calendar Sync Issues:
   - Verify calendar permissions
   - Check for conflicting events
   - Validate timezone settings

3. Vector Database Issues:
   - Check ChromaDB container logs
   - Verify disk space
   - Check memory usage

### Logs

```bash
# View application logs
docker-compose logs -f app

# View database logs
docker-compose logs -f mongodb

# View ChromaDB logs
docker-compose logs -f chroma
```

## 📚 API Documentation

API documentation is available at `/api/docs` when running in development mode.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
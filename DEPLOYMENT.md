# Deployment Guide

This guide provides step-by-step instructions for deploying your Flask portfolio website to various platforms.

## Local Development

### Prerequisites
- Python 3.7+
- pip

### Setup
```bash
# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py

# Open http://localhost:5000 in your browser
```

## Production Deployment

### Option 1: Heroku

#### Prerequisites
- Heroku account
- Heroku CLI installed

#### Steps
1. **Create Heroku app**
   ```bash
   heroku create your-portfolio-app-name
   ```

2. **Create Procfile**
   ```
   web: gunicorn app:app
   ```

3. **Update requirements.txt**
   ```
   gunicorn==20.1.0
   ```

4. **Set environment variables**
   ```bash
   heroku config:set SECRET_KEY=your-secret-key-here
   ```

5. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

6. **Open your app**
   ```bash
   heroku open
   ```

### Option 2: Render

#### Steps
1. **Connect GitHub repository**
   - Go to [Render.com](https://render.com)
   - Connect your GitHub account
   - Select your portfolio repository

2. **Create new Web Service**
   - **Name**: `your-portfolio`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`

3. **Set environment variables**
   - `SECRET_KEY`: Your secret key
   - `MAIL_USERNAME`: Your email (if using email)
   - `MAIL_PASSWORD`: Your email password (if using email)

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete

### Option 3: PythonAnywhere

#### Steps
1. **Create account**
   - Sign up at [PythonAnywhere.com](https://www.pythonanywhere.com)

2. **Upload files**
   - Go to Files tab
   - Upload your project files

3. **Create virtual environment**
   ```bash
   mkvirtualenv --python=/usr/bin/python3.9 portfolio
   pip install -r requirements.txt
   ```

4. **Configure WSGI file**
   - Go to Web tab
   - Edit WSGI file:
   ```python
   import sys
   path = '/home/yourusername/portfolio'
   if path not in sys.path:
       sys.path.append(path)
   
   from app import app as application
   ```

5. **Set up static files**
   - Configure static files mapping:
   - URL: `/static/`
   - Directory: `/home/yourusername/portfolio/static`

6. **Reload web app**
   - Click "Reload" button

### Option 4: VPS/Server (Ubuntu)

#### Prerequisites
- Ubuntu server with SSH access
- Domain name (optional)

#### Steps
1. **Update system**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Install Python and dependencies**
   ```bash
   sudo apt install python3 python3-pip python3-venv nginx -y
   ```

3. **Create application directory**
   ```bash
   sudo mkdir -p /var/www/portfolio
   sudo chown $USER:$USER /var/www/portfolio
   ```

4. **Upload files**
   ```bash
   # Upload your project files to /var/www/portfolio/
   ```

5. **Set up virtual environment**
   ```bash
   cd /var/www/portfolio
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   pip install gunicorn
   ```

6. **Create systemd service**
   ```bash
   sudo nano /etc/systemd/system/portfolio.service
   ```
   
   Add content:
   ```ini
   [Unit]
   Description=Portfolio Flask App
   After=network.target
   
   [Service]
   User=www-data
   WorkingDirectory=/var/www/portfolio
   Environment="PATH=/var/www/portfolio/venv/bin"
   ExecStart=/var/www/portfolio/venv/bin/gunicorn --workers 3 --bind unix:portfolio.sock -m 007 app:app
   
   [Install]
   WantedBy=multi-user.target
   ```

7. **Start and enable service**
   ```bash
   sudo systemctl start portfolio
   sudo systemctl enable portfolio
   ```

8. **Configure Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/portfolio
   ```
   
   Add content:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;
   
       location / {
           include proxy_params;
           proxy_pass http://unix:/var/www/portfolio/portfolio.sock;
       }
   
       location /static {
           alias /var/www/portfolio/static;
       }
   }
   ```

9. **Enable site and restart Nginx**
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled
   sudo nginx -t
   sudo systemctl restart nginx
   ```

10. **Set up SSL (optional)**
    ```bash
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d your-domain.com
    ```

### Option 5: Railway

#### Steps
1. **Connect GitHub**
   - Go to [Railway.app](https://railway.app)
   - Connect your GitHub account

2. **Deploy from GitHub**
   - Select your portfolio repository
   - Railway will auto-detect Python

3. **Configure environment**
   - Add environment variables in Railway dashboard
   - Set `SECRET_KEY` and email credentials

4. **Deploy**
   - Railway will automatically deploy your app

## Environment Variables

Set these environment variables for production:

```bash
SECRET_KEY=your-secret-key-here
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
FLASK_ENV=production
```

## Security Considerations

1. **Secret Key**: Use a strong, random secret key
2. **Email Credentials**: Use app passwords, not regular passwords
3. **HTTPS**: Always use HTTPS in production
4. **Environment Variables**: Never commit sensitive data to version control

## Performance Optimization

1. **Enable Gzip Compression**
2. **Use CDN for static assets**
3. **Optimize images**
4. **Enable caching headers**
5. **Use production WSGI server (gunicorn)**

## Monitoring

1. **Set up logging**
2. **Monitor application performance**
3. **Set up error tracking (Sentry)**
4. **Monitor uptime**

## Troubleshooting

### Common Issues

**Application won't start**
- Check Python version compatibility
- Verify all dependencies are installed
- Check log files for errors

**Static files not loading**
- Verify static file configuration
- Check file permissions
- Ensure correct file paths

**Email not working**
- Verify SMTP settings
- Check firewall settings
- Test with different email provider

**Database errors**
- Check database connection
- Verify credentials
- Ensure database exists

### Debug Mode

For debugging, temporarily enable debug mode:
```python
app.run(debug=True, host='0.0.0.0', port=5000)
```

**Remember to disable debug mode in production!**

## Support

If you encounter issues:
1. Check the troubleshooting section
2. Review platform-specific documentation
3. Check Flask documentation
4. Search for similar issues online

# Portfolio Website - Flask

A professional, responsive portfolio website built with Flask, featuring a clean design, dark/light mode toggle, and dynamic content management.

## Features

### 🎨 **Design & UI**
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Modern UI**: Clean, professional design with Bootstrap 5
- **Smooth Animations**: CSS animations and JavaScript interactions
- **Custom Styling**: Professional color scheme and typography

### 📄 **Pages**
- **Home**: Hero section with introduction and quick stats
- **About**: Detailed bio, skills with progress bars, certifications
- **Resume**: Timeline format for education and experience
- **Projects**: Project showcase with tech stack and links
- **Contact**: Contact form with social media links

### ⚙️ **Backend Features**
- **Flask Framework**: Python-based web framework
- **Dynamic Content**: JSON-based data management
- **Contact Form**: Email functionality with Flask-Mail
- **File Downloads**: Resume PDF download capability
- **Flash Messages**: User feedback system

### 🛠️ **Technical Stack**
- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Bootstrap 5, Custom CSS
- **Icons**: Bootstrap Icons
- **Data**: JSON configuration
- **Email**: SMTP/Flask-Mail integration

## Quick Start

### Prerequisites
- Python 3.7 or higher
- pip (Python package installer)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure your data**
   - Edit `resume_data.json` with your personal information
   - Add your profile photo to `static/images/` (name it `profile.jpg`)
   - Update social media links and contact information

4. **Configure email (optional)**
   - Edit `app.py` and update email settings:
   ```python
   app.config['MAIL_USERNAME'] = 'your-email@gmail.com'
   app.config['MAIL_PASSWORD'] = 'your-app-password'
   ```

5. **Run the application**
   ```bash
   python app.py
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5000`

## Configuration

### Personal Information
Edit `resume_data.json` to customize:

- **Personal Info**: Name, title, contact details, social links
- **Skills**: Programming languages, frameworks, tools with proficiency levels
- **Education**: Degrees, institutions, achievements
- **Experience**: Work history, achievements, technologies used
- **Projects**: Project details, tech stack, GitHub/demo links
- **Certifications**: Professional certifications
- **Languages**: Spoken languages and proficiency levels
- **Interests**: Personal interests and hobbies

### Email Configuration
To enable email functionality:

1. **Gmail Setup**:
   - Enable 2-factor authentication
   - Generate an App Password
   - Update `app.py` with your credentials

2. **Other Providers**:
   - Update SMTP settings in `app.py`
   - Configure appropriate port and security settings

### Customization

#### Colors and Styling
- Edit `static/css/style.css` for custom colors and styling
- Modify CSS variables in `:root` for theme colors
- Customize dark mode colors in `[data-bs-theme="dark"]`

#### Layout and Content
- Modify HTML templates in `templates/` directory
- Add new sections or pages as needed
- Customize JavaScript functionality in `static/js/main.js`

#### Images and Assets
- Add images to `static/images/` directory
- Update image references in templates
- Optimize images for web use

## Project Structure

```
portfolio/
├── app.py                 # Main Flask application
├── resume_data.json       # Personal data and content
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation
├── templates/            # HTML templates
│   ├── base.html         # Base template with navigation
│   ├── home.html         # Home page
│   ├── about.html        # About page
│   ├── resume.html       # Resume page
│   ├── projects.html     # Projects page
│   └── contact.html      # Contact page
├── static/               # Static assets
│   ├── css/
│   │   └── style.css     # Custom styles
│   ├── js/
│   │   └── main.js       # JavaScript functionality
│   └── images/           # Image assets
└── Mithra N Gowda_Resume.pdf  # Resume PDF
```

## Deployment

### Local Development
```bash
python app.py
```

### Production Deployment

#### Heroku
1. Create `Procfile`:
   ```
   web: gunicorn app:app
   ```

2. Add to `requirements.txt`:
   ```
   gunicorn==20.1.0
   ```

3. Deploy to Heroku

#### PythonAnywhere
1. Upload files to PythonAnywhere
2. Configure WSGI file
3. Set up virtual environment
4. Install requirements

#### Render
1. Connect GitHub repository
2. Set build command: `pip install -r requirements.txt`
3. Set start command: `gunicorn app:app`
4. Deploy

#### VPS/Server
1. Install Python and dependencies
2. Set up reverse proxy (nginx)
3. Use gunicorn as WSGI server
4. Configure SSL certificate

## Features in Detail

### Dark/Light Mode
- Toggle button in navigation
- Persistent preference using localStorage
- Smooth transition animations
- Automatic theme detection

### Responsive Design
- Mobile-first approach
- Bootstrap 5 grid system
- Custom breakpoints
- Touch-friendly interactions

### Contact Form
- Form validation
- Email integration
- Local message storage
- Success/error feedback

### Dynamic Content
- JSON-based data management
- Easy content updates
- Structured information
- Extensible format

### Performance
- Optimized images
- Minified CSS/JS
- Lazy loading
- Efficient animations

## Customization Guide

### Adding New Pages
1. Create new template in `templates/`
2. Add route in `app.py`
3. Update navigation in `base.html`
4. Add page-specific styles

### Modifying Styles
1. Edit `static/css/style.css`
2. Use CSS variables for consistency
3. Test in both light and dark modes
4. Ensure responsive behavior

### Adding JavaScript Features
1. Edit `static/js/main.js`
2. Add event listeners
3. Test across browsers
4. Optimize performance

## Troubleshooting

### Common Issues

**Email not working**
- Check SMTP settings
- Verify app password
- Test with different email provider

**Images not loading**
- Check file paths
- Verify image names
- Ensure proper file permissions

**Styling issues**
- Clear browser cache
- Check CSS file paths
- Verify Bootstrap CDN links

**Deployment problems**
- Check Python version
- Verify requirements installation
- Test locally first

### Performance Tips
- Optimize images (WebP format)
- Minify CSS and JavaScript
- Use CDN for external libraries
- Enable gzip compression

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or issues:
- Check the troubleshooting section
- Review the documentation
- Open an issue on GitHub

## Credits

- **Bootstrap 5**: UI framework
- **Bootstrap Icons**: Icon library
- **Flask**: Web framework
- **Custom Design**: Professional portfolio layout

---

**Built with ❤️ using Flask and modern web technologies**

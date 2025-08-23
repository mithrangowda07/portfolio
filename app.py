from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, send_file
from flask_mail import Mail, Message
import json
import os
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import calendar

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # Change this to a secure secret key

# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'mithrangowda01@gmail.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'fjttxxwwsogmipmd'     # Replace with your app password

mail = Mail(app)

def load_resume_data():
    """Load resume data from JSON file"""
    try:
        with open('resume_data.json', 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return {}

# Context processor to make current year available to all templates
@app.context_processor
def inject_current_year():
    return {'current_year': datetime.now().year}

def save_contact_message(name, email, subject, message):
    """Save contact message to a local file (simple database alternative)"""
    contact_data = {
        'timestamp': datetime.now().isoformat(),
        'name': name,
        'email': email,
        'subject': subject,
        'message': message
    }
    
    try:
        with open('contact_messages.json', 'r', encoding='utf-8') as f:
            messages = json.load(f)
    except FileNotFoundError:
        messages = []
    
    messages.append(contact_data)
    
    with open('contact_messages.json', 'w', encoding='utf-8') as f:
        json.dump(messages, f, indent=2, ensure_ascii=False)

@app.route('/')
def home():
    """Home page route"""
    data = load_resume_data()
    return render_template('home.html', data=data)

@app.route('/about')
def about():
    """About page route"""
    data = load_resume_data()
    return render_template('about.html', data=data)

@app.route('/resume')
def resume():
    """Resume page route"""
    data = load_resume_data()
    return render_template('resume.html', data=data)

@app.route('/projects')
def projects():
    """Projects page route"""
    data = load_resume_data()
    return render_template('projects.html', data=data)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    """Contact page route with form handling"""
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')
        
        if name and email and message:
            try:
                # Save message locally
                save_contact_message(name, email, subject, message)
                
                # Send email (uncomment and configure if you want email functionality)
                # msg = Message(
                #     subject=f"Portfolio Contact: {subject}",
                #     sender=email,
                #     recipients=[app.config['MAIL_USERNAME']]
                # )
                # msg.body = f"From: {name}\nEmail: {email}\n\nMessage:\n{message}"
                # mail.send(msg)
                
                flash('Thank you for your message! I will get back to you soon.', 'success')
                return redirect(url_for('contact'))
            except Exception as e:
                flash('There was an error sending your message. Please try again.', 'error')
        else:
            flash('Please fill in all required fields.', 'error')
    
    data = load_resume_data()
    return render_template('contact.html', data=data)

@app.route('/download-resume')
def download_resume():
    """Download resume PDF"""
    try:
        return send_file('Resume.pdf', as_attachment=True)
    except FileNotFoundError:
        flash('Resume file not found.', 'error')
        return redirect(url_for('resume'))

@app.route('/api/contact', methods=['POST'])
def api_contact():
    """API endpoint for contact form (for AJAX requests)"""
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')
    
    if name and email and message:
        try:
            save_contact_message(name, email, subject, message)
            return jsonify({'success': True, 'message': 'Message sent successfully!'})
        except Exception as e:
            return jsonify({'success': False, 'message': 'Error sending message.'}), 500
    else:
        return jsonify({'success': False, 'message': 'Please fill in all required fields.'}), 400

@app.route('/api/skills')
def api_skills():
    """API endpoint to get skills data"""
    data = load_resume_data()
    return jsonify(data.get('skills', {}))

@app.route('/api/projects')
def api_projects():
    """API endpoint to get projects data"""
    data = load_resume_data()
    return jsonify(data.get('projects', []))

if __name__ == '__main__':
    app.run(debug=True)

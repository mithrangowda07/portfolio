# Images Directory

This directory contains all the images used in the portfolio website.

## Required Images

### Profile Photo
- **File**: `profile.jpg` (or `profile.png`)
- **Size**: Recommended 300x300 pixels or larger
- **Format**: JPG or PNG
- **Description**: Your professional headshot or profile photo

### Default Profile Image
- **File**: `default-profile.jpg`
- **Description**: A placeholder image that will be used if your profile photo is not found

## Optional Images

### Project Images
You can add images for your projects to make them more visually appealing:

- `ecommerce.jpg` - E-commerce platform screenshot
- `chat-app.jpg` - Chat application screenshot  
- `task-manager.jpg` - Task management system screenshot
- `weather-dashboard.jpg` - Weather dashboard screenshot

### Other Images
- `hero-bg.jpg` - Background image for hero section (optional)
- `about-bg.jpg` - Background image for about section (optional)

## Image Guidelines

1. **Optimize for Web**: Compress images to reduce file size
2. **Use WebP Format**: For better performance (with JPG fallback)
3. **Responsive Images**: Consider providing multiple sizes
4. **Alt Text**: Always provide meaningful alt text in templates
5. **File Naming**: Use descriptive, lowercase names with hyphens

## Image Optimization Tips

- Use tools like TinyPNG or ImageOptim
- Convert to WebP format when possible
- Keep file sizes under 500KB for better loading
- Use appropriate dimensions (don't use 2000px images for 300px displays)

## Adding Your Images

1. Place your profile photo in this directory
2. Name it `profile.jpg` or update the reference in `resume_data.json`
3. Add any project screenshots you want to showcase
4. Update image references in the JSON data file

## Fallback Images

The website includes fallback handling for missing images:
- Profile images fall back to `default-profile.jpg`
- Project images are hidden if not found
- All images have proper error handling in templates

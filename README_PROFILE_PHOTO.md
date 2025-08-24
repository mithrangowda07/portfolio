# Profile Photo Setup

## Adding Your Profile Photo

1. **Format**: Use JPG format (not SVG)
2. **File Name**: Save your photo as `profile-photo.jpg`
3. **Location**: Place it in the `public/` folder
4. **Size**: Recommended size is 256x256 pixels or larger (the app will resize it automatically)
5. **Style**: The photo will be displayed as a circle with rounded corners

## File Structure
```
public/
└── profile-photo.jpg  ← Add your photo here
```

## Current Implementation
- The profile photo is displayed on the right side of the home page
- Size: 256x256 pixels (w-64 h-64)
- Styling: Rounded circle with object-cover for proper scaling
- Also shown in the navigation header

## Notes
- The app currently expects `/profile-photo.jpg` in the public folder
- If you don't add a photo, you'll see a broken image icon
- The photo will automatically be optimized by Next.js Image component

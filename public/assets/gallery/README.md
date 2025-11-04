# Campus Gallery Images

## 📸 Where to Put Your Carousel Images

Place all your campus gallery images in this folder:
```
/public/assets/gallery/
```

## 📋 Supported Image Formats

- **JPG/JPEG** - Standard image format
- **PNG** - Images with transparency
- **WEBP** - Modern optimized format
- **HEIC** - iPhone photos (will auto-convert)
- **GIF** - Animated images
- **SVG** - Vector graphics

## 🖼️ Image Naming Convention

You can name your images anything you like, for example:
- `campus-entrance.jpg`
- `classroom-1.jpg`
- `workshop-area.png`
- `students-learning.jpg`
- `facilities-01.jpg`
- etc.

## 📏 Recommended Image Specifications

- **Minimum Resolution**: 1200px × 800px
- **Aspect Ratio**: 3:2 (landscape)
- **File Size**: Under 2MB per image (for faster loading)
- **Orientation**: Landscape preferred (horizontal images work best)

## 🔄 How to Update the Carousel

After adding your images to this folder, update the carousel in:
```
/src/app/page.tsx
```

Find the `AutoScrollCarousel` component (around line 757) and replace the Unsplash URLs with your local images:

### Example:
```tsx
<AutoScrollCarousel 
  images={[
    '/assets/gallery/campus-entrance.jpg',
    '/assets/gallery/classroom-1.jpg',
    '/assets/gallery/workshop-area.jpg',
    '/assets/gallery/students-learning.jpg',
    '/assets/gallery/facilities-01.jpg',
    '/assets/gallery/computer-lab.jpg',
    '/assets/gallery/herbal-workshop.jpg',
    '/assets/gallery/block-printing-class.jpg',
    '/assets/gallery/automobile-training.jpg',
    '/assets/gallery/food-processing.jpg',
    '/assets/gallery/clay-modeling.jpg',
    '/assets/gallery/outdoor-area.jpg'
  ]}
  speed={25}
/>
```

## ✨ Tips for Best Results

1. **Image Quality**: Use high-quality, well-lit photos
2. **Variety**: Show different aspects of your campus (classrooms, workshops, facilities, students, activities)
3. **Consistency**: Try to keep a similar color tone/style across all images
4. **Optimization**: Compress images before uploading (use tools like TinyPNG or Squoosh)
5. **Number of Images**: You can add as many as you want, but 12-20 images work best for the carousel

## 🚀 Quick Start

1. Copy your 12+ images into this folder
2. Rename them with descriptive names
3. Update the `images` array in `/src/app/page.tsx`
4. Save and refresh your browser
5. Your images will auto-scroll beautifully!

## 🔧 Current Setup

The carousel is currently using placeholder images from Unsplash. Once you add your own images here and update the paths, your real campus photos will appear.

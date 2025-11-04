# 🎨 Floating Images Guide

## ✨ What I've Added

I've added **beautiful animated floating images** to multiple sections of your website:

### 📍 Sections with Floating Images:

1. **Mission Section** (Homepage)
   - 3 floating images with smooth animations
   - Positioned at top-left, bottom-right, and center-right

2. **Features Section** ("Why Choose Artha Vidhya?")
   - 3 floating images
   - Top-right, bottom-left, and center-left positions

3. **Courses Section** ("Our Comprehensive Programs")
   - 3 floating images
   - Top-left, bottom-right, and center-right

4. **Campus Gallery Carousel Section**
   - 2 floating images
   - Top-right and bottom-left

5. **Google Maps Section** (Already had floating elements)
   - Dynamic floating badges and decorations

### 🎭 Animation Effects:

Each floating image has unique animations:
- **Vertical floating** (up and down motion)
- **Rotation effects** (gentle tilting)
- **Scale pulsing** (subtle size changes)
- **Different timing** (staggered animations)

All images are:
- ✅ Rounded corners or circular shapes
- ✅ Beautiful shadows
- ✅ Semi-transparent (opacity 60-80%)
- ✅ Hidden on mobile (lg:block) to avoid clutter
- ✅ Smooth infinite loop animations

---

## 📸 WHERE TO PUT YOUR CAROUSEL IMAGES

### 🎯 Location:
```
/public/assets/gallery/
```

I've created this folder for you! Put all your campus photos here.

### 📋 Step-by-Step Instructions:

1. **Copy your images** into `/public/assets/gallery/`
   
2. **Name them clearly**, for example:
   ```
   campus-entrance.jpg
   classroom-1.jpg
   workshop-area.jpg
   students-learning.jpg
   computer-lab.jpg
   herbal-cosmetic-class.jpg
   block-printing-area.jpg
   automobile-workshop.jpg
   food-processing-lab.jpg
   clay-modeling-studio.jpg
   outdoor-facilities.jpg
   campus-building.jpg
   ```

3. **Update the carousel** in `/src/app/page.tsx` (line ~805):
   
   Replace this:
   ```tsx
   <AutoScrollCarousel 
     images={[
       'https://images.unsplash.com/photo-1497633762265-9d179a990aa6...',
       // ... more Unsplash URLs
     ]}
     speed={25}
   />
   ```
   
   With your local images:
   ```tsx
   <AutoScrollCarousel 
     images={[
       '/assets/gallery/campus-entrance.jpg',
       '/assets/gallery/classroom-1.jpg',
       '/assets/gallery/workshop-area.jpg',
       '/assets/gallery/students-learning.jpg',
       '/assets/gallery/computer-lab.jpg',
       '/assets/gallery/herbal-cosmetic-class.jpg',
       '/assets/gallery/block-printing-area.jpg',
       '/assets/gallery/automobile-workshop.jpg',
       '/assets/gallery/food-processing-lab.jpg',
       '/assets/gallery/clay-modeling-studio.jpg',
       '/assets/gallery/outdoor-facilities.jpg',
       '/assets/gallery/campus-building.jpg'
     ]}
     speed={25}
   />
   ```

### 📏 Image Requirements:

- **Format**: JPG, JPEG, PNG, WEBP, HEIC, GIF
- **Size**: Minimum 1200px × 800px
- **Aspect Ratio**: 3:2 (landscape)
- **File Size**: Under 2MB per image
- **Orientation**: Horizontal/Landscape preferred

### 💡 Pro Tips:

1. Use **12-20 images** for the best effect
2. Show variety: classrooms, workshops, students, facilities
3. Compress images before uploading (use TinyPNG or Squoosh)
4. Keep consistent lighting and color tone
5. The carousel auto-scrolls smoothly without arrows!

---

## 🚀 Quick Test

1. Place your images in `/public/assets/gallery/`
2. Update the paths in `/src/app/page.tsx`
3. Run: `npm run dev`
4. Visit: `http://localhost:3000`
5. Watch your images beautifully scroll! ✨

---

## 🎬 What You'll See:

- **Auto-scrolling carousel** with your campus images
- **Floating animated images** throughout the homepage
- **Smooth transitions** and infinite loops
- **Responsive design** (floating images hide on mobile)
- **Beautiful effects** that enhance without distracting

Everything is ready! Just add your images and update the paths. 🎉

# 🎨 Visual Effects Documentation - KCW v.2

## 🚀 Getting Started

First, ensure all dependencies are installed:

```bash
npm install
npm run dev
```

If you encounter any issues, try:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## ✨ Visual Effects Overview

Your KCW v.2 now includes 8 dynamic background effects that create an immersive, modern web experience:

### 1. **FloatingGeometry** 
- Rotating geometric shapes that drift across the screen
- Creates depth and movement
- Best for: Homepage, Services page

### 2. **NeuralNetwork**
- Animated connections between moving nodes
- Creates a living, breathing network effect
- Best for: Analytics, Tech-focused sections

### 3. **GradientMesh**
- Morphing gradient blobs with subtle noise overlay
- Provides ambient color movement
- Best for: All pages (base layer)

### 4. **MouseTrail**
- Particles and glow that follow cursor movement
- Interactive and engaging
- Best for: Services, Portfolio sections

### 5. **RippleEffect**
- Click-triggered ripples that expand across the screen
- Interactive feedback for user actions
- Best for: About, Contact pages

### 6. **FloatingOrbs**
- Large, blurred color orbs that float slowly
- Creates depth and atmosphere
- Best for: Homepage, About page

### 7. **ParticleField**
- 3D starfield effect with depth perception
- Creates movement toward the viewer
- Best for: Hero sections, Loading screens

### 8. **AuroraEffect**
- Northern lights-inspired animated curtains
- Ethereal and calming
- Best for: Headers, Hero sections

## 🎮 Current Configuration

Effects are automatically configured per page:

- **Homepage**: Gradient + Orbs + Geometry + Neural Network (50% intensity)
- **Services**: Gradient + Particles + Mouse Trail (40% intensity)
- **About**: Gradient + Orbs + Ripple Effect (40% intensity)
- **Analytics**: Neural Network + Particles (30% intensity)
- **Case Studies**: Gradient only (30% intensity) - *Minimal to preserve content*
- **Default**: Gradient + Orbs (40% intensity)

## 🎯 Performance Optimization

The effects are optimized for performance:
- Canvas-based rendering for particle systems
- GPU acceleration via CSS transforms
- Automatic cleanup of animations
- Viewport-based rendering
- Reduced effects on mobile devices

## 🔧 Customization

### Adjust Effects per Page

Edit `/components/Layout.tsx` in the `effectsConfig` section:

```typescript
// Example: Change homepage effects
if (path === '/') {
    return {
        effects: ['gradient', 'orbs', 'aurora'], // Add/remove effects
        intensity: 0.6, // Adjust opacity (0-1)
        showController: true // Show/hide controls
    };
}
```

### Modify Individual Effects

Each effect file in `/components/backgrounds/` can be customized:

```typescript
// Example: Change particle count in FloatingGeometry.tsx
{[...Array(30)].map((_, i) => ( // Change 20 to 30 for more shapes
```

### Add New Effects

1. Create new file in `/components/backgrounds/`
2. Export from `index.ts`
3. Add to Layout.tsx effect conditions

## 🎨 Visual Hierarchy

Effects are layered for optimal visual impact:
1. **Background Layer**: Gradient Mesh (base ambiance)
2. **Mid Layer**: Orbs, Geometry, Particles
3. **Interactive Layer**: Mouse Trail, Ripples
4. **Content Layer**: Your actual content
5. **UI Layer**: Navigation, buttons, etc.

## 🌟 Tips for Best Results

1. **Layer Multiple Effects**: Combine 2-3 effects at low opacity for depth
2. **Vary by Section**: Different pages should feel unique
3. **Performance First**: Monitor FPS, reduce effects if needed
4. **Accessibility**: Ensure contrast remains high for readability
5. **Mobile Consideration**: Test on various devices

## 🐛 Troubleshooting

### Effects Not Showing
- Check browser console for errors
- Ensure opacity/intensity isn't set to 0
- Verify effect is included in page config

### Performance Issues
- Reduce particle counts in effect files
- Lower intensity values
- Disable complex effects (neural, particles)

### Build Errors
- Run `npm install` to ensure all deps are present
- Clear cache: `rm -rf .vite`
- Check for TypeScript errors: `npx tsc --noEmit`

## 🚦 Effect Controls

A control panel appears in bottom-left corner (on supported pages):
- Click the settings icon to open
- Toggle individual effects on/off
- Changes persist during session
- Helps find perfect combination

## 📱 Mobile Responsiveness

Effects automatically adjust for mobile:
- Reduced particle counts
- Simplified animations
- Touch-optimized interactions
- Performance-first approach

---

## 💡 Creative Combinations

### "Cyberpunk Mode"
- Neural Network + Particle Field + Gradient Mesh
- High contrast, tech aesthetic

### "Ethereal Mode"
- Aurora + Floating Orbs + Gradient
- Soft, dreamlike atmosphere

### "Interactive Mode"
- Mouse Trail + Ripple Effect + Geometry
- Highly responsive to user input

### "Minimal Mode"
- Gradient Mesh only at 20% intensity
- Clean, subtle movement

---

Your site now features museum-quality visual effects that adapt to each page's content and purpose. The case study pages maintain their content focus with minimal effects, while other pages create immersive experiences that showcase your technical prowess.

Enjoy your enhanced visual experience! 🎨✨
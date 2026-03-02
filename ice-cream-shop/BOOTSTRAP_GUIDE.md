# 🎨 Bootstrap-First Implementation Guide

## Overview

This project is built using **Bootstrap 5** classes for 95% of the styling, with minimal custom CSS. This approach provides:

✅ Faster development  
✅ Consistent styling  
✅ Built-in responsiveness  
✅ Easier maintenance  
✅ Less custom CSS to debug  

---

## 📚 Bootstrap Classes Used

### Layout & Spacing

#### Container & Grid
```jsx
<Container>           // Bootstrap container (responsive width)
<Row>                 // Bootstrap row (flexbox)
<Col lg={6} md={12}>  // Responsive columns
```

#### Spacing Utilities
```jsx
className="py-5"      // Padding Y-axis (top & bottom): 3rem
className="py-md-5"   // Padding Y on medium screens and up
className="mb-4"      // Margin bottom: 1.5rem
className="mb-lg-0"   // Margin bottom 0 on large screens
className="px-4"      // Padding X-axis (left & right): 1.5rem
className="p-3"       // Padding all sides: 1rem
className="p-4"       // Padding all sides: 1.5rem
className="gap-2"     // Flexbox gap: 0.5rem
```

**Bootstrap Spacing Scale:**
- `0` = 0
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 1rem (16px)
- `4` = 1.5rem (24px)
- `5` = 3rem (48px)

### Typography

```jsx
className="display-1"      // Extra large display heading
className="display-3"      // Large display heading (for stats)
className="display-4"      // Medium display heading
className="fw-bold"        // Font weight: 700 (bold)
className="fw-semibold"    // Font weight: 600 (semibold)
className="fw-medium"      // Font weight: 500
className="text-dark"      // Dark text color
className="text-muted"     // Muted/gray text
className="text-white"     // White text
className="text-center"    // Text align center
className="small"          // Smaller text (0.875em)
className="fs-5"           // Font size 5 (1.25rem)
className="h5"             // Heading 5 style
```

### Flexbox Utilities

```jsx
className="d-flex"                    // Display flex
className="d-inline-flex"            // Inline flex
className="align-items-center"       // Vertical center alignment
className="justify-content-center"   // Horizontal center alignment
className="justify-content-end"      // Align items to end
className="flex-column"              // Flex direction column
className="flex-shrink-0"            // Prevent flex shrinking
```

### Positioning

```jsx
className="position-relative"  // Position relative
className="position-absolute"  // Position absolute
className="overflow-hidden"    // Hide overflow
```

### Background & Colors

```jsx
className="bg-white"           // White background
style={{ backgroundColor: '#f8e8eb' }}  // Custom pink background
```

### Borders & Shadows

```jsx
className="border-0"           // No border
className="rounded-4"          // Border radius: 1rem
className="rounded-circle"     // Fully rounded (circle)
className="rounded-pill"       // Pill shape (fully rounded ends)
className="shadow-sm"          // Small box shadow
```

### Buttons

```jsx
<Button variant="danger">              // Red button (using custom red color)
className="btn-custom-red"             // Our custom button style
className="btn-outline-secondary"      // Outlined button
className="rounded-pill"               // Pill-shaped button
```

### Cards

```jsx
<Card>                         // Bootstrap card component
<Card.Body>                    // Card body wrapper
<Card.Title>                   // Card title
className="border-0"           // Remove card border
className="rounded-4"          // Rounded corners
className="shadow-sm"          // Subtle shadow
```

### Badges

```jsx
<Badge bg="light" text="dark">  // Light background, dark text badge
className="rounded-pill"        // Pill-shaped badge
```

### Responsive Utilities

```jsx
className="mb-4 mb-lg-0"       // Margin bottom on small screens, none on large
className="order-lg-1"         // Order 1 on large screens
className="order-2"            // Order 2 on small screens
className="d-none d-md-block"  // Hidden on mobile, visible on medium+
```

---

## 🎯 Component Breakdown

### Hero Section

```jsx
// Bootstrap classes used:
- d-flex, align-items-center, justify-content-center
- position-relative, overflow-hidden
- position-absolute, opacity-25
- display-1, fw-bold, text-center, text-dark
```

**Key Features:**
- Flexbox centering
- Absolute positioned decorative elements
- Display typography for large heading

---

### Manufacture Section

```jsx
// Bootstrap classes used:
- py-5, bg-white (section)
- py-md-5 (extra padding on medium+)
- align-items-center (row)
- lg={6}, md={12} (responsive columns)
- mb-4, mb-lg-0 (responsive margins)
- display-4, fw-bold, text-dark (heading)
- text-muted (paragraph)
- btn-custom-red, rounded-pill, px-4, py-2
- d-inline-flex, align-items-center
- w-100, rounded-4, d-flex
```

**Key Features:**
- Responsive grid (stacks on mobile)
- Bootstrap button with custom color
- Flexbox for button icon alignment

---

### Stats Section

```jsx
// Bootstrap classes used:
- py-5 (section padding)
- py-md-5 (extra padding on medium+)
- xs={6}, lg={3} (responsive columns - 2 on mobile, 4 on desktop)
- text-center (centered stats)
- mb-4, mb-lg-0 (responsive margins)
- p-3 (padding)
- display-3, fw-bold, text-dark, mb-2
- fw-medium, text-dark, mb-0
```

**Key Features:**
- Responsive grid changes columns per screen size
- Display typography for large numbers
- No custom CSS needed!

---

### History Section

```jsx
// Bootstrap classes used:
- py-5, bg-white
- py-md-5
- align-items-center
- mb-4, mb-lg-0
- order-lg-1, order-2 (responsive reordering)
- w-100, rounded-4, d-flex
- order-lg-2, order-1
```

**Key Features:**
- Order classes reverse layout on mobile
- Same structure as Manufacture, just mirrored

---

### Testimonials Section

```jsx
// Bootstrap classes used:
- py-5, bg-white, py-md-5
- text-center, mb-5
- position-relative
- lg={4}, md={6} (3 columns desktop, 2 tablet, 1 mobile)
- border-0, rounded-4, shadow-sm, h-100
- d-flex, flex-column, p-4
- rounded-circle, d-flex, align-items-center, justify-content-center
- text-white, fw-bold, flex-shrink-0, me-3
- fw-bold, text-dark, mb-0
- text-muted, mb-0, small
- d-flex, justify-content-end, gap-2, mt-4
- btn, btn-outline-secondary, rounded-circle, d-flex
```

**Key Features:**
- Card component for testimonials
- Rounded circles for avatars
- Button hover states with inline styles
- Responsive columns

---

### News Section

```jsx
// Bootstrap classes used:
- py-5, bg-white, py-md-5
- text-center, mb-5
- mb-4 (row)
- lg={4}, md={6} (responsive columns)
- border-0, rounded-4, overflow-hidden, shadow-sm, h-100
- w-100, d-flex, align-items-center, justify-content-center
- p-4
- d-flex, align-items-center, mb-3
- bg="light", text="dark", me-2, rounded-pill, px-3, py-1, fw-bold
- text-muted, small
- fw-bold, text-dark, h5, mb-0
- text-center
- rounded-pill, px-5, py-2, fw-semibold
```

**Key Features:**
- Card component for news items
- Badge component for categories
- Responsive grid
- Hover effects via inline styles

---

## 📱 Responsive Breakpoints

Bootstrap's default breakpoints:

| Breakpoint | Class Infix | Dimensions |
|------------|-------------|------------|
| X-Small    | None        | <576px     |
| Small      | `sm`        | ≥576px     |
| Medium     | `md`        | ≥768px     |
| Large      | `lg`        | ≥992px     |
| X-Large    | `xl`        | ≥1200px    |
| XX-Large   | `xxl`       | ≥1400px    |

**Examples:**
```jsx
<Col xs={12} md={6} lg={4}>  // 1 col mobile, 2 tablet, 3 desktop
className="mb-3 mb-md-0"     // Margin on mobile, none on tablet+
className="d-none d-lg-block" // Hidden mobile, visible desktop
```

---

## 🎨 Custom CSS (Minimal)

Only 3 things use custom CSS:

### 1. **Custom Red Button**
```css
.btn-custom-red {
  background-color: var(--primary-red);
  border-color: var(--primary-red);
  color: white;
}

.btn-custom-red:hover {
  background-color: #b8112e;
  border-color: #b8112e;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(220, 20, 60, 0.3);
}
```

### 2. **Script Font**
```css
.script-font {
  font-family: 'Brush Script MT', cursive;
  font-style: italic;
  color: var(--primary-red);
  font-size: 1.5rem;
}
```

### 3. **Inline Styles**
Used for:
- Gradient backgrounds
- Specific dimensions (heights)
- Hover effects via `onMouseEnter/Leave`
- Custom colors not in Bootstrap

---

## 🔄 Hover Effects

We use **inline event handlers** instead of CSS:

```jsx
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'translateY(-5px)';
  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.12)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
}}
```

**Benefits:**
- No extra CSS files
- Scoped to component
- Easy to modify

---

## 💡 Why Bootstrap-First?

### Advantages:
1. **Faster Development** - No need to write CSS from scratch
2. **Consistent Design** - Bootstrap's design system is battle-tested
3. **Responsive by Default** - Grid system handles all breakpoints
4. **Less Code** - Utility classes replace hundreds of CSS lines
5. **Easy Customization** - Override with CSS variables or inline styles
6. **Great Documentation** - Bootstrap docs are comprehensive

### When to Use Custom CSS:
- Brand-specific colors (like our red)
- Custom fonts
- Unique animations
- Specific gradient backgrounds
- One-off styling needs

---

## 🛠️ Customization Tips

### Change Primary Color
Edit `src/index.css`:
```css
:root {
  --bs-primary: #your-color;
  --bs-danger: #your-color;
  --primary-red: #your-color;
}
```

### Add More Spacing
Bootstrap spacing scale: `0, 1, 2, 3, 4, 5`
```jsx
className="mb-3"  // 1rem margin bottom
className="mb-4"  // 1.5rem margin bottom
className="mb-5"  // 3rem margin bottom
```

### Change Typography
```jsx
className="display-1"  // Largest
className="display-2"
className="display-3"
className="display-4"
className="h1"         // Regular heading sizes
className="h2"
```

---

## 📖 Resources

- **Bootstrap Docs**: https://getbootstrap.com/docs/5.3/
- **Utilities**: https://getbootstrap.com/docs/5.3/utilities/
- **Grid System**: https://getbootstrap.com/docs/5.3/layout/grid/
- **Components**: https://getbootstrap.com/docs/5.3/components/

---

## 🎯 Quick Reference

### Common Patterns

**Center Everything:**
```jsx
className="d-flex align-items-center justify-content-center"
```

**Responsive Padding:**
```jsx
className="py-3 py-md-5"  // More padding on larger screens
```

**Card Hover Effect:**
```jsx
<Card className="shadow-sm">
  // Add onMouseEnter/Leave for hover
</Card>
```

**Rounded Corners:**
```jsx
className="rounded"      // 0.375rem
className="rounded-3"    // 0.5rem
className="rounded-4"    // 1rem
className="rounded-pill" // 50rem (fully rounded)
```

**Text Styles:**
```jsx
className="text-dark text-center fw-bold"
```

---

**That's it!** 🎉 You're now a Bootstrap pro. Most styling is just combining these utility classes. No need to write custom CSS!

# Quick Start Guide - Ade Block Theme NPM Setup

## What Was Added

✅ **NPM Build System**

- Webpack configuration for bundling
- Babel for modern JavaScript compilation
- SCSS support with Bootstrap integration

✅ **Custom Block Elements** (3 blocks included)

1. **Hero Block** - Full-width hero section with background image
2. **Feature Box** - Card component with icon and description
3. **Call To Action** - Centered CTA with buttons and gradient

✅ **Bootstrap 5.3.0 Integration**

- Via npm: Compiled into dist/theme.js
- Via CDN: Fallback option in functions.php
- All Bootstrap utilities and components available

✅ **Block Editor Support**

- Custom blocks category "Ade Blocks"
- Block editor styles
- Full site editing compatibility

## Getting Started

### 1. Install Dependencies

```bash
cd wp-content/themes/ade-block-theme
npm install
```

### 2. Build for Development

```bash
npm run dev
```

Runs webpack in watch mode - changes auto-compile.

### 3. Build for Production

```bash
npm run build
```

Minified files ready for deployment.

## File Structure

```
src/
├── index.js              → Entry point (imports Bootstrap + blocks)
├── blocks/index.js       → Custom block definitions
└── styles/theme.scss     → Theme styles with Bootstrap

dist/
├── theme.js              → Compiled theme (includes Bootstrap)
└── blocks.js             → Compiled custom blocks
```

## Available Commands

| Command            | Purpose                     |
| ------------------ | --------------------------- |
| `npm run dev`      | Watch mode for development  |
| `npm run build`    | Production build (minified) |
| `npm run lint:js`  | Check JavaScript syntax     |
| `npm run lint:css` | Check CSS/SCSS syntax       |
| `npm run format`   | Format code with Prettier   |

## Using Custom Blocks

1. Go to WordPress Site Editor or post/page editor
2. Look for "Ade Blocks" category in block inserter
3. Available blocks:
   - **Hero** - Hero sections
   - **Feature Box** - Feature cards
   - **Call To Action** - CTA sections

## Using Bootstrap Classes

In templates or blocks, use Bootstrap utilities:

```html
<!-- wp:group {"className":"container mt-5 mb-5"} -->
<div class="container mt-5 mb-5">
  <!-- wp:paragraph {"className":"text-center text-primary"} -->
  <p class="text-center text-primary">Your content here</p>
  <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
```

## Key Features

✨ **Responsive** - Automatic Bootstrap responsive grid  
✨ **Customizable** - Edit SCSS in src/styles/  
✨ **Performance** - ~250KB minified bundle with Bootstrap included  
✨ **Modern** - ES6+ JavaScript support  
✨ **Block-Ready** - Custom blocks in block category

## Adding New Blocks

Edit `src/blocks/index.js`:

```javascript
registerBlockType('ade-block-theme/my-block', {
  title: 'My Block',
  category: 'ade-blocks',
  icon: 'smiley',
  attributes: {
    content: { type: 'string', default: 'Hello' },
  },
  edit({ attributes, setAttributes }) {
    return <div>{attributes.content}</div>;
  },
  save({ attributes }) {
    return <div className="my-block">{attributes.content}</div>;
  },
});
```

Then rebuild: `npm run build`

## Production Deployment

1. Run `npm run build` to create optimized files
2. Upload theme folder (including dist/) to production
3. Do NOT upload node_modules/ folder
4. WordPress will use the compiled assets

## File Size

- `dist/theme.js` - ~250KB minified (includes Bootstrap)
- `dist/blocks.js` - ~50KB minified (custom blocks)
- Both are gzipped on the server (~70KB each)

## Troubleshooting

**Blocks not showing?**

- Run `npm run build`
- Clear browser cache
- Check WordPress cache plugins

**Bootstrap not working?**

- Verify `dist/theme.js` loaded (check page source)
- Ensure correct Bootstrap class names
- Check CSS specificity

**Build errors?**

- Node.js should be 14+: `node --version`
- Delete node_modules and reinstall: `npm install`
- Check file permissions

## Configuration Files

- `.babelrc` - Babel configuration
- `.eslintrc` - JavaScript linter rules
- `.prettierrc` - Code formatter settings
- `.npmrc` - NPM configuration
- `webpack.config.js` - Webpack bundler config
- `.gitignore` - Git exclusions (node_modules, dist)

## Documentation

- **README.md** - Theme overview and features
- **DEVELOPMENT.md** - Detailed development guide
- **This file** - Quick start reference

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run build`
3. ✅ Activate theme in WordPress
4. ✅ Visit Site Editor or create a page
5. ✅ Try inserting the custom blocks
6. ✅ Use Bootstrap classes in templates

Happy coding! 🚀

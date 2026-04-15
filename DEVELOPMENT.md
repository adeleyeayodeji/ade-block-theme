# Ade Block Theme - Development Guide

## Setup & Installation

### Prerequisites

- Node.js 14+ and npm installed
- WordPress 6.0+
- PHP 7.4+

### Installation Steps

1. Navigate to the theme directory:

```bash
cd wp-content/themes/ade-block-theme
```

2. Install npm dependencies:

```bash
npm install
```

3. Build the theme for production:

```bash
npm run build
```

Or for development with file watching:

```bash
npm run dev
```

## NPM Scripts

- `npm run dev` - Start webpack in development mode with file watching
- `npm run build` - Build assets for production (minified)
- `npm run lint:js` - Run ESLint on JavaScript files
- `npm run lint:css` - Run stylelint on CSS/SCSS files
- `npm run format` - Format code with Prettier
- `npm run bootstrap` - Install dependencies and build everything

## Project Structure

```
ade-block-theme/
├── src/
│   ├── blocks/
│   │   └── index.js          # Custom block definitions
│   ├── styles/
│   │   └── theme.scss        # Main theme styles (SCSS with Bootstrap)
│   └── index.js              # Entry point (imports Bootstrap + blocks)
├── dist/
│   ├── blocks.js             # Compiled custom blocks
│   └── theme.js              # Compiled theme with Bootstrap
├── js/
│   └── theme.js              # Original theme JavaScript (fallback)
├── css/
│   └── editor-style.css      # Block editor styles
├── templates/
│   ├── index.html            # Archive template
│   ├── single.html           # Single post template
│   ├── page.html             # Page template
│   └── 404.html              # 404 template
├── parts/
│   ├── header.html           # Header template part
│   └── footer.html           # Footer template part
├── functions.php             # Theme functions
├── style.css                 # Theme header info
├── theme.json                # Block editor configuration
├── package.json              # NPM dependencies
├── webpack.config.js         # Webpack configuration
├── .babelrc                  # Babel configuration
├── .eslintrc                 # ESLint configuration
└── .prettierrc               # Prettier configuration
```

## Custom Blocks

Three custom blocks are included and registered automatically:

### 1. Hero Block (`ade-block-theme/hero`)

- Full-width hero section with background image
- Attributes: title, subtitle, backgroundImage, minHeight
- Category: Ade Blocks

### 2. Feature Box Block (`ade-block-theme/feature-box`)

- Box component with icon, title, and description
- Attributes: title, description, icon
- Category: Ade Blocks
- Built with Bootstrap card styling

### 3. Call To Action Block (`ade-block-theme/cta`)

- Centered CTA section with button
- Attributes: title, description, buttonText, buttonUrl
- Category: Ade Blocks
- Built with gradient background

## Bootstrap Integration

### Via npm (Recommended for Production)

The `src/index.js` file imports Bootstrap from npm:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
```

This gets compiled into `dist/theme.js` with all Bootstrap functionality bundled.

### Via CDN (Fallback)

The theme also loads Bootstrap 5.3.0 from CDN via `functions.php` as a fallback when dist files don't exist.

### Using Bootstrap Classes in Templates

You can use Bootstrap utility classes directly in block templates:

```html
<!-- wp:group {"className":"container"} -->
<div class="container">
  <!-- wp:group {"className":"row"} -->
  <div class="row">
    <!-- wp:column {"className":"col-md-6"} -->
    <div class="col-md-6">
      <!-- content -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->
```

## Editing & Building

### Development Workflow

1. Modify source files in `src/`
2. Run `npm run dev` to watch for changes
3. Webpack automatically rebuilds `dist/` files
4. Browser automatically reflects changes

### Adding New Block

Edit `src/blocks/index.js` and add:

```javascript
registerBlockType('ade-block-theme/my-block', {
  title: 'My Block',
  description: 'My custom block',
  category: 'ade-blocks',
  icon: 'smiley',
  edit() {
    /* editor component */
  },
  save() {
    /* frontend output */
  },
});
```

### Modifying Styles

Edit `src/styles/theme.scss`:

```scss
// Add custom styles
.my-class {
  color: $primary;

  &:hover {
    color: darken($primary, 10%);
  }
}
```

Then run `npm run build` to compile.

## Production Deployment

1. Run `npm run build` to create optimized production files
2. Upload theme to production (including `dist/` folder)
3. WordPress will automatically use the compiled assets
4. Do NOT include `node_modules/` in production

### Production Build Output

- `dist/theme.js` - ~250KB minified (includes Bootstrap)
- `dist/blocks.js` - ~50KB minified (custom blocks)
- Both files are optimized and ready for production

## Troubleshooting

### Blocks Not Showing in Editor

1. Ensure `npm run build` completed successfully
2. Check browser console for JavaScript errors
3. Verify `dist/blocks.js` exists
4. Clear WordPress cache and refresh editor

### Bootstrap Classes Not Applied

1. Verify `dist/theme.js` is loaded (check page source)
2. Check for CSS specificity conflicts
3. Ensure correct Bootstrap class names are used
4. Test in browser without caching

### Build Fails

1. Check Node.js version: `node --version` (should be 14+)
2. Delete `node_modules/` and run `npm install` again
3. Check for file permission issues
4. Review webpack error messages carefully

## Performance Considerations

- **Bundle Size**: `dist/theme.js` (~250KB) includes Bootstrap
- **CDN Fallback**: Theme still works with CDN if dist files missing
- **Code Splitting**: Consider webpack code splitting for large projects
- **Lazy Loading**: Implement for off-screen custom blocks

## Contributing

When updating blocks or styles:

1. Follow existing code style
2. Run `npm run lint:js` before committing
3. Run `npm run format` to format code
4. Test in both editor and frontend
5. Update documentation for new features

## Resources

- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Webpack Documentation](https://webpack.js.org/)
- [Babel Documentation](https://babeljs.io/)

## Support

For issues or questions about the development setup, check:

1. This development guide
2. Theme README.md
3. Theme repository issues
4. WordPress block editor documentation

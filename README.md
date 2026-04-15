# Ade Block Theme

A modern, lightweight WordPress block theme with Bootstrap 5+ integration and full site editing support.

## Features

- **Full Site Editing (FSE)**: Complete control over your site using the WordPress Site Editor
- **Bootstrap 5+**: Integration with Bootstrap 5.3.0 for responsive design and modern components
- **Block-Based**: Built on WordPress block architecture for maximum flexibility
- **Responsive Design**: Mobile-first approach with responsive templates
- **Block Templates**: Custom templates for archive, single posts, pages, and more
- **Template Parts**: Reusable header and footer components
- **Color Palette**: Bootstrap's comprehensive color system built into the theme
- **Typography**: Professional font sizing and styling
- **Custom Blocks Support**: Full support for WordPress core blocks and third-party block plugins

## Requirements

- WordPress 6.0 or later
- PHP 7.4 or later

## Installation

1. Download the theme or clone the repository into `wp-content/themes/`
2. Navigate to WordPress Admin → Appearance → Themes
3. Activate "Ade Block Theme"

## Theme Structure

```
ade-block-theme/
├── style.css                    # Main theme stylesheet with Bootstrap integration
├── theme.json                   # Theme configuration and settings
├── functions.php                # Theme setup and enqueue functions
├── index.php                    # PHP template entry point
├── templates/
│   ├── index.html              # Archive/home template
│   ├── single.html             # Single post template
│   ├── page.html               # Page template
├── parts/
│   ├── header.html             # Header template part
│   └── footer.html             # Footer template part
├── js/
│   └── theme.js                # Custom theme JavaScript
├── css/
│   └── editor-style.css        # Block editor stylesheet
└── README.md                   # This file
```

## Site Editor

### Accessing the Site Editor

1. Go to WordPress Admin → Appearance → Editor
2. Or click "Edit Site" from the Customizer

### Available Sections

- **Header**: Navigation and branding
- **Footer**: Copyright and secondary navigation
- **Content Areas**: Full-width and constrained layouts

### Customization

Use the Site Editor to:

- Modify colors using the Bootstrap color palette
- Adjust typography settings
- Configure spacing and layout
- Add/edit navigation menus
- Create custom page and post layouts

## Template Types

### Archive Template (`index.html`)

- Displays lists of posts with excerpts
- Includes pagination
- Category and tag display
- Author and date information

### Single Post Template (`single.html`)

- Full post display with featured image
- Post metadata (author, date, categories, tags)
- Related posts section
- Comments section

### Page Template (`page.html`)

- Simple page layout with full-width content
- Featured image support
- Comments section
- Clean, minimal design

## Bootstrap 5+ Integration

The theme includes Bootstrap 5.3.0 from CDN with:

- Responsive grid system
- Utility classes for spacing, sizing, and alignment
- Bootstrap components (buttons, tables, forms, etc.)
- Pre-configured color variables
- Mobile-first breakpoints

### Using Bootstrap Classes

You can use Bootstrap classes directly in block attributes:

```html
<!-- wp:group {"className":"container-lg"} -->
<div class="container-lg">
  <!-- Your content -->
</div>
<!-- /wp:group -->
```

## Customization

### Theme Colors

Edit `theme.json` to customize colors:

```json
"color": {
  "palette": [
    {
      "name": "Primary",
      "slug": "primary",
      "color": "#0d6efd"
    }
  ]
}
```

### Typography

Customize fonts and sizes in `theme.json`:

```json
"typography": {
  "fontSizes": [
    {
      "name": "Small",
      "slug": "small",
      "size": "0.875rem"
    }
  ]
}
```

### Custom CSS

Add custom styles to `style.css` without modifying the theme files.

## Menus

Register navigation menus in WordPress:

1. Create menus in Appearance → Menus
2. Use the `<!-- wp:navigation /-->` block in templates

## Creating Templates

To create custom templates:

1. In the Site Editor, create a new template
2. Name it according to the template hierarchy (e.g., `archive-category.html`)
3. Use blocks to build your layout
4. Publish and apply to appropriate content types

## Functions Reference

### Available Theme Functions

- `theme_setup()`: Initialize theme support
- `enqueue_assets()`: Load stylesheets and scripts
- `add_custom_body_classes()`: Add contextual body classes

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight CSS that doesn't duplicate Bootstrap
- Optimized block rendering
- Fast loading times with CDN-hosted Bootstrap
- No unnecessary JavaScript

## Troubleshooting

### Template Not Showing

1. Check template naming follows WordPress conventions
2. Verify template is in the `templates/` directory
3. Clear any caching plugins

### Styles Not Applying

1. Ensure `theme.json` is properly formatted
2. Clear browser cache
3. Check browser console for errors

### Bootstrap Classes Not Working

1. Verify Bootstrap CSS is loading (check page source)
2. Check class names for typos
3. Check specificity conflicts with other styles

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This theme is licensed under the GPL v2 or later. See LICENSE file for details.

## Support

For support, issues, or feature requests, please visit the theme repository or contact the developer.

## Changelog

### Version 1.0.0

- Initial release
- Bootstrap 5+ integration
- Full site editing support
- Archive, single, and page templates
- Header and footer components
- Comprehensive theme.json configuration

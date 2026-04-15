/**
 * Custom Blocks Registration
 */

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { Icon, edit as editIcon } from '@wordpress/icons';

/**
 * Hero Block
 */
registerBlockType('ade-block-theme/hero', {
  title: __('Hero Section', 'ade-block-theme'),
  description: __('Full-width hero section with background image', 'ade-block-theme'),
  category: 'ade-blocks',
  icon: 'image-flip-vertical',
  keywords: [__('hero'), __('banner'), __('section')],
  attributes: {
    title: {
      type: 'string',
      default: __('Welcome to Our Site', 'ade-block-theme'),
    },
    subtitle: {
      type: 'string',
      default: __('This is a hero section block', 'ade-block-theme'),
    },
    backgroundImage: {
      type: 'string',
    },
    minHeight: {
      type: 'string',
      default: '400px',
    },
  },
  edit({ attributes, setAttributes }) {
    return (
      <div style={{ minHeight: attributes.minHeight, backgroundColor: '#f0f0f0', padding: '40px' }}>
        <h1>{attributes.title}</h1>
        <p>{attributes.subtitle}</p>
        <p style={{ fontSize: '12px', color: '#999' }}>Hero Block - Configure in block settings</p>
      </div>
    );
  },
  save({ attributes }) {
    return (
      <div
        className="wp-block-ade-block-theme-hero"
        style={{
          minHeight: attributes.minHeight,
          backgroundImage: attributes.backgroundImage
            ? `url(${attributes.backgroundImage})`
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '60px 20px',
        }}
      >
        <div className="hero-content">
          <h1>{attributes.title}</h1>
          <p>{attributes.subtitle}</p>
        </div>
      </div>
    );
  },
});

/**
 * Feature Box Block
 */
registerBlockType('ade-block-theme/feature-box', {
  title: __('Feature Box', 'ade-block-theme'),
  description: __('A box with icon, title, and description', 'ade-block-theme'),
  category: 'ade-blocks',
  icon: 'star-empty',
  keywords: [__('feature'), __('box'), __('icon')],
  attributes: {
    title: {
      type: 'string',
      default: __('Feature Title', 'ade-block-theme'),
    },
    description: {
      type: 'string',
      default: __('Add your feature description here', 'ade-block-theme'),
    },
    icon: {
      type: 'string',
      default: '⭐',
    },
  },
  edit({ attributes, setAttributes }) {
    return (
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        <div style={{ fontSize: '48px', marginBottom: '10px' }}>{attributes.icon}</div>
        <h3>{attributes.title}</h3>
        <p>{attributes.description}</p>
      </div>
    );
  },
  save({ attributes }) {
    return (
      <div className="wp-block-ade-block-theme-feature-box card">
        <div className="card-body">
          <div className="feature-icon" style={{ fontSize: '48px', marginBottom: '15px' }}>
            {attributes.icon}
          </div>
          <h5 className="card-title">{attributes.title}</h5>
          <p className="card-text">{attributes.description}</p>
        </div>
      </div>
    );
  },
});

/**
 * CTA Block
 */
registerBlockType('ade-block-theme/cta', {
  title: __('Call To Action', 'ade-block-theme'),
  description: __('Centered call-to-action section with buttons', 'ade-block-theme'),
  category: 'ade-blocks',
  icon: 'megaphone',
  keywords: [__('cta'), __('call'), __('action')],
  attributes: {
    title: {
      type: 'string',
      default: __('Ready to Get Started?', 'ade-block-theme'),
    },
    description: {
      type: 'string',
      default: __('Take action now and achieve your goals', 'ade-block-theme'),
    },
    buttonText: {
      type: 'string',
      default: __('Get Started', 'ade-block-theme'),
    },
    buttonUrl: {
      type: 'string',
      default: '#',
    },
  },
  edit({ attributes }) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
        }}
      >
        <h2>{attributes.title}</h2>
        <p>{attributes.description}</p>
        <button className="btn btn-primary">{attributes.buttonText}</button>
      </div>
    );
  },
  save({ attributes }) {
    return (
      <div
        className="wp-block-ade-block-theme-cta"
        style={{ textAlign: 'center', padding: '60px 20px' }}
      >
        <h2>{attributes.title}</h2>
        <p>{attributes.description}</p>
        <a href={attributes.buttonUrl} className="btn btn-primary btn-lg">
          {attributes.buttonText}
        </a>
      </div>
    );
  },
});

console.log('Ade Block Theme custom blocks registered');

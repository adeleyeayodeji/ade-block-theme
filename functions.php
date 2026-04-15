<?php

/**
 * Ade Block Theme - functions.php
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Ade_Block_Theme
 */

namespace Ade_Block_Theme;

// Don't load directly
if (! defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function theme_setup()
{
    // Add theme support
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');
    add_theme_support('custom-logo');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('appearance-tools');

    // Add support for wide and full alignments
    add_theme_support('align-wide');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'ade-block-theme'),
        'footer'  => esc_html__('Footer Menu', 'ade-block-theme'),
    ));

    // Add support for editor styles
    add_theme_support('editor-styles');
    add_editor_style('style.css');

    // Add custom spacing values for blocks
    add_theme_support('custom-spacing');
    add_theme_support('custom-line-height');
}

add_action('after_setup_theme', __NAMESPACE__ . '\\theme_setup');

/**
 * Enqueue Scripts and Styles
 */
function enqueue_assets()
{
    // Main theme stylesheet
    wp_enqueue_style('ade-block-theme-style', get_stylesheet_uri(), array(), '1.0.0');

    // Bootstrap 5+ CSS from CDN
    wp_enqueue_style(
        'bootstrap-5',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        array(),
        '5.3.0'
    );

    // Bootstrap 5+ JS from CDN (Bundle includes Popper.js)
    wp_enqueue_script(
        'bootstrap-5',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        array(),
        '5.3.0',
        true
    );

    // Enqueue built theme JavaScript (includes Bootstrap + custom scripts)
    $dist_path = get_template_directory() . '/dist';
    if (file_exists($dist_path . '/theme.js')) {
        wp_enqueue_script(
            'ade-block-theme-dist',
            get_template_directory_uri() . '/dist/theme.js',
            array(),
            '1.0.0',
            true
        );
    } else {
        // Fallback to original theme.js if dist doesn't exist
        wp_enqueue_script(
            'ade-block-theme-script',
            get_template_directory_uri() . '/js/theme.js',
            array('jquery'),
            '1.0.0',
            true
        );
    }

    // Add theme text domain
    wp_localize_script('ade-block-theme-script', 'adeTheme', array(
        'siteTitle'       => get_bloginfo('name'),
        'siteDescription' => get_bloginfo('description'),
    ));
}

add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_assets');

/**
 * Add custom block styles
 */
function enqueue_block_editor_assets()
{
    // Editor stylesheet
    wp_enqueue_style(
        'ade-block-theme-editor',
        get_template_directory_uri() . '/css/editor-style.css',
        array('wp-edit-blocks'),
        '1.0.0'
    );

    // Enqueue built block styles and scripts (from npm build)
    $dist_path = get_template_directory() . '/dist';
    if (file_exists($dist_path . '/blocks.js')) {
        wp_enqueue_script(
            'ade-block-theme-blocks',
            get_template_directory_uri() . '/dist/blocks.js',
            array('wp-blocks', 'wp-element', 'wp-components', 'wp-data', 'wp-i18n'),
            '1.0.0',
            true
        );

        wp_set_script_translations('ade-block-theme-blocks', 'ade-block-theme', get_template_directory() . '/languages');
    }
}

add_action('enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_block_editor_assets');

/**
 * Register custom block category
 */
function register_block_categories($categories, $post)
{
    $category_names = array_map(
        function ($cat) {
            return $cat['slug'];
        },
        $categories
    );

    if (!in_array('ade-blocks', $category_names, true)) {
        $categories[] = array(
            'slug'  => 'ade-blocks',
            'title' => esc_html__('Ade Blocks', 'ade-block-theme'),
        );
    }

    return $categories;
}

add_filter('block_categories_all', __NAMESPACE__ . '\\register_block_categories', 10, 2);

/**
 * Get the excerpt length for blocks
 */
function get_excerpt($post_id, $length = 30)
{
    $excerpt = wp_get_post_excerpt($post_id);

    if (empty($excerpt)) {
        $excerpt = wp_trim_words(get_post_field('post_content', $post_id), $length);
    }

    return $excerpt;
}

/**
 * Custom excerpt length for blocks
 */
function block_excerpt_length($length)
{
    return 30;
}

add_filter('excerpt_length', __NAMESPACE__ . '\\block_excerpt_length', 999);

/**
 * Custom excerpt more text
 */
function block_excerpt_more($more)
{
    return ' ...';
}

add_filter('excerpt_more', __NAMESPACE__ . '\\block_excerpt_more');

/**
 * Add custom CSS classes for Bootstrap grid
 */
function add_custom_body_classes($classes)
{
    if (is_archive() || is_home()) {
        $classes[] = 'archive-page';
    }

    if (is_single()) {
        $classes[] = 'single-post';
    }

    if (is_page()) {
        $classes[] = 'single-page';
    }

    return $classes;
}

add_filter('body_class', __NAMESPACE__ . '\\add_custom_body_classes');

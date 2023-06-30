<?php

if(!defined('REDIRECT_URL')) {
  define('REDIRECT_URL', 'https://animaticss.com');
}

if(!function_exists('a_custom_redirect')) {
  function a_custom_redirect() {
    header("Location: ". REDIRECT_URL);
    die();
  }
}

if(!function_exists('a_theme_setup')) {
  function a_theme_setup() {
    add_theme_support('post-thumbnails');
  }
  add_action('after_setup_theme', 'a_theme_setup');
}

if(class_exists('acf')) {

  if(function_exists('acf_add_options_page')) {

    acf_add_options_page(array(
      'page_title' => 'Theme Settings',
      'menu_title' => 'Theme Settings',
      'menu_slug' => 'theme_settings',
      'capability' => 'edit_posts',
      'redirect' => true
    ));

    acf_add_options_sub_page(array(
      'page_title' => 'Theme General Settings',
      'menu_title' => 'General',
      'parent_slug' => 'theme_settings',
    ));

    acf_add_options_page(array(
      'page_title' => 'Blocks',
      'menu_title' => 'Blocks',
      'menu_slug' => 'blocks',
      'capability' => 'edit_posts',
      'redirect' => true
    ));


    acf_add_options_sub_page(array(
      'page_title' => 'Header',
      'menu_title' => 'Header',
      'parent_slug' => 'blocks',
    ));

    acf_add_options_sub_page(array(
      'page_title' => 'Footer',
      'menu_title' => 'Footer',
      'parent_slug' => 'blocks',
    ));
    
    acf_add_options_sub_page(array(
      'page_title' => 'Cookies',
      'menu_title' => 'Cookies',
      'parent_slug' => 'blocks',
    ));

    acf_add_options_sub_page(array(
      'page_title' => 'About',
      'menu_title' => 'About',
      'parent_slug' => 'blocks',
    ));
    

  }
}

if(!function_exists('a_mime_types')) {
  function a_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
  }
  add_filter('upload_mimes', 'a_mime_types');
}

// Add custom image size
if(!function_exists('a_add_image_size')) {
  function a_add_image_size() {
    add_image_size( 'custom-medium', 300, 9999 );
    add_image_size( 'custom-tablet', 600, 9999 );
    add_image_size( 'custom-large', 1200, 9999 );
    add_image_size( 'custom-large-crop', 1200, 1200, true );
    add_image_size( 'custom-desktop', 1600, 9999 );
    add_image_size( 'custom-full', 2560, 9999 );
  }
  add_action( 'after_setup_theme', 'a_add_image_size' ); 
}

if(!function_exists('a_custom_image_size_names')) {
  function a_custom_image_size_names($sizes) {
    return array_merge( $sizes, array(
      'custom-medium' => __( 'Custom medium', 'scaloneta'),
      'custom-tablet' => __( 'Custom tablet', 'scaloneta'),
      'custom-large' => __( 'Custom large', 'scaloneta'),
      'custom-large-crop' => __( 'Custom large crop', 'scaloneta'),
      'custom-desktop' => __( 'Custom desktop', 'scaloneta'),
      'custom-full' => __( 'Custom full', 'scaloneta'),
    ));
  }
  add_filter( 'image_size_names_choose', 'a_custom_image_size_names');
}

// Disable block editor
add_filter('use_block_editor_for_post', '__return_false', 10);
add_filter('use_block_editor_for_post_type', '__return_false', 10);

// Register menus
if(!function_exists('a_custom_navigation_menus')) {
  function a_custom_navigation_menus() {
    $locations = array(
      'header_menu' => __( 'Header Menu', 'scaloneta' ),
      'footer_menu' => __( 'Footer Menu', 'scaloneta' ),
    );
    register_nav_menus($locations);
  }
  add_action( 'init', 'a_custom_navigation_menus');
}

if(!function_exists('a_register_custom_post_types')) {
  function a_register_custom_post_types() {
    $singular_name = __('Partido', 'scaloneta');
    $plural_name = __('Partidos', 'scaloneta');
    $slug_name = 'partidos';
    register_post_type( $slug_name, array(
      'label' => $singular_name,
      'public' => true,
      'capability_type' => 'post',
      'map_meta_cap' => true,
      'has_archive' => false,
      'query_var' => $slug_name,
      'supports' => array('title', 'thumbnail', 'revisions'),
      'labels' => a_get_custom_post_type_labels($singular_name, $plural_name),
      'menu_icon' => 'dashicons-images-alt2',
      'show_in_rest' => true
    ));
    $singular_name = __('Rival', 'scaloneta');
    $plural_name = __('Rivales', 'scaloneta');
    $slug_name = 'rivales';
    register_post_type( $slug_name, array(
      'label' => $singular_name,
      'public' => true,
      'capability_type' => 'post',
      'map_meta_cap' => true,
      'has_archive' => false,
      'query_var' => $slug_name,
      'supports' => array('title', 'thumbnail', 'revisions'),
      'labels' => a_get_custom_post_type_labels($singular_name, $plural_name),
      'menu_icon' => 'dashicons-images-alt2',
      'show_in_rest' => true
    ));
    $singular_name = __('Instancia', 'scaloneta');
    $plural_name = __('Instancias', 'scaloneta');
    $slug_name = 'instancias';
    register_post_type( $slug_name, array(
      'label' => $singular_name,
      'public' => true,
      'capability_type' => 'post',
      'map_meta_cap' => true,
      'has_archive' => false,
      'query_var' => $slug_name,
      'supports' => array('title', 'thumbnail', 'revisions'),
      'labels' => a_get_custom_post_type_labels($singular_name, $plural_name),
      'menu_icon' => 'dashicons-images-alt2',
      'show_in_rest' => true
    ));
    $singular_name = __('Estadio', 'scaloneta');
    $plural_name = __('Estadios', 'scaloneta');
    $slug_name = 'estadios';
    register_post_type( $slug_name, array(
      'label' => $singular_name,
      'public' => true,
      'capability_type' => 'post',
      'map_meta_cap' => true,
      'has_archive' => false,
      'query_var' => $slug_name,
      'supports' => array('title', 'thumbnail', 'revisions'),
      'labels' => a_get_custom_post_type_labels($singular_name, $plural_name),
      'menu_icon' => 'dashicons-images-alt2',
      'show_in_rest' => true
    ));
    $singular_name = __('Formacion', 'scaloneta');
    $plural_name = __('Formaciones', 'scaloneta');
    $slug_name = 'formaciones';
    register_post_type( $slug_name, array(
      'label' => $singular_name,
      'public' => true,
      'capability_type' => 'post',
      'map_meta_cap' => true,
      'has_archive' => false,
      'query_var' => $slug_name,
      'supports' => array('title', 'thumbnail', 'revisions'),
      'labels' => a_get_custom_post_type_labels($singular_name, $plural_name),
      'menu_icon' => 'dashicons-images-alt2',
      'show_in_rest' => true
    ));
  }
  add_action( 'init', 'a_register_custom_post_types');
}

if(!function_exists('a_get_custom_post_type_labels')) {
  function a_get_custom_post_type_labels($singular, $plural) {
    $labels = array(
      'name' => $plural,
      'singular_name' => $singular,
      'menu_name' => $plural,
      'add_new' => sprintf( __('Add %s', 'scaloneta'), $singular),
      'add_new_item' => sprintf( __('Add new %s', 'scaloneta'), $singular),
      'edit' => __('Edit', 'scaloneta'),
      'edit_item' => __('Edit %s', 'scaloneta', $singular),
      'new_item' => __('New %s', 'scaloneta', $singular),
      'view' => __('View %s', 'scaloneta', $singular),
      'view_item' => __('View %s', 'scaloneta', $singular),
      'search_items' => __('Search %s', 'scaloneta', $plural),
      'not_found' => __('%s not found', 'scaloneta', $plural),
      'not_found_in_trash' => __('%s not found in trash', 'scaloneta', $plural),
      'parent' => __('Parent %s', 'scaloneta', $plural),
    );
    return $labels;
  }
}

?>
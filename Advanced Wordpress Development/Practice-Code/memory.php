<?php
/*
Plugin Name: Name Of The Plugin
Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
Description: A brief description of the plugin.
Version: The Plugin's Version Number, e.g.: 1.0
Author: Name Of The Plugin Author
Author URI: http://URI_Of_The_Plugin_Author
License: A "Slug" license name e.g. GPL2
*/

if(have_posts()) :
	while(have_posts()) :
		the_post() : ?>

	<article>
		<p><?php the_date(); ?></p>
		<h1><? php the_title(); ?> </h1>
		<p><? php the_excerpt(); ?> </p>
	</article>

	<? endwhile;
	endif;

add_theme_support('post-thumbnails');
add_image_size('featured-image-large', 650, 350, true);
add_image_size('featured-image-medium', 400, 250, true);
add_image_size('featured-image-tiny', 200, 200, true);


function op_enqueue_my_scripts() {
	wp_enqueue_script(
		'my-jquery-stuff',
		get_stylesheet_directory_uri() . '/includes/javascript/my-jquery-stuff.js',
		array('jquery')
		);
	wp_enqueue_script(
		'my-jquery-other-stuff',
		get_stylesheet_directory_uri() . '/includes/javascript/my-jquery-other-stuff.js',
		array('jquery')
		);
	wp_enqueue_style(
		'op_styles';
		get_stylesheet_directory_uri();
		);

}

add_action('wp_enqueue_scripts', 'op_enqueue_my_scripts');



function op_main_nav() {
	register_nav_menu('main-nav','Main Nav');
}

add_action('init', 'op_main_nav');



/*
Plugin Name: Old Philly's Hooked Plugin
Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
Description: Add 'Hooked To The Title'
Version: 1.0
Author: Philip Salatrik
Author URI: http://URI_Of_The_Plugin_Author
License: A "Slug" license name e.g. GPL2
*/

function add_hooked($title) {
	return "Hooked" . $title;
	
}
add_filter('the_title', 'add_hooked');



function op_plugin_file_loader() {
	wp_enqueue_script(
		'whatever-myfile-is-named'
		plugin_dir_url(__file__) . "whatever-myfile-is-named.js",
		array('jquery');
	);
	wp_enqueue_style(
		'whatever-styles'
		plugin_dir_url(__file__) . "whatever-styles.css",
		array('jquery');
	);
	wp_enqueue_script(
		'whatever-subdirectory-file'
		plugin_dir_url(__file__) . "/js/whatever-subdirectory-file.js",
		array('jquery');
	);
}

add_action('wp_enqueue_scripts', 'op_plugin_file_loader');



get_stylesheet_directory_uri() . 'theme-file-name.js'; //looks to see if file is in child theme first

get_template_file_uri() . 'parent-theme-file-here.js'; //looks to the parent theme first

get_theme_file_uri('file-name-here.js'); //parent theme file fist, and if there’s an identically named file in the child theme,goes there instead. 

plugin_dir_url(__file__) . '/js/plugin-file.js'; // loads files to a plugin

get_stylesheet_uri() // loads the stylesheet 


function script_enquere(){
	wp_enqueue_script(
		'file-name',
		get_theme_file_uri('file-name.js');
		array('jquery');
		);
	wp_enqueue_script(
		'other-file-name',
		get_theme_file_uri('/js/other-file-name.js');
		array('jquery');
		);
	wp_enqueue_style(
		'other-style',
		get_theme_file_uri('/css/other-style.css');
		
		)
}
add_action("wp_enqueue_scripts" 'script_enquere');



Making a child theme create a new file called styles.css and place it in a new folder called whatever-child then add this code:

/*
Theme Name:     Whatever Child
Theme URI:      https://upandrunningwp.com/
Description:    Child theme for the Twenty Fifteen theme
Author:         WPShout
Author URI:     https://wpshout.com/
Template:       whatever
Version:        1.0.0
*/

@import url("../whatever/style.css");


//or in functions.php

/* Environment: functions.php of a child theme whose parent is twentyfifteen */

function wpshout_enqueue_twentyfifteen_stylesheet( ) {
	wp_enqueue_style(
		'twentyfifteen',
		get_template_directory_uri() . '/style.css'
	);
}
add_action( 'wp_enqueue_scripts', 'wpshout_enqueue_twentyfifteen_stylesheet' );


Conditional tags!!!!!!

/* Environment: We're in the active theme's functions.php (or perhaps a PHP file in a "Special Page" plugin) */
function enqueue_special_scripts(){

		if(! is_page('special-page')) {
			return
  }
		wp_enqueue_script(
				'special-script',
				get_stylesheet_directory_uri() . '/js/special-script.js',
				array('jquery')
			);
		wp_enqueue_script(
				'special-style',
				get_stylesheet_directory_uri() . '/css/special-style.css'
			);


}

add_action('wp_enqueue_scripts', 'enqueue_special_scripts');

/* Environment: We're inside The Loop, in index.php */
if( ! is_page()) : ?>
	<span>
		<?php the_date(); ?>
	</span>>
<? php endif; ?>


<?php
/*
Template Name: Author Link Page
Template Post Type: post, page, product
*/

<?php



Custom Post Templates!!!!

/*
Template Name: Author Link Page
Template Post Type: post, page, product
*/

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();

			// THIS BIT IS CUSTOM!
			?>

			<div class="author-more-link">
				<a href="<?php echo get_author_posts_url(get_the_author_meta( 'ID' )); ?>">
					More by our author, <?php the_author(); ?>
				</a>
			</div>

			<?php
			// END CUSTOM BIT!

			// Include the page content template.
			get_template_part( 'content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		// End the loop.
		endwhile;
		?>

		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>


<? php
Short Codes!!!!


/*
Plugin Name: My Shortcoder
*/

add_shortcode('my_shortcoder' , 'color_changer');

function color_changer($attributes , $content = ''){
	$attributes = shortcode_atts(array(
			'background' => 'green',
			'color' => 'white',
			)
			$attributes, 'color_changer');

				return '<p style=" background: '.$attributes['background'].'; color: '.$attributes['color'].'; "> '$content .'  </p>;'


};







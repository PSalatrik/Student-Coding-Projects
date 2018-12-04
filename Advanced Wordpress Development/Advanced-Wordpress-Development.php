<!--WordPress publishes pages to the browser that are written in HTML not PHP! PHP outputs HTML! Browsers do not understand PHP. Javascript runs in the browser.

get(post-meta) applies to both posts and pages because WordPress stores everything as a post no matter what. Even media like photos are stored as posts, I guess. Crazy. i.e. Attachment Posts.

HYPERTEXT TRANSFER PROTACAL (is apache language )! WAMP

Template Hierarchy!!!!

https://developer.wordpress.org/files/2014/10/wp-hierarchy.png-->

The LOOP!


<!--Version 1. -->

<?php
/* Environment: We're inside a theme template file in the WordPress template hierarchy */

if ( have_posts() ) {
	while ( have_posts() ) {
		the_post(); 

		// (Loop contents will go here)

	} // end while
} // end if

//Version 2. (does the same thing as version 1 but written differently / the curley brackets are replaced with colons! and you must type endwhile and end if because there are no closing brackets) 

<?php
/* Environment: We're inside a theme template file in the WordPress template hierarchy */

if ( have_posts() ) :
	while ( have_posts() ) :
		the_post(); 

		// (Loop contents will go here)

	endwhile;
endif;


//The Loop in action: (my first real question is how come we do not have to echo the_title() or echo the_excerpt()? It must be because these are objects that return a echo'ed statement)

<?php 
/* Environment: We're inside a theme template file in the WordPress template hierarchy */

if ( have_posts() ) :
	while ( have_posts() ) :
		the_post(); ?>   

		<article class="full-article">
			<h2><? php the_title(); ?></h2>
			<p><? php the_excerpt(); ?></p>
		</article>

	<? endwhile;
endif;
		
		//Always end php before you open your HTML Tags, I guess. Like on line 

//FUNCTIONS.php
		//Ask yourself: “If I changed themes, would I lose lots of data, or would things just display differently?” It should be the latter.

//Core functions reference: https://codex.wordpress.org/Function_Reference

<?php

// Add theme support for featured images, and add a few custom image sizes (Featured Images are called post-thumbnails for support and then Featured Images for size)
//Core functions:
add_theme_support( 'post-thumbnails' ); 
add_image_size( 'featured-image-large', 640, 294, true );
add_image_size( 'featured-image-small', 200, 129, true );
add_image_size( 'featured-image-tiny', 124, 80, true );



// Register main navigation menu (A core hook and function)
function wpshout_register_menu( ) {
    register_nav_menu( 'main-nav', 'Main Nav' );
}
add_action( 'init', 'wpshout_register_menu' );








// PLUGINS

// to Register a plugin you must do it as comments:

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

// Here is a simple plugin that adds "Hooked" infront of all the titles of the blogs on a site:


<?php 
/*
Plugin Name: WPShout Do-Something Filter Plugin
*/

function wpshout_do_something( $title ) {
	return 'Hooked: ' . $title;
}
add_filter( 'the_title', 'wpshout_do_something' );

//somewhere over the rainbow

apply_filter('the_title');   //placeholder hook    



<?php

/*
Plugin Name: Old Philly's Do-Nothing Plugin
*/
//the end

?>
Hooks Actions and Filters:

// Hooks can insert custom code into WP. Written in PHP Functions called: Hooked Functions.
//Two kinds of Hooked Functions exist: Actions and Filters
//Two Kinds of hooks exist: action hooks and filter hooks. Action hooks 'hook in' actions and filter hooks 'hook in' filters.
//Filters are passed code or markup by their filter hooks; they modify what they are passed, and must return the result back for WordPress to use in its regular processing.
//Actions, by contrast, do not need to return a value, and often are not passed specific parameters by their action hooks.
<?
Filter:
/* Environment: We're in functions.php or a PHP file in a plugin */

function wpshout_filter_example( $title ) {
	return 'Hooked: ' . $title;
}
add_filter( 'the_title', 'wpshout_filter_example' );

//List of filter references: https://codex.wordpress.org/Plugin_API/Filter_Reference



Action:


//CORE ACTION HOOK
add_action("HOOK NAME", "FUNCTION NAME");
// add_action() is created in a plugin or in a functions.php file for this we use wp_head. wp_head is a core function that adds hooks to the head

	function wpshout_action_example(){
			<?php echo "<meta name='description' content= 'Our New Meta Description' />";
	};
add_action("wp_head", "wpshout_action_example");  //do_action('wp_head')


// CUSTOM ACTION HOOK

//do_action() is placed where you execute the custom hooked function inside a loop on a page template / CREATES A HOOK PLACEHOLDER 
<?php 
 do_action('CUSTOM HOOK NAME') 

 ?>


<?
//to work with do_action() we need to have a Function  created with add_action() / most likely on the functions.php page
<?php 
	function hook_example(){
			echo "<h1>This is how you create a coustom hook</h1>" ;
	};

add_action("CUSTOM HOOK NAME", "hook_example");




<?php // I added this because php was closed in the do_action() hook

/* Environment: We're in functions.php or a PHP file in a plugin */


function wpshout_action_example( ) {
	echo "WPShout was here.";
}
add_action( 'wp_footer', 'wpshout_action_example' );

//do_action();

// List of action references: https://codex.wordpress.org/Plugin_API/Action_Reference



//   Including Custom Scripts and Styles In WordPress

//Key Takeaways:
//The proper method to add JavaScript files and CSS stylesheets to WordPress is by enqueueing them. This allows for flexibility and customizability that adding these files directly to your site’s header does not.
//The function to enqueue a stylesheet is called wp_enqueue_style(). The function to enqueue a JavaScript file is called wp_enqueue_script(). !!!!!!!!!!!!!!!!!Both functions most commonly hook into a WordPress hook called wp_enqueue_scripts.
//Properly enqueueing scripts and styles—and linking to theme and plugin resources in general—requires proper knowledge of WordPress’s URL linking functions, which this chapter covers.



Don’t Add CSS and JavaScript Directly to Your Header!
//Environment: We're in header.php.
//<!--This is very bad! Avoid doing it in WordPress.-->
<link rel="stylesheet" media="screen" href="https://wpshout.com/wp-content/themes/wpshout-2014/style.css"  />
<script type="text/javascript' src='https://wpshout.com/wp-content/themes/wpshout-2014/script.js"></script>

// Enqueue theme JavaScripts and CSS styles
function wpshout_scripts( ) {
	// Enqueue JS that gives the search box a default value
	//wp_enqueue_script('FILE NAME SLUG' , ROOT URI FUNCTION , REST OF THE FILE-PATH , array (dependencies) )
	wp_enqueue_script( //singular = "script / to add a single script to the action function"
		'search-box-value',
		get_stylesheet_directory_uri() . '/js/search-box-value.js',
		array('jquery')
	);

	// Enqueue JS that sets a dynamic page minimum height
	wp_enqueue_script( 
		'page-min-height',
		get_stylesheet_directory_uri() . '/js/page-min-height.js',
		array( 'jquery' )
	);

	// Enqueue main theme stylesheet
	wp_enqueue_style( 
		'wpshout-style',
		get_stylesheet_uri()
	);
}


add_action( 'wp_enqueue_scripts', 'wpshout_scripts' ); // plural = scripts / to call the action with all the scripts / add the function with all the script calls






//The WordPress Way to Link to Theme and Plugin Resources like PHOTOS 
//<!-- Environment: functions.php or a theme template file -->

//<!-- Points to the active theme's root directory, then /photo.jpg -->
?>
<img src="<? php echo get_stylesheet_directory_uri(); ?>/photo.jpg">

//<!-- Points to the active theme's root directory, then /images/photo.jpg -->
<img src="<? php echo get_stylesheet_directory_uri(); ?>/images/photo.jpg">
<?
//A New and Cool Way to Link to Theme Resources:
 get_theme_file_uri()
//Since WordPress 4.7, 
get_theme_file_uri() //has made letting child themes override parent-theme assets substantially simpler.

!!!!!!!!!!//Since WordPress 4.7, there’s been a new function that makes it substantially simpler to let child themes override the parent-theme version of any theme asset: 
get_theme_file_uri(). //Here’s an example use:?>

<img src="<? php echo get_theme_file_uri( 'images/photo.jpg' ); ?>">



THIS IS HOW YOU LOAD A PHOTO!!!!!!!!!!!!!
<img src="<? php echo get_theme_file_uri('/uploads/photos/myphoto.jpg');?>">
<img src="<? php echo get_theme_file_uri( 'images/photo.jpg' ); ?>">


<img src="<? php echo get_theme_file_uri('/2017/04/uploads/photos/myfile.png'); ?>">



<img src="<? php echo get_theme_file_uri('/2017/04/uploads/myphoto.png'); ?>">

//Recap of Functions that Link to Theme Resources
//Just to keep it clear, here’s a quick recap of the three functions we’ve named for linking to theme resources, and how they behave:

get_stylesheet_directory_uri(): //Always returns the root URL of the child theme if there’s one running. (Returns the root URL of the parent theme if there’s no child theme.) Useful for pointing to child theme resources.
get_template_directory_uri(): //Always returns the root URL of the parent theme, whether or not there’s a child theme running. Useful for building pieces of a parent theme that you don’t want to be easily overridden by the child theme.
get_theme_file_uri( ): //Links to the parent theme file, and if there’s an identically named file in the child theme, automatically links to that instead. Introduced in WordPress 4.7. Very useful for creating easy inheritance by child themes.
 plugin_dir_url( __FILE__ )//If you’re writing a plugin and want to link to something inside it, you’ll use a WordPress function called plugin_dir_url(). This function returns the root directory of the plugin from which it’s called. The syntax is a little unusual, but you’ll get used to it:


?>
//<!-- Environment: a PHP file inside a plugin -->

//<!-- Points to the current plugin's root directory, then photo.jpg -->
<img src="<?php echo plugin_dir_url( __FILE__ ) . 'photo.jpg'; ?>">

//<!-- Points to the current plugin's root directory, then images/photo.jpg -->
<img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/photo.jpg'; ?>">


<?

//How to Load Stylesheets and Script Files in WordPress: 




/* Environment: We're in functions.php */

function wpshout_theme_script_and_style_includer( ) {
    wp_enqueue_style( 
    	'wpshout-style',
    	get_stylesheet_uri()
    );
}
add_action( 'wp_enqueue_scripts', 'wpshout_theme_script_and_style_includer' );





//Second Example: Enqueueing Other Theme Scripts and Styles from functions.php

/* Environment: We're in functions.php */

function wpshout_theme_script_and_style_includer( ) {
	wp_enqueue_style( 
		'wpshout-other-style',
		get_theme_file_uri( 'css/wpshout-other-style.css' ),
	);
    wp_enqueue_script( 
    	'wpshout-needed-js',
    	get_theme_file_uri( 'js/wpshout-needed-js.js' ),
    	array( 'jquery' )
    );
}
add_action( 'wp_enqueue_scripts', 'wpshout_theme_script_and_style_includer' );





//Third Example: enqueueing Scripts and Styles From a Plugin File

/* Environment: We're in a PHP file in a plugin */

function wpshout_plugin_script_and_style_includer( ) {
	/* Styles and scripts in the plugin root directory */
    wp_enqueue_style(
    	'our-plugin-example-style',
    	plugin_dir_url( __FILE__ ) . 'our-plugin-example-style.css' //get's concated and does not need a slash in the beginning 
    );
    wp_enqueue_script( 
    	'our-plugin-example-js',
    	plugin_dir_url( __FILE__ ) . 'our-plugin-example-js.js',
    	array( 'jquery' )
    );
    
    /* A script in a subdirectory */
    wp_enqueue_script( 
    	'our-plugin-more-js',
    	plugin_dir_url( __FILE__ ) . 'js/our-plugin-more-js.js',
    	array( 'jquery' )
    );
}
add_action( 'wp_enqueue_scripts', 'wpshout_plugin_script_and_style_includer' );

?>




TEMPLATE TAGS 

the_('echos stuff as html automaticly') and get_the('returns stuff as php / needs to be echoed to go on the page')

//Full list here: https://codex.wordpress.org/Template_Tags

<?php /* Environment: We're INSIDE The Loop, and the current post's title is "My Favorite Post" */

/*  Using the_title() */
the_title(); // Prints out the string "My Favorite Post"
$broken_variable = the_title();    // Prints out the string "My Favorite Post"
echo $broken_variable; // Prints out nothing; $broken_variable is NULL

/* Using get_the_title() */
get_the_title(); // Doesn't accomplish anything
echo get_the_title(); // Prints out the string "My Favorite Post"
$post_title = get_the_title(); // Saves the value "My Favorite Post" to the variable $post_title
echo $post_title; // Prints out the string "My Favorite Post"

/* We're INSIDE The Loop */
?>
<div><? php get_the_excerpt(); ?></div>
<!-- Nothing echoed, so results in an empty div element -->

<div><?php the_excerpt(); ?></div>
<!-- Prints out the post's excerpt inside the div element -->

<div><?php echo get_the_excerpt(); ?></div>
<!-- Prints out the post's excerpt inside the div element -->

<div><?php echo 'Excerpt: ' . get_the_excerpt(); ?></div>
<!-- Prints out "Excerpt: " and the post's excerpt inside the div element -->

<?php 
// We're now OUTSIDE The Loop
if ( have_posts() ) : while ( have_posts() ) : the_post();
	// We're now INSIDE The Loop, working on posts one-by-one; "in-The-Loop" functions go here
endwhile; endif;
// We're OUTSIDE The Loop again



// I just found this resource. I wish I had gone through this before I spent $250 on this course. Although, this course is pretty good. 
// https://developer.wordpress.org/


Conditional Tags //(Booleans)  https://codex.wordpress.org/Conditional_Tags ///// https://cdn.tutsplus.com/wp/uploads/legacy/090_WPCheatSheets/WP_CheatSheet_TemplateMap.jpg

<?php 
/* Environment: We're inside a theme template file that uses The Loop, like home.php or index.php */

if ( have_posts() ) :
	while ( have_posts() ) :
		the_post(); 

		// (Regular Loop contents will go here)

		if ( is_sticky_post() ) :
			// This code will execute *only* for sticky posts!
		endif;

	endwhile;
endif; ?>


WordPress’s Conditional Tags
WordPress’s conditional tags are prewritten WordPress functions that test several dozen distinct criteria, mostly about the nature of the post or posts that have been retrieved for processing.
Each conditional tag returns a boolean (either true or false) based on the result of its check. Combined with PHP if-statements, this allows easy conditional code execution in either plugins or themes.
Some conditional tags don’t function exactly as their name might suggest; this chapter covers several of these cases.

is_this and is_that in reguards to pages
<?php 
/*Enqueuing Special Stylesheets or JavaScript Files for unique pages */
/* Environment: We're in the active theme's functions.php (or perhaps a PHP file in a "Special Page" plugin) */


function wpshout_special_page( ) {
    if ( ! is_page( 'special-page' ) ) {
    	return/*returns early if it's not the page we're looking for*/;
	}

    wp_enqueue_script( 
        'special_js', 
        get_stylesheet_directory_uri().'/special.js'
    );
    wp_enqueue_style( 
        'special_css', 
        get_stylesheet_directory_uri().'/special.css'
    );
}
add_action( 'wp_enqueue_scripts', 'wpshout_special_page' );





//get_template_part('FILE NAME', )

/* Environment: We're in index.php */

if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        get_template_part( 'content' );
    endwhile;
endif;
//And here’s our example content.php:

/* Environment: We're in content.php */

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <h2 class="entry-title">
	    <a href="<?php the_permalink(); ?>">
	    	<?php the_title(); ?>
	    </a>
	</h2>

    <?php the_excerpt(); ?>
</article>



How to Register Custom Post Types
The code to register a custom post type is simple—or can be, depending on the number of options you choose. Here’s the simple version:

<?php
/*
Plugin Name: WPShout Register Restaurant Reviews
*/

function wpshout_register_restaurant_reviews( ) {
    $args = array(
      'public' => true,
      'menu_position' => 20,
      'label'  => 'Restaurant Reviews'
    );
    register_post_type( 'restaurant_review', $args );
}
add_action( 'init', 'wpshout_register_restaurant_reviews' );



/*
Plugin Name: Old Philly's CPT Register
*/

function old_phillys_CPT_register() {


		$args = array(
			'public' => true,
			'position' => 20,
			'label' => 'songs' 
 			  );
		register_post_type('song', $args);


}

add_action('init' , 'old_phillys_CPT_register');


//Custom Taxomany Register
/*
Plugin Name: Old Philly's Tax Plan
*/

function old_phillys_tax_register () {
	$args = array(
		'hierarchical' => true, //makes it like a catagory so it can have the sweet box to pick from / not like tags w/ the drop down
		'label' => "Thumbs UP/Down",
		);
	register_taxonomy('thumbs', 'post', $args);
	//register_taxonomy('slug', 'slug-name of post-type' array of @args)
}

add_action('init', 'old_phillys_tax_plan');

function old_phillys_thumbs_terms() {
		wp_insert_term('Thumbs Up!', 'thumbs', $args = array(
				'discription' => 'This gets a Thumbs UP!'
			));

		wp_insert_term('Thumbs Down!', 'thumbs', $args = array(
				'discription' => 'This gets a Thumbs Down!'
			));
}
add_action('init', 'old_phillys_thumbs_terms'); ?>






/* Environment: We're in a theme template file ***this is how to display tax terms*/

<div class="post-taxonomies">
	Posted in <?php the_terms( get_the_ID(), 'thumbs' );  ?>
	</div>

<?php 
/* Environment: We're in a PHP file in a plugin */

// Get the term object
$thumbs_up_term = get_term_by( 'name', 'Thumbs Up!', 'thumbs' );

// Get the ID property of the term object
$term_id = $thumbs_up_term->term_id;

// Add meta to the term object
update_term_meta( $term_id, 'thumb_default_image', 'https://wpshout.com/media/2014/04/thumbs-up.jpg' );



/* Environment: We're in a PHP file in a plugin, or in functions.php */ 
//*****This area was not explained well and basically said sink or swim, I floated.

function wpshout_add_thumb_image_before_content( $content ) {
	// Get array of thumb terms that apply to this post
	$thumb_rating_object_array = get_the_terms( get_the_ID(), 'thumbs' );

	// Check that there's at least one term
	if( ! ( is_array( $thumb_rating_object_array ) && count( $thumb_rating_object_array ) > 0 ) ) {
		return $content;
	}

	// Get the ID property of the first thumb term
	$term_id = $thumb_rating_object_array[0]->term_id;

	// Get term meta for the term, formatted as a string
	$thumb_image_src = get_term_meta( $term_id, 'thumb_default_image', true );
	
	// Check that the term meta value is a string with greater than 0 length
	if( ! ( is_string( $thumb_image_src ) && strlen( $thumb_image_src ) > 0 ) ) {
		return $content;
	}

	// Return fetched image before $content
	$img_string = '<img src="' . thumb_image_src . '">';
	return $img_string . $content;
}
add_filter( 'the_content', 'wpshout_add_thumb_image_before_content' );



//Super Advanced Custom Fields:

//Custom fields are stored in the WordPress database’s 'wp_postmeta' table.
//They are a key/value pairings:  
//custom field name (meta_key)  
//custom field value (meta_value)  
//particular post (post_id). 
//also have a unique ID (meta_id). 

In the Loop:

<? php
/*
Plugin Name: WPShout Add Favorite Flavor to Content
*/

function wpshout_favorite_flavor_subtitle( $content ) {
	$fave_flave = get_post_meta( get_the_ID(), 'wpshout_current_favorite_flavor', true );
	
	if( empty( $fave_flave ) ) {
		return $content;
	}

	$fave_flave_string = '<em>My current favorite flavor is: ' . $fave_flave . '</em><hr>';
	return $fave_flave_string . $content;
}
add_filter( 'the_content', 'wpshout_favorite_flavor_subtitle' );

?>


Out the loop:

<?php
/*
Plugin Name: WPShout Add Custom Body Class
*/

function wpshout_add_custom_body_class( $classes ) {
	if( ! is_singular() ) {
		return $classes;
	}

	global $post;
	$custom_body_class = get_post_meta( $post->ID, 'wpshout_custom_body_class', true );

	if( empty( $custom_body_class ) ) {
		return $classes;
	}

	$classes[] = $custom_body_class;
	return $classes;
}
add_filter( 'body_class', 'wpshout_add_custom_body_class' );



?>
Updating Stuff
<?
update_post_meta( $post_id, $meta_key, $meta_value(!!!newvalue), $prev_value{!!!not needed, duplicate Key checker} );
delete_post_meta( $post_id, $meta_key(!!!To Be deleted), $meta_value{!!!not needed, duplicate Key checker});

<?php
/*
Plugin Name: WPShout Count Times Content Loaded
*/

function wpshout_count_times_content_loaded( $content ) {
	// Reset the count if on the site's homepage
	if ( is_front_page() ) {
		delete_post_meta( get_the_ID(), 'wpshout_times_content_loaded' );
		return $content;
	}

	// Get the count; count is 0 if custom field not found
	$post_loads_count = get_post_meta( get_the_ID(), 'wpshout_times_content_loaded', true );
	if( empty( $post_loads_count ) ) {
		$post_loads_count = 0;
	}

	// Add 1 to the count and save
	$post_loads_count++;
	update_post_meta( get_the_ID(), 'wpshout_times_content_loaded', $post_loads_count );	
	
	// Return the updated count and the main post content
	return '<p><em>Content loaded ' . $post_loads_count . ' times</em></p>' . $content;
}
add_filter( 'the_content', 'wpshout_count_times_content_loaded' );


WP options

 get_option( 'blogname' );  //other than false, you can pass in a second value
 update_option( 'blogname', 'Up and Running' );  //updates an option’s value. If the option doesn’t already exist, The add_ function, add_option(),  we recommend you ignore. update_option() behaves more predictably in both adding and updating options.
 delete_option('blogname')

 <?php
/*
Plugin Name: WPShout April Fool's Title
*/

function wpshout_april_fools_title() {
	$joke_title = 'WPSnort';
	$site_title = get_option( 'blogname' );

	// Save "normal title" if not currently joke title
	if( $site_title !== $joke_title ) {
		update_option( 'site_normal_title', $site_title );
	}

	// On April 1, set site title to joke title
	$day = date( 'F j' );
	if( $day === 'April 1' ) {	
		update_option( 'blogname', $joke_title );
		return;
	}

	// If normal_title exists and the site title's the joke title, change it back
	$normal_title = get_option( 'site_normal_title' );
	if ( $site_title === $joke_title && $normal_title ) {
		update_option( 'blogname', $normal_title );
	}
}
add_action( 'init', 'wpshout_april_fools_title' );



Transients:
set_transient( $transient, $value, $expiration )

/*https://leaves-and-love.net/blog/transients-speed-up-wordpress-theme/

set_transient( $transient, $value, $expiration )
This function either creates a new transient with the name $transient or, if the transient $transient already exists, it updates the content of the transient. In both cases, the content that is stored in the transient is specified by the $value parameter (it can be anything, a number, a string, an array… Finally, the $expiration parameter defines how long this transient will be stored before it is regenerated (measured in seconds). You can either input an integer value directly or use one of the WordPress constants created especially for this case (they were introduced with WordPress 3.5)

***you always have to check that your get_transient() calls returned something other than false before using the results.
*/

MINUTE_IN_SECONDS (60)
HOUR_IN_SECONDS (3600)
DAY_IN_SECONDS (86400)
WEEK_IN_SECONDS (604800)
YEAR_IN_SECONDS (31536000)


get_transient( $transient )
//This function retrieves the content that is stored in the transient named $transient. If this transient does not exist or has expired, the boolean value false will be returned instead.

delete_transient( $transient )
//This function deletes the transient named $transient manually. Deleting transients manually can be useful when you’re updating options that would change the output that is currently stored in the transient. For example, if you have stored the whole content of a widget in a transient and then you change a widget setting, you probably would like to have your transient regenerated immediately to apply the changes.

//Note: Due to a limitation in the WordPress database, transient names must not be longer than 45 characters. Otherwise the full names cannot be saved which can lead to errors.

<?php
function yourtheme_nav_menu( $theme_location, $class = 'menu' )
{
	$menu = get_transient( 'nav-' . $theme_location );
	
	if( $menu === false )
	{
		if( has_nav_menu( $theme_location ) )
		{
			$menu = wp_nav_menu( array(
				'theme_location'	=> $theme_location,
				'menu_class'		=> $class,
				'echo'				=> 0,
			) );
			set_transient( 'nav-' . $theme_location, $menu, WEEK_IN_SECONDS );
		}
	}
	
	echo $menu;
}
?>

<?php
function yourtheme_invalidate_nav_cache( $id )
{
	$locations = get_nav_menu_locations();
	if( is_array( $locations ) && $locations )
	{
		$locations = array_keys( $locations, $id );
		if( $locations )
		{
			foreach( $locations as $location )
			{
				delete_transient( 'nav-' . $location );
			}
		}
	}
}
add_action( 'wp_update_nav_menu', 'yourtheme_invalidate_nav_cache' );




!!!! Registering and Displaying WordPress Widget Areas
//Widget areas are often called “sidebars”—but can appear anywhere, in any theme template file, not merely sidebar.php. Adding widget areas to a part of the theme is called “widgetizing” it.
//The key functions to register and display widget areas are:
register_sidebar() and dynamic_sidebar(), 

//widget areas are to be registered in your theme, typically in functions.php

function wpshout_theme_slug_widgets_init() {
	$args = array(
	    'name'          => 'Widgetized Sidebar',
	    'id'            => "widgetized-sidebar",
	    'description'   => 'Our Widgetized Sidebar',
	    'class'         => '',
	    'before_widget' => '<li id="%1$s" class="widget %2$s">',
	    'after_widget'  => "</li>\n",
	    'before_title'  => '<h2 class="widgettitle">',
	    'after_title'   => "</h2>",
	);
	register_sidebar( $args );
}
add_action( 'widgets_init', 'wpshout_theme_slug_widgets_init' );

name:// The name for the widget area which will show up in the admin area user interface
description// A description of the widget area, also for the admin user interface
id:// the “slug” version of the name, for use elsewhere in the code
class:// Refers to a CSS class that the widget area will take on—but only in the admin area, not on your actual site. Not useful in general.
before_widget //and after_widget: These parameters provide markup with which WordPress will wrap each individual widget inside this widget area. 
%1$s and %2$s //are using a PHP function called sprintf, to pull in arguments related to HTML ID and class from the widget’s registration code itself.
before_title and after_title: //These parameters wrap each widget’s title itself. They don’t involve the complexity of sprintf—they just print what’s in the parameter.

Displaying your widget area once it’s registered is quite simple. Here’s code that displays the widgetized-sidebar widget area in a theme’s sidebar.php:

/* Environment: We're inside the theme's sidebar.php */
<?php if ( is_active_sidebar( 'widgetized-sidebar' ) ) : ?>
    <div id="secondary" class="widget-area" role="complementary">
        <?php dynamic_sidebar( 'widgetized-sidebar' ); ?>
    </div><!-- #secondary -->
<?php endif; 

dynamic_sidebar() //is what displays the widget area. Its single argument is the widget area’s ID, defined in register_sidebar(); in our case, it’s 'widgetized-sidebar'.

if ( is_active_sidebar( 'widgetized-sidebar' ) ) //asks: “Does the widget area with ID 'widgetized-sidebar' currently contain at least one widget?” This is a sensible check, since there’s no point in showing an empty widget. Again, this function is oddly named, so remember what it actually checks for and don’t let the name distract you.




/*Registering and Displaying WordPress Menu Areas
Menu areas are the regions inside a WordPress site into which WordPress navigation menus can be inserted. As a presentational element of a site, menu areas should be registered in the theme.
WordPress menu areas are often called simply “navigation menus.” However, this risks confusing menu areas with the actual menus themselves—which the user creates and customizes in the WordPress admin area. The best term is “menu areas”: zones into which user-created navigation menus can be added.
The key functions to register and display navigation menu areas are:*/
register_nav_menu() and wp_nav_menu(), 

Registering Nav Menu Areas
Telling WordPress about your menu area uses a simple function called register_nav_menu()

/* Inside functions.php */
function wpshout_register_menu() {
    register_nav_menu( 'main-nav', 'Main Nav' );
}
add_action( 'after_setup_theme', 'wpshout_register_menu' );


Displaying Created Menu Areas
The function to display created menu areas goes in a theme’s template files, and is called wp_nav_menu(). Below is the function, with all the arguments that it accepts:

/* Environment: We're inside a theme template, like header.php or page.php */

$args = array(
    'theme_location'  => 'main-nav',
    'menu'            => '',
    'container'       => 'div',
    'container_class' => '',
    'container_id'    => '',
    'menu_class'      => 'menu',
    'menu_id'         => '',
    'echo'            => true,
    'fallback_cb'     => 'wp_page_menu',
    'before'          => '',
    'after'           => '',
    'link_before'     => '',
    'link_after'      => '',
    'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>', 
    'depth' => 0, 
    'walker' => ''
); 
wp_nav_menu( $args );



Object Orentated PHP
/*Object-oriented programming is a dominant programming paradigm that encourages programmers to think in terms of distinct classes of things. All members of a class share particular methods (functions) and properties (variables). For example, Television would be a good class, with a screen_width property and a turn_on() method.
Classes are instantiated as objects—individual elements of the class that have the class’s properties and methods. In PHP, this would look like: $this_tv = new Television();. One might then access $this_tv->screen_width, or call $this_tv->turn_on().
Inheritance creates a subclass of a class. Objects of a subclass inherit all the properties of the parent class, as well as additional properties of the subclass. For example, HD_Television might extend Television and add a change_resolution() method.
Object-orientation is broadly useful in WordPress as a way to reason about programming. It is also specifically necessary to understand several WordPress APIs—such as the WP_Query API and the Widgets API—that are written in an object-oriented fashion. */

What? Look at this:
/* Environment: This could be any PHP file */

// Define a class
class Chair {
    public $color;
    private $origin_factory;

    public function raise_seat() {}
}

// Instantiate an object of the class
$object = new Chair;


 Object Properties
/*Properties are variables defined within a class—qualities that instances of that class have.

Properties are variables defined within a class—qualities that instances of that class have. Our Chair object has two properties: $color and $origin_factory.

color: a Public Property
A chair’s color is something we want the world to know. As a result, we’ve made this a public property. This means something important: this property can be accessed and changed by any PHP code inside or outside the class, like so:*/

$object->color = "green";

echo $object->color; // Will print "green" to the page

origin_factory: a Private Property
/*Chairs are created in manufacturing plants before they’re sold, and we should be able to use this information when we create a Chair object—maybe one plant is closer, or does a better job with certain kinds of chairs. However, the world at large shouldn’t be able to change this information, nor does it really even need to know it. It’s a private property of each Chair object.

That means that we can’t find this property, or change it for our Chair object instance at*/ 
$object->origin_factory. //However, the Chair class itself can use it inside the class’s own methods, with the following syntax: 

$this->origin_factory.

$this //refers to “the current instance of the class,” and only has meaning within the Chair class’s methods.


/*Object Methods
Methods are functions defined within a class—actions that instances of that class can do.

Methods are functions defined within a class—actions that instances of that class can do. Every Chair object has one method: */raise_seat()./*

This method is globally accessible—it can be called anywhere with*/ $object->raise_seat()./* (As of yet, though, it has no functionality.)

Object Inheritance in PHP
Object inheritance is a crucial concept in object-oriented programming. Fundamentally, it is a way to introduce specificity without losing existing knowledge.

Let’s consider Chair objects. We know that “rocking chair” is a type of chair. Every specific rocking chair we see has chair properties. All the Chair properties and methods that apply to a “chair” also apply to a “rocking chair.” But because we know we’ve got a “rocking chair,” we also know that it has a rocking mechanism—either curved wooden runners or something more complicated—and will rock back and forth in a way that most chairs won’t.

In PHP, a Rocking Chair extends Chair:*/

class Rocking_Chair extends Chair {
    public $rocking_mechanism = 'runners';
    public function rock() = {}
} 

/*Object Creation
This section discusses the process by which a class is made into a concrete object we can use in our programming. This process has several names: initialization, instantiation, or—most useful for PHP—”object construction.”

You generally want to control an object’s traits—its properties and methods—when you create the object. In other words, “Give me an orange chair, from the Cleveland factory” is a reasonable request for an individual Chair object, and yet you certainly don’t want to set those properties for all Chairs.

For this need, OOP PHP has a specific method that is called when an object is instantiated: the __construct “magic method.”

PHP will always call a*/ __construct method/* if it exists. Let’s see this with our Chair objects: */

class Chair {
    public $color;
    private $origin_factory;

    public function __construct( $color = 'orange', $origin_factory = 'Cleveland' ) {
        $this->color = $color;
        $this->origin_factory = $origin_factory;
    }
}
$default_orange_chair = new Chair;
$green_chair = new Chair( 'green' );
$black_chair = new Chair( 'black' );
$red_chair_from_denver = new Chair( 'white', 'Denver' );

Now thats classy!



Widgets

/*Registering new widgets is a complex process. It may be undertaken in a theme or a plugin, depending on whether the widget is primarily presentational or functional.
The Widgets API is object-oriented. Every new widget adds its functionality by extending a base class, called WP_Widget.
The key functions in widget creation include:*/ __construct(), /*which sets the widget’s base variables; */form(), /*which creates user-editable variables for the widget; */ update(), //which allows the widget to be updated with new user-submitted variables: and 
widget(), //which prints out the widget’s code as HTML.*/

//“Will I still want this widget if I change themes?”
//				- functions.php vs A custom plugin

//-every widget extends the base widget class, WP_Widget:

class WPShout_Empty_Widget extends WP_Widget {} //does nothing, yet

//SIMPLE / STATIC WIDGET PLUGIN

<?php
/*
Plugin Name: WPShout Tutorials Banner Widget 
*/ 

// Create widget
class WPShout_Tutorials_Banner_Widget extends WP_Widget {
    public function widget( $args, $instance ) {
        echo '<h2>Enjoy WordPress Tutorials by WPShout</h2>';
    }
}

// Register widget
function wpshout_register_tutorials_banner_widget() {
     register_widget( 'WPShout_Tutorials_Banner_Widget' );
}
add_action( 'widgets_init', 'wpshout_register_tutorials_banner_widget' );




//Naming and Describing our Widget with __construct()



class WPShout_Tutorials_Banner_Widget extends WP_Widget {
    public function widget( $args, $instance ) {
        echo '<h2>Enjoy WordPress Tutorials by WPShout</h2>';
    }

    public function __construct() {
		parent::__construct(
		    'wpshout_tutorials_banner_widget', // Base ID
		    'WPShout Tutorials Banner Widget', // Name
		    array( 'description' => 'Displays a simple text string with no options' ) // Args
		);
	}
}


A FULL WIDGET
<?php 
/*
Plugin Name: WPShout Favorite Song Widget
Description: A plugin to create a "Favorite Song" widget
Version: 1.0
Author: WPShout
Author URI: https://wpshout.com/
*/

function wpshout_register_widgets() {
	register_widget( 'WPShout_Favorite_Song_Widget' );
}

add_action( 'widgets_init', 'wpshout_register_widgets' );




class WPShout_Favorite_Song_Widget extends WP_Widget {

	function WPShout_Favorite_Song_Widget() {
		// Instantiate the parent object
		parent::__construct(
	            'wpshout_favorite_song_widget', // Base ID
        	    'WPShout Favorite Song Widget', // Name
 	           array( 'description' => 'Widget for playable favorite song' ) // Args
		);
	}

	function widget( $args, $instance ) {
		echo $args[ 'before_widget' ]; 
		echo '<h2>Now Listening:</h2>';
		echo $instance[ 'songinfo' ];
		echo 
		'<p>
			<audio controls>
				<source src="' . $instance[ 'link' ] . '" type="audio/mpeg">
				Your browser does not support the audio element.
			</audio>
			<a href="' . $instance[ 'link' ] . '">Download it</a>
		</p>';
		echo $args[ 'after_widget' ];
	}

	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		// Fields
		$instance[ 'link' ] = strip_tags( $new_instance[ 'link' ] );
		$instance[ 'songinfo' ] = strip_tags( $new_instance[ 'songinfo' ] );
		return $instance;
	}

	// Widget form creation
	function form( $instance ) {
	 	$link = '';
		$songinfo = '';

		// Check values
		if( $instance) {	
			$link = esc_attr( $instance[ 'link' ] );
			$songinfo = esc_textarea( $instance[ 'songinfo' ] );
		} ?>
		 
		<p>
			<label for="<?php echo $this->get_field_id( 'link' ); ?>">Link</label>
			<input class="widefat" id="<?php echo $this->get_field_id( 'link' ); ?>" name="<?php echo $this->get_field_name( 'link' ); ?>" type="text" value="<?php echo $link; ?>" />
		</p>
		 
		<p>
			<label for="<?php echo $this->get_field_id( 'songinfo' ); ?>">Song Info:</label>
			<input class="widefat" id="<?php echo $this->get_field_id( 'songinfo' ); ?>" name="<?php echo $this->get_field_name( 'songinfo' ); ?>" type="text" value="<?php echo $songinfo; ?>" />
		</p>
		
	<?php }
}


WP_Query!!!!!!!

<?php
/*
Plugin Name: WPShout Count Pages By Author
*/

function wpshout_count_pages_by_author( $content ) {
	if ( ! is_singular( 'post' ) ) {
		return $content;
	}

	$args = array(
		'author_id' => get_the_author_meta( 'ID' ),
		'post_type' => 'page',
		'posts_per_page' => -1
	);

	$query = new WP_Query( $args );

	if( $query->have_posts() ) {
		$content = '<p><em>This post author has also written ' . count( $query->posts ) . ' pages.</em></p>' . $content;
	}

	wp_reset_postdata();

	return $content;
}
add_filter( 'the_content', 'wpshout_count_pages_by_author' );




<?php
/*
Plugin Name: WPShout Get Recent Thumbs Up Restaurants
*/

function get_recent_thumbs_up_restaurants( ) {
	// Write query
	$query_args = array(
	    'author_id' => 1,
	    'posts_per_page' => -1,
	    'post_type' => 'restaurant_review',
	    'tax_query' => array(
	        array(
	            'taxonomy' => 'thumbs',
	            'field' => 'slug',
	            'terms' => 'thumbs-up'
	        )
	    ),
	    'date_query' => array(
	        array(
	            'after'     => date( 'F j, Y', ( strtotime( '7 days ago' ) ) ),
	            'inclusive' => true,
	        )
	    )
	);
	$query = new WP_Query( $query_args );

	// Loop through query results to output them onto the page
	if( $query->have_posts() ) :
		echo '<footer>Restaurants our site admin has given a Thumbs Up this week: <ul>';
		while( $query->have_posts() ) :
			$query->the_post();
			echo '<li><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></li>';
		endwhile;
		echo '</ul></footer>';
	endif;
	wp_reset_postdata();
}
add_action( 'get_footer', 'get_recent_thumbs_up_restaurants' );



WordPress HTTP Request!!!

/*Partial List of Helper Functions
These functions all take the HTTP response itself as their first (and, for all but wp_remote_retrieve_header(), only) argument. This response is the result of the HTTP requesting function, which we saved as the variable $response in the code examples above.
*/
wp_remote_retrieve_body() //Gives you the actual body of the response. In the case of the request we made above to https://wpshout.com, you’d get all the HTML that the browser uses to render that page.
wp_remote_retrieve_header //requires a second function parameter: the name of the HTTP header you want from the response, such as 'host' or 'authorization'.
wp_remote_retrieve_headers()//Note the final “s”; this returns a PHP array of all the HTTP Headers contained in the response.
wp_remote_retrieve_response_code() //Will give you the numeric HTTP status code for the response—like 404 or 200 or 501. If the request succeeded, it’ll generally be in the 200s; if you did something wrong, it’ll be in the 400s; and if the server’s messing up it should be in the 500s.
wp_remote_retrieve_response_message() //is useful if you find the numbers daunting. It’ll translate that number into a text version, like “Unauthorized” instead of 401.

/* Environment: We're in a theme's functions.php, or a plugin file */

// Counts how many times the HTML of the WPShout homepage includes the word "WordPress"
function count_wordpress_on_wpshout_homepage() {
	$args = array( 
		'timeout' => 10
	);
	$response = wp_remote_get( 'https://wpshout.com', $args );

	// Check for error
	if ( is_wp_error( $response ) ) {
		return;
	}

	// Parse remote HTML file
	$wpshout_homepage_html = wp_remote_retrieve_body( $response );

	// Check for error
	if ( is_wp_error( $wpshout_homepage_html ) ) {
		return;
	}

	// Count instances of "WordPress" in the page's HTML
	$count = substr_count( $wpshout_homepage_html, 'WordPress' );

	return $count;
}


THE REST API!!!!! 
/*
The WordPress REST API is a technology that exposes each WordPress site’s data to be accessed and changed by external applications: applications that can be written in any language, and can be located on any device or server.
All REST APIs, including the WordPress REST API, work with data using verbs (commands) that are intentionally similar to HTTP verbs. The main verbs used by the WordPress REST API are: GET, for accessing data, POST, for changing data, and DELETE, for deleting data.
The WordPress REST API works via four key concepts: routes, the URLs where we access data, resources, the data we’ve got to work with, verbs, which dictate what to do with the resources, and endpoints, which tie the four concepts above together into a single action.

An app that pulls WordPress REST API data can be written in any programming language, can be run from any web server, and does not need to use or involve WordPress itself.
The WordPress REST API exposes a site’s data as JSON: structured data (arrays and objects) formatted into a single string. PHP and most other programming languages have easy methods for unpacking JSON strings back into structured objects that they can work with.
Retrieving public information is the simplest use of the REST API. It’s also possible to access non-public information, and to add, update, or delete data; but these uses require authentication, which is a complex topic.

*/


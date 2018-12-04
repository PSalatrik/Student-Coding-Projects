<? php
	if(have_posts()) :
		while(have_posts()) :
			the_post(); ?>

				<article>
					<h1> <? php the_title();  ?></h1>
					<p> <? php the_excerpt(); ?></p>>
				</article>

				<? php endwhile;
				endif;


			add_theme_support('post-thumbnails');
			add_image_size("featured-image-large", 640, 240, true);
			add_image_size("featured-image-medium", 440, 140, true);
			add_image_size("featured-image-tiny", 80, 80, true);


			function add_menu_to_nav () {
					register_nav_menu('main-nav' , 'Main Nav');
			};

			add_action('init' , 'add_menu_to_nav');



// Register main navigation menu
function wpshout_register_menu( ) {
    register_nav_menu( 'main-nav', 'Main Nav' );
}
add_action( 'init', 'wpshout_register_menu' );




// Get Javascript File
function get_javascript_file () {
	wp_enqueue_script(
			'javascript-file' , 
			get_stylesheet_directory_uri() . '/js/javascript-file.js' , 
			array('jquery')
			);
		
}
		add_action('wp_enqueue_scripts', 'get_javascript_file' );




// Enqueue JS that sets a dynamic page minimum height
function wpshout_scripts( ) {
	wp_enqueue_script( 
		'page-min-height',
		get_theme_file_uri() . '/js/page-min-height.js',
		array( 'jquery' )
	);


add_action( 'wp_enqueue_scripts', 'wpshout_scripts' );

// And somewhere over the rainbow

do_action('wp_enqueue_scripts');




//Registar Main Nav
	function reg_main_nav () {
		register_nav_menu("main-nav" , "Main Nav");

	}
	add_action('init', 'reg_main_nav');



	// Register main navigation menu
function wpshout_register_menu( ) {
    register_nav_menu( 'main-nav', 'Main Nav' );
}
add_action( 'init', 'wpshout_register_menu' );



function set_min_height(){
	wp_enqueue_script(
			"min-height.js",
			get_theme_file_uri() . "/js/min-height.js",
			array('jquery')
		);

};



<?php
	if(have_posts()) :
		while(have_posts()) :
			the_post(); ?>

			<article>
				<h1><? php the_title(); ?></h1>
				<p><? php the_excerpt(); ?></p>
			</article>

			<? php endwhile;
			endif;



		<? php
	if(have_posts()) :
		while(have_posts()) :
			the_post(); ?>

				<article>
					<h1> <? php the_title();  ?></h1>
					<p> <? php the_excerpt(); ?></p>>
				</article>

				<? php endwhile;
				endif;	


				//Enqueue Scripts and Styles


				

<? php
	function get_all_scripts () {
	
	wp_enqueue_style(
		'my-theme-styles'
		 get_theme_file_uri( 'css/my-theme-styles'); 
		);

	
	wp_enqueue_style( 
		'wpshout-other-style',
		    get_theme_file_uri( 'css/wpshout-other-style.css' ),
	    );
	wp_enqueue_script(
		'first-jquery',
			get_theme_file_uri('js/first-jquery.js') ,
					array('jquery');
		);

	wp_enqueue_script( 
    	'wpshout-needed-js',
    	    get_theme_file_uri( 'js/wpshout-needed-js.js' ),
    	        array( 'jquery' )
        );

	wp_enqueue_script(
		'second-query',
			get_theme_file_uri('js/second-jquery.js'),
				array('jquery');
		);
}; 
			add_action('wp_enqueue_scripts' 'get_all_scripts');




// Enqueue theme JavaScripts and CSS styles
function wpshout_scripts( ) {
	// Enqueue JS that gives the search box a default value
	//wp_enqueue_script('FILE NAME SLUG' , ROOT URI FUNCTION , REST OF THE FILE-PATH )
	wp_enqueue_script( 
		'search-box-value',
		get_stylesheet_directory_uri() . '/js/search-box-value.js',
		array( 'jquery' )
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


add_action( 'wp_enqueue_scripts', 'wpshout_scripts' );
			};	add_action('wp_get_scripts' , 'get_all_scripts');		

plugin_dir_url( __FILE__ )  

/*
Plugin Name: Old Phillys Funky Filter
*/

// adds the word Hooked infront on all the titles.
<?php 
	function filter_function($title) {
		return "Hooked" . $title ;
	};

	add_filter('the_title' , 'finter_function');


<? php
 			function my_plugin_script_getter () {
 				wp_enqueue_script(
 					'first-plugin-jquery-file',
 					plugin_dir_uri(__FILE__) . 'first-plugin-jquery-file.js',
 					array('jquery')
 					);
 				wp_enqueue_script(
 					'second-plugin-jquery-file',
 					plugin_dir_uri(__FILE__) . 'second-plugin-jquery-file.js',
 					array('jquery');
 					);
 				// A script in a sub-directory 
 				wp_enqueue_style(
 					'my-styles-dot-css',
 					plugin_dir_uri(__FILE__) . 'js/my-styles-dot-css.css'
 					
 					);
 					};
 					add_action('wp_enqueue_scripts', 'my_plugin_script_getter');



 					function wpshout_plugin_script_and_style_includer( ) {
	/* Styles and scripts in the plugin root directory */
    wp_enqueue_style(
    	'our-plugin-example-style',
    	plugin_dir_url( __FILE__ ) . 'our-plugin-example-style.css' //get's concated and does not need a slash in the beginning 
    );
    wp_enqueue_script( 
    	'our-plugin-example-js',
    	'our-plugin-example-js.js',
    	array( 'jquery' )plugin_dir_url( __FILE__ ) . 
    );
    
    /* A script in a subdirectory */
    wp_enqueue_script( 
    	'our-plugin-more-js',
    	plugin_dir_url( __FILE__ ) . 'js/our-plugin-more-js.js',
    	array( 'jquery' )
    );
}
add_action( 'wp_enqueue_scripts', 'wpshout_plugin_script_and_style_includer' );


//Getting resources in a plugin like a photo

<img src="<?php echo plugin_dir_url(__FILE__) . 'photos/myPhoto.jpg' ?> ">

<img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/photo.jpg'; ?>">

!!!!!!!!!!!! get_theme_file_url() ALSO WORKS FOR REGULAR OLD RESOURCES GODAMMITTTTTT!!!!!

<img src="<?php echo get_theme_file_uri( 'images/photo.jpg' ); ?>">


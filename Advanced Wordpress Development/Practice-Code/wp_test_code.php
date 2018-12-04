<?php 

if( have_posts()) : 
	while( have_posts()) : 
		the_post();

		<article class="full-article">
			<h2><? php the_title(); ?></h2>
			<p><? php the_excerpt(); ?></p>
		</article>

		<?php endwhile;
endif;


add_theme_support('post_thumbnails')
add_image_size('featured_image_large' , 400, 1500, true);
add_image_size('featured_image_small' , 200, 500, true);
add_image_size('featured_image_tiny' , 150, 300, true);

<img src="<?php get_stylesheet_uri('/photos/whatever.jpg')?>" > *******WRONG
<img src='<?php get_theme_file_uri("/photos/whatever.jpg")?>'>

//get_stylesheet_uri() is for loading the stylesheet and orher files such as javascript
// get_theme_file_uri() is for loading photos and other resources. 
The ubove statement is possibly wrong. Is there such a thing as get_stylesheet_uri()? I think it might be get_stylesheet_directory_uri() for all that stuff and get_theme_file_uri() for the prefered child theme over rides????????? ****UPDATE GET_STYLESHEET_URI() is just for loading the themes styles.css file. 




function old_phillys_nav () {
	register_nav_menu('main_nav' , 'Main Nav');
}
add_action('init' , 'old_phillys_nav');



/*
Plugin Name: Old Philly's CPT Register
*/

function old_phillys_CPT_register() {


		$args = array(
			'public' => true,
			'menu_position' => 20,
			'label' => 'songs' 
 			  );
		register_post_type('song', $args);


}

add_action('init' , 'old_phillys_CPT_register');



/*
Plugin Name: Old Philly's Tax Plan
*/

function old_phillys_tax_register () {
	$args = array(
		'hierarchical' => true,
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

<?php
/*
Plugin Name: Old Philly's CPT Register
*/

function old_phillys_CPT_register () {
	$args = array(
		'public' => true,
		'menu_position' => 13,
		'label' = "songs"
		);
	register_post_type('song' , $args)

}

add_action('init' , 'old_phillys_CPT_register');




/*
Plugin Name: Old Phillys CT Reggy
*/


function old_phillys_CT_reggy () {
	$args = array (

		'hierarchial' => true,
		'label' => 'decisions'
		);
	register_taxonomy('decisions', 'post', $args);
}

add_action('init', 'old_phillys_CT_reggy');


function old_phillys_term_reggy() {
	wp_insert_term('Yay!', 'decisions', $args = array(
			'discription' => "This is ok, gets a Yay!"
		));
	wp_insert_term('Nay!', 'decisions', $args = array(
			'discription' => "This is bad, gets a Nay!"
		));
	wp_insert_term('Nanaynay!', 'decisions', $args = array(
			'discription' => "This is really bad, gets a Nanaynay!"
		));
}
add_action('init', 'old_phillys_term_reggy');
?>


Loop Review!   
<?php
if(have_posts());
	while(have_posts());
	the_post() : ?>

	<article class="full-article">
			<h2><? php the_title(); ?></h2>
			<p><? php the_excerpt(); ?></p>
		</article>

<?php 
	endif;
	endwhile; ?>


	enqueue review 

<?php
	function op_enqueue_my_scripts(){
		wp_enqueue_script(
			'where-are-my-scripts',
			get_stylesheet_uri() .'/js/where-are-my-scripts'
			array('jquery');
			);
		wp_enqueue_script(
			'where-are-my-scripts_pt2'
			get_stylesheet_uri() .'/js/where-are-my-scripts_pt2'
			array('jquery');
			);
			wp_enqueue_script(
				'op_styles'
				get_stylesheet_uri(),
				);

	}
	add_action('wp_enqueue_scripts','op_enqueue_my_scripts');






/*
Plugin Name: Old Phillys Hooked Filter
*/

function op_hooked_filter($title){
	return "Hooked!" . $title;
}
add_filter('the_title', 'op_hooked_filter');


apply_filter('the_title');













add_theme_support('post-thumbnails');
add_image_size('featured-image-large', 500, 300, true);
add_image_size('featured-image-medium', 250, 200, true);
add_image_size('featured-image-small', 150, 150, true);



function enqueue_my_scripts_and_styles(){

	wp_enqueue_script(
		'myjavascriptscript'
		get_stylesheet_directory_uri() . '/js/myjavascriptscript.js' ,
		array('jquery')
		);

	wp_enqueue_script(
		'myotherjavascript'
		get_stylesheet_directory_uri() . '/js/myotherjavascriptscript.js' ,
		array('jquery')
		) ;

   wp_enqueue_script(
   		'op_styles'
   		get_stylesheet_uri()
   	);

}

add_action('wp_enqueue_scripts' , 'enqueue_my_scripts_and_styles');








	function op_script_includer () {
wp_enqueue_script(
	'slug-of-js-file',
	get_stylesheet_directory_uri() . '/js/slug-of-js-file.js',
	array('jquery');
	)
wp_enqueue_script(
	'slug-of-js-second-file',
	get_stylesheet_directory_uri() . '/js/slug-of-second-js-file.js',
	array('jquery');
	)
wp_enqueue_script(
	'op-styles',
	get_stylesheet_uri()
	);

	}
	add_action('wp_enqueue_scripts', 'op_script_includer');


	/*
	Plugin Name: My Filter
	*/

	function hooked_filter ($title) {
		return "Hooked" . $title;

	}

	add_filter('the_title', 'hooked_filter')
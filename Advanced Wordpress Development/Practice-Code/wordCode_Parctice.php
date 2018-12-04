<? php

/*
Template Name: Author Link Page
 */

$paged = ( get_query_var( 'paged')) ? get_query_var('paged') : 1; // Need to learn this line!!!
	$args = array(
		'post_type' => "infographics",
		'orderby' => 'title',
		'order' => 'ASC',
		'posts_per_page' => 3,
		'paged' => $paged
    );

    $query = WP_Query($args);

if( $query->have_posts()) : 
	while( $query->have_posts()) :
		the_post(); ?>

		<h2><a href="<? php the_permalink() ?>"><? php the_title(); ?></h2>
		<p><? php the_excerpt(); ?></p>
		<p><? php the_date(); ?> </p></a>

		<div class="author-more-link">
				<a href="<?php echo get_author_posts_url(get_the_author_meta( 'ID' )); ?>">
					More by our author, <? php the_author(); ?>
				</a>
			</div>

		<? php // If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;?>

<? php endwhile; ?>

<!-- this is where you put in the pagnation do not reset data before you pagnate-->

<ul class="pagnation pull-right">
	<li><? php echo get_the_next_posts_link('Next Page' , $max_num_pages ); ?> <li>
	<li><? php echo get_previous_posts_link('Previous Page'); ?> </li>
</ul>

<? php wp_reset_postdata(); ?>

<? php else:  ?>

<p><? php _e("No Dice, your shit is broken"); ?> </p>


		<? php endif; ?>







<? php
$paged = ( get_query_var( 'paged')) ? get_query_var('paged') : 1; // Need to learn this line!!!

$args = array(
	'post-type' => "infographic",
	'orderby' => 'title'
	'order' => "ASC",
	'posts_per_page' => 3,
	'paged' => $paged 
);

$query=WP_Query($args);

if($query=> have_posts() ) : while($query=> have_posts()) : the_post(); 
        get_template_part( 'content' );

 	<? php endwhile; ?>
<? php endif; ?>


<?php
//And here’s our example content.php:

/* Environment: We're in content.php */

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <h2 class="entry-title">
	    <a href="<?php the_permalink(); ?>">
	    	<?php the_title(); ?>
	    </a>
	</h2>

    <? php the_excerpt(); ?>
</article>






<? php
add_theme_support('post_thumbnails()')
	add_image_size( "featured-image-large", 650, 300, true)
	add_image_size( "featured-image-small", 350, 225, true)
	add_image_size( "featured-image-tiny", 150, 190, true)



	function include_myStuff () {
		if( ! is_page('special-page'){
			echo "you done fucked up"
		})
		wp_enqueue_style(
			"my_stylesheet",
			get_stylesheet_uri()
			);

		wp_enqueue_script(
			"my_scripts",
			get_stylesheet_directory_uri() . '/js/my_scripts.js',
				array('jquery')
				);
		wp_enqueue_script(
			"my_other_script",
			get_stylesheet_directory_uri() . '/js/my_other_script.js',
			array('jquery')
			);

	}

	add_action('wp_enqueue_scripts', 'include_myStuff');


function reg_main_nav(){ 
	registar_nav_menu("main-nav", "Main Nav");
};
	add_action('init', 'reg_main_nav()');

/*
Plugin Name: old phillys do nothing plugin
*/


/*
Plugin Name: Old Phillys Do Something Plugin
Plugin URI: http://myspace.com/pldphilly
Description: This Plugin Will Defineatly Do Something
Version: 1.0.0
Author: Philip Salatrik
Author URI: http://philip.salatrik@wordpress.com
License: A "Slug" license name e.g. GPL2
*/

function do_something($title){
	return 'I Did Something To' . $title;
};
add_filter('the_title', 'do_something'); 




// this is a filter hook and function because we are changing something that already exists, I guess
// the actions create something that was not there before and do not pass anything through the function....filters need to return stuff
// also, I am assuming the the $title's value is defined somewhere in the WordPress Core. I might also find out my answer about the $paged variable if I look up WordPress Core Variables????



function do_something_else($paged) {
	return 'has this been' . $paged;

}

add_filter('is_page' , 'do_something_else');

apply_filter('do_something_else')









$paged = (get_page_var() ) ? get_page_var() : 1 ;

$args = array (
	'post-type' = 'infographic',
	'ordered-by' = 'title',
	'order' = 'ASC',
	'posts_per_page' = 3;
	'paged' = $paged
);


$query = WP_Query($args)

if($query => have_posts()); 
		while( $query => have_posts() ) ;
			the_post() ; ?>

			<? php get_template_part('whatever-file-slug-name'); ?>

			<? php 
			if(comments_open() | get_comments_number()) :
				comments_template();
			endif;
		endwhile; ?>
 
		<ul class="pagnation pull-right">
	<li><? php echo get_the_next_posts_link('Next Page' , $max_num_pages ); ?> <li>
	<li><? php echo get_previous_posts_link('Previous Page'); ?> </li>
</ul>

<? php wp_reset_postdata(); ?>

<? php else:  ?>

<p><? php _e("No Dice, your shit is broken"); ?> </p>

<? php endif;





<? php

 /*
 PLugin Name: Old Phillys Action Hook
 */

     function date_hookyOP() {
     	echo '<p><?php the_date(); ?>' . 'does not exist</p>' ; 

     }

     add_action('the_content' , 'date_hookyOP');


     do_action('date_hookyOP');


     


     function enqueue_my_scripts() {
     	wp_enqueue_styles(
     			'styles'
     		);
     	wp_enqueue_scripts() {
     			'whatever.js',
     			get_stylesheet_directory() . '/scripts/whatever.js',
     			array('jquery');
     	}
     }
     add_action('wp_enqueue_script', 'enqueue_my_scripts');

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





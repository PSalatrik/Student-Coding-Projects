<?php 

if( have_posts()) : while (have_posts()) : the_post() : ?>

		<article>
			<h2><a href="<? php the_permalink() ?>"><? php the_title(); ?></h2>
		<p><? php the_excerpt(); ?></p>
		<p><? php the_date(); ?> </p></a>
		</article>

	<? php endwhile;
	endif;
?>
<ul class="pagnation pull-right">
	<li><? php echo get_the_next_posts_link('Next Page' , $max_num_pages ) ?></li>
	<li> <? php echo get_previous_posts_link('Previous Page'); ?> </li>
</ul>

<? php wp_reset_postdata(); ?>

<? php else:  ?>

<p><? php _e("No Dice, your shit is broken"); ?> </p>


		<? php endif; ?>

<?




//Plugin Name: Old Phillys Tax Plan, Man

		function old_phillys_tax_register() {

			$args = array(
				'hierarchical' => true,	
				 'label'	=> 'Movie Styles'
				 );
			register_taxonomy('Movies' , 'post', $args);

		}
		add_action('init', 'old_phillys_tax_register' );

		function old_phillys_term_register(){
			wp_insert_term(
				"Country / Western",
				"Movies"
				$args = array('discription' => "This is a Country/Western Film")
				);
			wp_insert_term(
				"Horror",
				"Movies"
				$args = array('discription' => "This is a Horror Film")
				);
			wp_insert_term(
				"Comedy",
				"Movies"
				$args = array('discription' => "This is a Comedy Film")
				);
		};
		add_action('init', 'old_phillys_term_register');

	//	Plugin Name: Old Philly's Tax Plan


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






OLD REVIEW


THIS IS HOW YOU LOAD A PHOTO!!!!!!!!!!!!!
<img src="<? php echo get_theme_file_uri('/uploads/photos/myphoto.jpg');?>">
<img src="<? php echo get_theme_file_uri( 'images/photo.jpg' ); ?>">


<img src="<? php echo get_theme_file_uri('/2017/04/uploads/photos/myfile.png'); ?>">



<img src="<? php echo get_theme_file_uri('/2017/04/uploads/myphoto.png'); ?>">


Or you can do it the old way:

<img src="<? php echo get_stylesheet_directory_uri();?>/uploads/myphoto.png"; >
<img src="<? php echo get_stylesheet_directory_uri();?>/images/photo.jpg">

<?
add_theme_support('post-thumbnails');
add_image_size("featured_image_large", 600 , 400, true);
add_image_size("featured_image_small", 300 , 200, true);
add_image_size("featured_image_tiny", 150 , 150, true);




function register_my_main_nav(){
	register_nav_menu('main-nav', "Main Nav");
}
add_action('init', 'register_my_main_nav');



/*
Plugin Name: Whatever and Ever, Amen
*/

function hooked_title($title){
	return "Hooked" . $title;
};

add_filter('the_title', 'hooked_title');

apply_filter('the_title')



/*
Plugin Name: Tax Reggie
*/

<?
function op_tax_reggie(){
	$args = array(
		'hierarchical' => true;
		'label' => 'Taxes'
		);
	register_taxonomy('Tax', 'post', $args);
};

add_action('init', 'op_tax_reggie');

function op_term_adder() {
	wp_insert_term('Paid', 'Tax', $args = array(
				'discription' => 'This is not paid'
			));

		wp_insert_term('Unpaid', 'Tax', $args = array(
				'discription' => 'This is not paid!'
			));
}

add_action('init', 'op_term_adder+')


function op_plugin_script_and_style_includer(){
	wp_enqueue_script(
		'myplugin_scripts',
	    get_plugin_directory_uri(__FILE__) . '/js/myplugin_scripts.js',
	    array('jquery');
	    )
	wp_enqueue_script(
		'style',
	    get_plugin_directory_uri(__FILE__) . 'styles.css',
	    array('jquery');
	    )
	wp_enqueue_script(
		'myotherplugin_scripts',
	    get_plugin_directory_uri(__FILE__) . '/myotherplugin_scripts.js',
	    array('jquery');
		)
}
	add_action('wp_enqueue_scripts' 'op_plugin_script_and_style_includer');


	function special_page_script_includer(){
		if(! is_page('special-page'))
			return;
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
}


//inside the loop

if(have_posts()) : while(have_posts()) : the_post() : 
	get_template_part('content');
endwhile;
endif; ?>


//inside content.php
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <h2 class="entry-title">
	    <a href="<?php the_permalink(); ?>">
	    	<?php the_title(); ?>
	    </a>
	</h2>

    <?php the_excerpt(); ?>
</article>

<?



function op_CPT_includer(){
	$args = array(
		'public' => true;
		'position' => 20
		'label' => 'Infographics'
		);
	register_post_type('Infographic', $args);
}

add_action('init', 'op_CPT_includer');




/*
Plugin Name: My Super Advanced Custom Field
*/

function op_AVC_intheloop($content){
	$new_content = get_post_meta(get_the_post(), 'Key_To_MY_AVC_Value', true);

	if( !is_empty($new_content))
		return $content;

	$new_content_string = "<p> This is my" . $new_content"</p>";
	return $new_content_string . $content;

}

add_filter("the_content", 'op_AVC_intheloop');



/*
Plugin Name: My Super AVC Out Of The Loop
*/

function op_AVC_outsidetheloop($classes){
	if( ! is_singular()){
		return $classes;
		}

	global $post
	$new_class = get_post_meta($post->ID, 'my_new_class_key', true );
		if( empty($new_class)){
			return $classes;
		}

		$classes[] = $new_class;
		return $classes;
}

add_filter('body_class', 'op_AVC_outsidetheloop');

































<?php

/*

Template Name: Monthly Newsletter 

*/

?>

<?php get_header( 'alt'); ?>

<div id="content" class="container">

<!-- This is the Monthly Newsletter page -->

<div id="main" class="col col-lg-12 clearfix" role="main">

<header>

<div class="page-header"><h1><?php the_title(); ?></h1></div>

</header> <!-- end article header -->

<!-- this is where the custom queries go! -->
<!-- START OF PRESS RELEASES -->

<div id="container Press-releases">
<?php
if ( get_query_var('paged') ) $paged = get_query_var('paged');  
if ( get_query_var('page') ) $paged = get_query_var('page');
$query = new WP_Query( array( 
	'post_type' => 'press-release', 
	'paged' => $paged,
	'category__not_in' => array(15,13,11,22,247,277,16,19),
	'date_query' => array(
        'after' => date('Y-m-d', strtotime('-30 days')) 
     ) 
));

if ( $query->have_posts() ) : ?>
<h1 id="press">Press Releases</h1>
<div class="row" id="pr-container">
	<?php while ( $query->have_posts() ) : $query->the_post(); ?>	
<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ms-item" style="margin-bottom:25px;flex-wrap: wrap;display: inline-block;">
<div class="col-md-12 col-lg-12 shadow" style="background-color:#ffffff; padding-top:15px; border:1px solid #d9d9d9;padding-bottom: 5px;">
<div class="tnail-full-width hidden-xs hidden-sm">
		</div>
	<h4 style="display:block; width:100%;text-decoration:none !important;margin-bottom:5px;margin-top:5px;font-weight:500;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
<p id="theexcerpt" style="font-size:.75em;"><?php echo strip_tags( get_the_excerpt()) ?></p>
	<p><?php the_date('m-d-Y');?> </p>
	<!-- <p><?php the_category(); ?></p> -->
	<!-- <p><?php the_tags(); ?></p> -->
</div>
</div>
</a>
	<?php endwhile; wp_reset_postdata(); ?>
	<!-- show pagination here -->
<?php else : ?>
	<!-- show 404 error here -->
<?php endif; ?>
</div>
 <p class="hidden-xs hidden-sm" style="margin-top:-10px;"><?php echo $query->found_posts; ?> total</p>
<hr>
	</div>
<!-- END OF PRESS RELEASES -->

<!-- END OF PRESS MENTIONS -->
<div id="container Press-mentions">
<?php
if ( get_query_var('paged') ) $paged = get_query_var('paged');  
if ( get_query_var('page') ) $paged = get_query_var('page');
$query = new WP_Query( array( 
	'post_type' => 'press-mention', 
	'paged' => $paged,
	'date_query' => array(
        'after' => date('Y-m-d', strtotime('-30 days')) 
     ) 

));
	
if ( $query->have_posts() ) : ?>

	<h1 id="pressmentions">Press Mentions</h1>
<div class="row" id="pm-container">
	<?php while ( $query->have_posts() ) : $query->the_post(); ?>	
<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ms-item" style="margin-bottom:25px;flex-wrap: wrap;display: inline-block;">
<div class="col-md-12 col-lg-12 shadow" style="background-color:#ffffff; padding-top:15px; border:1px solid #d9d9d9;padding-bottom: 5px;">
<div class="tnail-full-width hidden-xs hidden-sm">
		</div>
	<h4 style="display:block; width:100%;text-decoration:none !important;margin-bottom:5px;margin-top:5px;font-weight:500;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
<p id="theexcerpt" style="font-size:.75em;"><?php echo strip_tags( get_the_excerpt()) ?></p>
	<p><?php the_date('m-d-Y');?> </p>
	<!-- <p><?php the_category(); ?></p> -->
	<!-- <p><?php the_tags(); ?></p> -->
</div>
</div>
</a>
	<?php endwhile; wp_reset_postdata(); ?>
	<!-- show pagination here -->
<?php else : ?>
	<!-- show 404 error here -->
<?php endif; ?>
</div>
<p class="hidden-xs hidden-sm" style="margin-top:-10px;"><?php echo $query->found_posts; ?> total</p>
<hr>
	</div>
<!-- END OF PRESS MENTIONS -->

<!-- THIS IS FOR THE THOUGHT LEADERSHIP ARTICLES -->
<div id="container thoughtleadership">
<?php
if ( get_query_var('paged') ) $paged = get_query_var('paged');  
if ( get_query_var('page') ) $paged = get_query_var('page');
$query = new WP_Query( array( 
	'post_type' => 'tl-article', 
	'paged' => $paged,
	'date_query' => array(
        'after' => date('Y-m-d', strtotime('-30 days')) 
     ) 
));
if ( $query->have_posts() ) : ?>
<h1 id="articles">Thought Leadership Articles</h1>
	    <div class="row" id="ms-container">
    <!-- <div class="row"> -->
	<?php while ($query->have_posts())	{
		$query->the_post();	?>
<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ms-item" style="margin-bottom:25px;flex-wrap: wrap;display: inline-block;">
<div class="col-md-12 col-lg-12 shadow" style="background-color:#ffffff; padding-top:15px; border:1px solid #d9d9d9;padding-bottom: 5px;">
<div class="tnail-full-width hidden-xs hidden-sm">
<!-- OLD CODE -->        
<?php if ( has_post_thumbnail() ) {
		 the_post_thumbnail('large'); 
		} else { ?>
		<img style="width:100%;" src="http://www.compuware.com/cpwr/2015/wp-content/uploads/2016/06/web-assets/png/CPWRlogo_p_pms-widget.png" alt="<?php the_title(); ?>" />
		<?php } ?>  
<!-- END OF OLD CODE --> 
		</div>
	<h4 style="display:block; width:100%;text-decoration:none !important;margin-bottom:5px;margin-top:5px;font-weight:500;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
<p id="theexcerpt" style="font-size:.75em;"><?php echo strip_tags( get_the_excerpt()) ?></p>
	<p><?php the_date('m-d-Y');?> </p>
	<!-- <p><?php the_category(); ?></p> -->
	<!-- <p><?php the_tags(); ?></p> -->
</div>
</div>
</a>
<?php
}
?>
</div> <!-- end of container fluid -->
<p class="hidden-xs hidden-sm" style="margin-top:-10px;"><?php echo $query->found_posts; ?> total</p>
<hr>
	</div>
<!-- END OF THOUGHT LEADERSHIP -->

<!-- START OF ANALYST REPORTS -->
<div id="container Analyst-report">
<?php
if ( get_query_var('paged') ) $paged = get_query_var('paged');  
if ( get_query_var('page') ) $paged = get_query_var('page');
$query = new WP_Query( array( 
	'post_type' => 'analyst-report', 
	'paged' => $paged,
	'date_query' => array(
        'after' => date('Y-m-d', strtotime('-30 days')) 
     ) 
));

if ( $query->have_posts() ) : ?>
<h1 id="analyst">Analyst Reports</h1>
<div class="row" id="ar-container">
	<?php while ( $query->have_posts() ) : $query->the_post(); ?>	
<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ms-item" style="margin-bottom:25px;flex-wrap: wrap;display: inline-block;">
<div class="col-md-12 col-lg-12 shadow" style="background-color:#ffffff; padding-top:15px; border:1px solid #d9d9d9;padding-bottom: 5px;">
<div class="tnail-full-width hidden-xs hidden-sm">
	<?php if ( has_post_thumbnail() ) {
		 the_post_thumbnail('large'); 
		} else { ?>
		<img style="width:100%;" src="http://www.compuware.com/cpwr/2015/wp-content/uploads/2016/06/web-assets/png/CPWRlogo_p_pms-widget.png" alt="<?php the_title(); ?>" />
		<?php } ?> 
		</div>
	<h4 style="display:block; width:100%;text-decoration:none !important;margin-bottom:5px;margin-top:5px;font-weight:500;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
<p id="theexcerpt" style="font-size:.75em;"><?php echo strip_tags( get_the_excerpt()) ?></p>
	 <p><?php the_date('m-d-Y');?> </p>
	<!-- <p><?php the_category(); ?></p> -->
	<!-- <p><?php the_tags(); ?></p> -->
</div>
</div>
</a>
	<?php endwhile; wp_reset_postdata(); ?>
	<!-- show pagination here -->
<?php else : ?>
	<!-- show 404 error here -->
<?php endif; ?>
</div>
<p class="hidden-xs hidden-sm" style="margin-top:-10px;"><?php echo $query->found_posts; ?> total</p>
<hr>
	</div>
<!-- END OF ANALYST REPORTS -->

<!-- START OF WHITE PAPERS -->
<div id="container White-Paper">
<?php
if ( get_query_var('paged') ) $paged = get_query_var('paged');  
if ( get_query_var('page') ) $paged = get_query_var('page');
$query = new WP_Query( array( 
	'post_type' => 'white-papers', 
	'paged' => $paged,
	'date_query' => array(
        'after' => date('Y-m-d', strtotime('-30 days')) 
     ) 
));

if ( $query->have_posts() ) : ?>
<h1 id="whitepapers">White Papers</h1>
<p class="hidden-xs hidden-sm" style="margin-top:-10px;"><?php echo $query->found_posts; ?> total</p>

<div class="row" id="wp-container">
	<?php while ( $query->have_posts() ) : $query->the_post(); ?>	
<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ms-item" style="margin-bottom:25px;flex-wrap: wrap;display: inline-block;">
<div class="col-md-12 col-lg-12 shadow" style="background-color:#ffffff; padding-top:15px; border:1px solid #d9d9d9;padding-bottom: 5px;">
<div class="tnail-full-width hidden-xs hidden-sm">
	<!--<?php if ( has_post_thumbnail() ) {
		 the_post_thumbnail('large'); 
		} else { ?>
		<img style="width:100%;" src="http://www.compuware.com/cpwr/2015/wp-content/uploads/2016/06/web-assets/png/CPWRlogo_p_pms-widget.png" alt="<?php the_title(); ?>" />
		<?php } ?>--> 
		</div>
	<h4 style="display:block; width:100%;text-decoration:none !important;margin-bottom:5px;margin-top:5px;font-weight:500;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
<p id="theexcerpt" style="font-size:.75em;"><?php echo strip_tags( get_the_excerpt()) ?></p>
	 <p><?php the_date('m-d-Y');?> </p>
	<!-- <p><?php the_category(); ?></p> -->
	<!-- <p><?php the_tags(); ?></p> -->
</div>
</div>
</a>
	<?php endwhile; wp_reset_postdata(); ?>
	<!-- show pagination here -->
<hr>
<?php else : ?>
	<!-- show 404 error here -->
<?php endif; ?>

</div>

<!-- END OF WHITE PAPERS -->

<!-- START OF VIDEOS -->
<div id="container Videos">
<?php
if ( get_query_var('paged') ) $paged = get_query_var('paged');  
if ( get_query_var('page') ) $paged = get_query_var('page');
$query = new WP_Query( array( 
	'post_type' => 'video', 
	'paged' => $paged,
	'date_query' => array(
        'after' => date('Y-m-d', strtotime('-30 days')) 
     ) 
));

if ( $query->have_posts() ) : ?>
<h1 id="videos">Videos/Webcasts</h1>
<div class="row" id="videos-container">
	<?php while ( $query->have_posts() ) : $query->the_post(); ?>	
<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ms-item" style="margin-bottom:25px;flex-wrap: wrap;display: inline-block;">
<div class="col-md-12 col-lg-12 shadow" style="background-color:#ffffff; padding-top:15px; border:1px solid #d9d9d9;padding-bottom: 5px;">
<div class="tnail-full-width hidden-xs hidden-sm">
	<?php if ( has_post_thumbnail() ) {
		 the_post_thumbnail('large'); 
		} else { ?>
		<img style="width:100%;" src="http://www.compuware.com/cpwr/2015/wp-content/uploads/2016/06/web-assets/png/CPWRlogo_p_pms-widget.png" alt="<?php the_title(); ?>" />
		<?php } ?> 
		</div>
	<h4 style="display:block; width:100%;text-decoration:none !important;margin-bottom:5px;margin-top:5px;font-weight:500;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
<p id="theexcerpt" style="font-size:.75em;"><?php echo strip_tags( get_the_excerpt()) ?></p>
	<p><?php the_date('m-d-Y');?> </p>
	<!-- <p><?php the_category(); ?></p> -->
	<!-- <p><?php the_tags(); ?></p> -->
</div>
</div>
</a>
	<?php endwhile; wp_reset_postdata(); ?>
	<!-- show pagination here -->
<?php else : ?>
	<!-- show 404 error here -->
<?php endif; ?>
</div>
<p class="hidden-xs hidden-sm" style="margin-top:-10px;"><?php echo $query->found_posts; ?> total</p>
<hr>
	</div>
<!-- END OF VIDEOS -->




<!-- START OF CASE STUDIES -->
<div id="container Case-study">
<?php
if ( get_query_var('paged') ) $paged = get_query_var('paged');  
if ( get_query_var('page') ) $paged = get_query_var('page');
$query = new WP_Query( array( 
	'post_type' => 'case-study', 
	'paged' => $paged,
	'date_query' => array(
        'after' => date('Y-m-d', strtotime('-30 days')) 
     ) 
));

if ( $query->have_posts() ) : ?>
<h1 id="casestudies">Case Studies</h1>
<div class="row" id="cs-container">
	<?php while ( $query->have_posts() ) : $query->the_post(); ?>	
<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ms-item" style="margin-bottom:25px;flex-wrap: wrap;display: inline-block;">
<div class="col-md-12 col-lg-12 shadow" style="background-color:#ffffff; padding-top:15px; border:1px solid #d9d9d9;padding-bottom: 5px;">
<div class="tnail-full-width hidden-xs hidden-sm">
	<?php if ( has_post_thumbnail() ) {
		 the_post_thumbnail('large'); 
		} else { ?>
		<img style="width:100%;" src="http://www.compuware.com/cpwr/2015/wp-content/uploads/2016/06/web-assets/png/CPWRlogo_p_pms-widget.png" alt="<?php the_title(); ?>" />
		<?php } ?> 
		</div>
	<h4 style="display:block; width:100%;text-decoration:none !important;margin-bottom:5px;margin-top:5px;font-weight:500;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
<p id="theexcerpt" style="font-size:.75em;"><?php echo strip_tags( get_the_excerpt()) ?></p>
	 <p><?php the_date('m-d-Y');?> </p>
	<!-- <p><?php the_category(); ?></p> -->
	<!-- <p><?php the_tags(); ?></p> -->
</div>
</div>
<p class="hidden-xs hidden-sm" style="margin-top:-10px;"><?php echo $query->found_posts; ?> total</p>
</a>
	<?php endwhile; wp_reset_postdata(); ?>
	<!-- show pagination here -->
	</div>
<?php else : ?>
	<!-- show 404 error here -->
<?php endif; ?>
</div>
<!-- <p class="hidden-xs hidden-sm" style="margin-top:-10px;"><?php echo $query->found_posts; ?> total</p> -->
	


<!-- END OF CASE STUDIES -->

<!-- START OF FACT SHEETS -->
<div id="container Fact-sheet">
<?php
if ( get_query_var('paged') ) $paged = get_query_var('paged');  
if ( get_query_var('page') ) $paged = get_query_var('page');
$query = new WP_Query( array( 
	'post_type' => 'fact-sheet', 
	'paged' => $paged,
	'date_query' => array(
        'after' => date('Y-m-d', strtotime('-30 days')) 
     ) 
));

if ( $query->have_posts() ) : ?>
<h1 id="fs">Fact Sheets</h1>
<div class="row" id="fs-container">
	<?php while ( $query->have_posts() ) : $query->the_post(); ?>	
<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ms-item" style="margin-bottom:25px;flex-wrap: wrap;display: inline-block;">
<div class="col-md-12 col-lg-12 shadow" style="background-color:#ffffff; padding-top:15px; border:1px solid #d9d9d9;padding-bottom: 5px;">
<div class="tnail-full-width hidden-xs hidden-sm">
	<?php if ( has_post_thumbnail() ) {
		 the_post_thumbnail('large'); 
		} else { ?>
		<img style="width:100%;" src="http://www.compuware.com/cpwr/2015/wp-content/uploads/2016/06/web-assets/png/CPWRlogo_p_pms-widget.png" alt="<?php the_title(); ?>" />
		<?php } ?> 
		</div>
	<h4 style="display:block; width:100%;text-decoration:none !important;margin-bottom:5px;margin-top:5px;font-weight:500;"><a href="<?php the_permalink(); ?>"><?php the_date('m-d-Y');?><?php the_title(); ?></a></h4>
<p id="theexcerpt" style="font-size:.75em;"><?php echo strip_tags( get_the_excerpt()) ?></p>
	<p><?php the_date('m-d-Y');?> </p>
	<!-- <p><?php the_category(); ?></p> -->
	<!-- <p><?php the_tags(); ?></p> -->
</div>
</div>
</a>
	<?php endwhile; wp_reset_postdata(); ?>
	<!-- show pagination here -->
<?php else : ?>
	<!-- show 404 error here -->
<?php endif; ?>
</div>
<p class="hidden-xs hidden-sm" style="margin-top:-10px;"><?php echo $query->found_posts; ?> total</p>
<hr>
	</div>
<!-- END OF FACT SHEETS -->

<!-- START OF INFOGRAPHICS -->
<div id="container Infographics">
<?php
if ( get_query_var('paged') ) $paged = get_query_var('paged');  
if ( get_query_var('page') ) $paged = get_query_var('page');
$query = new WP_Query( array( 
	'post_type' => 'infographics', 
	'paged' => $paged,
	'date_query' => array(
        'after' => date('Y-m-d', strtotime('-30 days')) 
     ) 
));

if ( $query->have_posts() ) : ?>
<h1 id="infographics">Infographics</h1>
<div class="row" id="ig-container">
	<?php while ( $query->have_posts() ) : $query->the_post(); ?>	
<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ms-item" style="margin-bottom:25px;flex-wrap: wrap;display: inline-block;">
<div class="col-md-12 col-lg-12 shadow" style="background-color:#ffffff; padding-top:15px; border:1px solid #d9d9d9;padding-bottom: 5px;">
<div class="tnail-full-width">
	<?php if ( has_post_thumbnail() ) {
		 the_post_thumbnail('large'); 
		} else { ?>
		<img style="width:100%;" src="http://www.compuware.com/cpwr/2015/wp-content/uploads/2016/06/web-assets/png/CPWRlogo_p_pms-widget.png" alt="<?php the_title(); ?>" />
		<?php } ?> 
		</div>
	<h4 style="display:block; width:100%;text-decoration:none !important;margin-bottom:5px;margin-top:5px;font-weight:500;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
<p id="theexcerpt" style="font-size:.75em;"><?php echo strip_tags( get_the_excerpt()) ?></p>
	 <!--<p><?php the_date('m-d-Y');?> </p>-->
	<!-- <p><?php the_category(); ?></p> -->
	<!-- <p><?php the_tags(); ?></p> -->
</div>
</div>
</a>
	<?php endwhile; wp_reset_postdata(); ?>
	<!-- show pagination here -->
<?php else : ?>
	<!-- show 404 error here -->
<?php endif; ?>
</div>
<p class="hidden-xs hidden-sm" style="margin-top:-10px;"><?php echo $query->found_posts; ?> total</p>
<hr>
	</div>
<!-- END OF FACT INFOGRAPHICS -->

<!-- START OF EVENTS -->
<div id="container Events">
<?php
if ( get_query_var('paged') ) $paged = get_query_var('paged');  
if ( get_query_var('page') ) $paged = get_query_var('page');

$query = new WP_Query( array( 
	'post_type' => 'incsub_event',
	'meta_key' => 'incsub_event_start',
	'orderby' => 'meta_value',
	'paged' => $paged,
	'date_query' => array(
        'after' => date('Y-m-d', strtotime('-30 days')) 
     ) 
));

if ( $query->have_posts() ) : ?>
<h1 id="events">Events</h1>
<div class="row" id="events-container">
	<?php while ( $query->have_posts() ) : $query->the_post(); ?>	
<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ms-item" style="margin-bottom:25px;flex-wrap: wrap;display: inline-block;">
<div class="col-md-12 col-lg-12 shadow" style="background-color:#ffffff; padding-top:15px; border:1px solid #d9d9d9;padding-bottom: 5px;">
<div class="tnail-full-width hidden-xs hidden-sm">
	<?php if ( has_post_thumbnail() ) {
		 the_post_thumbnail('large'); 
		} else { ?>
		<img style="width:100%;" src="http://www.compuware.com/cpwr/2015/wp-content/uploads/2016/07/web-assets/jpg/event2.jpg" alt="<?php the_title(); ?>" />
		<?php } ?> 
		</div>
	<h4 style="display:block; width:100%;text-decoration:none !important;margin-bottom:5px;margin-top:5px;font-weight:500;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
<p id="theexcerpt" style="font-size:.75em;"><?php echo strip_tags( get_the_excerpt()) ?></p>
	<p><?php the_date('m-d-Y');?> </p>
	<!-- <p><?php the_category(); ?></p> -->
	<!-- <p><?php the_tags(); ?></p> -->
</div>
</div>
</a>
	<?php endwhile; wp_reset_postdata(); ?>
	<!-- show pagination here -->

<?php else : ?>
	<!-- show 404 error here -->
<?php endif; ?>
</div>
<p class="hidden-xs hidden-sm" style="margin-top:-10px;"><?php echo $query->found_posts; ?> total</p>

	</div>
<!-- END OF EVENTS -->





</article> <!-- end article -->
</div> <!-- end #main -->
</div> <!-- end #content -->
<!-- </div> end scroller inner -->
<!-- </div><!-- end scroller -->

<style>
.socialbar {
display: none !important;
}
.tnail-full-width img{
width: 100%;
}
</style>

<script type="text/javascript">
jQuery(window).load(function() {
// MASSONRY Without jquery
var container = document.querySelector('#ms-container');
 var msnry = new Masonry( container, {
itemSelector: '.ms-item',
columnWidth: '.ms-item',                
});  
});

jQuery(window).load(function() {
// MASSONRY Without jquery
var container = document.querySelector('#pr-container');
 var msnry = new Masonry( container, {
itemSelector: '.ms-item',
columnWidth: '.ms-item',                
});  
});

	jQuery(window).load(function() {
// MASSONRY Without jquery
var container = document.querySelector('#pm-container');
 var msnry = new Masonry( container, {
itemSelector: '.ms-item',
columnWidth: '.ms-item',                
});  
});	
	jQuery(window).load(function() {
// MASSONRY Without jquery
var container = document.querySelector('#vid-container');
 var msnry = new Masonry( container, {
itemSelector: '.ms-item',
columnWidth: '.ms-item',                
});  
});	
	jQuery(window).load(function() {
// MASSONRY Without jquery
var container = document.querySelector('#ar-container');
 var msnry = new Masonry( container, {
itemSelector: '.ms-item',
columnWidth: '.ms-item',                
});  
});	
	jQuery(window).load(function() {
// MASSONRY Without jquery
var container = document.querySelector('#wp-container');
 var msnry = new Masonry( container, {
itemSelector: '.ms-item',
columnWidth: '.ms-item',                
});  
});
	jQuery(window).load(function() {
// MASSONRY Without jquery
var container = document.querySelector('#cs-container');
 var msnry = new Masonry( container, {
itemSelector: '.ms-item',
columnWidth: '.ms-item',                
});  
});	
	jQuery(window).load(function() {
// MASSONRY Without jquery
var container = document.querySelector('#fs-container');
 var msnry = new Masonry( container, {
itemSelector: '.ms-item',
columnWidth: '.ms-item',                
});  
});	
	jQuery(window).load(function() {
// MASSONRY Without jquery
var container = document.querySelector('#ig-container');
 var msnry = new Masonry( container, {
itemSelector: '.ms-item',
columnWidth: '.ms-item',                
});  
});	
	jQuery(window).load(function() {
// MASSONRY Without jquery
var container = document.querySelector('#events-container');
 var msnry = new Masonry( container, {
itemSelector: '.ms-item',
columnWidth: '.ms-item',                
});  
});	
</script>


<?php endif; ?>

<?php get_footer(); ?> 

<!DOCTYPE html>
<html>

<?php
/*
Template Name: Monthly Marketing Newletter
*/
?>

<!-- START OF CASE STUDIES -->
<div id="container Case-study">
<?php
if ( get_query_var('paged') ) $paged = get_query_var('paged');  
if ( get_query_var('page') ) $paged = get_query_var('page');
$query = new WP_Query( array( 
	'post_type' => 'case-study', 
	'paged' => $paged,
	'date_query' => array(
        'after' => date('Y-m-d', strtotime('-45 days')) 
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
	<!-- <p><?php the_date('m-d-Y');?> </p> -->
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

	


<!-- END OF CASE STUDIES -->
</html>
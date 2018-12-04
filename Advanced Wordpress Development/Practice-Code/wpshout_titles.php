<!-- Environment: We're completely outside WordPress, on a random server! -->
<html>
<head></head>
<body>
	<h1>WPShout Titles: An App Using the WordPress REST API</h1>

	<?php 
	// Get the route's resource (the three most recent Posts) as a JSON object
	$json_response = file_get_contents( 'https://wpshout.com/wp-json/wp/v2/posts?per_page=3' );

	// Decode the JSON object into a PHP array
	$content = json_decode( $json_response );

	// Loop through the PHP array and print out what we want
	foreach( $content as $post ) {
		echo '<h2>';
			// Print out the post's title
			echo $post->title->rendered;
		echo '</h2>';

		echo '<p>';
			// Get the publication date string
			$postdatestring = $post->date;

			// Turn date string to a standardized time integer
			$posttimevalue = strtotime( $postdatestring );
			
			// Print out that time, formatted as MMM d, YYYY
			echo date( 'M j, Y', $posttimevalue );
		echo '</p>';
	} ?>
</body>
</html>
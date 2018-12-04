<?php
/* Collection of Walker Class* /

/*

		wp_nav_menu()
				'walker' => new Walker_Nav_Primary()

		<div class="menu-container">
				<ul> // start_lvl()
					<li><a><span> // start_el()

					 </a></span></li> // end_el() 

					<li><a>Link</a></l>
					<li><a>Link</a></l>
					<li><a>Link</a></l>

				</ul> // end_lvl()
		</div>

*/

class Walker_Nav_Primary extends Walker_Nav_Menu {
	
	function start_lvl( &$output, $depth ){ // ul
			$indent = srt_repeat("/t", $depth );
			$submenu = if($depth > 0 ) ' sub-menu ' : '';
			$output .= "\n$indent<ul class=\"drpodown-menu$submenu depth_$depth\">\n";
	}

	function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) { // li a span

			$indent = ($depth) ?  srt_repeat("/t", $depth ) : '';

			$li_attributes = '';
			$class_names = $value = '';

			$classes = empty( $item->classes ) ? array() : (array) $item->classes; 

			$classes[] = ($args->walker->has_childern) ? 'dropdown' : '' ; 
			$classes[] = ($items->current || $item->current_item_anchestor) ? 'active' : ''; 
			$classes[] = 'menu-item-' . $item->ID;
			if( $depth && $args->walker_has_children ) {
				$classes[] = 'dropdown-submenu';
			}

			$class_names = join( ' ', apply_filters('nav_menu_css_class', array_filter( $classes ), $item, $args ) );
			$class_names = ' class=" '. ecs_attr($class_names).' "';

			$id = apply_filters('nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args);
			$id = strenlen( $id ) ? 'id="'. esc_attr( $id ) .'" ' ; 

			$output .= $indent . '<li' . $id . $value . $class_names . $li_attributes . '>'; 

			$attributes = ! empty($item->attr_title ) ? 'title=" ' .esc_attr($item->attr_title). ' "' ; '' ;
			$attributes .= ! empty($item->target ) ? 'target=" ' .esc_attr($item->target). ' "' ; '' ;
			$attributes .= ! empty($item->xfn ) ? 'rel=" ' .esc_attr($item->xfn). ' "' ; '' ;
			$attributes .= ! empty($item->url ) ? 'href=" ' .esc_attr($item->url). ' "' ; '' ;

			$attributes .= ! ($args->walker->has_children) ? 'class="dropdown-toggle" data-toggle="dropdown" ' : '';


			$item_output = $args->before;
			$item_output .= '<a' . $attributes . '>';
			$item_output .= $args->link_before . apply_filter( 'the_title', $item->title, $item->ID ) . $args->link_after;  
			$item_output .= ( $depth == 0 && $args->walker->has_children) ? '<b class="caret"></b></a>' : '</a>'; 
			$item_output .= $args->after;

			$output .= apply_filters( 'walker_nav_menu_staart_el', $item_output, $item, $depth, $args );



/*
	function end_el() { // closing li a span

	}

	function end_lvl() { // closing ul

	}
*/
}


public function __construct(){
	add_action( 'after_setup_theme', array(&$this, 'menus') )
}

public function menus(){

register_nav_menus(array(
		'primary' => esc_html__('Primary', 'theme_name'),
	));
}
<?php 
/**
 * WP Post Template: Sul
 *
 * @package SimpleMag
 * @since 	SimpleMag 1.1
**/
get_header(); 
global $ti_option;
$single_sidebar = get_post_meta( $post->ID, 'post_sidebar', true );

/*$category = get_the_category(); 
$parent = get_category($category[0]->category_parent);*/

?>

<style>
.ubermenu .ubermenu-item.ubermenu-item-34058 > .ubermenu-target {color:#000;}
.ubermenu .ubermenu-item.ubermenu-item-34058 > .ubermenu-target:hover {color:#ccc;}
</style>

<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">

    <div id="pageslide" class="st-menu st-effect">
    	<a href="#" id="close-pageslide"><i class="icomoon-remove-sign"></i></a>
    </div><!-- Sidebar in Mobile View -->
    
	<?php
    // Check for a layout options: Full Width or  Boxed
    if ( $ti_option['site_layout'] == '2' ) { $site_layout = ' class="layout-boxed"'; } else { $site_layout = ' class="layout-full"'; } ?>
    <section id="site"<?php echo isset( $site_layout ) ? $site_layout : ''; ?>>
        <div class="site-content">
    
            <header id="masthead" role="banner" class="clearfix<?php if ( $ti_option['site_main_menu'] == true ) { echo ' with-menu'; } ti_top_strip_class(); ?>" itemscope itemtype="http://schema.org/WPHeader">
                
                <div class="no-print top-strip">
                    <div class="wrapper clearfix">
            
                        <div class="wpml">
							<?php 
                            // WPML Shortcode
                            do_action('wpml_add_language_selector'); 
                            ?>
                        </div>
                        <div class="google-translator"><?php echo do_shortcode('[google-translator]'); ?></div>
                        <?php 
                        // Hide Search and Social Icons if header variation with search is selected
                        if ( $ti_option['site_header'] != 'header_search' ) {
                            
                            // Search Form
                            get_search_form();
                        
                            // Social Profiles
                            if( $ti_option['top_social_profiles'] == 1 ) {
                                get_template_part ( 'inc/social', 'profiles' );
                            }
                        }
                        ?>	
						<?php
                        // Pages Menu
                        if ( has_nav_menu( 'secondary_menu' ) ) :
                            echo '<nav class="secondary-menu" role="navigation" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">';
                            wp_nav_menu( array(
                                'theme_location' => 'secondary_menu',
                                'container' => false,
                            ));
                           echo '</nav>';
                         endif;
                        ?>
                        
                        <?php 
						// Top Menu (hamburguer)
	
                        
                        if ( has_nav_menu( 'header_menu' ) ) :
                            echo '<nav class="header_menu" role="navigation" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">';
                            wp_nav_menu( array(
                                'theme_location' => 'header_menu',
                                'container' => false,
                            ));
                           echo '</nav>';
                         endif;
                        ?>
                        
                        
                        
                    </div><!-- .wrapper -->
                </div><!-- .top-strip -->
                
                
                <?php include ('inc/branding-single.php'); ?><!-- #branding -->
                
				<div class="wrapper">
				
				<?php
                // Main Menu
                if ( $ti_option['site_main_menu'] == true ):
					if ( has_nav_menu( 'sul_menu' ) ) :
					echo '<div class="no-print animated main-menu-container">';
						if ( $ti_option['site_fixed_menu'] == '3' && $ti_option['site_main_menu'] == true ):
							echo '<div class="main-menu-fixed">';
						endif;
							echo '<nav class="wrapper main-menu" role="navigation" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">';
								wp_nav_menu( array(
									'theme_location' => 'sul_menu',
									'container' => false,
									'walker' => new TI_Menu()
								 ));
							echo '</nav>';
						if ( $ti_option['site_fixed_menu'] == '3' && $ti_option['site_main_menu'] == true ):
							echo '</div>';
						endif;
						echo '</div>';
					 else:
						echo '<div class="message warning"><i class="icomoon-warning-sign"></i>' . __( 'Define your site main menu', 'bestguide' ) . '</div>';
					 endif;
                endif;
			    ?>
                
                   <!--Parent Category Title-->
                   <!--<a href="< ?php echo $parent->slug; ?>" class="link-regiao">< ?php echo $parent->slug; ?></a>-->
                   
                   
                   <!--Região H1-->
                   <a href="<?php echo home_url(); ?>/sul/" class="link-regiao">sul</a>
                   
                   
            	</div>
            </header><!-- #masthead -->




    <main id="content" class="clearfix animated" role="main" itemprop="mainContentOfPage" itemscope itemtype="http://schema.org/Blog">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?> itemscope itemtype="http://schema.org/Article">

            <header class="wrapper entry-header page-header">
                <div class="entry-meta">
<!--                    < ?php if( $ti_option['single_author_name'] == 1 ) { ?>
                        <span class="vcard author" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
                            <span>< ?php _e( 'By','bestguide' ); ?></span>
                            <a href="< ?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>" class="url fn n" rel="author" itemprop="url">
                                <span itemprop="name">< ?php the_author_meta( 'display_name' ); ?></span>
                            </a>
                        </span>
                   < ?php } ?>-->
                    <?php ti_meta_data(); ?>
                </div>
                
                <div class="title-with-sep single-title">
                    <h1 class="entry-title" itemprop="headline"><?php the_title(); ?></h1>
                </div>
            </header>

            <?php
            // Output media only on first page if the post have pagination
            if ( $paged == 1 || $page == 1 ) {
                // Output media from every post by Full Width option
                if ( $ti_option['single_media_position'] == 'useperpost' && get_post_meta( $post->ID, 'post_media_position', true ) == 'media_full_width' || $ti_option['single_media_position'] == 'fullwidth' ){
                ?>
                <div class="entry-media">
                    <?php
                    if ( ! get_post_format() ): // Standard
                        get_template_part( 'formats/format', 'standard' );
                    elseif ( 'gallery' == get_post_format() ): // Gallery
                        get_template_part( 'formats/format', 'gallery' );
                    elseif ( 'video' == get_post_format() ): // Video
                        get_template_part( 'formats/format', 'video' );
                    elseif ( 'audio' == get_post_format() ): // Audio
                        get_template_part( 'formats/format', 'audio' );
                    endif;
                    ?>
                </div>
                <?php } else { ?>
                    <?php if ( 'gallery' == get_post_format() ) { ?>
                    <div class="entry-media">
                        <?php get_template_part( 'formats/format', 'gallery' ); ?>
                    </div>
                <?php } ?>
            <?php } } ?>


            <div class="wrapper">

                <?php if ( ! $single_sidebar || $single_sidebar == "post_sidebar_on" ) { // Enable/Disable post sidebar ?>
                <div class="grids">
                    <div class="grid-8 column-2">
                <?php } ?>

                    <?php
                    // Output media only on first page if the post have pagination
                    if ( $paged == 1 || $page == 1 ) {
                        // Output media from every post by Above The Content option
                        if ( $ti_option['single_media_position'] == 'useperpost' && get_post_meta( $post->ID, 'post_media_position', true ) == 'media_above_content' || $ti_option['single_media_position'] == 'abovecontent' ) {
                        ?>
                        <div class="entry-media">
                            <?php 
                            if ( ! get_post_format() ): // Standard
                                get_template_part( 'formats/format', 'standard' );
                            elseif ( 'video' == get_post_format() ): // Video
                                get_template_part( 'formats/format', 'video' );
                            elseif ( 'audio' == get_post_format() ): // Audio
                                get_template_part( 'formats/format', 'audio' );
                            endif;
                            ?>
                        </div>
                    <?php } } ?>

                    <?php 
                    // Ad Unit
                    if ( $ti_option['single_image_top_ad']['url'] == true || ! empty ( $ti_option['single_code_top_ad'] ) ) { ?>
                    <div class="advertisement">
                        <?php
                        $single_banner_top = $ti_option['single_image_top_ad'];
                        // Image Ad
                        if ( $single_banner_top['url'] == true ) { ?>
                            <a href="<?php echo $ti_option['single_image_top_ad_url']; ?>" rel="nofollow" target="_blank">
                                <img src="<?php echo $single_banner_top['url']; ?>" width="<?php echo $single_banner_top['width']; ?>" height="<?php echo $single_banner_top['height']; ?>" alt="<?php _e( 'Advertisement', 'bestguide' ); ?>" />
                            </a>
                        <?php 
                        // Code Ad
                        } elseif( $ti_option['single_code_top_ad'] == true ) {
                            echo $ti_option['single_code_top_ad'];
                        } ?>
                    </div><!-- .advertisment -->
                    <?php } ?>

                    <?php
                    // Post Rating
                    if ( $ti_option['single_rating_box'] == 'rating_top' ) {
                        get_template_part( 'inc/single', 'rating' );
                    }
                    ?>

                    <div class="single-box clearfix entry-content" itemprop="articleBody">
                        <?php the_content(); ?>
                        <?php
                        $args = array(
                            'before' => '<div class="link-pages"><h3 class="title">' . __( 'Continue Reading', 'bestguide' ) . '</h3>',
                            'after' => '</div>',
                            'link_before' => '<span>',
                            'link_after' => '</span>',
                            'nextpagelink'     => '&rarr;',
                            'previouspagelink' => '&larr;',
                            'next_or_number'   => 'next_and_number',
                        );
                        wp_link_pages( $args );
                        ?>
                    </div><!-- .entry-content -->

                    <?php
                    // Post Rating output at the bottom
                    if ( $ti_option['single_rating_box'] == 'rating_bottom' ) {
                        get_template_part( 'inc/single', 'rating' );
                    }
                    
                    // Show/Hide tags list
                    if ( $ti_option['single_tags_list'] == 1 ) {
                        the_tags('<div class="single-box tag-box clearfix"><h3 class="title">' . __( 'Tags', 'bestguide' ) . '</h3>', '', '</div>'); 
                    }
                    
                    // Show/Hide share links
                    if ( $ti_option['single_social'] == 1 ) {
                        get_template_part( 'inc/single', 'share' );
                    }
                    
                    // Show/Hide author box
                    if ( $ti_option['single_author'] == 1 ) {
                        get_template_part( 'inc/author', 'box' );
                    }
                    ?>

                    <?php 
                    // Ad Unit
                    if ( $ti_option['single_image_bottom_ad']['url'] == true || ! empty ( $ti_option['single_code_bottom_ad'] ) ) { ?>
                        <div class="single-box advertisement">
                            <?php
                            // Image Ad
                            if ( $ti_option['single_image_bottom_ad']['url'] == true ) {
                                $single_banner_botom = $ti_option['single_image_bottom_ad']; ?>
                                <a href="<?php echo $ti_option['single_image_bottom_ad_url']; ?>" rel="nofollow" target="_blank">
                                    <img src="<?php echo $single_banner_botom['url']; ?>" width="<?php echo $single_banner_botom['width']; ?>" height="<?php echo $single_banner_botom['height']; ?>" alt="<?php _e( 'Advertisement', 'bestguide' ); ?>" />
                                </a>
                            <?php
                            }
                            // Code Ad
                            elseif ( $ti_option['single_code_bottom_ad'] == true ) {
                                echo $ti_option['single_code_bottom_ad'];
                            } ?>
                        </div><!-- .advertisment -->
                    <?php } ?>





                    <?php
                    // Show/Hide related posts
                    if ( $ti_option['single_related'] == 1 ) {
                        get_template_part( 'inc/related', 'posts' );
                    }
                    ?>

                    <?php comments_template(); // Comments Template ?>


                    <?php if ( ! $single_sidebar || $single_sidebar == "post_sidebar_on" ) { // Enable/Disable post sidebar ?>
                    </div><!-- .grid-8 -->
                    
					<div class="grid-4 text-center">
                    	<?php dynamic_sidebar('sidebar-sul-1'); ?>
                    </div>
                    
                </div><!-- .grids -->
                <?php }  ?>

            </div><!-- .wrapper -->

        </article>

    <?php endwhile; endif; ?>

    </main><!-- #content -->

    <?php
    // Show/Hide random posts slide dock
    if ( $ti_option['single_slide_dock'] == 1 ) {
        get_template_part( 'inc/slide', 'dock' );
    }
    ?>
    
<?php include ('footer.php'); ?>
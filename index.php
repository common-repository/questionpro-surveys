<?php
/**
 * Plugin Name: QuestionPro Surveys
 * Plugin URI: https://www.questionpro.com/
 * Description: Embed QuestionPro Surveys
 * Version: 1.0
 * Author: QuestionPro
 * Author URI: http://questionpro.com/
 **/

function questionpro_block()
{
  wp_enqueue_script(
    'questionpro-block',
    plugin_dir_url(__FILE__) . 'block.js',
    array('wp-blocks', 'wp-editor'),
    true
  );
}
function questionpro_shortcode($atts)
{
  $a = shortcode_atts(
    array(
      'url' => '',
      'width' => '100%',
      'height' => '500px'
    ),
    $atts
  );

  return '<iframe src="' .
    $a["url"] .
    '" width="' .
    $a["width"] .
    '" height="' .
    $a["height"] .
    '"></iframe>';
}

add_shortcode('questionpro', 'questionpro_shortcode');
add_action('enqueue_block_editor_assets', 'questionpro_block');
?>

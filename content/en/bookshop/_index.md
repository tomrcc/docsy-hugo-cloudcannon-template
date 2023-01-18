---
title: Bookshop
menu:
  main:
    weight: 40
content_blocks:
  - _bookshop_name: cover
    title: A title
    subtitle: A subtitle
    text: Inner text
    col_id: warning
    background_image: /featured-background.jpg
    image_anchor:
    logo_image: http://placekitten.com/70/70
    logo_anchor:
    height: med
    byline: A byline
  - _bookshop_name: section
    text: Inner text
    col_id: light
    height: auto
    type: section
    Inner: This is the section shortcode block
    link_down:
      _bookshop_name: link_down
      color: warning
      id: test
  - _bookshop_name: lead
    color: '#e74141'
    height: auto
    Inner: This is a block with centered text and an arrow pointing to next section
  - _bookshop_name: feature
    icon: fa-cubes
    title: Feature
    Inner: This is the feature block, meant to be nested inside of a layout block
    url: https://github.com/gohugoio/hugo
    url_text: Go to hugo
---

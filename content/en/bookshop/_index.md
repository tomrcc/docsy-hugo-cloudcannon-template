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
    # anchors are for .Fit hugo image method which currently don't work
    image_anchor: 
    logo_image: http://placekitten.com/70/70
    logo_anchor:
    # Height can be one of: auto, min, med, max, full.
    height: med
    byline: A byline
  - _bookshop_name: section
    text: Inner text
    col_id: light
    # Height can be one of: auto, min, med, max, full.
    height: auto
    type: section
    Inner: This is the section shortcode block
  - _bookshop_name: lead
    color: primary
    height: auto
    Inner: This is a block with centered text and an arrow pointing to next section
  - _bookshop_name: feature
    icon: fa-cubes
    title: Feature
    Inner: This is the feature block, meant to be nested inside of a layout block
    url: https://github.com/gohugoio/hugo
    url_text: Go to hugo
---
---
title: Snippets
linkTitle: Snippets
weight: 10
description: |
  A list of helpful snippets to reuse throughout your markdown.
---
## Snippets/Shortcodes

Snippets, also known in Hugo as shortcodes are small reusable pieces of code that you can include in your markdown files.<br><br>Here are some of the ones you can use in Docsy:

### Page Info

Used to display important information about the page.

{{% pageinfo color="primary" %}}This is some information about the page{{% /pageinfo %}}

### Alert

Used to grab the users attention, and alert them to something important.

{{< alert color="danger" title="An alert" >}}To display some important information{{< /alert >}}

### Card

A basic card to display information. The main content of the card is Markdown, which supports syntax highlighting, links and everything else usually supported by Markdown.

{{< card header="asda" title="asdasd" subtitle="asdasd" footer="sada" >}}aaa{{< /card >}}

##

## Tabs

A way to display tabbed information. Tabs must be used within a tab pane. Tabs can be plain text, or code depending on which option is selected in Tab Pane. Tabs automatically detect which language to be highlighted through each Tabs header if the appropriate fields are selected in the parent Tab Pane. Has the ability to disable individual tabs, so they can be used as a label.

{{< tabpane text=false right=true langEqualsHeader=true persistLang=false >}}{{< tab header="Languages:" disabled=true >}}{{< /tab >}}
{{< tab header="HTML" lang="HTML" disabled=false >}}```html

<h1>Code Highlighting in Tabs</h1>
<p>Tabs do not usually require markdown to enable highlighting. This is instead determined in the Tab Pane settings.</p>
<span>If a certain language is having trouble, like with HTML tags, use Markdown highlighting as a fall back</span>
```{{< /tab >}}
{{< tab header="Javascript" lang="js" disabled=false >}}const something = "works?"

// works?{{< /tab >}}
{{< tab header="CSS" lang="CSS" disabled=false >}}.class {

min-height: 98vh;

border: solid 1px black;

}{{< /tab >}}{{< /tabpane >}}

### Figure

One of the ways to easily display images in your markdown.

{{< figure src="/images/featured-sunset-get.png" title="An image" caption="Images are stored in Static folder" width="20vw" height="20vh" >}}

### Card with Figure

You can nest snippets inside each other, as shown with this Figure snippet inside the Card snippet.

{{< card header="A card with image" title="Card/Image" subtitle="Using a figure inside of a card" footer="See ya" >}}{{< figure src="/images/featured-sunset-get.png" title="A nested image" alt="A nested image" caption="Hope it works" >}}{{< /card >}}
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

### Cards

A basic card to display information. The main content of the card is Markdown, which supports syntax highlighting, links and everything else usually supported by Markdown.

{{< card header="Javascript" title="Code Highlighting" footer="A parting gift" >}}
```javascript
const something = "Hello World";
console.log(something);
// Hello World
```
{{< /card >}}

Cards can be inserted by themselves into Markdown, or wrapped in a card pane if required to be side by side.

{{< cardpane >}}{{< card header="Nested Card" title="Javascript" subtitle="Code highlighting" footer="See Ya" >}}```javascript
const string = "something random";
console.log(string);
// something random
```{{< /card >}}
{{< card header="A Different Card" title="Not Code" subtitle="Just random text" footer="Ka kite anō" >}}Just some normal markdown over here!{{< /card >}}{{< /cardpane >}}

### Tabs

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
{{< highlight "js" >}}const variable = "code stuff";
console.log(variable); // code stuff{{< /highlight >}}

{{< tabpane text=false right=true langEqualsHeader=false persistLang=false >}}{{< tab disabled=false >}}{{< highlight "html" >}}<h1>Heasdig</h1>
<p>A paragraoph</p> {{< /highlight >}}{{< /tab >}}{{< /tabpane >}}

### Figure

An easy way to display images in your markdown.

{{< figure src="/images/featured-sunset-get.png" title="An image" caption="Images are stored in Static folder" width="200" height="200" >}}

### Card with Figure

You can nest snippets inside each other, as shown with this Figure snippet inside the Card snippet.

{{< card header="A card with image" title="Card/Image" subtitle="Using a figure inside of a card" footer="See ya" >}}{{< figure src="/images/featured-sunset-get.png" title="A nested image" alt="A nested image" caption="A figure inside a card" >}}{{< /card >}}

### Iframe

Used to embed a website directly in your markdown.

{{< iframe src="https://cloudcannon.com" width="80%" tryautoheight=false style="min-height:50vh; border:none;" sandbox=false sub="Your browser cannot display embedded frames. You can access the embedded page via the following link:" >}}

### Swagger UI

Placed anywhere inside a page with

```yaml
layout: swagger
```

it renders [Swagger UI](https://swagger.io/tools/swagger-ui/) using any OpenAPI YAML or JSON file as source. This file can be hosted anywhere you like, for example in your site’s root /static folder.<br><br>See an example [here](/docs/snippets/swaggerui-example/).
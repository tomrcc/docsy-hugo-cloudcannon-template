---
title: List of Snippets
layout: list
---
## Snippets/Shortcodes

Snippets, also known in Hugo as shortcodes are small reusable pieces of code that you can include in your markdown files.<br><br>Here are some of the ones you can use in Docsy:

### &nbsp;

### Page Info
{{% pageinfo color="primary" %}}Use this snippet when you want to provide information about a page.{{% /pageinfo %}}

### &nbsp;

### Image Processing

Used to process images in the same page bundle.

**TODO:** Need to decide how the image input is going to work, since this snippet only works with images in the local page bundle, not images in the static folder.

### &nbsp;

### Alert

{{< alert color="danger" title="Warning!" >}}Use these when you want to alert your users to something important!{{< /alert >}}

<div class="c-card c-card--clickable c-card--preview-top"><div class="c-card__preview loaded--complete loaded"><p class="u-hide-when-loaded">An alert</p><img loading="lazy" alt="Preview image for Warning!" src="https://app.cloudcannon.com/api/v0/sites/37cc6a50-e78a-40a4-ab6b-bafd1d99e9b1/files/static%2Fpreview-images%2Falert.png/resized?width=592&amp;height=320&amp;cc-interface=DEVELOPER" /></div><div class="c-card__content"><div class="c-card__heading"><div class="c-card__icon "><cc-icon name="mdi:warning" class="u-hide-when-loaded"></cc-icon></div><div class="c-card__heading-content"><p class="c-card__text ">Warning!</p><p class="c-card__subtext">Use these when you want to alert your users to something important!</p></div></div></div></div>

<img title="Click and drag to move" role="presentation" draggable="true" width="15" height="15" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" />

&nbsp;

### &nbsp;

### Cards

You can use the card snippet to insert a single card. This could be a plain card, or a code card like below, which supports syntax highlighting when a programming language is specified.

{{< card-code header="Code Card" lang="js" >}}const highlighting = "Highlights code based on the language specified"

console.log(highlighting) // "Highlights code based on the language specified"{{< /card-code >}}

&nbsp;

Or you can use card pane as a wrapper for multiple cards anywhere in your markdown.

{{< cardpane >}}{{< card header="Card" title="Card" subtitle="Used to display some grouped information to the user" footer="End " >}}1. Insert the card pane snippet into your markdown using the snippet selector in the markdown toolbar.
2. Edit the card pane.
3. Use the top toolbar to insert cards into the card pane{{< /card >}}
{{< card header="Card" title="Card" subtitle="Used to display some grouped information to the user" footer="End" >}}1. Insert the card pane snippet into your markdown using the snippet selector in the markdown toolbar.
2. Edit the card pane.
3. Use the top toolbar to insert cards into the card pane

&nbsp;{{< /card >}}

&nbsp;{{< /cardpane >}}

### &nbsp;

### Tabs

Similar to cards above, you can use tabs inside a tab pane to display tabbed information. Unlike cards, tabs can only be used inside the tab pane wrapper.

{{< tabpane text=false right=true langEqualsHeader=false persistLang=false header="Tab Pane" >}}{{< tab header="English" disabled=false >}}Hello World!{{< /tab >}}
{{< tab header="German" lang="markdown" disabled=false >}}Hallo Welt!{{< /tab >}}
{{< tab header="Swahili" disabled=false >}}Vipi Dunia!{{< /tab >}}
{{< tab header="Javascript" lang="js" disabled=false >}}const highlight = "Setting the language as a programming language provides syntax highlighting"

console.log(highlight) // "Setting the language as a programming language provides syntax highlighting"{{< /tab >}}

&nbsp;{{< /tabpane >}}

### &nbsp;

### Readfile

Readfile allows you to import the contents of an external file into a document.

**TODO:** Figure out a way to change file input to access files in root rather than just in static. Could get it to work with a text input.

### Iframe

Embed external content into a Docsy page as an inline frame.

{{< iframe src="https://cloudcannon.com/" width="80%" tryautoheight=true style="border: none;" sandbox=false name="CloudCannon" id="CloudCannon" >}}

&nbsp;

### Redoc

Renders API documentation from an OpenAPI YAML or JSON file.

{{< redoc "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v2.0/yaml/petstore.yaml" >}}

&nbsp;

### Swagger UI

Can be placed anywhere inside a [page](/docs/snippets/swaggerui-example/) with the swagger layout. It renders [Swagger UI](https://swagger.io/tools/swagger-ui/) using any OpenAPI YAML or JSON file as source.
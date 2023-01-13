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
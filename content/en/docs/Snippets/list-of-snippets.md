---
title: List of Snippets
layout: list
---
## Snippets/Shortcodes

Snippets, also known in Hugo as shortcodes are small reusable pieces of code that you can include in your markdown files.<br><br>Here are some of the ones you can use in Docsy:

### Page Info
{{% pageinfo color="primary" %}}Use this snippet when you want to provide information about a page.{{% /pageinfo %}}

### Image Processing

Used to process images in the same page bundle.

**TODO:** Need to decide how the image input is going to work, since this snippet only works with images in the local page bundle, not images in the static folder.

### Alert

{{< alert color="danger" title="Warning!" >}}Use these when you want to alert your users to something important!{{< /alert >}}

### Cards

You can use the card snippet to insert a single card, or use card pane as a wrapper for multiple cards anywhere in your markdown.

{{< cardpane >}}{{< card header="Card" title="Card" subtitle="Used to display some grouped information to the user" footer="End " >}}1. Insert the card pane snippet into your markdown using the snippet selector in the markdown toolbar.
2. Edit the card pane.
3. Use the top toolbar to insert cards into the card pane{{< /card >}}
{{< card header="Card" title="Card" subtitle="Used to display some grouped information to the user" footer="End" >}}1. Insert the card pane snippet into your markdown using the snippet selector in the markdown toolbar.
2. Edit the card pane.
3. Use the top toolbar to insert cards into the card pane

&nbsp;{{< /card >}}

&nbsp;{{< /cardpane >}}

### &nbsp;

&nbsp;
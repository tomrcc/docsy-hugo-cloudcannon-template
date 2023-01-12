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

<div class="c-card c-card--clickable"><div class="c-card__preview"><p class="u-hide-when-loaded">An alert</p><img src="https://app.cloudcannon.com/api/v0/sites/37cc6a50-e78a-40a4-ab6b-bafd1d99e9b1/files/static%2Fpreview-images%2Falert.png/resized?width=592&amp;height=320&amp;cc-interface=DEVELOPER" loading="lazy" alt="Preview image for Warning!" /></div><div class="c-card__content"><div class="c-card__heading"><div class="c-card__icon "><cc-icon name="mdi:warning" class="u-hide-when-loaded"></cc-icon></div><div class="c-card__heading-content"><p class="c-card__text ">Warning!</p><p class="c-card__subtext">Use these when you want to alert your users to something important!</p></div></div></div></div>

<img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" title="Click and drag to move" role="presentation" draggable="true" width="15" height="15" />

&nbsp;

<div class="c-card c-card--clickable"><div class="c-card__preview"><p class="u-hide-when-loaded">An alert</p><img loading="lazy" alt="Preview image for Warning!" src="https://app.cloudcannon.com/api/v0/sites/37cc6a50-e78a-40a4-ab6b-bafd1d99e9b1/files/static%2Fpreview-images%2Falert.png/resized?width=592&amp;height=320&amp;cc-interface=DEVELOPER" /></div><div class="c-card__content"><div class="c-card__heading"><div class="c-card__icon "><cc-icon name="mdi:warning" class="u-hide-when-loaded"></cc-icon></div><div class="c-card__heading-content"><p class="c-card__text ">Warning!</p><p>Use these when you want to alert your users to something important</p></div></div></div></div>

&nbsp;

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
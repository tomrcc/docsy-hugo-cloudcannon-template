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
{{% pageinfo color="primary" %}}This is some information about the page{{% /pageinfo %}}

### Alert

{{< alert color="danger" title="An alert" >}}To display some important information{{< /alert >}}

### Card
{{< card header="A plain card " title="Javascript" subtitle="You can use markdown for code highlighting" footer="A parting message" >}}
```javascript
const something = "hello world";
console.log(something);
// hello world
```
{{< /card >}}

## Tabs
{{< tabpane text=false right=true langEqualsHeader=true persistLang=false >}}{{< tab header="Languages:" disabled=true >}}{{< /tab >}}
{{< tab header="HTML" lang="HTML" disabled=false >}}```html

<h1>Code Highlighting in Tabs</h1>
<p>Tabs do not usually require markdown to enable highlighting. This is instead determined in the Tab Pane settings.</p>
<span>If a certain language is having trouble, like HTML use Markdown highlighting as a fall bac</span>
```{{< /tab >}}
{{< tab header="Javascript" lang="js" disabled=false >}}const something = "works?"

// works?{{< /tab >}}
{{< tab header="CSS" lang="CSS" disabled=false >}}.class \{

min-height: 98vh;

border: solid 1px black;

\}{{< /tab >}}{{< /tabpane >}}
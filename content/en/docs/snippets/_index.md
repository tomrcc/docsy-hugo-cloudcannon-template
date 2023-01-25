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
{{< card header="A plain card " title="Javascript" subtitle="You can use markdown for code highlighting" footer="A parting message" >}}```javascript
const something = "hello world";
console.log(something);
// hello world
```{{< /card >}}

## Tabs
{{< tabpane text=false right=true langEqualsHeader=true persistLang=false >}}{{< /tabpane >}}
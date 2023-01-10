---
title: Reference
linkTitle: Reference
weight: 9
description: |
  Low level reference docs for your project.
resources:
  - src: '**.{png,jpg}'
    title: 'Image #:counter'
    params:
      byline: 'Photo: Riona MacNamara / CC-BY-CA'
---
If your project has an API, configuration, or other reference - anything that users need to look up that’s at an even lower level than a single task - put (or link to it) here. You can serve and link to generated reference docs created using Doxygen, Javadoc, or other doc generation tools by putting them in your `static/` directory.

Find out more in [Adding static content](https://docsy.dev/docs/adding-content/content/#adding-static-content). For OpenAPI reference, Docsy also provides a [Swagger UI layout and shortcode](https://www.docsy.dev/docs/adding-content/shortcodes/#swaggerui) that renders [Swagger UI](https://swagger.io/tools/swagger-ui/) using any OpenAPI YAML or JSON file as source.

These are the shortcodes configured in cloudcannon.config

&nbsp;

{{< card header="Header" title="A title" subtitle="A subtitle" footer="A footer" >}}https://placekitten.com/300/300{{< /card >}}
{{< cardpane >}}{{< card header="Header 2" title="A title 2" subtitle="A subtitle 2" footer="A footer 2" >}}
  ![porridge](second-image.jpg) <br>
  This is a porridge card
{{< /card >}}
{{< card header="Header 3" title="A title 3" subtitle="A subtitle 3" footer="A footer 3" >}}
  <img src="https://placekitten.com/300/300" alt="An internet kitten"/>
  This is another cat card
{{< /card >}}{{< /cardpane >}}
{{< card-code header="**JS**" lang="JS" >}}
  const greeting = "Ello World!"
  const name = "Docsy"

  console.log(`${greeting} It's ${name}.`) // "Ello World! It's Docsy."
{{< /card-code >}}

{{< alert color="danger" title="An alert" >}}
  This is an example alert
{{< /alert >}}

{{< tabpane text=true right=true >}}
  {{< tab header="**Kittens**:" disabled=true >}}{{< /tab >}}
  {{< tab header="Kitten 1" disabled=false >}}
    <img src="https://placekitten.com/500/500" alt="Kitty" />
    Welcome Kitty 1!
  {{< /tab >}}
  {{< tab header="Kitten 2" disabled=false >}}
    <img src="https://placekitten.com/500/450" alt="Kitty" />
    Welcome Kitty 2!
  {{< /tab >}}
  {{< tab header="Kitten 3" disabled=false >}}
    <img src="https://placekitten.com/500/400" alt="Kitty" />
    Welcome Kitty 3!
  {{< /tab >}}
{{< /tabpane >}}
{{< imgproc "sunset" "Fit" "400x400" >}}
  A sunset to test using the imgproc shortcode
{{< /imgproc >}}
{{< imgproc "second" "Fit" "350x700" >}}
  Another image
{{< /imgproc >}}
{{% pageinfo color="primary" %}}
  This is a placeholder page that shows you how to use this template site.
{{% /pageinfo %}}
{{< figure src="https://placekitten.com/200/200" title="Kitty" alt="Lil kitty" caption="A cute kitten" width="200" height="200" >}}
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

You can use the card snippet to insert a single card. This could be a plain card, or a code card like below, which supports syntax highlighting when a programming language is specified.

```go
func main() {
  input := `var foo = "bar";`

  lexer := lexers.Get("javascript")
  iterator, _ := lexer.Tokenise(nil, input)
  style := styles.Get("github")
  formatter := html.New(html.WithLineNumbers())

  var buff bytes.Buffer
  formatter.Format(&buff, style, iterator)

  fmt.Println(buff.String())
}
```
{{< card header="Header" title="Title" subtitle="Sub" footer="Foot" >}}```go
func main() {
  input := `var foo = "bar";`

  lexer := lexers.Get("javascript")
  iterator, _ := lexer.Tokenise(nil, input)
  style := styles.Get("github")
  formatter := html.New(html.WithLineNumbers())

  var buff bytes.Buffer
  formatter.Format(&buff, style, iterator)

  fmt.Println(buff.String())
}
```{{< /card >}}

Or you can use card pane as a wrapper for multiple cards anywhere in your markdown.

{{< cardpane >}}{{< card header="Card" title="Card" subtitle="Used to display some grouped information to the user" footer="End " >}}1. Insert the card pane snippet into your markdown using the snippet selector in the markdown toolbar.
2. Edit the card pane.
3. Use the top toolbar to insert cards into the card pane{{< /card >}}
{{< card header="Card" title="Card" subtitle="Used to display some grouped information to the user" footer="End" >}}1. Insert the card pane snippet into your markdown using the snippet selector in the markdown toolbar.
2. Edit the card pane.
3. Use the top toolbar to insert cards into the card pane{{< /card >}}{{< /cardpane >}}

### Tabs

Similar to cards above, you can use tabs inside a tab pane to display tabbed information. Unlike cards, tabs can only be used inside the tab pane wrapper.

{{< tabpane text=true right=true langEqualsHeader=true persistLang=false >}}{{< tab header="Languages" disabled=true >}}{{< /tab >}}
{{< tab header="Javascript" lang="javascript" disabled=false >}}const hello = "hello";{{< /tab >}}
{{< tab header="Go" lang="go" disabled=false >}}```go func main() {   input := `var foo = "bar";`    lexer := lexers.Get("javascript")   iterator, _ := lexer.Tokenise(nil, input)   style := styles.Get("github")   formatter := html.New(html.WithLineNumbers())    var buff bytes.Buffer   formatter.Format(&buff, style, iterator)    fmt.Println(buff.String()) } ```{{< /tab >}}
{{< tab header="Javascript" lang="js" disabled=false >}}```javascript
const something = "wont highlight";
```{{< /tab >}}{{< /tabpane >}}

### Readfile

Readfile allows you to import the contents of an external file into a document.

**TODO:** Figure out a way to change file input to access files in root rather than just in static. Could get it to work with a text input.

### Iframe

Embed external content into a Docsy page as an inline frame.

{{< iframe src="https://cloudcannon.com/" width="80%" tryautoheight=true style="border: none;" sandbox=false name="CloudCannon" id="CloudCannon" sub="Your browser cannot display embedded frames. You can access the embedded page via the following link" >}}

### Redoc

Renders API documentation from an OpenAPI YAML or JSON file.

{{< redoc "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v2.0/yaml/petstore.yaml" >}}

### Swagger UI

Can be placed anywhere inside a [page](/docs/snippets/swaggerui-example/) with the swagger layout. It renders [Swagger UI](https://swagger.io/tools/swagger-ui/) using any OpenAPI YAML or JSON file as source.
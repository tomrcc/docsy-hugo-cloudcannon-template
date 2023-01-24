---
categories: ["Examples", "Placeholders"]
tags: ["shortcodes","docs","snippets"] 
title: "Snippets/Shortcodes"
linkTitle: "Snippets/Shortcodes"
weight: 10
description: >
  A list of helpful shortcodes to reuse throughout your docs.
---
## Snippets/Shortcodes

Snippets, also known in Hugo as shortcodes are small reusable pieces of code that you can include in your markdown files.<br><br>Here are some of the ones you can use in Docsy:

### Page Info


### Image Processing

Used to process images in the same page bundle.

**TODO:** Need to decide how the image input is going to work, since this snippet only works with images in the local page bundle, not images in the static folder.

### Alert

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

Or you can use card pane as a wrapper for multiple cards anywhere in your markdown.

### Tabs

Similar to cards above, you can use tabs inside a tab pane to display tabbed information. Unlike cards, tabs can only be used inside the tab pane wrapper.

### Readfile

Readfile allows you to import the contents of an external file into a document.

**TODO:** Figure out a way to change file input to access files in root rather than just in static. Could get it to work with a text input.

### Iframe

Embed external content into a Docsy page as an inline frame.

### Redoc

Renders API documentation from an OpenAPI YAML or JSON file.

### Swagger UI

Can be placed anywhere inside a [page](/docs/snippets/swaggerui-example/) with the swagger layout. It renders [Swagger UI](https://swagger.io/tools/swagger-ui/) using any OpenAPI YAML or JSON file as source.
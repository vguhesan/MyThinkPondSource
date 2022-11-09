+++
title = "Convert JSON file to YAML using JQ"
description = "Article shows you how to convert a json file into yaml by using 'jq' utility."
date = "2022-11-08"
draft = "false"
categories = ["YAML"]
tags = ["JSON","YAML"]
thumbnail = "/img/logo/json2yaml-logo-v2.png"
lead = "Article shows you how to convert a json file into yaml by using 'jq' utility."
+++

{{<figure src="img/unsplash.jpg" width="100%" class="aligncenter round-img-border imgframe-left-pad" >}}

### What is this article about?

When you are working on the web or with DevOps or GitOps, you will have cases where you want to transform a JSON file to YAML. This article walks you though converting the JSON document to YAML using the "jq" tool.

- <a href="https://yaml.org/" target="_blank">Official YAML Spec</a>
- <a href="https://www.json.org/json-en.html" target="_blank">Official JSON Spec</a>
- <a href="https://stedolan.github.io/jq/" taraget="_blank">JQ Tool</a> (jq is like 'sed' for JSON data)

### Why YAML (over JSON)?

Here are a few reasons why developers prefer YAML over JSON:

- YAML is visually easier to look at. (Sometimes the {...} syntax with JSON can overwhelm your eyes with too much noise.)
- YAML has support for comments (JSON does not have a way to add comments.) YAML comments begin with the number sign (#)
- YAML has supports multiline strings using the "block style indicator" (|). It further enhances it with "block chomping indicator" with the use of (+), (-), default.
  - The block style indicates how newlines inside the block should behave.
  - The chomping indicator controls what should happen with newlines at the end of the string.
  - See <a href="https://yaml-multiline.info/" target="_blank">YAML Multiline</a> for a very good description on the usage.

### Prerequisite

- Make sure you have downloaded JQ and placed it in your PATH.
- Edit and place the following into `~/.jq`

<pre><code class="language-shell line-numbers">def yamlify2:
    (objects | to_entries | (map(.key | length) | max + 2) as $w |
        .[] | (.value | type) as $type |
        if $type == "array" then
            "\(.key):", (.value | yamlify2)
        elif $type == "object" then
            "\(.key):", "    \(.value | yamlify2)"
        else
            "\(.key):\(" " * (.key | $w - length))\(.value)"
        end
    )
    // (arrays | select(length > 0)[] | [yamlify2] |
        "  - \(.[0])", "    \(.[1:][])"
    )
    // .
    ;
</code></pre>

The above code adds a new function "yamlify2" to your library of jq functions.

### JSON to YAML conversion using JQ

Now we are ready to convert a JSON document to YAML.

## Syntax:

<pre><code class="language-shell line-numbers">jq -r yamlify2 input.json
# or
jq -r yamlify2 input.json > output.yaml
</code></pre>

## Working Example:

Filename: glossary.json

<pre><code class="language-json line-numbers">{
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}</code></pre>

<pre><code class="language-shell line-numbers">jq -r yamlify2 glossary.json
# or
jq -r yamlify2 glossary.json > glossary.yaml
</code></pre>

Result (under glossary.yaml)

<pre><code class="language-yaml line-numbers">glossary:
    title:     example glossary
    GlossDiv:
        title:      S
        GlossList:
            GlossEntry:
                ID:         SGML
                SortAs:     SGML
                GlossTerm:  Standard Generalized Markup Language
                Acronym:    SGML
                Abbrev:     ISO 8879:1986
                GlossDef:
                    para:          A meta-markup language, used to create markup languages such as DocBook.
                    GlossSeeAlso:
                      - GML
                      - XML
                GlossSee:   markup
</code></pre>

You should have a YAML file ready to use in your project.

Cheers

<hr>

<a href="https://www.buymeacoffee.com/vguhesan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

### Today's Quote

{{<figure src="/img/logo/thiruvalluvar.png" caption="" width="100" class="alignleft round-img-border imgframe-left-pad" >}}
<br/>
All the wealth acquired with perseverance (hard-work) by the worthy is for the exercise of benevolence (kindness).<br/>

- Kural 212
  **- <a href="https://en.wikipedia.org/wiki/Thiruvalluvar" target="_blank">Thiru Valluvar</a>** ( <a href="https://en.wikipedia.org/wiki/Kural" target="_blank">His Work</a> )

&nbsp;

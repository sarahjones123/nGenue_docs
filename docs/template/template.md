---
status: deprecated
---

# Few sample code to use

## Table
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Example 1

| Method      | Description                          |
| ----------- | ------------------------------------ |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |

### Example 2

| Browser                              | Version | Release date |         |        |      Usage |
| ------------------------------------ | ------: | -----------: | ------: | -----: | ---------: |
|                                      |         |              | desktop | mobile |    overall |
| :fontawesome-brands-chrome: Chrome   |     49+ |      03/2016 | 25.65%  | 38.33% |     63.98% |
| :fontawesome-brands-safari: Safari   |     10+ |      09/2016 |  4.63%  | 14.96% |     19.59% |
| :fontawesome-brands-edge: Edge       |     79+ |      01/2020 |  3.95%  |    n/a |      3.95% |
| :fontawesome-brands-firefox: Firefox |     53+ |      04/2017 |  3.40%  |   .30% |      3.70% |
| :fontawesome-brands-opera: Opera     |     36+ |      03/2016 |  1.44%  |   .01% |      1.45% |
|                                      |         |              |         |        | __92.67%__ |




## Warnings, Cautions, and Notes
!!! note "Note"

    The **Select Contact** step appears only for entities, such as an Employer, who have more than one contact available. Select the check boxes for the contacts attending the meeting, then click Next. The Adhoc Meeting Wizard moves to step 2 - Type.

[Twemoji]: https://twemoji.twitter.com/
[emoji search]: ../reference/icons-emojis.md#search

!!! warning "Warning"

    The **Select Contact** step appears only for entities, such as an Employer, who have more than one contact available. Select the check boxes for the contacts attending the meeting, then click Next. The Adhoc Meeting Wizard moves to step 2 - Type.

[Twemoji]: https://twemoji.twitter.com/
[emoji search]: ../reference/icons-emojis.md#search

!!! tip "Caution"

    The **Select Contact** step appears only for entities, such as an Employer, who have more than one contact available. Select the check boxes for the contacts attending the meeting, then click Next. The Adhoc Meeting Wizard moves to step 2 - Type.

[Twemoji]: https://twemoji.twitter.com/
[emoji search]: ../reference/icons-emojis.md#search

## Questions, Recommended and Tips

!!! question "How can I help you?"

    The **Select Contact** step appears only for entities, such as an Employer, who have more than one contact available. Select the check boxes for the contacts attending the meeting, then click Next. The Adhoc Meeting Wizard moves to step 2 - Type.

[Twemoji]: https://twemoji.twitter.com/
[emoji search]: ../reference/icons-emojis.md#search

!!! tip "Recommended"

    The **Select Contact** step appears only for entities, such as an Employer, who have more than one contact available. Select the check boxes for the contacts attending the meeting, then click Next. The Adhoc Meeting Wizard moves to step 2 - Type.

[Twemoji]: https://twemoji.twitter.com/
[emoji search]: ../reference/icons-emojis.md#search

## Adding two different codes for different regions (US and Canada)

??? question "How to add features for two different region?"

    Workflows only bundles selected plugins in order to keep the size
    of the official image small. If the plugin you want to use is not included,
    you can add them easily:

    === "US region"

        Hello World 1:

        ``` Dockerfile title="Dockerfile"
        FROM squidfunk/mkdocs-material
        RUN pip install mkdocs-macros-plugin
        RUN pip install mkdocs-glightbox
        ```

    === "Canada"

        Hello World 2:

        ``` txt title="user-requirements.txt"
        vitech-macros-plugin
        vitech-glightbox
        ```

    Next, build the image with the following command:

    ```
    docker build vitech .
    ```

    The new image will have additional packages installed and can be used
    exactly like the official image.

## Code block

``` javascript
    document$.subscribe(function() {
      console.log("Initialize third-party libraries here")
    })
```

## Representing code level change to multiple files

=== ":octicons-file-code-16: `base.html`"

    ``` diff
    @@ -13,11 +13,6 @@
           {% elif config.site_description %}
             <meta name="description" content="{{ config.site_description }}">
           {% endif %}
    -      {% if page and page.meta and page.meta.keywords %}
    -        <meta name="keywords" content="{{ page.meta.keywords }}">
    -      {% elif config.site_keywords %}
    -        <meta name="keywords" content="{{ config.site_keywords }}">
    +      {% endif %}
           {% if page and page.meta and page.meta.author %}
             <meta name="author" content="{{ page.meta.author }}">
           {% elif config.site_author %}
    @@ -61,15 +56,13 @@
                 font.text | replace(' ', '+') + ':300,400,400i,700%7C' +
                 font.code | replace(' ', '+')
               }}&display=fallback">
    -        <style>:root{--md-text-font-family:"{{ font.text }}";--md-code-font-family:"{{ font.code }}"}</style>
    +        <style>:root{--md-text-font:"{{ font.text }}";--md-code-font:"{{ font.code }}"}</style>
           {% endif %}
         {% endblock %}
    -    {% if config.extra.manifest %}
    -      <link rel="manifest" href="{{ config.extra.manifest | url }}" crossorigin="use-credentials">
    -    {% endif %}
         {% for path in config["extra_css"] %}
           <link rel="stylesheet" href="{{ path | url }}">
         {% endfor %}
    +    {% include "partials/javascripts/base.html" %}
         {% block analytics %}
           {% include "partials/integrations/analytics.html" %}
         {% endblock %}
    ```

=== ":octicons-file-code-16: `partials/copyright.html`"

    ``` diff
    @@ -0,0 +1,16 @@
    +{#-
    +  This file was automatically generated - do not edit
    +-#}
    +<div class="md-copyright">
    +  {% if config.copyright %}
    +    <div class="md-copyright__highlight">
    +      {{ config.copyright }}
    +    </div>
    +  {% endif %}
    +  {% if not config.extra.generator == false %}
    +    Made with
    +    <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank" rel="noopener">
    +      Material for MkDocs
    +    </a>
    +  {% endif %}
    +</div>
    ```

=== ":octicons-file-code-16: `partials/footer.html`"

    ``` diff
    @@ -41,21 +40,10 @@
       {% endif %}
       <div class="md-footer-meta md-typeset">
         <div class="md-footer-meta__inner md-grid">
    -      <div class="md-footer-copyright">
    -        {% if config.copyright %}
    -          <div class="md-footer-copyright__highlight">
    -            {{ config.copyright }}
    -          </div>
    -        {% endif %}
    -        {% if not config.extra.generator == false %}
    -          Made with
    -          <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank" rel="noopener">
    -            Material for MkDocs
    -          </a>
    -        {% endif %}
    -        {{ extracopyright }}
    -      </div>
    -      {% include "partials/social.html" %}
    +      {% include "partials/copyright.html" %}
    +      {% if config.extra.social %}
    +        {% include "partials/social.html" %}
    +      {% endif %}
         </div>
       </div>
     </footer>
    ```

=== ":octicons-file-code-16: `partials/social.html`"

    ``` diff
    @@ -4,17 +4,15 @@
    -{% if config.extra.social %}
    -  <div class="md-footer-social">
    -    {% for social in config.extra.social %}
    -      {% set title = social.name %}
    -      {% if not title and "//" in social.link %}
    -        {% set _,url = social.link.split("//") %}
    -        {% set title = url.split("/")[0] %}
    -      {% endif %}
    -      <a href="{{ social.link }}" target="_blank" rel="noopener" title="{{ title | e }}" class="md-footer-social__link">
    -        {% include ".icons/" ~ social.icon ~ ".svg" %}
    -      </a>
    -    {% endfor %}
    -  </div>
    -{% endif %}
    +<div class="md-social">
    +  {% for social in config.extra.social %}
    +    {% set title = social.name %}
    +    {% if not title and "//" in social.link %}
    +      {% set _, url = social.link.split("//") %}
    +      {% set title  = url.split("/")[0] %}
    +    {% endif %}
    +    <a href="{{ social.link }}" target="_blank" rel="noopener" title="{{ title | e }}" class="md-social__link">
    +      {% include ".icons/" ~ social.icon ~ ".svg" %}
    +    </a>
    +  {% endfor %}
    +</div>
    ```


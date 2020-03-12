---
layout: default
permalink: "/author-guidelines"
---

## Guidelines for Authors

### New Posts

To create a post, add a file to the `_posts` directory with the following format:

    YEAR-MONTH-DAY-wh-weekly.md

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers.

All posts must use the following structure: 

    ---
    title: The Title
    author: author_name
    spoilers: [Lakers vs Clippers, All games on Wednesday, Steph Curry]
    ---
    Intro paragraph (don't add a title here if it's the same as the title-variable). Also, no spoilers here!
    <!--spoilers-->
    The rest of your content (may contain spoilers)

### Spoilers

A spoiler tag shouldn’t be a spoiler in itself. I.e. instead of `Curry’s injury` use `Steph Curry`.

Content before the `<!--spoilers-->`-separator must not include spoilers. An example post can be found in the `_drafts` directory.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

    Syntax highlighted code block

    # Header 1
    ## Header 2
    ### Header 3

    - Bulleted
    - List

    1. Numbered
    2. List

    **Bold** and _Italic_ and `Code` text

    [Link](url) and ![Image](src)

For more details see [Markdown Syntax](https://daringfireball.net/projects/markdown/syntax).

---
title:  How to Add Posts
author: admin
spoilers: [This is a topic, And another one]
game_recommendations: [Bucks vs Lakers (March 6), Lakers vs Clippers (March 8)]
published: false
---

To add a new post, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-title-of-post.md` and change the  variables `title`, `author` and `spoilers` according to your post. Finally change `published: false` to `published: true`.

You can format your text with [Markdown](https://daringfireball.net/projects/markdown/syntax). Some basics:

    ## This is large heading

    This is a paragraph with **some bold text**.

    This is another paragraph with a [link](https://google.com).

    ### This is a smaller heading

    > This is a blockquote.
    > 
    > This is the second paragraph in the blockquote.


### About spoilers

Separate your content into two parts — one before and one after the spoilers-separator:

So content here may contain spoilers.

<!--spoilers-->

#### No Spoilers

This section *must not* contain spoilers.


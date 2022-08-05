---
sidebar_position: 0
displayed_sidebar: techdoc
---

# How to add a new top navigation bar item

Every top navigation bar menu item has its own **"Intro"** markdown file. If you would like to have two different top navigation bar menu items (as in the figure below **"Articles"** and **"TechCom"**), you need to create its own **"Intro"** markdown file and its own folder inside the **"docs"** folder for each.

![Two menu items](/img/docusaurus/twomenuitems.png "Two menu items")

1. Let the first **"Intro"** markdown file for the **"Articles"** menu item has the name **"intro.md"** and the second **"Intro"** markdown file for the **"TechCom"** menu item has the name **"introtechdoc.md"**.

---

> :warning: **Pay attention!** 

Both **"Intro"** markdown files and their corresponding **"articles"** and **"techdoc"** folders must be created only in the **"docs"** folder!

![Two intro files](/img/docusaurus/twointrofiles.png "Two intro files")

---

2. Open both **"Intro"** markdown files and add their own corresponding front matters to them:
* **"intro.md"** should have `displayed_sidebar: articles`

> :warning: **Pay attention!**

Do not rename **"intro.md"** file as its name is connected to other files.

![Front Matter for intro.md](/img/docusaurus/articlesmdfrontmatter.png "Front Matter for intro.md")

* **"introtechdoc.md"** should have `displayed_sidebar: techdoc`

![Front Matter for introtechdoc.md](/img/docusaurus/techdocmdfrontmatter.png "Front Matter for introtechdoc.md")

3. Open the "docusaurus.config.js" file and add two elements in the `items` array. 

---

> :warning: **Pay attention!**

The `sidebarId`s have the same names as the corresponding folders names  (**"articles"** and **"techdoc"**), `docId`s have the same names as the corresponding **"Intro"** markdown files (**"intro.md"** and **"introtechdoc.md"**) and `label`s have the names of your top navigation bar menu items (**"Articles"** and **"TechCom"**).

![Two elements in the items array](/img/docusaurus/itemsarrayelements.png "Two elements in the items array")

---

4. Open the "sidebars.js" file and add two elements (`techdoc` and `articles`) in the `const sidebars` array. Default `tutorialSidebar` must be commented as you do not need it now.

![Two elements in the const sidebars array](/img/docusaurus/constsidebar.png "Two elements in the const sidebars array")

5. After you create new folders inside the top navigation bar menu item folders (**"articles"** and **"techdoc"**), they will appear as new subitems in the vertical sidebar menu. 

---

> :warning: **Pay attention!**

The new subitems in the vertical sidebar menu will appear only after you create new markdown files inside them. 

![Folder structure](/img/docusaurus/folderstructure.png "Folder structure")

6. If you want to arrange your sidebar menu items in a certain order, you need to create a `_category_.json` file in every sidebar folder you have like in the figure below.

![Category json files](/img/docusaurus/categoryjson.png "Category json files")

The **label** of a `_category_.json`must be the same as your sidebar menu item and the **position** as you want to be in your sidebar menu for this item. The **description** key will be shown at the page when you click on the menu item.

```
{
  "label": "Bukvoid",
  "position": 1,
  "link": {
    "type": "generated-index",
    "description": "A collection of articles, published at bukvoid.com from 2008 to 2012."
  }
}
```
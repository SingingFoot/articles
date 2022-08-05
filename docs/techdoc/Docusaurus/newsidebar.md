---
sidebar_position: 0
displayed_sidebar: techdoc
---

# How to add a new horizontal sidebar item

Every horizontal menu item has its own **"Intro"** markdown file. If you would like to have two different horizontal menu items (as in the figure below **"Articles"** and **"TechCom"**), you need to create its own **"Intro"** markdown file and its own folder inside the **"docs"** folder for each.

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

Do not rename **"intro.md"** file.

![Front Matter for intro.md](/img/docusaurus/articlesmdfrontmatter.png "Front Matter for intro.md")

* **"introtechdoc.md"** should have `displayed_sidebar: techdoc`

![Front Matter for introtechdoc.md](/img/docusaurus/techdocmdfrontmatter.png "Front Matter for introtechdoc.md")

3. Open the "docusaurus.config.js" file and add two elements in the `items` array. 

---

> :warning: **Pay attention!**

The `sidebarId`s have the same names as the corresponding folders names  (**"articles"** and **"techdoc"**), `docId`s have the same names as the corresponding **"Intro"** markdown files (**"intro.md"** and **"introtechdoc.md"**) and `label`s have the names of your horizontal menu items (**"Articles"** and **"TechCom"**).

![Two elements in the items array](/img/docusaurus/itemsarrayelements.png "Two elements in the items array")

---

4. Open the "sidebars.js" file and add two elements (`techdoc` and `articles`) in the `const sidebars` array. Default `tutorialSidebar` must be commented as you do not need it now.

![Two elements in the const sidebars array](/img/docusaurus/constsidebar.png "Two elements in the const sidebars array")

5. After you create new folders inside the horizontal menu item folders (**"articles"** and **"techdoc"**), they will appear as new subitems in the vertical menu. 

---

> :warning: **Pay attention!**

The new subitems in the vertical menu will appear only after you create new markdown files inside them. 

![Folder structure](/img/docusaurus/folderstructure.png "Folder structure")
# How to Add a New Resource to the Website

This guide explains how to add a new resource to the MIUS Committee website. It is written for contributors who may not have a technical background.

## What you need before starting

Before adding a resource, make sure you have:

* A GitHub account
* The title of the resource
* A short description of the resource
* A link to the full document or webpage
* A cover image, if you want to include one

The cover image is optional. It can be a `.jpg` or `.png` file.

## How resources are organized

Each resource has its own folder inside the website files. That folder usually includes:

* An `index.md` file, which contains the text and information for the resource
* A cover image, if one is being used

For example, a resource about student housing may have a folder like this:

```text
committee_resources/student-housing/index.md
```

## Step 1: Go to the resources folder

Open the website repository on GitHub.

Then go through these folders:

```text
content → english → committee_resources
```

Inside this folder, you should see existing resource folders, such as:

```text
healthcare
immigration
mental_health
```

## Step 2: Create a new resource folder

Click **Add file**, then choose **Create new file**.

In the file name box, write the name of your new folder, followed by `/index.md`.

Use lowercase letters and hyphens for the folder name.

Examples:

```text
student-housing/index.md
financial-aid/index.md
mental-health-support/index.md
```

The file must be called `index.md`.

## Step 3: Add the resource information

Copy and paste this template into the file editor:

```markdown
---
title: "Your Resource Title"
date: YYYY-MM-DD
location: "MIUS, Vancouver"
summary: "A short one-sentence summary of the resource"
cover: "cover.jpg"
tags: ["Category Name"]
---

**Last Update:** Month DD, YYYY

**Summary:** Write a short paragraph explaining what this resource is about and who it is for. Two or three sentences are enough.

You can access the complete document with this [link](https://your-link-here.com).
```

## Step 4: Replace the placeholder text

Update the template with your own information.

Use the following format:

* **Title:** The name of the resource
  Example: `Student Housing Resources`

* **Date:** The date you are adding or updating the resource
  Example: `2024-01-15`

* **Summary:** A short sentence that will appear on the website card

* **Last Update:** A readable version of the date
  Example: `Jan 15, 2024`

* **Main summary:** A short paragraph explaining the resource

* **Link:** The link to the full resource document or webpage

* **Tags:** A category for the resource
  Example: `["Housing"]`, `["Financial Support"]`, or `["Healthcare"]`

## Step 5: Save your changes

After adding the content, scroll to the bottom of the page.

In the **Commit changes** section:

1. In the first box, write a short message describing what you added.
   Example: `Add student housing resource`

2. The second box is optional. You can leave it empty.

3. Select **Create a new branch**.

4. Give the branch a clear name.
   Example: `add-student-housing-resource`

5. Click **Propose new file**.

6. On the next page, click **Create pull request**.

After this, your resource will be submitted for review.

## Adding a cover image

If you want to add a cover image, first create the resource folder and the `index.md` file.

Then go back to the resource folder and click:

```text
Add file → Upload files
```

Upload your image file.

If the template says:

```markdown
cover: "cover.jpg"
```

then your image should be named:

```text
cover.jpg
```

If your image has a different name, update the `cover` line in `index.md`.

For example:

```markdown
cover: "housing-image.png"
```

Try to keep image files under 1 MB so the website loads faster.

## Editing an existing resource

To update a resource that already exists:

1. Go to the resource folder
2. Open `index.md`
3. Click the pencil icon to edit the file
4. Make your changes
5. Scroll down and commit the changes with a short message

Example commit message:

```text
Update immigration resource
```

## Basic formatting

You can use simple Markdown formatting in the resource file.

```markdown
**Bold text**
```

This makes text bold.

```markdown
*Italic text*
```

This makes text italic.

```markdown
[Link text](https://example.com)
```

This creates a clickable link.

```markdown
- First item
- Second item
- Third item
```

This creates a bullet list.

```markdown
1. First step
2. Second step
3. Third step
```

This creates a numbered list.

## Example resource

Here is an example of a completed resource file:

```markdown
---
title: "Financial Aid Resources"
date: 2024-01-15
location: "MIUS, Vancouver"
summary: "Information about financial support options for international students"
cover: "cover.jpg"
tags: ["Financial Aid"]
---

**Last Update:** Jan 15, 2024

**Summary:** This resource provides information about financial aid options available to international students at UBC. It includes scholarships, bursaries, work-study programs, and emergency funding options.

You can access the complete document with this [link](https://docs.google.com/document/d/your-document-id).
```

## Notes before submitting

Before creating the pull request, check the following:

* The folder name uses lowercase letters and hyphens
* The file is named `index.md`
* The required lines between `---` are included
* The date format is correct
* The link works
* The cover image name matches the `cover` line, if you added an image
* The summary is short and clear

## Getting help

If something does not work, first compare your file with the example above.

If the issue is still unclear, you can open an issue on GitHub and describe the problem. You can also contact the MIUS Committee for help.

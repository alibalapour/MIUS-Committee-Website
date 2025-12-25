# How to Add Content to the Resources Page

This guide will help you add new resources to the MIUS Committee website. **No technical experience needed!** Just follow these simple steps.

## 📋 What You'll Need

- A GitHub account (free to create at [github.com](https://github.com))
- Your resource content (title, description, and links)
- An optional cover image (any `.jpg` or `.png` file)

## 🎯 Quick Overview

Resources are organized in folders. Each resource is its own folder containing:
- A text file with your content (`index.md`)
- An optional cover image (if you want to add one)

## 📝 Step-by-Step Instructions

### Step 1: Navigate to the Resources Folder

1. Go to the website's GitHub page
2. Click on the `content` folder
3. Click on the `english` folder
4. Click on the `committee_resources` folder

You should now see folders like `healthcare`, `immigration`, and `mental_health`.

### Step 2: Create a New Resource Folder

1. Click the **"Add file"** button at the top right
2. Select **"Create new file"**
3. In the name field, type: `your-resource-name/index.md`
   - Replace `your-resource-name` with something short and descriptive (use lowercase and hyphens)
   - Example: `student-housing/index.md` or `financial-aid/index.md`

### Step 3: Add Your Content

Copy and paste this template into the file editor:

```markdown
---
title: "Your Resource Title Here"
date: 2025-12-25
location: "MIUS, Vancouver"
summary: "A short one-sentence description of your resource"
cover: "cover.jpg"
tags: ["Your Category"]
---

**Last Update:** Dec 25, 2025

**Summary:** Write a longer description of your resource here. Explain what information it contains and who it's for. This can be 2-3 sentences.

You can access the complete document with this [link](https://your-link-here.com).
```

### Step 4: Customize the Template

Replace the placeholder text with your information:

- **Title**: The name of your resource (e.g., "Student Housing Resources")
- **Date**: Today's date in format YYYY-MM-DD (e.g., 2025-12-25)
- **Summary** (at the top): One short sentence (appears on cards)
- **Last Update**: Today's date in readable format (e.g., Dec 25, 2025)
- **Summary** (in the body): A longer description (2-3 sentences)
- **Link**: The URL to your full resource document
- **Tags**: A category name in brackets, like `["Housing"]` or `["Financial Support"]`

### Step 5: Save Your Changes

1. Scroll to the bottom of the page
2. In the **"Commit changes"** section:
   - First box: Write a short description like "Add student housing resource"
   - Second box: (Optional) Add more details if needed
3. Select **"Create a new branch"** and give it a name like `add-housing-resource`
4. Click **"Propose new file"**
5. On the next page, click **"Create pull request"**

That's it! Your resource has been submitted for review.

## 📸 Adding a Cover Image (Optional)

If you want to add a cover image to make your resource more visually appealing:

1. After creating your `index.md` file (from Step 3)
2. Go back to your resource folder (e.g., `committee_resources/your-resource-name/`)
3. Click **"Add file"** → **"Upload files"**
4. Drag and drop your image or click to browse
5. Name your image file `cover.jpg` or update the `cover:` line in your `index.md` to match your image name
6. Add a commit message like "Add cover image"
7. Commit to the same branch you created earlier

## ✏️ Editing Existing Resources

To update a resource that already exists:

1. Navigate to the resource folder
2. Click on `index.md`
3. Click the pencil icon (✏️) at the top right to edit
4. Make your changes
5. Scroll down and commit changes with a description

## 🎨 Formatting Tips

You can use these simple formatting tricks in your content:

- `**Bold text**` makes **bold text**
- `*Italic text*` makes *italic text*
- `[Link text](https://url.com)` creates a clickable link
- Start lines with `-` to create bullet lists
- Start lines with `1.` `2.` etc. to create numbered lists

## 📋 Example of a Complete Resource

Here's what a real resource looks like:

```markdown
---
title: "Financial Aid Resources"
date: 2025-12-25
location: "MIUS, Vancouver"
summary: "Information about financial support for international students"
cover: "cover.jpg"
tags: ["Financial Aid"]
---

**Last Update:** Dec 25, 2025

**Summary:** This resource provides information about financial aid options available to international students at UBC, including scholarships, bursaries, work-study programs, and emergency funding. It covers eligibility requirements and application processes.

You can access the complete document with this [link](https://docs.google.com/document/d/your-document-id).
```

## ❓ Need Help?

If you run into any issues or have questions:

1. Check if your resource follows the format shown in the examples
2. Make sure all the required fields are filled in (especially the `---` lines at the top and bottom)
3. Open an issue on GitHub describing your problem
4. Contact the MIUS Committee for assistance

## 📚 Additional Notes

- **Resource names**: Use lowercase letters and hyphens (e.g., `mental-health`, not `Mental Health` or `mental_health`)
- **File name**: Must always be `index.md` (lowercase)
- **Links**: Make sure your links work before submitting
- **Images**: Keep image files small (under 1 MB) for faster loading

Thank you for contributing to the MIUS Committee website! 🎉

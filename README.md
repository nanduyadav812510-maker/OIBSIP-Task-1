# OIBSIP - Oasis Infobyte Internship Projects

A responsive Level 1 project dashboard with three independent projects: a guidance landing page, a personal portfolio, and a temperature converter.

## Folder structure

```text
OIBSIP/
├── index.html
├── style.css
├── README.md
├── profile.jpg
├── images/
│   └── profile.svg
├── TASK_1/
│   ├── index.html
│   └── style.css
├── TASK_2/
│   ├── index.html
│   └── style.css
└── TASK_3/
    ├── index.html
    ├── style.css
    └── script.js
```

## Technologies

HTML5, CSS3, and vanilla JavaScript. No build step or package installation is required. Google Fonts are optional; system fallbacks are included.

## Run in VS Code

Open this folder in VS Code and open `index.html` with the Live Server extension. You can also run `python -m http.server 8000` in the project folder and visit `http://localhost:8000`.

## Customize the profile avatar

The dashboard and portfolio use the existing `profile.jpg` image. Replace it with an image you have permission to use and keep the same filename, or update its path and alt text in `index.html` and `TASK_2/index.html`. `images/profile.svg` remains available as an initials-based fallback.

## Configure repository and demo links

The dashboard labels repository destinations as unconfigured because no repository URLs were supplied. Set the matching `task-1`, `task-2`, or `task-3` value in the `repositoryUrls` object in `index.html` to a real `https://` or `http://` repository URL. Demo buttons currently open their corresponding local project page; change their text and `href` to a real demo video URL when published. Active website links point to the local task pages.

## Contact and community

The Task 1 landing page intentionally uses on-page contact/community sections and does not claim that unconfigured external contact services are available. Replace those placeholders with verified details when ready.

# Hackathoughts

Hackathoughts is a place for hackathon organizers to share useful organizing tips. It is the product of many, many people generously sharing their many, many perspectives.

This repo is maintained by me, [Adam](https://github.com/theycallmezeal).

## Submitting via PR

Create a new file in `/_data/tips`. The file should be called `your_github_username.yaml`. All of your contributions will go into your personal YAML file.

The format of the YAML file is as follows:

```
author: your human-readable name
tips:
- tip: Lorem ipsum \"dolor sit amet\"
  date: YYYY-MM-DD (date of submission)
  tags:
  - registration
  - inclusion
  - website
- tip: Lorem ipsum \"dolor sit amet\"
  by: another human-readable name (optional)
  date: YYYY-MM-DD (date of submission)
  tags:
  - food
  - swag
```

Note:

* If you use quotes anywhere, escape them with a `\`.
* By default, your tip will be credited to the `author` at the top of the file. Adding an optional `by` field to a tip allows you to override the `author` and credit different tips to different people. (Hackathons are collaborative; give credit generously!)
* You can put whatever you want in the `author` or `by` fields: your name, your contact, your hackathon... just keep it brief.
* The tags must be among those listed in `_data/tags.yaml`.

If, after you contribute once, you'd like to add more tips, update your existing personal YAML file (don't create a new one). Just make sure that the new tips' `date` fields reflect the new date of submission.

Thank you for contributing!
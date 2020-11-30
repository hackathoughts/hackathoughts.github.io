# Hackathoughts

## Submitting via PR

Create a new file in `/_data/tips`. The file should be called `your_github_username.yaml`. All of your contributions will go into your personal YAML file.

The format of the YAML file is as follows:

```
author: your human-readable name
tips:
- tip: Lorem ipsum \"dolor sit amet\"
  date: YYYY-MM-DD
  tags:
  - registration
  - inclusion
  - website
- tip: Lorem ipsum \"dolor sit amet\"
  by: another human-readable name (optional)
  date: YYYY-MM-DD
  tags:
  - food
  - swag
```

Of note:

* If you use quotes anywhere, be sure to escape them.
* By default, your tip will be credited to the `author` at the top of the file. Adding an optinonal `by` field to a tip allows you to override the `author` and credit different tips to different people. (Hackathons are collaborative; give credit generously!)
* You can put whatever you want in the `author` or `by` fields: your name, your contact, your hackathon... just keep it brief.
* The tags must be among those listed in `_data/tags.yaml`.
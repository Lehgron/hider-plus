Fork of the [hider](https://github.com/kepano/obsidian-hider) plugin. 

This plugin expands on the hider plugin build by kepano in 2 ways.
1. Adding the control for the ribbon, inline title and tab title bar to the plugin settings. Now all UI elements can be hidden or shown through one settings page.
2. Adding commands for toggling, showing and hiding of all UI elements.

The commands for hiding and showing the UI elements are intended for use with other plugins, like QuickAdd. This way you could create different views customized to your liking, between which you could quickly switch.

## Overview

Note that your CSS theme may override Hider.

- tab bar 
- tab title bar
- inline title
- status bar 
- vault name
- scrollbars
- sidebar toggle buttons
- ribbon 
- tooltips
- file explorer buttons
- instructions in prompts
- search suggestions
- count of search term matches
- metadata in Reading view

## Making your theme compatible with Hider Plus

Hider injects the following classes on the `body` element when features are toggled on.
For the tab title bar, inline title and ribbon it uses the app internal settings. These shouldn't interfere with what you are doing.

| Toggle | Class |
| ------ | ----- |
| Tab bar | `.hider-tabs` |
| Status bar | `.hider-status` |
| Vault name | `.hider-vault` |
| Scrollbars | `.hider-scroll` |
| Sidebar toggle buttons| `hider-sidebar-buttons` |
| Tooltips | `.hider-tooltips` |
| File explorer buttons | `.hider-file-nav-header` |
| Instructions | `.hider-instructions` |
| Search suggestions | `.hider-search-suggestions` |
| Search term counts | `.hider-search-counts` |
| Metadata | `.hider-meta` |

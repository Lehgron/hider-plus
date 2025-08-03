import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class HiderPlus extends Plugin {
	settings: HiderPlusSettings;

	async onload() {
		// load settings
		await this.loadSettings();

		// add the settings tab
		this.addSettingTab(new HiderPlusSettingTab(this.app, this));
		// add the toggle on/off command

		this.addCommand({
			id: 'toggle-tab-containers',
			name: 'Toggle tab bar',
			callback: () => {
				this.settings.hideTabs = !this.settings.hideTabs;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'show-tab-containers',
			name: 'Show tab bar',
			callback: () => {
				this.settings.hideTabs = false;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'hide-tab-containers',
			name: 'Hide tab bar',
			callback: () => {
				this.settings.hideTabs = true;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'toggle-tab-title-bar',
			name: 'Toggle tab title bar',
			callback: () => {
				this.app.vault.setConfig("showViewHeader", !this.app.vault.getConfig("showViewHeader"));
			}
		});
		this.addCommand({
			id: 'show-tab-title-bar',
			name: 'Show tab title bar',
			callback: () => {
				this.app.vault.setConfig("showViewHeader", true);
			}
		});
		this.addCommand({
			id: 'hide-tab-title-bar',
			name: 'Hide tab title bar',
			callback: () => {
				this.app.vault.setConfig("showViewHeader", false);
			}
		});
		this.addCommand({
			id: 'toggle-inline-title',
			name: 'Toggle inline title',
			callback: () => {
				this.app.vault.setConfig("showInlineTitle", !this.app.vault.getConfig("showInlineTitle"));
			}
		});
		this.addCommand({
			id: 'show-inline-title',
			name: 'Show inline title',
			callback: () => {
				this.app.vault.setConfig("showInlineTitle", true);
			}
		});
		this.addCommand({
			id: 'hide-inline-title',
			name: 'Hide inline title',
			callback: () => {
				this.app.vault.setConfig("showInlineTitle", false);
			}
		});
		this.addCommand({
			id: 'toggle-hider-status',
			name: 'Toggle status bar',
			callback: () => {
				this.settings.hideStatus = !this.settings.hideStatus;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'show-hider-status',
			name: 'Show status bar',
			callback: () => {
				this.settings.hideStatus = false;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'hide-hider-status',
			name: 'Hide status bar',
			callback: () => {
				this.settings.hideStatus = true;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'toggle-hider-vault-name',
			name: 'Toggle vault name. Warning: hides access to settings and vault switcher.',
			callback: () => {
				this.settings.hideVault = !this.settings.hideVault;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'show-hider-vault-name',
			name: 'Show vault name. Warning: hides access to settings and vault switcher.',
			callback: () => {
				this.settings.hideVault = false;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'hide-hider-vault-name',
			name: 'Hide vault name. Warning: hides access to settings and vault switcher.',
			callback: () => {
				this.settings.hideVault = true;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'toggle-hider-scroll-bars',
			name: 'Toggle scroll bars',
			callback: () => {
				this.settings.hideScroll = !this.settings.hideScroll;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'show-hider-scroll-bars',
			name: 'Show scroll bars',
			callback: () => {
				this.settings.hideScroll = false;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'hide-hider-scroll-bars',
			name: 'Hide scroll bars',
			callback: () => {
				this.settings.hideScroll = true;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'toggle-sidebar-toggle-buttons',
			name: 'Toggle both sidebar buttons',
			callback: () => {
				this.settings.hideSidebarButtons = !this.settings.hideSidebarButtons;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'show-sidebar-toggle-buttons',
			name: 'Show both sidebar buttons',
			callback: () => {
				this.settings.hideSidebarButtons = false;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'hide-sidebar-toggle-buttons',
			name: 'Hide both sidebar buttons',
			callback: () => {
				this.settings.hideSidebarButtons = true;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'toggle-ribbon',
			name: 'Toggle ribbon',
			callback: () => {
				this.app.commands.executeCommandById("app:toggle-ribbon");
			}
		});
		this.addCommand({
			id: 'show-ribbon',
			name: 'Show ribbon',
			callback: () => {
				this.app.vault.setConfig("showRibbon", true);
			}
		});
		this.addCommand({
			id: 'hide-ribbon',
			name: 'Hide  ribbon',
			callback: () => {
				this.app.vault.setConfig("showRibbon", false);
			}
		});
		this.addCommand({
			id: 'toggle-tooltips',
			name: 'Toggle tooltips',
			callback: () => {
				this.settings.hideTooltips = !this.settings.hideTooltips;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'show-tooltips',
			name: 'Show tooltips',
			callback: () => {
				this.settings.hideTooltips = false;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'hide-tooltips',
			name: 'Hide tooltips',
			callback: () => {
				this.settings.hideTooltips = true;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'toggle-file-explorer-buttons',
			name: 'Toggle file explorer buttons',
			callback: () => {
				this.settings.hideFileNavButtons = !this.settings.hideFileNavButtons;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'show-file-explorer-buttons',
			name: 'Show file explorer buttons',
			callback: () => {
				this.settings.hideFileNavButtons = false;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'hide-file-explorer-buttons',
			name: 'Hide file explorer buttons',
			callback: () => {
				this.settings.hideFileNavButtons = true;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'toggle-instructions',
			name: 'Toggle instructions',
			callback: () => {
				this.settings.hideInstructions = !this.settings.hideInstructions;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'show-instructions',
			name: 'Show instructions',
			callback: () => {
				this.settings.hideInstructions = false;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'hide-instructions',
			name: 'Hide instructions',
			callback: () => {
				this.settings.hideInstructions = true;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'toggle-search-suggestions',
			name: 'Toggle search suggestions',
			callback: () => {
				this.settings.hideSearchSuggestions = !this.settings.hideSearchSuggestions;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'show-search-suggestions',
			name: 'Show search suggestions',
			callback: () => {
				this.settings.hideSearchSuggestions = false;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'hide-search-suggestions',
			name: 'Hide search suggestions',
			callback: () => {
				this.settings.hideSearchSuggestions = true;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'toggle-count-search-matches',
			name: 'Toggle count of search term matches',
			callback: () => {
				this.settings.hideSearchCounts = !this.settings.hideSearchCounts;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'show-count-search-matches',
			name: 'Show count of search term matches',
			callback: () => {
				this.settings.hideSearchCounts = false;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'hide-count-search-matches',
			name: 'Hide count of search term matches',
			callback: () => {
				this.settings.hideSearchCounts = true;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'toggle-properties in Reading view',
			name: 'Toggle properties in reading view',
			callback: () => {
				this.settings.hidePropertiesReading = !this.settings.hidePropertiesReading;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'show-properties in Reading view',
			name: 'Show properties in reading view',
			callback: () => {
				this.settings.hidePropertiesReading= false;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.addCommand({
			id: 'hide-properties in Reading view',
			name: 'Hide properties in reading view',
			callback: () => {
				this.settings.hidePropertiesReading= true;
				this.saveData(this.settings);
				this.refresh();
			}
		});
		this.refresh()
	}

	onunload() {
		console.log('Unloading Hider Plus plugin');
	}

	async loadSettings() {
		this.settings = Object.assign(DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	// refresh function for when we change settings
	refresh = () => {
		// re-load the style
		this.updateStyle()
	}

	// update the styles (at the start, or as the result of a settings change)
	updateStyle = () => {
		document.body.classList.toggle('hider-status', this.settings.hideStatus);
		document.body.classList.toggle('hider-tabs', this.settings.hideTabs);
		document.body.classList.toggle('hider-scroll', this.settings.hideScroll);
		document.body.classList.toggle('hider-sidebar-buttons', this.settings.hideSidebarButtons);
		document.body.classList.toggle('hider-tooltips', this.settings.hideTooltips);
		document.body.classList.toggle('hider-search-suggestions', this.settings.hideSearchSuggestions);
		document.body.classList.toggle('hider-file-nav-header', this.settings.hideFileNavButtons);
		document.body.classList.toggle('hider-search-counts', this.settings.hideSearchCounts);
		document.body.classList.toggle('hider-instructions', this.settings.hideInstructions);
		document.body.classList.toggle('hider-meta', this.settings.hidePropertiesReading);
		document.body.classList.toggle('hider-vault', this.settings.hideVault);
	}

}

interface HiderPlusSettings {
	hideStatus: boolean;
	hideTabs: boolean;
	hideScroll: boolean;
	hideSidebarButtons: boolean;
	hideTooltips: boolean;
	hideFileNavButtons: boolean;
	hideSearchSuggestions: boolean;
	hideSearchCounts: boolean;
	hideInstructions: boolean;
	hidePropertiesReading: boolean;
	hideVault: boolean;
}
const DEFAULT_SETTINGS: HiderPlusSettings = {
	hideStatus: false,
	hideTabs: false,
	hideScroll: false,
	hideSidebarButtons: false,
	hideTooltips: false,
	hideFileNavButtons: false,
	hideSearchSuggestions: false,
	hideSearchCounts: false,
	hideInstructions: false,
	hidePropertiesReading: false,
	hideVault: false
}

class HiderPlusSettingTab extends PluginSettingTab {
	plugin: HiderPlus;
	constructor(app: App, plugin: HiderPlus) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Hide tab bar')
			.setDesc('Hides the tab container at the top of the window.')
			.addToggle(toggle => toggle.setValue(this.plugin.settings.hideTabs)
				.onChange((value) => {
					this.plugin.settings.hideTabs = value;
					this.plugin.saveData(this.plugin.settings);
					this.plugin.refresh();
				})
			);
		
		new Setting(containerEl)
			.setName('Hide tab title bar')
			.setDesc('Hides the header at the top of every tab.')
			.addToggle(toggle => toggle.setValue(!this.app.vault.getConfig("showViewHeader"))
				.onChange((value) => {
					this.app.vault.setConfig("showViewHeader", !this.app.vault.getConfig("showViewHeader"));
				})
			);

		new Setting(containerEl)
			.setName('Hide inline title')
			.setDesc('Hides the filname as an editable title inline with the file contents.')
			.addToggle(toggle => toggle.setValue(this.app.vault.getConfig("showInlineTitle"))
				.onChange((value) => {
					this.app.vault.setConfig("showInlineTitle", !this.app.vault.getConfig("showInlineTitle"));
				})
			);

		new Setting(containerEl)
			.setName('Hide status bar')
			.setDesc('Hides word count, character count and backlink count.')
			.addToggle(toggle => toggle.setValue(this.plugin.settings.hideStatus)
				.onChange((value) => {
					this.plugin.settings.hideStatus = value;
					this.plugin.saveData(this.plugin.settings);
					this.plugin.refresh();
				})
			);

		new Setting(containerEl)
			.setName('Hide vault name')
			.setDesc('Hides your vault profile. Warning: this also hides access to the Settings and vault switcher icons. You can use hotkeys or the command palette to open them.')
			.addToggle(toggle => toggle.setValue(this.plugin.settings.hideVault)
				.onChange((value) => {
					this.plugin.settings.hideVault = value;
					this.plugin.saveData(this.plugin.settings);
					this.plugin.refresh();
				})
			);

		new Setting(containerEl)
			.setName('Hide scroll bars')
			.setDesc('Hides all scroll bars.')
			.addToggle(toggle => toggle.setValue(this.plugin.settings.hideScroll)
				.onChange((value) => {
					this.plugin.settings.hideScroll = value;
					this.plugin.saveData(this.plugin.settings);
					this.plugin.refresh();
				})
			);

		new Setting(containerEl)
			.setName('Hide sidebar toggle buttons')
			.setDesc('Hides both sidebar buttons.')
			.addToggle(toggle => toggle.setValue(this.plugin.settings.hideSidebarButtons)
				.onChange((value) => {
					this.plugin.settings.hideSidebarButtons = value;
					this.plugin.saveData(this.plugin.settings);
					this.plugin.refresh();
				})
			);
		
		new Setting(containerEl)
			.setName('Hide ribbon')
			.setDesc('Hides vertical toolbar at the side of the window')
			.addToggle(toggle => toggle.setValue(!this.app.vault.getConfig("showRibbon"))
				.onChange((value) => {
					this.app.commands.executeCommandById("app:toggle-ribbon");
				})
			);

		new Setting(containerEl)
			.setName('Hide tooltips')
			.setDesc('Hides all tooltips.')
			.addToggle(toggle => toggle.setValue(this.plugin.settings.hideTooltips)
				.onChange((value) => {
					this.plugin.settings.hideTooltips = value;
					this.plugin.saveData(this.plugin.settings);
					this.plugin.refresh();
				})
			);

		new Setting(containerEl)
			.setName('Hide file explorer buttons')
			.setDesc('Hides buttons at the top of file explorer (new file, new folder, etc).')
			.addToggle(toggle => toggle.setValue(this.plugin.settings.hideFileNavButtons)
				.onChange((value) => {
					this.plugin.settings.hideFileNavButtons = value;
					this.plugin.saveData(this.plugin.settings);
					this.plugin.refresh();
				})
			);

		new Setting(containerEl)
			.setName('Hide instructions')
			.setDesc('Hides instructional tips in modals.')
			.addToggle(toggle => toggle.setValue(this.plugin.settings.hideInstructions)
				.onChange((value) => {
					this.plugin.settings.hideInstructions = value;
					this.plugin.saveData(this.plugin.settings);
					this.plugin.refresh();
				})
			);

		new Setting(containerEl)
			.setName('Hide search suggestions')
			.setDesc('Hides suggestions in search pane.')
			.addToggle(toggle => toggle.setValue(this.plugin.settings.hideSearchSuggestions)
				.onChange((value) => {
					this.plugin.settings.hideSearchSuggestions = value;
					this.plugin.saveData(this.plugin.settings);
					this.plugin.refresh();
				})
			);

		new Setting(containerEl)
			.setName('Hide count of search term matches')
			.setDesc('Hides the number of matches within each search result.')
			.addToggle(toggle => toggle.setValue(this.plugin.settings.hideSearchCounts)
				.onChange((value) => {
					this.plugin.settings.hideSearchCounts = value;
					this.plugin.saveData(this.plugin.settings);
					this.plugin.refresh();
				})
			);

		new Setting(containerEl)
			.setName('Hide properties in Reading view')
			.setDesc('Hides the properties section in Reading view.')
			.addToggle(toggle => toggle.setValue(this.plugin.settings.hidePropertiesReading)
				.onChange((value) => {
					this.plugin.settings.hidePropertiesReading = value;
					this.plugin.saveData(this.plugin.settings);
					this.plugin.refresh();
				})
			);

	}
}

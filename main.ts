import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { addToggleCommands } from 'togglecommands';
import { addShowCommands } from 'showcommands';
import { addHideCommands, removeHideCommands } from 'hidecommands';

export default class HiderPlus extends Plugin {
	settings: HiderPlusSettings;

	async onload() {
		// load settings
		await this.loadSettings();

		// add the settings tab
		this.addSettingTab(new HiderPlusSettingTab(this.app, this));

		// add the commands
		addToggleCommands(this);
		addShowCommands(this);
		addHideCommands(this);
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
	hidetogglecommands: boolean;
	hidehidecommands: boolean;
	hideshowcommands: boolean;
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
	hideVault: false,
	hidetogglecommands: false,
	hidehidecommands: false,
	hideshowcommands: false,
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

		new Setting(containerEl)
			.setName('')
			.setHeading();

		new Setting(containerEl)
			.setName('Hide Hide Commands')
			.addToggle(toggle => toggle.setValue(this.plugin.settings.hidehidecommands)
				.onChange((value) => {
					this.plugin.settings.hidehidecommands = value;
					if (value) {
					removeHideCommands(this.plugin);
					} else {
						addHideCommands(this.plugin);
					}
					this.plugin.saveData(this.plugin.settings);
				})
			)
	}
}

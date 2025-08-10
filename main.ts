import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';
import HiderPlusSettingTab from 'settingstab';
import { addToggleCommands } from 'togglecommands';
import { addShowCommands } from 'showcommands';
import { addHideCommands } from 'hidecommands';

export default class HiderPlus extends Plugin {
	settings: HiderPlusSettings;

	async onload() {
		// load settings
		await this.loadSettings();

		// add the settings tab
		this.addSettingTab(new HiderPlusSettingTab(this.app, this));

		// add the commands
		if (!this.settings.hidetogglecommands) { addToggleCommands(this); }
		if (!this.settings.hideshowcommands) { addShowCommands(this); }
		if (!this.settings.hidehidecommands) { addHideCommands(this); }
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


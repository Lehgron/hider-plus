import { App, PluginSettingTab, Setting, SettingGroup } from "obsidian";
import HiderPlus from "./main";
import { addToggleCommands, removeToggleCommands } from './togglecommands';
import { addShowCommands, removeShowCommands } from './showcommands';
import { addHideCommands, removeHideCommands } from './hidecommands';

export default class HiderPlusSettingTab extends PluginSettingTab {
	plugin: HiderPlus;
	constructor(app: App, plugin: HiderPlus) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new SettingGroup(containerEl)
			.setHeading('Interface')
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide tab bar')
				.setDesc('Hides the tab container at the top of the window.')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hideTabs)
					.onChange((value) => {
						this.plugin.settings.hideTabs = value;
						this.plugin.saveData(this.plugin.settings);
						this.plugin.refresh();
					})
				).settingEl.style.cursor = "pointer";
				
			})
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide status bar')
				.setDesc('Hides word count, character count and backlink count.')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hideStatus)
					.onChange((value) => {
						this.plugin.settings.hideStatus = value;
						this.plugin.saveData(this.plugin.settings);
						this.plugin.refresh();
					})
				);
			})
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide vault name')
				.setDesc('Hides your vault profile. Warning: this also hides access to the Settings and vault switcher icons. You can use hotkeys or the command palette to open them.')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hideVault)
					.onChange((value) => {
						this.plugin.settings.hideVault = value;
						this.plugin.saveData(this.plugin.settings);
						this.plugin.refresh();
					})
				);
			})
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide scroll bars')
				.setDesc('Hides all scroll bars.')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hideScroll)
					.onChange((value) => {
						this.plugin.settings.hideScroll = value;
						this.plugin.saveData(this.plugin.settings);
						this.plugin.refresh();
					})
				);
			})
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide sidebar toggle buttons')
				.setDesc('Hides both sidebar buttons.')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hideSidebarButtons)
					.onChange((value) => {
						this.plugin.settings.hideSidebarButtons = value;
						this.plugin.saveData(this.plugin.settings);
						this.plugin.refresh();
					})
				);
			})
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide tooltips')
				.setDesc('Hides all tooltips.')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hideTooltips)
					.onChange((value) => {
						this.plugin.settings.hideTooltips = value;
						this.plugin.saveData(this.plugin.settings);
						this.plugin.refresh();
					})
				);
			})
		new SettingGroup(containerEl)
			.setHeading('Built-in')
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide inline title')
				.setDesc('Hides the filname as an editable title inline with the file contents.')
				.addToggle(toggle => toggle.setValue(!this.app.vault.getConfig("showInlineTitle"))
					.onChange((value) => {
						this.app.vault.setConfig("showInlineTitle", !this.app.vault.getConfig("showInlineTitle"));
					})
				);
			})
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide tab title bar')
				.setDesc('Hides the header at the top of every tab.')
				.addToggle(toggle => toggle.setValue(!this.app.vault.getConfig("showViewHeader"))
					.onChange((value) => {
						this.app.vault.setConfig("showViewHeader", !this.app.vault.getConfig("showViewHeader"));
					})
				);
			})
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide ribbon')
				.setDesc('Hides vertical toolbar at the side of the window')
				.addToggle(toggle => toggle.setValue(!this.app.vault.getConfig("showRibbon"))
					.onChange((value) => {
						this.app.vault.setConfig("showRibbon", !this.app.vault.getConfig("showRibbon"));
					})
				);
			})
		new SettingGroup(containerEl)
			.setHeading('File Explorer')
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide file explorer buttons')
				.setDesc('Hides buttons at the top of file explorer (new file, new folder, etc).')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hideFileNavButtons)
					.onChange((value) => {
						this.plugin.settings.hideFileNavButtons = value;
						this.plugin.saveData(this.plugin.settings);
						this.plugin.refresh();
					})
				);
			})
		new SettingGroup(containerEl)
			.setHeading('Search')
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide search suggestions')
				.setDesc('Hides suggestions in search pane.')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hideSearchSuggestions)
					.onChange((value) => {
						this.plugin.settings.hideSearchSuggestions = value;
						this.plugin.saveData(this.plugin.settings);
						this.plugin.refresh();
					})
				);
			})
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide count of search term matches')
				.setDesc('Hides the number of matches within each search result.')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hideSearchCounts)
					.onChange((value) => {
						this.plugin.settings.hideSearchCounts = value;
						this.plugin.saveData(this.plugin.settings);
						this.plugin.refresh();
					})
				);
			})
		new SettingGroup(containerEl)
			.setHeading('Other')
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide instructions')
				.setDesc('Hides instructional tips in modals.')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hideInstructions)
					.onChange((value) => {
						this.plugin.settings.hideInstructions = value;
						this.plugin.saveData(this.plugin.settings);
						this.plugin.refresh();
					})
				);
			})
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide properties in Reading view')
				.setDesc('Hides the properties section in Reading view.')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hidePropertiesReading)
					.onChange((value) => {
						this.plugin.settings.hidePropertiesReading = value;
						this.plugin.saveData(this.plugin.settings);
						this.plugin.refresh();
					})
				);
			})
		new SettingGroup(containerEl)
			.setHeading('Toggle for Hide, Show and Toggle Commands')
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide Toggle Commands')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hidetogglecommands)
					.onChange((value) => {
						this.plugin.settings.hidetogglecommands = value;
						this.plugin.saveData(this.plugin.settings)
						if (value) { addToggleCommands(this.plugin); }
						else { removeToggleCommands(this.plugin); }
					})
				);
			})
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide Hide Commands')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hidehidecommands)
					.onChange((value) => {
						this.plugin.settings.hidehidecommands = value;
						this.plugin.saveData(this.plugin.settings);
						if (value) { addHideCommands(this.plugin); }
						else { removeHideCommands(this.plugin); }
					})
				);
			})
			.addSetting((setting: Setting) => {
				setting
				.setName('Hide Show Commands')
				.addToggle(toggle => toggle.setValue(this.plugin.settings.hideshowcommands)
					.onChange((value) => {
						this.plugin.settings.hideshowcommands = value;
						this.plugin.saveData(this.plugin.settings)
						if (value) { addShowCommands(this.plugin); }
						else { removeShowCommands(this.plugin); }
					})
				);
			})
	}
}

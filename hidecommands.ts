import HiderPlus from "main";

export function addHideCommands(plugin: HiderPlus) {
	plugin.addCommand({
		id: 'hide-tab-containers',
		name: 'Hide tab bar',
		callback: () => {
			plugin.settings.hideTabs = true;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'hide-tab-title-bar',
		name: 'Hide tab title bar',
		callback: () => {
			plugin.app.vault.setConfig("showViewHeader", false);
		}
	});
	plugin.addCommand({
		id: 'hide-inline-title',
		name: 'Hide inline title',
		callback: () => {
			plugin.app.vault.setConfig("showInlineTitle", false);
		}
	});
	plugin.addCommand({
		id: 'hide-hider-status',
		name: 'Hide status bar',
		callback: () => {
			plugin.settings.hideStatus = true;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'hide-hider-vault-name',
		name: 'Hide vault name. Warning: hides access to settings and vault switcher.',
		callback: () => {
			plugin.settings.hideVault = true;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'hide-hider-scroll-bars',
		name: 'Hide scroll bars',
		callback: () => {
			plugin.settings.hideScroll = true;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'hide-sidebar-toggle-buttons',
		name: 'Hide both sidebar buttons',
		callback: () => {
			plugin.settings.hideSidebarButtons = true;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'hide-ribbon',
		name: 'Hide  ribbon',
		callback: () => {
			plugin.app.vault.setConfig("showRibbon", false);
		}
	});
	plugin.addCommand({
		id: 'hide-tooltips',
		name: 'Hide tooltips',
		callback: () => {
			plugin.settings.hideTooltips = true;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'hide-file-explorer-buttons',
		name: 'Hide file explorer buttons',
		callback: () => {
			plugin.settings.hideFileNavButtons = true;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'hide-instructions',
		name: 'Hide instructions',
		callback: () => {
			plugin.settings.hideInstructions = true;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'hide-search-suggestions',
		name: 'Hide search suggestions',
		callback: () => {
			plugin.settings.hideSearchSuggestions = true;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'hide-count-search-matches',
		name: 'Hide count of search term matches',
		callback: () => {
			plugin.settings.hideSearchCounts = true;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'hide-properties in Reading view',
		name: 'Hide properties in reading view',
		callback: () => {
			plugin.settings.hidePropertiesReading = true;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
}

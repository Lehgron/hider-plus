import HiderPlus from "./main";

export function addShowCommands(plugin: HiderPlus) {
	plugin.addCommand({
		id: 'show-tab-containers',
		name: 'Show tab bar',
		callback: () => {
			plugin.settings.hideTabs = false;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'show-tab-title-bar',
		name: 'Show tab title bar',
		callback: () => {
			plugin.app.vault.setConfig("showViewHeader", true);
		}
	});
	plugin.addCommand({
		id: 'show-inline-title',
		name: 'Show inline title',
		callback: () => {
			plugin.app.vault.setConfig("showInlineTitle", true);
		}
	});
	plugin.addCommand({
		id: 'show-hider-status',
		name: 'Show status bar',
		callback: () => {
			plugin.settings.hideStatus = false;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'show-hider-vault-name',
		name: 'Show vault name. Warning: hides access to settings and vault switcher.',
		callback: () => {
			plugin.settings.hideVault = false;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'show-hider-scroll-bars',
		name: 'Show scroll bars',
		callback: () => {
			plugin.settings.hideScroll = false;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'show-sidebar-toggle-buttons',
		name: 'Show both sidebar buttons',
		callback: () => {
			plugin.settings.hideSidebarButtons = false;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'show-ribbon',
		name: 'Show ribbon',
		callback: () => {
			plugin.app.vault.setConfig("showRibbon", true);
		}
	});
	plugin.addCommand({
		id: 'show-tooltips',
		name: 'Show tooltips',
		callback: () => {
			plugin.settings.hideTooltips = false;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'show-file-explorer-buttons',
		name: 'Show file explorer buttons',
		callback: () => {
			plugin.settings.hideFileNavButtons = false;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'show-instructions',
		name: 'Show instructions',
		callback: () => {
			plugin.settings.hideInstructions = false;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'show-search-suggestions',
		name: 'Show search suggestions',
		callback: () => {
			plugin.settings.hideSearchSuggestions = false;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'show-count-search-matches',
		name: 'Show count of search term matches',
		callback: () => {
			plugin.settings.hideSearchCounts = false;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'show-properties in Reading view',
		name: 'Show properties in reading view',
		callback: () => {
			plugin.settings.hidePropertiesReading = false;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
}
export function removeShowCommands(plugin: HiderPlus) {
	plugin.removeCommand('show-tab-containers');
	plugin.removeCommand('show-tab-title-bar');
	plugin.removeCommand('show-inline-title');
	plugin.removeCommand('show-hider-status');
	plugin.removeCommand('show-hider-vault-name');
	plugin.removeCommand('show-hider-scroll-bars');
	plugin.removeCommand('show-sidebar-toggle-buttons');
	plugin.removeCommand('show-ribbon');
	plugin.removeCommand('show-tooltips');
	plugin.removeCommand('show-file-explorer-buttons');
	plugin.removeCommand('show-instructions');
	plugin.removeCommand('show-search-suggestions');
	plugin.removeCommand('show-count-search-matches');
	plugin.removeCommand('show-properties in Reading view');
}

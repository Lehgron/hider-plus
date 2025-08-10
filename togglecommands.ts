import HiderPlus from "main";

export function addToggleCommands(plugin: HiderPlus) {
	plugin.addCommand({
		id: 'toggle-tab-containers',
		name: 'Toggle tab bar',
		callback: () => {
			plugin.settings.hideTabs = !plugin.settings.hideTabs;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'toggle-tab-title-bar',
		name: 'Toggle tab title bar',
		callback: () => {
			plugin.app.vault.setConfig("showViewHeader", !plugin.app.vault.getConfig("showViewHeader"));
		}
	});
	plugin.addCommand({
		id: 'toggle-inline-title',
		name: 'Toggle inline title',
		callback: () => {
			plugin.app.vault.setConfig("showInlineTitle", !plugin.app.vault.getConfig("showInlineTitle"));
		}
	});
	plugin.addCommand({
		id: 'toggle-hider-status',
		name: 'Toggle status bar',
		callback: () => {
			plugin.settings.hideStatus = !plugin.settings.hideStatus;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'toggle-hider-vault-name',
		name: 'Toggle vault name. Warning: hides access to settings and vault switcher.',
		callback: () => {
			plugin.settings.hideVault = !plugin.settings.hideVault;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'toggle-hider-scroll-bars',
		name: 'Toggle scroll bars',
		callback: () => {
			plugin.settings.hideScroll = !plugin.settings.hideScroll;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'toggle-sidebar-toggle-buttons',
		name: 'Toggle both sidebar buttons',
		callback: () => {
			plugin.settings.hideSidebarButtons = !plugin.settings.hideSidebarButtons;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'toggle-ribbon',
		name: 'Toggle ribbon',
		callback: () => {
			plugin.app.commands.executeCommandById("app:toggle-ribbon");
		}
	});
	plugin.addCommand({
		id: 'toggle-tooltips',
		name: 'Toggle tooltips',
		callback: () => {
			plugin.settings.hideTooltips = !plugin.settings.hideTooltips;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'toggle-file-explorer-buttons',
		name: 'Toggle file explorer buttons',
		callback: () => {
			plugin.settings.hideFileNavButtons = !plugin.settings.hideFileNavButtons;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'toggle-instructions',
		name: 'Toggle instructions',
		callback: () => {
			plugin.settings.hideInstructions = !plugin.settings.hideInstructions;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'toggle-search-suggestions',
		name: 'Toggle search suggestions',
		callback: () => {
			plugin.settings.hideSearchSuggestions = !plugin.settings.hideSearchSuggestions;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'toggle-count-search-matches',
		name: 'Toggle count of search term matches',
		callback: () => {
			plugin.settings.hideSearchCounts = !plugin.settings.hideSearchCounts;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
	plugin.addCommand({
		id: 'toggle-properties in Reading view',
		name: 'Toggle properties in reading view',
		callback: () => {
			plugin.settings.hidePropertiesReading = !plugin.settings.hidePropertiesReading;
			plugin.saveData(plugin.settings);
			plugin.refresh();
		}
	});
}

export function removeToggleCommands(plugin: HiderPlus) {
	plugin.removeCommand('toggle-tab-containers');
	plugin.removeCommand('toggle-tab-title-bar');
	plugin.removeCommand('toggle-inline-title');
	plugin.removeCommand('toggle-hider-status');
	plugin.removeCommand('toggle-hider-vault-name');
	plugin.removeCommand('toggle-hider-scroll-bars');
	plugin.removeCommand('toggle-sidebar-toggle-buttons');
	plugin.removeCommand('toggle-ribbon');
	plugin.removeCommand('toggle-tooltips');
	plugin.removeCommand('toggle-file-explorer-buttons');
	plugin.removeCommand('toggle-instructions');
	plugin.removeCommand('toggle-search-suggestions');
	plugin.removeCommand('toggle-count-search-matches');
	plugin.removeCommand('toggle-properties in Reading view');
}

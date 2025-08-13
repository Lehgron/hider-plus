
export interface HiderPlusSettings {
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

export const DEFAULT_SETTINGS: HiderPlusSettings = {
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

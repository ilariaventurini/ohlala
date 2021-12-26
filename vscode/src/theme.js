const { colors } = require('./colors')
const { hexToHexWithAlpha } = require('colors-convert')

function hex(color, alpha = 1) {
  return hexToHexWithAlpha(color, alpha)
}

function getTheme({ theme, name }) {
  return {
    name: name,
    type: 'dark',
    colors: {
      //////////////////////////////
      // CONTRAST COLOR
      // The contrast colors are typically only set for high contrast themes.
      // If set, they add an additional border around items across the UI to increase the contrast.
      //////////////////////////////
      // An extra border around active elements to separate them from others for greater contrast.
      // "contrastActiveBorder": hex(colors.unknown),
      // "contrastActiveBorder": hex(colors.unknown),
      // An extra border around elements to separate them from others for greater contrast.
      // "contrastBorder": hex(colors.unknown),
      // "contrastBorder": hex(colors.unknown),

      //////////////////////////////
      // BASE COLORS
      //////////////////////////////
      // Overall border color for focused elements. This color is only used if not overridden by a component.
      focusBorder: hex(colors.lavender, 0.4),
      // Overall foreground color. This color is only used if not overridden by a component.
      foreground: hex(colors.gray01),
      // Shadow color of widgets such as Find/Replace inside the editor.
      'widget.shadow': hex(colors.gray09),
      // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
      'selection.background': hex(colors.lavender, 0.6),
      // Foreground color for description text providing additional information, for example for a label.
      descriptionForeground: hex(colors.gray02),
      // Overall foreground color for error messages (this color is only used if not overridden by a component).
      errorForeground: hex(colors.lavender),
      // The default color for icons in the workbench.
      'icon.foreground': hex(colors.gray01),

      //////////////////////////////
      // WINDOW BORDER
      // The theme colors for VS Code window border.
      //////////////////////////////
      // Border color for the active (focused) window.
      // "window.activeBorder": hex(colors.unknown),
      // 'window.activeBorder': colors.unknown,
      // Border color for the inactive (unfocused) windows.
      // "window.inactiveBorder": hex(colors.unknown),

      //////////////////////////////
      // TEXT COLORS
      // Colors inside a text document, such as the welcome page.
      //////////////////////////////
      // Background color for block quotes in text.
      // "textBlockQuote.background": hex(colors.unknown),
      // Border color for block quotes in text.
      'textBlockQuote.border': hex(colors.lavender),
      // Background color for code blocks in text.
      // "textCodeBlock.background": hex(colors.unknown),
      // Foreground color for links in text when clicked on and on mouse hover.
      'textLink.activeForeground': hex(colors.cyan),
      // Foreground color for links in text.
      'textLink.foreground': hex(colors.lavender),
      // Foreground color for preformatted text segments.
      'textPreformat.foreground': hex(colors.lavender),
      // Color for text separators.
      'textSeparator.foreground': hex(colors.cyan),

      //////////////////////////////
      // BUTTON CONTROL
      // A set of colors for button widgets such as Open Folder button in the Explorer of a new window.
      //////////////////////////////
      // Button background color.
      'button.background': hex(colors.lavender),
      // Button foreground color.
      'button.foreground': hex(colors.gray01),
      // Button background color when hovering.
      'button.hoverBackground': hex(colors.rose),
      // Background color of checkbox widget.
      // "checkbox.background": hex(colors.unknown),
      // Foreground color of checkbox widget.
      // "checkbox.foreground": hex(colors.unknown),
      // Border color of checkbox widget.
      // "checkbox.border": hex(colors.unknown),
      //  Secondary button background color.
      // "button.secondaryBackground": hex(colors.unknown),
      // Secondary button foreground color.
      // "button.secondaryForeground": hex(colors.unknown),
      // Secondary button background color when hovering.
      // "button.secondaryHoverBackground": hex(colors.unknown),

      //////////////////////////////
      // DROPDOWN CONTROL
      // A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel.
      // Note that the Dropdown control is not used on macOS currently.
      //////////////////////////////
      // Dropdown background.
      'dropdown.background': hex(colors.gray05),
      // Dropdown list background.
      'dropdown.listBackground': hex(colors.gray05),
      // Dropdown border.
      'dropdown.border': hex(colors.gray03),
      // Dropdown foreground.
      'dropdown.foreground': hex(colors.gray01),

      //////////////////////////////
      // INPUT CONTROL
      // Colors for input controls such as in the Search view or the Find/Replace dialog.
      //////////////////////////////
      // Input box background.
      'input.background': hex(colors.gray05),
      // Input box border.
      // "input.border": hex(colors.unknown),
      // Input box foreground.
      'input.foreground': hex(colors.gray01),
      // Input box foreground color for placeholder text.
      'input.placeholderForeground': hex(colors.gray03),
      // Background color of activated options in input fields.
      'inputOption.activeBackground': hex(colors.purple),
      // Border color of activated options in input fields.
      // "inputOption.activeBorder": hex(colors.unknown),
      // Input validation background color for error severity.
      'inputValidation.errorBackground': hex(colors.rose, 0.3),
      // Input validation foreground color for error severity.
      'inputValidation.errorForeground': hex(colors.gray01),
      // Input validation border color for error severity.
      'inputValidation.errorBorder': hex(colors.rose),
      // Input validation background color for information severity.
      // "inputValidation.infoBackground": hex(colors.unknown),
      // Input validation foreground color for information severity.
      // "inputValidation.infoForeground": hex(colors.unknown),
      // Input validation border color for information severity.
      // "inputValidation.infoBorder": hex(colors.unknown),
      // Input validation background color for information warning.
      // "inputValidation.warningBackground": hex(colors.unknown),
      // Input validation foreground color for warning severity.
      // "inputValidation.warningForeground": hex(colors.unknown),
      // Input validation border color for warning severity.
      // "inputValidation.warningBorder": hex(colors.unknown),
      // Foreground color for active input options. These appear in the Search view and Find widget (editor, terminal, debug console)
      'inputOption.activeForeground': hex(colors.gray01),

      //////////////////////////////
      // SCROLLBAR CONTROL
      //////////////////////////////
      // Scrollbar slider shadow to indicate that the view is scrolled.
      'scrollbar.shadow': hex(colors.gray09),
      // Scrollbar slider background color when clicked on.
      'scrollbarSlider.activeBackground': hex(hex(colors.gray01), 0.2),
      // Scrollbar slider background color.
      'scrollbarSlider.background': hex(hex(colors.gray01), 0.1),
      // Scrollbar slider background color when hovering.
      'scrollbarSlider.hoverBackground': hex(hex(colors.gray01), 0.2),

      //////////////////////////////
      // BADGE
      // Badges are small information labels, for example, search results count.
      //////////////////////////////
      // Badge foreground color.
      'badge.foreground': hex(colors.gray01),
      // Badge background color.
      'badge.background': hex(colors.lavender),

      //////////////////////////////
      // PROGRESS BAR
      //////////////////////////////
      // Background color of the progress bar shown for long running operations.
      'progressBar.background': hex(colors.lavender),

      //////////////////////////////
      // LISTS AND TREES
      // Colors for list and trees like the File Explorer.
      // An active list/tree has keyboard focus, an inactive does not.
      //////////////////////////////
      // List/Tree background color for the selected item when the list/tree is active.
      'list.activeSelectionBackground': hex(colors.lavender, 0.2),
      // List/Tree foreground color for the selected item when the list/tree is active.
      'list.activeSelectionForeground': hex(colors.gray01),
      // List/Tree drag and drop background when moving items around using the mouse.
      'list.dropBackground': hex(colors.lavender, 0.3),
      // List/Tree background color for the focused item when the list/tree is active.
      'list.focusBackground': hex(colors.pink, 0.3),
      // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
      'list.focusForeground': hex(colors.gray01),
      // List/Tree foreground color of the match highlights when searching inside the list/tree.
      // "list.highlightForeground": hex(colors.unknown),
      // List/Tree background when hovering over items using the mouse.
      'list.hoverBackground': hex(colors.lavender, 0.2),
      // List/Tree foreground when hovering over items using the mouse.
      'list.hoverForeground': hex(colors.gray01),
      // List/Tree background color for the selected item when the list/tree is inactive.
      'list.inactiveSelectionBackground': hex(colors.lavender, 0.2),
      // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
      'list.inactiveSelectionForeground': hex(colors.gray01),
      // List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
      // "list.inactiveFocusBackground": hex(colors.unknown),
      // List/Tree foreground color for invalid items, for example an unresolved root in explorer.
      // "list.invalidItemForeground": hex(colors.unknown),
      // Foreground color of list items containing errors.
      'list.errorForeground': hex(colors.rose),
      // Foreground color of list items containing warnings.
      'list.warningForeground': hex(colors.orange),

      // List/Tree Filter background color of typed text when searching inside the list/tree.
      // "listFilterWidget.background": hex(colors.unknown),
      // List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
      // "listFilterWidget.outline": hex(colors.unknown),
      // List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
      // "listFilterWidget.noMatchesOutline": hex(colors.unknown),

      // Background color of the filtered matches in lists and trees.
      // "list.filterMatchBackground": hex(colors.unknown),
      // Border color of the filtered matches in lists and trees.
      // "list.filterMatchBorder": hex(colors.unknown),

      // List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree
      // "list.focusHighlightForeground": hex(colors.unknown),
      // Quick picker background color for the focused item.
      // "quickInputList.focusBackground": hex(colors.unknown),
      // Quick picker foreground color for the focused item.
      // "quickInputList.focusForeground": hex(colors.unknown),
      // Quick picker icon foreground color for the focused item.
      // "quickInputList.focusIconForeground": hex(colors.unknown),
      // Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette.
      // "quickInputTitle.background": hex(colors.unknown),

      // "editorSuggestWidget.selectedForeground": hex(colors.unknown),

      // Tree Widget's stroke color for indent guides.
      'tree.indentGuidesStroke': hex(colors.gray03),

      //////////////////////////////
      // ACTIVITY BAR
      // The Activity Bar is displayed either on the far left or right of the workbench
      // and allows fast switching between views of the Side Bar.
      //////////////////////////////
      // Activity Bar background color.
      'activityBar.background': hex(colors.gray10),
      // Activity Bar foreground color (for example used for the icons).
      'activityBar.foreground': hex(colors.gray02),
      // Activity Bar item foreground color when it is inactive.
      'activityBar.inactiveForeground': hex(colors.gray02, 0.6),
      // Activity Bar border color with the Side Bar.
      'activityBar.border': hex(colors.gray07),
      // Activity notification badge background color.
      'activityBarBadge.background': hex(colors.lavender),
      // Activity notification badge foreground color.
      'activityBarBadge.foreground': hex(colors.gray01),
      // Activity Bar active indicator border color (left vertical line).
      'activityBar.activeBorder': hex(colors.gray01),
      // Activity Bar optional background color for the active element.
      'activityBar.activeBackground': hex(colors.gray10),
      // Activity bar focus border color for the active item.
      'activityBar.activeFocusBorder': hex(colors.lavender),

      //////////////////////////////
      // SIDE BAR
      // The Side Bar contains views like the Explorer and Search.
      //////////////////////////////
      // Side Bar background color.
      'sideBar.background': hex(colors.gray11),
      // Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
      'sideBar.foreground': hex(colors.gray02),
      // Side Bar border color on the side separating the editor.
      'sideBar.border': hex(colors.gray06),
      // Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through.
      'sideBar.dropBackground': hex(colors.lavender, 0.3),
      // Side Bar title foreground color.
      'sideBarTitle.foreground': hex(colors.gray02),
      // Side Bar section header background color.
      'sideBarSectionHeader.background': hex(colors.gray11),
      // Side Bar section header foreground color.
      'sideBarSectionHeader.foreground': hex(colors.gray02),
      // Side bar section header border color.
      'sideBarSectionHeader.border': hex(colors.gray06),

      //////////////////////////////
      // MINIMAP
      // The Minimap shows a minified version of the current file.
      //////////////////////////////
      // Highlight color for matches from search within files.
      // "minimap.findMatchHighlight": hex(colors.unknown),
      // Highlight color for the editor selection.
      // "minimap.selectionHighlight": hex(colors.unknown),
      // Highlight color for errors within the editor.
      // "minimap.errorHighlight": hex(colors.unknown),
      // Highlight color for warnings within the editor.
      // "minimap.warningHighlight": hex(colors.unknown),
      // Minimap gutter color for added content.
      // "minimapGutter.addedBackground": hex(colors.unknown),
      // Minimap gutter color for modified content.
      // "minimapGutter.modifiedBackground": hex(colors.unknown),
      // Minimap gutter color for deleted content.
      // "minimapGutter.deletedBackground": hex(colors.unknown),

      //////////////////////////////
      // EDITOR GROUPS & TABS
      // Editor Groups are the containers of editors.
      // There can be many editor groups.
      // A Tab is the container of an editor.
      // Multiple Tabs can be opened in one editor group.
      //////////////////////////////
      // Color to separate multiple editor groups from each other
      'editorGroup.border': hex(colors.gray06),
      // Background color when dragging editors around
      'editorGroup.dropBackground': hex(colors.lavender, 0.3),
      // Background color of the editor group title header when Tabs are disabled (set "workbench.editor.showTabs": false)
      // "editorGroupHeader.noTabsBackground": hex(colors.unknown),
      // Background color of the Tabs container
      'editorGroupHeader.tabsBackground': hex(colors.gray08),
      // Render a border above breadcrumbs
      // "editorGroupHeader.tabsBorder": hex(colors.unknown),
      // Render a border below the editor group header (for example, below breadcrumbs if enabled)
      'editorGroupHeader.border': hex(colors.gray09),
      // Background color of an empty editor group
      // "editorGroup.emptyBackground": hex(colors.unknown),
      // Border color of an empty editor group that is focused
      // "editorGroup.focusedEmptyBorder": hex(colors.unknown),
      // Active Tab background color in an active group
      'tab.activeBackground': hex(colors.gray09),
      // Active Tab background color in an inactive editor group
      'tab.unfocusedActiveBackground': hex(colors.gray09),
      // Active Tab foreground color in an active group
      'tab.activeForeground': hex(colors.gray01),
      // Border to separate Tabs from each other
      'tab.border': hex(colors.gray09),
      // Bottom border for the active tab
      'tab.activeBorder': hex(colors.lavender),
      // Bottom border for the active tab in an inactive editor group
      'tab.unfocusedActiveBorder': hex(colors.lavender, 0.3),
      // Top border for the active tab
      'tab.activeBorderTop': hex(colors.gray09),
      // Top border for the active tab in an inactive editor group
      'tab.unfocusedActiveBorderTop': hex(colors.gray09),
      // Inactive Tab background color
      'tab.inactiveBackground': hex(colors.gray09),
      // Inactive Tab foreground color in an active group
      'tab.inactiveForeground': hex(colors.gray03),
      // Active tab foreground color in an inactive editor group
      'tab.unfocusedActiveForeground': hex(colors.gray03),
      // Inactive tab foreground color in an inactive editor group
      'tab.unfocusedInactiveForeground': hex(colors.gray03),
      // Tab background color when hovering
      'tab.hoverBackground': hex(colors.gray09),
      // Tab background color in an unfocused group when hovering
      'tab.unfocusedHoverBackground': hex(colors.gray09),
      // Border to highlight tabs when hovering
      'tab.hoverBorder': hex(colors.lavender),
      // Border to highlight tabs in an unfocused group when hovering
      'tab.unfocusedHoverBorder': hex(colors.lavender),
      // Border on the top of modified (dirty) active tabs in an active group
      'tab.activeModifiedBorder': hex(colors.gray09),
      // Border on the top of modified (dirty) inactive tabs in an active group
      // "tab.inactiveModifiedBorder": hex(colors.unknown),
      // Border on the top of modified (dirty) active tabs in an unfocused group
      // "tab.unfocusedActiveModifiedBorder": hex(colors.unknown),
      // Border on the top of modified (dirty) inactive tabs in an unfocused group
      // "tab.unfocusedInactiveModifiedBorder": hex(colors.unknown),
      // Background color of the editor pane visible on the left and right side of the centered editor layout.
      // "editorPane.background": hex(colors.unknown),
      // Inactive tab background color in an unfocused group
      'tab.unfocusedInactiveBackground': hex(colors.gray09),
      // Tab foreground color when hovering
      'tab.hoverForeground': hex(hex(colors.gray01), 0.8),
      // Tab foreground color in an unfocused group when hovering
      'tab.unfocusedHoverForeground': hex(hex(colors.gray01), 0.8),
      // Border on the right of the last pinned editor to separate from unpinned editors.
      'tab.lastPinnedBorder': hex(hex(colors.gray02), 0.25),

      //////////////////////////////
      // EDITOR COLORS
      // The most prominent editor colors are the token colors used for syntax highlighting and
      // are based on the language grammar installed. These colors are defined by the Color Theme
      // but can also be customized with the `editor.tokenColorCustomizations` setting.
      // See Customizing a Color Theme for details on updating a Color Theme and the available token types.
      // All other editor colors are listed here:
      //////////////////////////////
      // Editor background color.
      'editor.background': hex(colors.gray09),
      // Editor default foreground color.
      'editor.foreground': hex(colors.gray01),
      // Color of editor line numbers.
      'editorLineNumber.foreground': hex(colors.gray03),
      // Color of the active editor line number. It works only when editor.renderLineHighlight is set to `all` or `gutter`.
      'editorLineNumber.activeForeground': hex(colors.lavender),
      // The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
      // "editorCursor.background": hex(colors.unknown),
      // Color of the editor cursor.
      'editorCursor.foreground': hex(colors.rose),

      // Selection colors are visible when selecting one or more characters.
      // In addition to the selection also all regions with the same content are highlighted.
      // ----------------------------------------
      // Color of the editor selection.
      'editor.selectionBackground': hex(colors.rose, 0.25),
      // Color of the selected text for high contrast.
      // "editor.selectionForeground": hex(colors.unknown),
      // Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
      'editor.inactiveSelectionBackground': hex(colors.rose, 0.05),
      // Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
      'editor.selectionHighlightBackground': hex(colors.rose, 0.05),
      // Border color for regions with the same content as the selection.
      'editor.selectionHighlightBorder': hex(colors.lavender, 0.4),

      // Word highlight colors are visible when the cursor is inside a symbol or a word.
      // Depending on the language support available for the file type,
      // all matching references and declarations are highlighted and read and write accesses get different colors.
      // If document symbol language support is not available, this falls back to word highlighting.
      // ----------------------------------------
      // Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
      'editor.wordHighlightBackground': hex(colors.rose, 0.25),
      // Border color of a symbol during read-access, for example when reading a variable.
      'editor.wordHighlightBorder': hex(colors.lavender, 0.4),
      // Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
      'editor.wordHighlightStrongBackground': hex(colors.rose, 0.25),
      // Border color of a symbol during write-access, for example when writing to a variable.
      'editor.wordHighlightStrongBorder': hex(colors.lavender, 0.4),

      // Find colors depend on the current find string in the Find/Replace dialog.
      // ----------------------------------------
      // Color of the current search match.
      'editor.findMatchBackground': hex(colors.pink, 0.4),
      // Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
      'editor.findMatchHighlightBackground': hex(colors.gray07, 0.1),
      // Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.
      // "editor.findRangeHighlightBackground": hex(colors.unknown),
      // Border color of the current search match.
      'editor.findMatchBorder': hex(colors.pink, 0.5),
      // Border color of the other search matches.
      'editor.findMatchHighlightBorder': hex(colors.pink, 0.2),
      // Border color the range limiting the search (Enable 'Find in Selection' in the find widget).
      // "editor.findRangeHighlightBorder": hex(colors.unknown),

      // Search Editor colors highlight results in a Search Editor.
      // This can be configured separately from other find matches in order to better differentiate between different classes of match in the same editor.
      // ----------------------------------------
      // ?? Color of the editor's results.
      // "searchEditor.findMatchBackground": hex(colors.unknown),
      // Border color of the editor's results.
      // "searchEditor.findMatchBorder": hex(colors.unknown),
      // Search editor text input box border.
      // "searchEditor.textInputBorder": hex(colors.unknown),

      // The hover highlight is shown behind the symbol for which a hover is shown.
      // Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.
      'editor.hoverHighlightBackground': hex(colors.pink, 0.4),

      // The current line is typically shown as either background highlight or a border (not both).
      // ----------------------------------------
      // Background color for the highlight of line at the cursor position.
      'editor.lineHighlightBackground': hex(colors.gray06),
      // Background color for the border around the line at the cursor position.
      'editor.lineHighlightBorder': hex(colors.gray04),

      // The link color is visible when clicking on a link.
      // ----------------------------------------
      // Color of active links.
      'editorLink.activeForeground': hex(colors.cyan),

      // The range highlight is visible when selecting a search result.
      // ----------------------------------------
      // Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
      'editor.rangeHighlightBackground': hex(colors.lavender, 0.3),
      // Background color of the border around highlighted ranges.
      'editor.rangeHighlightBorder': hex(colors.purple, 0.3),

      // The symbol highlight is visible when navigating to a symbol via a command such as Go to Definition.
      // ----------------------------------------
      // Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
      // "editor.symbolHighlightBackground": hex(colors.unknown),
      // Background color of the border around highlighted symbols.
      // "editor.symbolHighlightBorder": hex(colors.unknown),

      // To see the editor white spaces, enable Toggle Render Whitespace.
      // ----------------------------------------
      // Color of whitespace characters in the editor.
      // "editorWhitespace.foreground": hex(colors.unknown),

      // To see the editor indent guides, set "editor.renderIndentGuides": true.
      // ----------------------------------------
      // Color of the editor indentation guides.
      'editorIndentGuide.background': hex(hex(colors.gray02), 0.3),
      // Color of the active editor indentation guide.
      'editorIndentGuide.activeBackground': hex(colors.gray02),

      // To see editor rulers, define their location with "editor.rulers"
      // ----------------------------------------
      // Color of the editor rulers. You have to set "editor.rulers: [number, number, ...]"
      'editorRuler.foreground': hex(colors.gray07),

      // CodeLens:
      // ----------------------------------------
      // Foreground color of an editor CodeLens.
      'editorCodeLens.foreground': hex(colors.gray03),

      // Lightbulb:
      // ----------------------------------------
      // The color used for the lightbulb actions icon.
      // "editorLightBulb.foreground": hex(colors.unknown),
      // The color used for the lightbulb auto fix actions icon.
      // "editorLightBulbAutoFix.foreground": hex(colors.unknown),

      // Bracket matches:
      // ----------------------------------------
      // Background color behind matching brackets.
      'editorBracketMatch.background': hex(colors.gray06),
      // Color for matching brackets boxes.
      'editorBracketMatch.border': hex(colors.gray03),

      // Folding:
      // ----------------------------------------
      // Background color for folded ranges.
      // "editor.foldBackground": hex(colors.unknown),

      // Overview ruler:
      // This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.
      // ----------------------------------------
      // Color of the overview ruler border.
      'editorOverviewRuler.border': hex(colors.gray06),
      // Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
      'editorOverviewRuler.findMatchForeground': hex(hex(colors.gray01), 0.6),
      // Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
      // "editorOverviewRuler.rangeHighlightForeground": hex(colors.unknown),
      // Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
      // "editorOverviewRuler.selectionHighlightForeground": hex(colors.unknown),
      // Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
      // "editorOverviewRuler.wordHighlightForeground": hex(colors.unknown),
      // Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
      // "editorOverviewRuler.wordHighlightStrongForeground": hex(colors.unknown),
      // Overview ruler marker color for modified content.
      'editorOverviewRuler.modifiedForeground': hex(colors.cyan, 0.6),
      // Overview ruler marker color for added content.
      'editorOverviewRuler.addedForeground': hex(colors.blue, 0.6),
      // Overview ruler marker color for deleted content.
      'editorOverviewRuler.deletedForeground': hex(colors.lavender, 0.6),
      // Overview ruler marker color for errors.
      'editorOverviewRuler.errorForeground': hex(colors.rose, 0.6),
      // Overview ruler marker color for warnings.
      'editorOverviewRuler.warningForeground': hex(colors.orange, 0.6),
      // Overview ruler marker color for infos.
      'editorOverviewRuler.infoForeground': hex(colors.yellow, 0.6),
      // Overview ruler marker color for matching brackets.
      'editorOverviewRuler.bracketMatchForeground': hex(colors.green, 0.6),

      // Errors and warnings:
      // underlines indicating errors, warnings, ...
      // ----------------------------------------
      // Foreground color of error squiggles in the editor.
      'editorError.foreground': hex(colors.rose),
      // Background color of error squiggles in the editor.
      // "editorError.background": hex(colors.rose),
      // Border color of error boxes in the editor.
      'editorError.border': hex(colors.rose),
      // Foreground color of warning squiggles in the editor.
      'editorWarning.foreground': hex(colors.orange),
      // Background color of warning squiggles in the editor.
      // "editorWarning.background": hex(colors.orange),
      // Border color of warning boxes in the editor.
      'editorWarning.border': hex(colors.orange),
      // Foreground color of info squiggles in the editor.
      'editorInfo.foreground': hex(colors.yellow),
      // Background color of info squiggles in the editor.
      // "editorInfo.background": hex(colors.yellow),
      // Border color of info boxes in the editor.
      'editorInfo.border': hex(colors.yellow),
      // Foreground color of hints in the editor.
      'editorHint.foreground': hex(colors.cyan),
      // Border color of hint boxes in the editor.
      'editorHint.border': hex(colors.cyan),
      // The color used for the problems error icon.
      'problemsErrorIcon.foreground': hex(colors.rose),
      // The color used for the problems warning icon.
      'problemsWarningIcon.foreground': hex(colors.orange),
      // The color used for the problems info icon.
      'problemsInfoIcon.foreground': hex(colors.yellow),

      // Unused source code:
      // ----------------------------------------
      // Border color of unnecessary (unused) source code in the editor.
      // "editorUnnecessaryCode.border": hex(colors.unknown),
      // Opacity of unnecessary (unused) source code in the editor. For example, #000000C0 will render the code with 75% opacity. For high contrast themes, use the "editorUnnecessaryCode.border" theme color to underline unnecessary code instead of fading it out.
      'editorUnnecessaryCode.opacity': hex(colors.black, 0.4),

      // The gutter contains the glyph margins and the line numbers:
      // ----------------------------------------
      // Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
      'editorGutter.background': hex(colors.gray09),
      // Editor gutter background color for lines that are modified.
      'editorGutter.modifiedBackground': hex(colors.cyan, 0.7),
      // Editor gutter background color for lines that are added.
      'editorGutter.addedBackground': hex(colors.blue, 0.7),
      // Editor gutter background color for lines that are deleted.
      'editorGutter.deletedBackground': hex(colors.lavender, 0.7),
      // Editor gutter decoration color for commenting ranges.
      // "editorGutter.commentRangeForeground": hex(colors.unknown),

      //////////////////////////////
      // DIFF EDITOR COLORS
      // For coloring inserted and removed text, use either a background or a border color but not both.
      //////////////////////////////
      // Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
      'diffEditor.insertedTextBackground': hex(colors.blue, 0.1),
      // Outline color for the text that got inserted.
      'diffEditor.insertedTextBorder': hex(colors.blue, 0.15),
      // Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
      'diffEditor.removedTextBackground': hex(colors.lavender, 0.1),
      // Outline color for text that got removed.
      'diffEditor.removedTextBorder': hex(colors.lavender, 0.15),
      // Border color between the two text editors.
      'diffEditor.border': hex(colors.rose),

      //////////////////////////////
      // EDITOR WIDGET COLORS
      // The Editor widget is shown in front of the editor content.
      // Examples are the Find/Replace dialog, the suggestion widget, and the editor hover.
      //////////////////////////////
      // Foreground color of editor widgets, such as find/replace.
      'editorWidget.foreground': hex(colors.gray03),
      // Background color of editor widgets, such as Find/Replace.
      'editorWidget.background': hex(colors.gray11),
      // Border color of the editor widget unless the widget does not contain a border or defines its own border color.
      'editorWidget.border': hex(colors.gray03),
      // Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.
      'editorWidget.resizeBorder': hex(colors.lavender),

      // Background color of the suggestion widget.
      'editorSuggestWidget.background': hex(colors.gray11),
      // Border color of the suggestion widget.
      'editorSuggestWidget.border': hex(colors.gray03),
      // Foreground color of the suggestion widget.
      'editorSuggestWidget.foreground': hex(colors.gray01),
      // Color of the match highlights in the suggestion widget.
      'editorSuggestWidget.highlightForeground': hex(colors.lavender),
      // Background color of the selected entry in the suggestion widget.
      'editorSuggestWidget.selectedBackground': hex(colors.gray07, 0.1),

      // Foreground color of the editor hover.
      'editorHoverWidget.foreground': hex(colors.gray01),
      // Background color of the editor hover.
      'editorHoverWidget.background': hex(colors.gray08),
      // Border color of the editor hover.
      'editorHoverWidget.border': hex(colors.gray03),
      // Background color of the editor hover status bar.
      'editorHoverWidget.statusBarBackground': hex(colors.gray09),

      // The Debug Exception widget is a peek view that shows in the editor when debug stops at an exception.
      // ----------------------------------------
      // Exception widget background color.
      'debugExceptionWidget.background': hex(colors.gray11),
      // Exception widget border color.
      'debugExceptionWidget.border': hex(colors.gray03),

      // The editor marker view shows when navigating to errors and warnings in the editor (Go to Next Error or Warning command).
      // ----------------------------------------
      // Editor marker navigation widget background.
      'editorMarkerNavigation.background': hex(colors.gray08),
      // Editor marker navigation widget error color.
      'editorMarkerNavigationError.background': hex(colors.rose),
      // Editor marker navigation widget warning color.
      'editorMarkerNavigationWarning.background': hex(colors.orange),
      // Editor marker navigation widget info color.
      'editorMarkerNavigationInfo.background': hex(colors.yellow),

      //////////////////////////////
      // PEEK VIEW COLORS
      // Peek views are used to show references and declarations as a view inside the editor.
      //////////////////////////////
      // Color of the peek view borders and arrow.
      'peekView.border': hex(colors.lavender),
      // Background color of the peek view editor.
      'peekViewEditor.background': hex(colors.gray08),
      // Background color of the gutter in the peek view editor.
      'peekViewEditorGutter.background': hex(colors.gray08),
      // Match highlight color in the peek view editor.
      'peekViewEditor.matchHighlightBackground': hex(colors.pink, 0.5),
      // Match highlight border color in the peek view editor.
      'peekViewEditor.matchHighlightBorder': hex(colors.pink, 0.4),
      // Background color of the peek view result list.
      'peekViewResult.background': hex(colors.gray05),
      // Foreground color for file nodes in the peek view result list.
      'peekViewResult.fileForeground': hex(colors.gray03),
      // Foreground color for line nodes in the peek view result list.
      'peekViewResult.lineForeground': hex(colors.gray03),
      // Match highlight color in the peek view result list.
      'peekViewResult.matchHighlightBackground': hex(colors.pink, 0.5),
      // Background color of the selected entry in the peek view result list.
      'peekViewResult.selectionBackground': hex(colors.cyan, 0.3),
      // Foreground color of the selected entry in the peek view result list.
      'peekViewResult.selectionForeground': hex(colors.gray01),
      // Background color of the peek view title area.
      'peekViewTitle.background': hex(colors.gray09),
      // Color of the peek view title info.
      'peekViewTitleDescription.foreground': hex(colors.gray03),
      // Color of the peek view title.
      'peekViewTitleLabel.foreground': hex(colors.gray01),

      //////////////////////////////
      // MERGE CONFLICTS
      // Merge conflict decorations are shown when the editor contains special diff ranges.
      //////////////////////////////
      // Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
      // "merge.currentHeaderBackground": hex(colors.unknown),
      // Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
      // "merge.currentContentBackground": hex(colors.unknown),
      // Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
      // "merge.incomingHeaderBackground": hex(colors.unknown),
      // Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
      // "merge.incomingContentBackground": hex(colors.unknown),
      // Border color on headers and the splitter in inline merge conflicts.
      // "merge.border": hex(colors.unknown),
      // Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
      // "merge.commonContentBackground": hex(colors.unknown),
      // Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
      // "merge.commonHeaderBackground": hex(colors.unknown),
      // Current overview ruler foreground for inline merge conflicts.
      // "editorOverviewRuler.currentContentForeground": hex(colors.unknown),
      // Incoming overview ruler foreground for inline merge conflicts.
      // "editorOverviewRuler.incomingContentForeground": hex(colors.unknown),
      // Common ancestor overview ruler foreground for inline merge conflicts.
      // "editorOverviewRuler.commonContentForeground": hex(colors.unknown),

      //////////////////////////////
      // PANEL COLORS
      // Panels are shown below the editor area and contain views like Output and Integrated Terminal.
      //////////////////////////////
      // Panel background color.
      'panel.background': hex(colors.gray08),
      // Panel border color to separate the panel from the editor.
      'panel.border': hex(colors.gray06),
      // Border color for the active panel title.
      'panelTitle.activeBorder': hex(colors.lavender),
      // Title color for the active panel.
      'panelTitle.activeForeground': hex(colors.gray01),
      // Title color for the inactive panel.
      'panelTitle.inactiveForeground': hex(colors.gray02),
      // Input box border for inputs in the panel.
      'panelInput.border': hex(colors.gray03),

      //////////////////////////////
      // PREVIEW
      //////////////////////////////
      // Border color for image in image preview.
      // "imagePreview.border": hex(colors.unknown),

      //////////////////////////////
      // STATUS BAR COLORS
      // The Status Bar is shown in the bottom of the workbench.
      //////////////////////////////
      // Standard Status Bar background color.
      'statusBar.background': hex(colors.gray10),
      // Status Bar foreground color.
      'statusBar.foreground': hex(colors.gray02),
      // Status Bar border color separating the Status Bar and editor.
      'statusBar.border': hex(colors.gray06),

      // Status Bar background color when a program is being debugged.
      'statusBar.debuggingBackground': hex(colors.gray03),
      // Status Bar foreground color when a program is being debugged.
      'statusBar.debuggingForeground': hex(colors.gray01),
      // Status Bar border color separating the Status Bar and editor when a program is being debugged.
      'statusBar.debuggingBorder': hex(colors.gray06),

      // Status Bar foreground color when no folder is opened.
      'statusBar.noFolderForeground': hex(colors.gray02),
      // Status Bar background color when no folder is opened.
      'statusBar.noFolderBackground': hex(colors.gray10),
      // Status Bar border color separating the Status Bar and editor when no folder is opened.
      'statusBar.noFolderBorder': hex(colors.gray06),

      // Status Bar item background color when clicking.
      'statusBarItem.activeBackground': hex(colors.gray08),
      // Status Bar item background color when hovering.
      'statusBarItem.hoverBackground': hex(colors.gray08),
      // Status Bar prominent items foreground color.
      'statusBarItem.prominentForeground': hex(colors.lavender),
      // Status Bar prominent items background color.
      'statusBarItem.prominentBackground': hex(colors.gray10),
      // Status Bar prominent items background color when hovering.
      'statusBarItem.prominentHoverBackground': hex(colors.gray08),
      // Background color for the remote indicator on the status bar.
      'statusBarItem.remoteBackground': hex(colors.lavender),
      // Foreground color for the remote indicator on the status bar.
      'statusBarItem.remoteForeground': hex(colors.gray01),

      // Prominent items stand out from other Status Bar entries to indicate importance.
      // One example is the Toggle Tab Key Moves Focus command change mode indicator.

      // Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions.
      // "statusBarItem.errorBackground": hex(colors.unknown),
      // Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions.
      // "statusBarItem.errorForeground": hex(colors.unknown),

      //////////////////////////////
      // TITLE BAR COLORS
      //////////////////////////////
      // Title Bar background when the window is active.
      // "titleBar.activeBackground": hex(colors.unknown),
      // Title Bar foreground when the window is active.
      // "titleBar.activeForeground": hex(colors.unknown),
      // Title Bar background when the window is inactive.
      // "titleBar.inactiveBackground": hex(colors.unknown),
      // Title Bar foreground when the window is inactive.
      // "titleBar.inactiveForeground": hex(colors.unknown),
      // Title bar border color.
      // "titleBar.border": hex(colors.unknown),

      //////////////////////////////
      // MENU BAR COLORS
      //////////////////////////////
      // Foreground color of the selected menu item in the menubar.
      // "menubar.selectionForeground": hex(colors.unknown),
      // Background color of the selected menu item in the menubar.
      // "menubar.selectionBackground": hex(colors.unknown),
      // Border color of the selected menu item in the menubar.
      // "menubar.selectionBorder": hex(colors.unknown),
      // Foreground color of menu items.
      // "menu.foreground": hex(colors.unknown),
      // Background color of menu items.
      // "menu.background": hex(colors.unknown),
      // Foreground color of the selected menu item in menus.
      // "menu.selectionForeground": hex(colors.unknown),
      // Background color of the selected menu item in menus.
      // "menu.selectionBackground": hex(colors.unknown),
      // Border color of the selected menu item in menus.
      // "menu.selectionBorder": hex(colors.unknown),
      // Color of a separator menu item in menus.
      // "menu.separatorBackground": hex(colors.unknown),
      // Border color of menus.
      // "menu.border": hex(colors.unknown),

      //////////////////////////////
      // NOTIFICATION COLORS
      // Note: The colors below only apply for VS Code versions 1.21 and higher.
      // Notification toasts slide up from the bottom-right of the workbench.
      // Once opened in the Notification Center, they are displayed in a list with a header:
      //////////////////////////////
      // Notification Center border color.
      'notificationCenter.border': hex(colors.lavender),
      // Notification Center header foreground color.
      'notificationCenterHeader.foreground': hex(colors.gray01),
      // Notification Center header background color.
      'notificationCenterHeader.background': hex(colors.gray08),

      // Notification toast border color.
      'notificationToast.border': hex(colors.lavender),

      // Notification foreground color.
      'notifications.foreground': hex(colors.gray01),
      // Notification background color.
      'notifications.background': hex(colors.gray08),
      // Notification border color separating from other notifications in the Notification Center.
      'notifications.border': hex(colors.lavender),

      // Notification links foreground color.
      'notificationLink.foreground': hex(colors.cyan),

      // The color used for the notification error icon.
      'notificationsErrorIcon.foreground': hex(colors.rose),
      // The color used for the notification warning icon.
      'notificationsWarningIcon.foreground': hex(colors.orange),
      // The color used for the notification info icon.
      'notificationsInfoIcon.foreground': hex(colors.yellow),

      //////////////////////////////
      // EXTENSIONS
      //////////////////////////////
      // Extension view button foreground color (for example Install button).
      'extensionButton.prominentForeground': hex(colors.gray04),
      // Extension view button background color.
      'extensionButton.prominentBackground': hex(colors.rose),
      // Extension view button background hover color.
      'extensionButton.prominentHoverBackground': hex(colors.lavender),
      // Background color for the remote badge in the extensions view.
      'extensionBadge.remoteBackground': hex(colors.rose),
      // Foreground color for the remote badge in the extensions view.
      'extensionBadge.remoteForeground': hex(colors.gray04),

      //////////////////////////////
      // QUICK PICKER
      //////////////////////////////
      // Quick picker (Quick Open) color for grouping borders.
      'pickerGroup.border': hex(colors.rose),
      // Quick picker (Quick Open) color for grouping labels.
      'pickerGroup.foreground': hex(colors.rose),
      // Quick input background color. The quick input widget is the container for views like the color theme picker.
      'quickInput.background': hex(colors.gray08),
      // Quick input foreground color. The quick input widget is the container for views like the color theme picker.
      'quickInput.foreground': hex(colors.gray02),

      //////////////////////////////
      // INTEGRATED TERMINAL COLORS
      //////////////////////////////
      // The background of the Integrated Terminal's viewport.
      'terminal.background': hex(colors.gray08),
      // The color of the border that separates split panes within the terminal. This defaults to panel.border.
      'terminal.border': hex(colors.gray06),
      // The default foreground color of the Integrated Terminal.
      // "terminal.foreground": hex(colors.unknown),
      // 'Black' ANSI color in the terminal.
      // "terminal.ansiBlack": hex(colors.unknown),
      // 'Blue' ANSI color in the terminal.
      // "terminal.ansiBlue": hex(colors.unknown),
      // 'BrightBlack' ANSI color in the terminal.
      // "terminal.ansiBrightBlack": hex(colors.unknown),
      // 'BrightBlue' ANSI color in the terminal.
      // "terminal.ansiBrightBlue": hex(colors.unknown),
      // 'BrightCyan' ANSI color in the terminal.
      // "terminal.ansiBrightCyan": hex(colors.unknown),
      // 'BrightGreen' ANSI color in the terminal.
      // "terminal.ansiBrightGreen": hex(colors.unknown),
      // 'BrightMagenta' ANSI color in the terminal.
      'terminal.ansiBrightMagenta': colors.pink,
      // 'BrightRed' ANSI color in the terminal.
      'terminal.ansiBrightRed': hex(colors.rose),
      // 'BrightWhite' ANSI color in the terminal.
      'terminal.ansiBrightWhite': hex(colors.gray01),
      // 'BrightYellow' ANSI color in the terminal.
      'terminal.ansiBrightYellow': hex(colors.yellow),
      // 'Cyan' ANSI color in the terminal.
      // "terminal.ansiCyan": hex(colors.unknown),
      // 'Green' ANSI color in the terminal.
      // "terminal.ansiGreen": hex(colors.unknown),
      // 'Magenta' ANSI color in the terminal.
      'terminal.ansiMagenta': colors.pink,
      // 'Red' ANSI color in the terminal.
      'terminal.ansiRed': hex(colors.rose),
      // 'White' ANSI color in the terminal.
      'terminal.ansiWhite': hex(colors.gray01),
      // 'Yellow' ANSI color in the terminal.
      'terminal.ansiYellow': hex(colors.yellow),

      // The selection background color of the terminal.
      'terminal.selectionBackground': hex(colors.lavender, 0.2),
      // The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
      'terminalCursor.background': hex(colors.gray01),
      // The foreground color of the terminal cursor.
      'terminalCursor.foreground': hex(colors.rose),

      //////////////////////////////
      // DEBUG
      //////////////////////////////
      // Debug toolbar background color.
      // "debugToolBar.background": hex(colors.unknown),
      // Debug toolbar border color.
      // "debugToolBar.border": hex(colors.unknown),
      // Background color of the top stack frame highlight in the editor.
      // "editor.stackFrameHighlightBackground": hex(colors.unknown),
      // Background color of the focused stack frame highlight in the editor.
      // "editor.focusedStackFrameHighlightBackground": hex(colors.unknown),

      //////////////////////////////
      // WELCOME PAGE
      //////////////////////////////
      // Background color for the Welcome page.
      'welcomePage.background': hex(colors.gray09),
      // Background color for the buttons on the Welcome page.
      'welcomePage.buttonBackground': hex(colors.gray05),
      // Hover background color for the buttons on the Welcome page.
      'welcomePage.buttonHoverBackground': hex(colors.lavender, 0.3),
      // Background color for the embedded editors on the Interactive Playground.
      // "walkThrough.embeddedEditorBackground": hex(colors.unknown),

      //////////////////////////////
      // GIT COLORS
      //////////////////////////////
      // Color for added Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.addedResourceForeground': colors.blue,
      // Color for modified Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.modifiedResourceForeground': hex(colors.cyan),
      // Color for deleted Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.deletedResourceForeground': hex(colors.lavender),
      // Color for untracked Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.untrackedResourceForeground': colors.green,
      // Color for ignored Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.ignoredResourceForeground': hex(hex(colors.gray02), 0.5),
      // Color for conflicting Git resources. Used for file labels and the SCM viewlet.
      'gitDecoration.conflictingResourceForeground': hex(colors.rose),
      // Color for submodule resources.
      'gitDecoration.submoduleResourceForeground': hex(colors.orange),
      // Foreground color for staged deletions git decorations.
      'gitDecoration.stageDeletedResourceForeground': hex(colors.lavender),
      // Foreground color for staged modifications git decorations.
      'gitDecoration.stageModifiedResourceForeground': hex(colors.cyan),

      //////////////////////////////
      // SETTINGS EDITOR COLORS
      // Note: These colors are for the GUI settings editor which can be opened with the Preferences: Open Settings (UI) command.
      //////////////////////////////
      // The foreground color for a section header or active title.
      'settings.headerForeground': hex(colors.gray01),
      // The line that indicates a modified setting.
      'settings.modifiedItemIndicator': hex(colors.cyan),

      // Dropdown background.
      'settings.dropdownBackground': hex(colors.gray05),
      // Dropdown foreground.
      'settings.dropdownForeground': hex(colors.gray01),
      // Dropdown border.
      'settings.dropdownBorder': hex(colors.gray03),
      // Dropdown list border.
      'settings.dropdownListBorder': hex(colors.gray03),

      // Checkbox background.
      'settings.checkboxBackground': hex(colors.gray05),
      // Checkbox foreground.
      'settings.checkboxForeground': hex(colors.gray01),
      // Checkbox border.
      'settings.checkboxBorder': hex(colors.gray03),

      // Text input box background.
      'settings.textInputBackground': hex(colors.gray05),
      // Text input box foreground.
      'settings.textInputForeground': hex(colors.gray01),
      // Text input box border.
      'settings.textInputBorder': hex(colors.gray03),

      // Number input box background.
      'settings.numberInputBackground': hex(colors.gray05),
      // Number input box foreground.
      'settings.numberInputForeground': hex(colors.gray01),
      // Number input box border.
      'settings.numberInputBorder': hex(colors.gray03),

      //////////////////////////////
      // BREADCRUMBS
      // The theme colors for breadcrumbs navigation:
      //////////////////////////////
      // Color of breadcrumb items.
      'breadcrumb.foreground': hex(colors.gray03),
      // Background color of breadcrumb items.
      'breadcrumb.background': hex(colors.gray09),
      // Color of focused breadcrumb items.
      'breadcrumb.focusForeground': hex(colors.gray01),
      // Color of selected breadcrumb items.
      'breadcrumb.activeSelectionForeground': hex(colors.cyan),
      // Background color of breadcrumb item picker.
      'breadcrumbPicker.background': hex(colors.gray05),

      //////////////////////////////
      // SNIPPETS
      // The theme colors for snippets:
      //////////////////////////////
      // Highlight background color of a snippet tabstop.
      // "editor.snippetTabstopHighlightBackground": hex(colors.unknown),
      // Highlight border color of a snippet tabstop.
      // "editor.snippetTabstopHighlightBorder": hex(colors.unknown),
      // Highlight background color of the final tabstop of a snippet.
      // "editor.snippetFinalTabstopHighlightBackground": hex(colors.unknown),
      // Highlight border color of the final tabstop of a snippet.
      // "editor.snippetFinalTabstopHighlightBorder": hex(colors.unknown),

      //////////////////////////////
      // SYMBOL ICONS
      // The theme colors for symbol icons that appears in the Outline view, breadcrumb navigation, and suggest widget:
      //////////////////////////////
      // The foreground color for array symbols.
      // "symbolIcon.arrayForeground": hex(colors.unknown),
      // The foreground color for boolean symbols.
      // "symbolIcon.booleanForeground": hex(colors.unknown),
      // The foreground color for class symbols.
      // "symbolIcon.classForeground": hex(colors.unknown),
      // The foreground color for color symbols.
      // "symbolIcon.colorForeground": hex(colors.unknown),
      // The foreground color for constant symbols.
      // "symbolIcon.constantForeground": hex(colors.unknown),
      // The foreground color for constructor symbols.
      // "symbolIcon.constructorForeground": hex(colors.unknown),
      // The foreground color for enumerator symbols.
      // "symbolIcon.enumeratorForeground": hex(colors.unknown),
      // The foreground color for enumerator member symbols.
      // "symbolIcon.enumeratorMemberForeground": hex(colors.unknown),
      // The foreground color for event symbols.
      // "symbolIcon.eventForeground": hex(colors.unknown),
      // The foreground color for field symbols.
      // "symbolIcon.fieldForeground": hex(colors.unknown),
      // The foreground color for file symbols.
      // "symbolIcon.fileForeground": hex(colors.unknown),
      // The foreground color for folder symbols.
      // "symbolIcon.folderForeground": hex(colors.unknown),
      // The foreground color for function symbols.
      // "symbolIcon.functionForeground": hex(colors.unknown),
      // The foreground color for interface symbols.
      // "symbolIcon.interfaceForeground": hex(colors.unknown),
      // The foreground color for key symbols.
      // "symbolIcon.keyForeground": hex(colors.unknown),
      // The foreground color for keyword symbols.
      // "symbolIcon.keywordForeground": hex(colors.unknown),
      // The foreground color for method symbols.
      // "symbolIcon.methodForeground": hex(colors.unknown),
      // The foreground color for module symbols.
      // "symbolIcon.moduleForeground": hex(colors.unknown),
      // The foreground color for namespace symbols.
      // "symbolIcon.namespaceForeground": hex(colors.unknown),
      // The foreground color for null symbols.
      // "symbolIcon.nullForeground": hex(colors.unknown),
      // The foreground color for number symbols.
      // "symbolIcon.numberForeground": hex(colors.unknown),
      // The foreground color for object symbols.
      // "symbolIcon.objectForeground": hex(colors.unknown),
      // The foreground color for operator symbols.
      // "symbolIcon.operatorForeground": hex(colors.unknown),
      // The foreground color for package symbols.
      // "symbolIcon.packageForeground": hex(colors.unknown),
      // The foreground color for property symbols.
      // "symbolIcon.propertyForeground": hex(colors.unknown),
      // The foreground color for reference symbols.
      // "symbolIcon.referenceForeground": hex(colors.unknown),
      // The foreground color for snippet symbols.
      // "symbolIcon.snippetForeground": hex(colors.unknown),
      // The foreground color for string symbols.
      // "symbolIcon.stringForeground": hex(colors.unknown),
      // The foreground color for struct symbols.
      // "symbolIcon.structForeground": hex(colors.unknown),
      // The foreground color for text symbols.
      // "symbolIcon.textForeground": hex(colors.unknown),
      // The foreground color for type parameter symbols.
      // "symbolIcon.typeParameterForeground": hex(colors.unknown),
      // The foreground color for unit symbols.
      // "symbolIcon.unitForeground": hex(colors.unknown),
      // The foreground color for variable symbols.
      // "symbolIcon.variableForeground": hex(colors.unknown),

      //////////////////////////////
      // DEBUG ICONS
      //////////////////////////////
      // Icon color for breakpoints.
      // "debugIcon.breakpointForeground": hex(colors.unknown),
      // Icon color for disabled breakpoints.
      // "debugIcon.breakpointDisabledForeground": hex(colors.unknown),
      // Icon color for unverified breakpoints.
      // "debugIcon.breakpointUnverifiedForeground": hex(colors.unknown),
      // Icon color for the current breakpoint stack frame.
      // "debugIcon.breakpointCurrentStackframeForeground": hex(colors.unknown),
      // Icon color for all breakpoint stack frames.
      // "debugIcon.breakpointStackframeForeground": hex(colors.unknown),
      // Debug toolbar icon for start debugging.
      // "debugIcon.startForeground": hex(colors.unknown),
      // Debug toolbar icon for pause.
      // "debugIcon.pauseForeground": hex(colors.unknown),
      // Debug toolbar icon for stop.
      // "debugIcon.stopForeground": hex(colors.unknown),
      // Debug toolbar icon for disconnect.
      // "debugIcon.disconnectForeground": hex(colors.unknown),
      // Debug toolbar icon for restart.
      // "debugIcon.restartForeground": hex(colors.unknown),
      // Debug toolbar icon for step over.
      // "debugIcon.stepOverForeground": hex(colors.unknown),
      // Debug toolbar icon for step into.
      // "debugIcon.stepIntoForeground": hex(colors.unknown),
      // Debug toolbar icon for step over.
      // "debugIcon.stepOutForeground": hex(colors.unknown),
      // Debug toolbar icon for continue.
      // "debugIcon.continueForeground": hex(colors.unknown),
      // Debug toolbar icon for step back.
      // "debugIcon.stepBackForeground": hex(colors.unknown),

      //////////////////////////////
      // DEBUG CONSOLE THEME COLORS
      //////////////////////////////
      // Foreground color for info messages
      'debugConsole.infoForeground': hex(colors.yellow),
      // Foreground color for warning messages
      'debugConsole.warningForeground': hex(colors.orange),
      // Foreground color for error messages
      'debugConsole.errorForeground': hex(colors.rose),
      // Foreground color for source filenames
      'debugConsole.sourceForeground': hex(colors.gray02),
      // Foreground color for Debug Console input marker icon
      'debugConsoleInputIcon.foreground': hex(colors.lavender),

      //////////////////////////////
      // NOTEBOOK COLOR TOKENS
      //////////////////////////////
      // // The border color for Notebook cells
      // "notebook.cellBorderColor": hex(colors.unknown),
      // // The background color of a cell when the cell is hovered
      // "notebook.cellHoverBackground": hex(colors.unknown),
      // // The color of the Notebook cell insertion indicator
      // "notebook.cellInsertionIndicator": hex(colors.unknown),
      // // The background color of a cell when the cell is focused
      // "notebook.focusedCellBackground": hex(colors.unknown),
      // // The color of the cell's top and bottom border when the cell is focused
      // "notebook.focusedCellBorder": hex(colors.unknown),
      // // The color of the Notebook cell editor border
      // "notebook.focusedEditorBorder": hex(colors.unknown),

      //////////////////////////////
      // COLORS INTENDED TO BE USED BY DATA VISUALIZATION EXTENSIONS
      //////////////////////////////
      // "charts.red": hex(colors.unknown),
      // "charts.blue": hex(colors.unknown),
      // "charts.yellow": hex(colors.unknown),
      // "charts.orange": hex(colors.unknown),
      // "charts.green": hex(colors.unknown),
      // "charts.purple": hex(colors.unknown),
      // "charts.foreground": hex(colors.unknown),
      // "charts.lines": hex(colors.unknown),

      // //////////////////////////////
      // // DEBUG VIEW
      // //////////////////////////////
      // // Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception
      // "debugView.exceptionLabelForeground": hex(colors.unknown),
      // // Background color for a label shown in the CALL STACK view when the debugger breaks on an exception
      // "debugView.exceptionLabelBackground": hex(colors.unknown),
      // // Foreground color for a label in the CALL STACK view showing the current session's or thread's state
      // "debugView.stateLabelForeground": hex(colors.unknown),
      // // Background color for a label in the CALL STACK view showing the current session's or thread's state
      // "debugView.stateLabelBackground": hex(colors.unknown),
      // // Color used to highlight value changes in the Debug views (for example, the Variables view)
      // "debugView.valueChangedHighlight": hex(colors.unknown),
      // // Foreground color for the token names shown in Debug views (for example, the Variables or Watch view)
      // "debugTokenExpression.name": hex(colors.unknown),
      // // Foreground color for the token values shown in Debug views
      // "debugTokenExpression.value": hex(colors.unknown),
      // // Foreground color for strings in Debug views
      // "debugTokenExpression.string": hex(colors.unknown),
      // // Foreground color for booleans in Debug views
      // "debugTokenExpression.boolean": hex(colors.unknown),
      // // Foreground color for numbers in Debug views
      // "debugTokenExpression.number": hex(colors.unknown),
      // // Foreground color for expression errors in Debug views
      // "debugTokenExpression.error": hex(colors.unknown),

      // //////////////////////////////
      // // SASH
      // //////////////////////////////
      // border hover color for sashes across the workbench
      // "sash.hoverBorder":hex(colors.unknown)

      // //////////////////////////////
      // // KEYBINDING LABEL COLORS
      // // Keybinding labels are shown when there is a keybinding associated with a command.
      // // Usages of the keybinding label include (but are not limited to):
      // //  - The Command Palette
      // //  - The Keyboard Shortcuts editor
      // //  - The Keyboard Shortcuts recorder modal
      // //  - The "feature contribution" section of an extension's marketplace page
      // //////////////////////////////
      // Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
      // "keybindingLabel.background": hex(colors.unknown),
      // Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
      // "keybindingLabel.foreground": hex(colors.unknown),
      // Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
      // "keybindingLabel.border": hex(colors.unknown),
      // Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.
      // "keybindingLabel.bottomBorder": hex(colors.unknown),

      // //////////////////////////////
      // // Keyboard shortcut table colors
      // //////////////////////////////
      // Background color for the keyboard shortcuts table header.
      // "keybindingTable.headerBackground": hex(colors.unknown),
      // Background color for the keyboard shortcuts table alternating rows.
      // "keybindingTable.rowsBackground": hex(colors.unknown),
    },
    semanticHighlighting: true,
    tokenColors: [
      //////////////////////////////
      // DIFFS
      //////////////////////////////
      {
        name: 'Diff',
        scope: ['meta.diff', 'meta.diff.header'],
        settings: {
          foreground: hex(colors.gray03),
        },
      },
      {
        name: 'Inserted',
        scope: ['markup.inserted'],
        settings: {
          foreground: hex(colors.cyan),
        },
      },
      {
        name: 'Deleted',
        scope: ['markup.deleted'],
        settings: {
          foreground: hex(colors.rose),
        },
      },
      {
        name: 'Changed',
        scope: ['markup.changed'],
        settings: {
          foreground: hex(colors.lavender),
        },
      },
      {
        name: 'Error',
        scope: ['markup.error'],
        settings: {
          fontStyle: 'underline italic',
          foreground: hex(colors.rose),
        },
      },
      {
        name: 'Invalid',
        scope: ['invalid', 'invalid.illegal'],
        settings: {
          fontStyle: 'underline italic',
          foreground: hex(colors.rose),
        },
      },
      {
        name: 'Invalid deprecated',
        scope: ['invalid.deprecated'],
        settings: {
          fontStyle: 'underline italic',
          foreground: hex(colors.rose),
        },
      },
      {
        name: 'Entity name filename',
        scope: ['entity.name.filename'],
        settings: {
          foreground: hex(colors.purple),
        },
      },

      //////////////////////////////
      // MARKDOWN / RST / PROSE
      //////////////////////////////
      {
        name: 'Text',
        scope: ['meta.paragraph.markdown', 'text.html.markdown'],
        settings: {
          foreground: hex(colors.gray01),
        },
      },
      {
        name: 'Underlined markup',
        scope: ['markup.underline'],
        settings: {
          fontStyle: 'underline',
        },
      },
      {
        name: 'Bold markup',
        scope: ['markup.bold'],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.blue),
        },
      },
      {
        name: 'Markup headings',
        scope: ['markup.heading'],
        settings: {
          fontStyle: 'bold underline',
          foreground: hex(colors.lavender),
        },
      },
      {
        name: 'Markup italic',
        scope: ['markup.italic'],
        settings: {
          fontStyle: 'italic',
          foreground: hex(colors.yellow),
        },
      },
      {
        name: 'Bullets, lists (prose)',
        scope: [
          'punctuation.definition.list.begin.markdown',
          'beginning.punctuation.definition.list.markdown',
          'beginning.punctuation.definition.quote.markdown',
          'punctuation.definition.link.restructuredtext',
        ],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.gray01),
        },
      },
      {
        name: 'Inline code (prose)',
        scope: ['markup.inline.raw', 'markup.raw.restructuredtext'],
        settings: {
          foreground: hex(colors.rose),
        },
      },
      {
        name: 'Code blocks',
        scope: [
          'fenced_code.block.language.markdown',
          'fenced_code.block.language',
          'markup.raw.inner.restructuredtext',
          'markup.fenced_code.block.markdown punctuation.definition.markdown',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: hex(colors.gray03),
        },
      },
      {
        name: 'Links (prose)',
        scope: ['markup.underline.link', 'markup.underline.link.image'],
        settings: {
          foreground: hex(colors.gray03),
        },
      },
      {
        name: 'Link text, image alt text (prose)',
        scope: [
          'meta.link.reference.def.restructuredtext',
          'punctuation.definition.directive.restructuredtext',
          'string.other.link.description',
          'string.other.link.title',
        ],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.cyan),
        },
      },
      {
        name: 'Blockquotes (prose)',
        scope: ['markup.quote', 'entity.name.directive.restructuredtext', 'markup.quote.markdown'],
        settings: {
          foreground: hex(colors.orange),
        },
      },
      // {
      // 	"name": "Braces in markdown blockquotes",
      // 	"scope": [
      //     "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin",
      //     "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end",
      // 	],
      // 	"settings": {
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },
      {
        name: 'Horizontal rule (prose)',
        scope: ['meta.separator.markdown'],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.pink),
        },
      },
      // {
      // 	"name": "Prose constants",
      // 	"scope": [
      //     "punctuation.definition.constant.restructuredtext",
      // 	],
      // 	"settings": {
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },
      // {
      // 	"name": "Braces in markdown headings",
      // 	"scope": [
      //     "markup.heading.markdown punctuation.definition.string.begin",
      //     "markup.heading.markdown punctuation.definition.string.end",
      // 	],
      // 	"settings": {
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },
      {
        name: 'Braces in markdown paragraphs',
        scope: [
          'meta.paragraph.markdown punctuation.definition.string.begin',
          'meta.paragraph.markdown punctuation.definition.string.end',
        ],
        settings: {
          foreground: hex(colors.gray03),
        },
      },

      //////////////////////////////
      // CLASSES
      //////////////////////////////
      {
        name: 'User-defined class names',
        scope: ['entity.name.type.class'],
        settings: {
          fontStyle: 'underline',
          foreground: hex(colors.gray01),
        },
      },
      {
        name: 'this, super, self, etc.',
        scope: [
          'keyword.expressions-and-types.swift',
          'keyword.other.this',
          'variable.language',
          'variable.language punctuation.definition.variable.php', // the "$" symbol in $this
          'variable.other.readwrite.instance.ruby', // ruby's "@" instance symbol
          'variable.parameter.function.language.special', // Special words as parameters
        ],
        settings: {
          fontStyle: 'italic',
          foreground: hex(colors.lavender),
        },
      },
      {
        name: 'Inherited classes',
        scope: ['entity.other.inherited-class'],
        settings: {
          foreground: hex(colors.gray01),
        },
      },

      //////////////////////////////
      // COMMENTS
      //////////////////////////////
      {
        name: 'Comments',
        scope: ['comment', 'punctuation.definition.comment', 'unused.comment', 'wildcard.comment'],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.gray03),
        },
      },
      {
        name: 'JSDoc-style keywords',
        scope: [
          'comment keyword.codetag.notation',
          'comment.block.documentation keyword',
          'comment.block.documentation storage.type.class',
        ],
        settings: {
          fontStyle: 'underline',
          foreground: hex(colors.gray03),
        },
      },
      // {
      // 	"name": "JSDoc-style types",
      // 	"scope": [
      //     "comment.block.documentation entity.name.type",
      // 	],
      // 	"settings": {
      //     "fontStyle": "italic",
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },
      // {
      // 	"name": "JSDoc-style type brackets",
      // 	"scope": [
      //     "comment.block.documentation entity.name.type punctuation.definition.bracket",
      // 	],
      // 	"settings": {
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },
      // {
      // 	"name": "JSDoc-style comment parameters",
      // 	"scope": [
      //     "omment.block.documentation variable",
      // 	],
      // 	"settings": {
      //    "fontStyle": "italic",
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },

      //////////////////////////////
      // CONSTANTS
      //////////////////////////////
      {
        name: 'Constants',
        scope: ['constant', 'variable.other.constant'],
        settings: {
          foreground: hex(colors.white),
        },
      },
      {
        name: 'Constant escape sequences',
        scope: ['constant.character.escape', 'constant.character.string.escape', 'constant.regexp'],
        settings: {
          foreground: hex(colors.cyan),
        },
      },

      //////////////////////////////
      // ENTITIES
      //////////////////////////////
      {
        name: 'HTML tags',
        scope: ['entity.name.tag'],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.rose),
        },
      },
      {
        name: 'HTML tags <>',
        scope: ['punctuation.definition.tag.begin.html', 'meta.tag.structure.body.start.html'],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.gray01),
        },
      },
      {
        name: 'HTML attribute values string (eg. width value)',
        scope: ['string.quoted.double.html'],
        settings: {
          foreground: hex(colors.gray01),
        },
      },
      {
        name: 'HTML image src string)',
        scope: ['meta.attribute.src.html'],
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: "CSS attribute parent selectors ('&')",
        scope: ['entity.other.attribute-name.parent-selector'],
        settings: {
          foreground: hex(colors.rose),
        },
      },
      {
        name: 'HTML/CSS attribute names',
        scope: ['entity.other.attribute-name'],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.lavender),
        },
      },

      //////////////////////////////
      // FUNCTIONS / METHODS
      //////////////////////////////
      {
        name: 'Function names',
        scope: [
          'entity.name.function',
          'meta.method.groovy',
          'support.function.any-method.lua',
          'keyword.operator.function.infix',
        ],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.blue),
        },
      },
      {
        name: 'Function call',
        scope: [
          'meta.function-call.generic',
          'meta.function-call.object',
          'meta.function-call.php',
          'meta.function-call.static',
          'meta.method-call.java meta.method',
        ],
        settings: {
          foreground: hex(colors.blue),
        },
      },
      {
        name: 'Function parameters',
        scope: [
          'entity.name.variable.parameter',
          'meta.at-rule.function variable', // Sass function params
          'meta.at-rule.mixin variable', // Sass mixin params
          'meta.function.arguments variable.other.php',
          'meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql',
          'variable.parameter',
        ],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.gray01),
        },
      },
      {
        name: 'Decorators',
        scope: [
          'meta.decorator variable.other.readwrite',
          'meta.decorator variable.other.property',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: hex(colors.gray01),
        },
      },
      {
        name: 'Decorator Objects',
        scope: ['meta.decorator variable.other.object'],
        settings: {
          foreground: hex(colors.gray01),
        },
      },

      //////////////////////////////
      // STRINGS
      //////////////////////////////
      {
        name: 'Strings',
        scope: ['string'],
        settings: {
          fontStyle: 'italic',
          foreground: hex(colors.purple),
        },
      },
      // {
      // 	"name": "String quotes (temporary vscode fix)",
      // 	"scope": [
      //     // NOTE: This is a temporary fix for VSCode expand selection.
      //     // See (https://github.com/Microsoft/vscode/issues/4795)
      // 		"punctuation.definition.string.begin",
      // 		"punctuation.definition.string.end"
      // 	],
      // 	"settings": {
      // 		"fontStyle": "italic",
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },
      // {
      // 	"name": "Property quotes (temporary vscode fix)",
      // 	"scope": [
      //     // NOTE: This is a temporary fix for VSCode expand selection.
      //     // See (https://github.com/Microsoft/vscode/issues/4795)
      // 		"punctuation.support.type.property-name.begin",
      // 		"punctuation.support.type.property-name.end"
      // 	],
      // 	"settings": {
      // 		"fontStyle": "italic",
      //     "foreground": hex(colors.unknown),
      // 	}
      // },
      // {
      // 	"name": "Docstrings",
      // 	"scope": [
      // 		"string.quoted.docstring.multi",
      // 		"string.quoted.docstring.multi.python punctuation.definition.string.begin",
      // 		"string.quoted.docstring.multi.python punctuation.definition.string.end",
      // 		"string.quoted.docstring.multi.python constant.character.escape"
      // 	],
      // 	"settings": {
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },

      //////////////////////////////
      // KEYWORDS
      //////////////////////////////
      {
        name: 'Keywords',
        scope: ['keyword', 'punctuation.definition.keyword'],
        settings: {
          foreground: hex(colors.lavender),
        },
      },
      {
        name: "Keyword 'new'",
        scope: ['keyword.control.new', 'keyword.operator.new'],
        settings: {
          fontStyle: 'bold',
        },
      },
      // {
      // 	"name": "Generic selectors (CSS/SCSS/Less/Stylus)",
      // 	"scope": [
      // 		"meta.selector",
      // 	],
      // 	"settings": {
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },

      //////////////////////////////
      // LANGUAGE BUILT-INS
      //////////////////////////////
      {
        name: 'Language Built-ins',
        scope: ['support'],
        settings: {
          foreground: hex(colors.gray01),
        },
      },
      // {
      // 	"name": "Built-in magic functions and constants",
      // 	"scope": [
      // 		"support.function.magic",
      //     "support.variable",
      //     "variable.other.predefined"
      // 	],
      // 	"settings": {
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },
      {
        name: 'Built-in functions / properties',
        scope: ['support.function', 'support.type.property-name'],
        settings: {
          foreground: hex(colors.blue),
        },
      },

      //////////////////////////////
      // PUNCTUATION
      //////////////////////////////
      {
        name: 'Separators (key/value, namespace, inheritance, pointer, hash, slice, etc)',
        scope: [
          'constant.other.symbol.hashkey punctuation.definition.constant.ruby',
          'entity.other.attribute-name.placeholder punctuation', // Sass placeholder `%` symbols
          'entity.other.attribute-name.pseudo-class punctuation',
          'entity.other.attribute-name.pseudo-element punctuation',
          'meta.group.double.toml',
          'meta.group.toml',
          'meta.object-binding-pattern-variable punctuation.destructuring',
          'punctuation.colon.graphql',
          'punctuation.definition.block.scalar.folded.yaml',
          'punctuation.definition.block.scalar.literal.yaml',
          'punctuation.definition.block.sequence.item.yaml',
          'punctuation.definition.entity.other.inherited-class',
          'punctuation.function.swift',
          'punctuation.separator.dictionary.key-value',
          'punctuation.separator.hash',
          'punctuation.separator.inheritance',
          'punctuation.separator.key-value',
          'punctuation.separator.key-value.mapping.yaml',
          'punctuation.separator.namespace',
          'punctuation.separator.pointer-access',
          'punctuation.separator.slice',
          'string.unquoted.heredoc punctuation.definition.string',
          'support.other.chomping-indicator.yaml',
          'punctuation.separator.annotation',
        ],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.gray01),
        },
      },
      {
        name: 'Brackets, braces, parens, etc.',
        scope: [
          'keyword.operator.other.powershell', // Commas
          'keyword.other.statement-separator.powershell',
          'meta.brace.round',
          'meta.function-call punctuation',
          'punctuation.definition.arguments.begin',
          'punctuation.definition.arguments.end',
          'punctuation.definition.entity.begin',
          'punctuation.definition.entity.end',
          'punctuation.definition.tag.cs', // HTML tags in comments
          'punctuation.definition.type.begin',
          'punctuation.definition.type.end',
          'punctuation.section.scope.begin',
          'punctuation.section.scope.end',
          'storage.type.generic.java',
          'string.template meta.brace',
          'string.template punctuation.accessor',
        ],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.gray01),
        },
      },
      {
        name: 'Variable interpolation operators',
        scope: [
          'meta.string-contents.quoted.double punctuation.definition.variable',
          'punctuation.definition.interpolation.begin',
          'punctuation.definition.interpolation.end',
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
          'punctuation.section.embedded.begin',
          'punctuation.section.embedded.coffee',
          'punctuation.section.embedded.end',
          'punctuation.section.embedded.end source.php', // PHP edge case
          'punctuation.section.embedded.end source.ruby', // Issue with ruby's tmLanguage
          'punctuation.definition.variable.makefile',
        ],
        settings: {
          foreground: hex(colors.gray01),
        },
      },

      //////////////////////////////
      // SERIALIZABLE / CONFIG LANGAGES
      //////////////////////////////
      {
        name: 'Keys (serializable languages)',
        scope: [
          'entity.name.function.target.makefile',
          'entity.name.section.toml',
          'entity.name.tag.yaml',
          'variable.other.key.toml',
        ],
        settings: {
          fontStyle: 'italic',
        },
      },
      // {
      // 	"name": "Dates / timestamps (serializable languages)",
      // 	"scope": [
      // 		"constant.other.date",
      // 		"constant.other.timestamp"
      // 	],
      // 	"settings": {
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },
      // {
      // 	"name": "YAML aliases",
      // 	"scope": [
      // 		"variable.other.alias.yaml",
      // 	],
      // 	"settings": {
      // 		"fontStyle": "italic underline",
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },

      //////////////////////////////
      // STORAGE
      //////////////////////////////
      {
        name: 'Storage',
        scope: [
          'storage',
          'meta.implementation storage.type.objc',
          'meta.interface-or-protocol storage.type.objc',
          'source.groovy storage.type.def',
        ],
        settings: {
          foreground: hex(colors.rose),
        },
      },
      {
        name: 'Types',
        scope: [
          'entity.name.type',
          'keyword.primitive-datatypes.swift',
          'keyword.type.cs',
          'meta.protocol-list.objc',
          'meta.return-type.objc',
          'source.go storage.type',
          'source.groovy storage.type',
          'source.java storage.type',
          'source.powershell entity.other.attribute-name',
          'storage.class.std.rust',
          'storage.type.attribute.swift',
          'storage.type.c',
          'storage.type.core.rust',
          'storage.type.cs',
          'storage.type.groovy',
          'storage.type.objc',
          'storage.type.php',
          'storage.type.haskell',
          'storage.type.ocaml',
        ],
        settings: {
          fontStyle: 'underline',
          foreground: hex(colors.cyan),
        },
      },
      {
        name: 'Generics, templates, and mapped type declarations',
        scope: [
          'entity.name.type.type-parameter',
          'meta.indexer.mappedtype.declaration entity.name.type', // Mapped type declarations
          'meta.type.parameters entity.name.type', // Generic type declarations
        ],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.rose),
        },
      },
      {
        name: 'Modifiers',
        scope: ['storage.modifier'],
        settings: {
          foreground: hex(colors.lavender),
        },
      },

      //////////////////////////////
      // VARIABLES
      //////////////////////////////
      {
        name: 'Variables and object properties',
        scope: [
          'variable',
          'constant.other.key.perl', // Perl edge case
          'support.variable.property', // Object properties
          'variable.other.constant.js', // Fix incorrect highlighting of pseudo-constants in js, jsx
          'variable.other.constant.ts', // Fixes incorrect highlighting of pseudo-constants in ts
          'variable.other.constant.tsx', // Fixes incorrect highlighting of pseudo-constants in tsx
        ],
        settings: {
          foreground: hex(colors.gray01),
        },
      },
      {
        name: 'Destructuring / aliasing reference name (LHS)',
        scope: [
          'meta.import variable.other.readwrite', // Module import aliasing (real name)
          'meta.object-binding-pattern-variable variable.object.property', // Object destructuring property
          'meta.variable.assignment.destructured.object.coffee variable', // Object destructuring property (coffeescript)
        ],
        settings: {
          foreground: hex(colors.gray01),
        },
      },
      {
        name: 'Destructuring / aliasing variable name (RHS)',
        scope: [
          'meta.import variable.other.readwrite.alias', // Module import aliasing (alias name)
          'meta.export variable.other.readwrite.alias', // Module import aliasing (alias name)
          'meta.variable.assignment.destructured.object.coffee variable variable', // Object destructuring variable (coffeescript)
        ],
        settings: {
          foreground: hex(colors.gray01),
        },
      },

      //////////////////////////////
      // LANGUAGE EXTENSIONS / EDGE CASES
      //////////////////////////////

      // GraphQL
      // ----------------------------------------
      // {
      // 	"name": "GraphQL keys",
      // 	"scope": [
      // 		"meta.selectionset.graphql variable",
      // 	],
      // 	"settings": {
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },
      // {
      // 	"name": "GraphQL function arguments",
      // 	"scope": [
      // 		"meta.selectionset.graphql meta.arguments variable",
      // 	],
      // 	"settings": {
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },
      // {
      // 	"name": "GraphQL fragment name (definition)",
      // 	"scope": [
      // 		"entity.name.fragment.graphql",
      // 		"variable.fragment.graphql"
      // 	],
      // 	"settings": {
      // 		"foreground": hex(colors.unknown)
      // 	}
      // },

      // Edge cases
      // ----------------------------------------
      {
        name: 'Edge cases (foreground color resets)',
        scope: [
          'constant.other.symbol.hashkey.ruby', // Ruby hash keys
          'keyword.operator.dereference.java', // Java dot access
          'keyword.operator.navigation.groovy', // groovy dot access
          'meta.scope.for-loop.shell punctuation.definition.string.begin',
          'meta.scope.for-loop.shell punctuation.definition.string.end',
          'meta.scope.for-loop.shell string',
          'storage.modifier.import', // Java / Groovy imports
          'punctuation.section.embedded.begin.tsx',
          'punctuation.section.embedded.end.tsx',
          'punctuation.section.embedded.begin.jsx',
          'punctuation.section.embedded.end.jsx',
          'punctuation.separator.list.comma.css', // Commas separating selectors in CSS
          'constant.language.empty-list.haskell',
        ],
        settings: {
          fontStyle: 'bold',
          foreground: hex(colors.gray01),
        },
      },

      // This is set to conform to the standard of coloring langage constants purple.
      // In this case, this colors "$?", "$@", "$*", "$1", etc...
      // ----------------------------------------
      {
        name: "Shell variables prefixed with '$' (edge case)",
        scope: ['source.shell variable.other'],
        settings: {
          foreground: hex(colors.lavender),
        },
      },

      {
        name: 'Powershell constants mistakenly scoped to `support`, rather than `constant` (edge)',
        scope: ['support.constant'],
        settings: {
          foreground: hex(colors.lavender),
        },
      },
      {
        name: 'Makefile prerequisite names',
        scope: ['meta.scope.prerequisites.makefile'],
        settings: {
          foreground: hex(colors.yellow),
        },
      },
      {
        name: 'SCSS attibute selector strings',
        scope: ['meta.attribute-selector.scss'],
        settings: {
          foreground: hex(colors.yellow),
        },
      },
      {
        name: 'SCSS attribute selector brackets',
        scope: [
          'punctuation.definition.attribute-selector.end.bracket.square.scss',
          'punctuation.definition.attribute-selector.begin.bracket.square.scss',
        ],
        settings: {
          foreground: hex(colors.gray01),
        },
      },
      {
        name: 'Haskell Pragmas',
        scope: ['meta.preprocessor.haskell'],
        settings: {
          foreground: hex(colors.gray03),
        },
      },

      //////////////////////////////
      // REGEXP
      //////////////////////////////
      {
        name: 'RegExp string',
        scope: [
          'string.regexp',
          'constant.other.character-class.set.regexp',
          'constant.character.escape.backslash.regexp',
        ],
        settings: {
          foreground: hex(colors.purple),
        },
      },
      {
        name: 'Non-capture operators',
        scope: [
          // NOTE: The scope name is a misnomer. It is actually non-capture operators
          'punctuation.definition.group.capture.regexp',
        ],
        settings: {
          foreground: hex(colors.rose),
        },
      },
      {
        name: 'RegExp start and end characters',
        scope: [
          'string.regexp punctuation.definition.string.begin',
          'string.regexp punctuation.definition.string.end',
        ],
        settings: {
          foreground: hex(colors.cyan),
        },
      },
      {
        name: 'Character group',
        scope: ['punctuation.definition.character-class.regexp'],
        settings: {
          foreground: hex(colors.blue),
        },
      },
      {
        name: 'Capture groups',
        scope: ['punctuation.definition.group.regexp'],
        settings: {
          foreground: hex(colors.rose),
        },
      },
      {
        name: 'Assertion operators',
        scope: [
          'punctuation.definition.group.assertion.regexp',
          'keyword.operator.negation.regexp',
        ],
        settings: {
          foreground: hex(colors.rose),
        },
      },
      {
        name: 'Positive lookaheads',
        scope: ['meta.assertion.look-ahead.regexp'],
        settings: {
          foreground: hex(colors.cyan),
        },
      },
      //////////////////////////////
      // OBJECTS
      //////////////////////////////
      {
        name: 'Key object',
        scope: ['meta.object'],
        settings: {
          foreground: hex(colors.cyan),
        },
      },
    ],
  }
}

module.exports = getTheme

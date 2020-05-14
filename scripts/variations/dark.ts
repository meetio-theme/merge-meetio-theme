import { dark as ui } from '@meetio/meetio-colors';

export const dark = {
    // Section: Define Meetio Colors
    cursor: ui.cursor,
    foreground: ui.foreground,
    background: ui.background,
    comments: ui.comments,
    blue: ui.blue,
    brown: ui.brown,
    cyan: ui.cyan,
    green: ui.green,
    orange: ui.orange,
    pink: ui.pink,
    purple: ui.purple,
    red: ui.red,
    yellow: ui.yellow,
    invalid: ui.invalid,
    deprecated: ui.deprecated,
    diffAdded: ui.diffAdded,
    diffModified: ui.diffModified,
    diffDeleted: ui.diffDeleted,

    colorAccent: '#80CBC4',
    accentDark: 'color(var(background) l(- 0.75%))',
    accentDarker: 'color(var(background) l(- 1.00%))',
    accentDarkest: 'color(var(background) l(- 2.00%))',
    accentLight: 'color(var(background) l(+ 2%))',
    accentLighter: 'color(var(background) l(+ 4%))',
    accentLightest: 'color(var(background) l(+ 10%))',

    darkRed: 'color(var(red) s(25%) l(35%))',
    darkBlue: 'color(var(blue) s(25%) l(35%))',

    mediumGray: 'hsl(210, 10%, 50%)',
    darkGrayLightest: 'hsl(210, 10%, 19%)',
    darkGrayLight: 'hsl(210, 10%, 16%)',
    darkGrayMedium: 'hsl(210, 10%, 13%)',
    darkGray: 'hsl(210, 10%, 10%)',

    // Section: Labels
    labelColor: 'var(foreground)',
    helpLabelColor: 'color(var(foreground) a(0.6))',
    branchStatsLabelBg: 'color(var(accentLightest) a(0.75))',

    // Section: Header
    titleBarStyle: 'dark',
    headerBg: 'var(background)',
    headerFg: 'var(foreground)',
    headerButtonBg: 'var(accentLight)',

    // Section: Icons on Header (e.g: Push, Pull, Search)
    iconButtonOpacity: 1,
    iconButtonOpacityHover: 0.8,
    iconButtonOpacityFaded: 0.4,
    iconButtonOpacityHidden: 0.0,

    infoShadow: 'color(black a(0.2))',

    divergedBg: 'color(var(orange) l(- 5%) s(- 20%))',
    divergedButtonBg: 'var(buttonBg)',
    divergedButtonFg: 'var(darkGray)',

    // Section: Scroll shadow
    scrollShadow: 'color(black a(0.3))',

    // Section: Focus highlight
    focusHighlightColor: 'var(foreground)',

    // Section: Overlay
    overlayBg: 'var(background)',

    // Section: Welcome overlay
    welcomeBg: 'var(accentLight)',
    recentRepositoriesRowBg: 'var(accentLight)',
    recentRepositoriesRowBgHover: 'var(accentLightest)',

    // Section: Preferences Page
    preferencesOverlayBg: 'var(background)',
    preferencesSectionTableBg: 'var(background)',
    preferencesSectionTableRowBg: 'var(accentLight)',
    preferencesOverlayLeft: 'var(background)',

    // Section: Side bar
    locationBarFg: 'var(foreground)',
    locationBarHeadingFg: 'var(foreground)',
    locationBarHeadingShadow: 'black',
    locationBarRowBgHover: 'var(accentLight)',
    disclosureFg: 'white',

    // Section: Commit list
    commitListBg: 'var(background)',
    commitRowBgHover: 'var(background)',
    commitSummaryFgPrimary: 'var(foreground)',
    commitSummaryFgSecondary: 'var(foreground)',

    commitEdge0: 'var(blue)',
    commitEdge1: 'var(purple)',
    commitEdge2: 'var(red)',
    commitEdge3: 'color(var(orange) l(- 10%))',
    commitEdge4: 'var(yellow)',
    commitEdge5: 'color(var(cyan) l(50%))',

    // Section: Sidebar
    sideBarContainerBg: 'var(background)',
    sideBarContainerBgWithGraph: 'var(accentLight)',

    // Section: Table of Contents
    tableOfContentsBg: 'var(background)',
    tableOfContentsFg: 'var(foreground)',
    tableOfContentsHeadingFg: 'var(foreground)',
    tableOfContentsRowBg: 'var(background)',

    // Section: Detail panel
    detailPanelBg: 'var(background)',
    fieldNameFg: 'var(foreground)',
    authorFg: 'color(var(--foreground) a(0.4))',
    terminatorFg: 'var(colorAccent)',

    // Section: Center Branch Input
    outputSucceededFg: "var(green)",
    outputFailedFg: "var(red)",
    outputRunningFg: "var(cyan)",
    outputCanceledFg: "var(red)",

    // Section: Tool Tips
    toolTipBg: 'var(accentLight)',
    toolTipFg: 'var(foreground)',

    // Section: Annotations
    headAnnFg: 'var(darkGray)',
    headAnnBg: 'var(purple)',

    branchAnnFg: 'var(darkGray)',
    branchAnnBg: 'var(blue)',

    remoteAnnFg: 'var(darkGray)',
    remoteAnnBg: 'var(cyan)',

    tagAnnFg: 'var(darkGray)',
    tagAnnBg: 'var(yellow)',

    stashAnnFg: 'var(darkGray)',
    stashAnnBg: 'var(orange)',

    fileAnnFg: 'var(foreground)',
    fileAnnBg: 'color(var(accentLightest) a(0.75))',

    submoduleAnnBg: 'var(darkGrayLightest)',
    submoduleLightAnnBg: 'var(darkGrayLightest)',

    insertedAnnBg: 'color(var(cyan) a(0.50))',
    deletedAnnBg: 'color(var(red) a(0.50))',

    // Section: Diff headers
    fileDiffShadow: 'color(black a(0.5))',
    fileIconBg: 'color(white a(0.2))',

    hunkButtonFg: 'var(foreground)',
    hunkButtonShadow: 'color(black a(0.5))',

    fileHeaderBg: 'var(background)',
    fileHeaderBgHover: 'var(background)',

    hunkHeaderBg: 'var(accentLight)',

    deletedIconFg: 'var(foreground)',
    deletedHeaderBg: 'var(darkRed)',
    deletedHeaderBgHover: 'color(var(darkRed) l(+ 5%))',

    unmergedIconFg: 'color(var(foreground) l(+ 20%))',
    unmergedHeaderBg: 'var(darkBlue)',
    unmergedHeaderBgHover: 'color(var(darkBlue) l(+ 5%))',

    recentIconFg: 'var(yellow)',
    recentIconBg: 'transparent',
    untrackedHeaderBg: 'var(accentLight)',
    untrackedHeaderBgHover: 'var(accentLighter)',

    stagedIconFg: 'var(foreground)',

    renamedFileInserted: 'color(var(green) s(30%) l(60%))',
    renamedFileDeleted: 'color(var(red) s(50%) l(65%))',

    // Section: Sidebar Location Icon Visible
    hiddenSlash: "var(red)",

    // Section: Blame
    blamePopupBg: 'color(var(--background) l(+ 10%))',

    // Section: Buttons
    buttonBg: 'color(var(background) l(+ 5%))',
    buttonBgWelcome: 'color(var(welcomeBg) l(+ 5%))',
    buttonFg: 'var(labelColor)',
    buttonShadow: 'color(black a(0.5))',
    buttonBgHover: 'color(var(colorAccent) a(0.2))',

    // Section: Inputs
    inputBackground: 'var(background)',
    inputBackgroundWelcome: 'var(welcomeBg)',
    inputBorderColor: 'color(var(background) l(+ 2%))',
    inputBorderSize: [0, 0, 0, 2],

    highlightedButtonLightBg: 'color(hsl(84, 35%, 50%))',
    highlightedButtonLightFg: 'var(labelColor)',
    highlightedButtonDarkBg: 'color(hsl(83, 40%, 44%))',
    highlightedButtonDarkFg: 'var(labelColor)',
    highlightedButtonShadow: 'color(black a(0.5) l(+ 10%))',

    toggleButtonBg: 'color(var(accentLightest) a(0.5))',
    toggleButtonFg: 'var(foreground)',
    toggleButtonFgSelected: 'var(foreground)',

    // Section: Tabs
    tabBarBg: 'var(background)',
    tabSeparatorBg: 'var(accentLighter)',
    tabBackground: ['background', 1],
    tabSelectedBorderColor: 'var(colorAccent)',
    tabSelectedBorderSize: [0, 0, 0, 2],
    tabLabelColor: "color(var(foreground) a(0.50))",
    tabLabelColorHover: "color(var(colorAccent) a(1.0))",
    tabLabelColorSelected: "color(var(colorAccent) a(1.0))",

    // Section: Radio buttons
    radioBack: 'var(--background)',
    radioSelected: 'var(blue)',
    radioBorderSelected: 'var(blue)',

    // Section: Checkbox buttons
    checkboxBack: 'var(--background)',
    checkboxSelected: 'var(blue)',
    checkboxBorderSelected: 'var(blue)',

    // Section: Dialogs
    dialogBg: 'var(background)',
    dialogButtonBg: 'var(accentLight)',

    // Section: Progress bar
    progressBg: 'color(var(accentLightest) l(+ 3%))',
    progressFg: 'color(var(accentDarker) a(0.5))',

    // Section: Quick panel
    quickPanelBg: 'var(background)',
    quickPanelRowBg: 'var(accentLighter)',
    quickPanelFg: 'var(foreground)',
    quickPanelFgMatch: 'var(foreground)',
    quickPanelFgSelected: 'var(foreground)',
    quickPanelFgSelectedMatch: 'var(foreground)',
    quickPanelPathFg: 'var(foreground)',
    quickPanelPathFgMatch: 'var(foreground)',
    quickPanelPathFgSelected: 'var(foreground)',
    quickPanelPathFgSelectedMatch: 'var(foreground)',

    // Section: Switch repository window
    switchRepoBg: 'var(background)',

    // Section: Hints
    failedLabelFg: 'var(darkGray)',

    // Section: Loading
    loadingBall1: 'var(mediumGray)',
    loadingBall2: 'var(blue)',

    // Section: Command Palette
    previewFg: 'white',

    // Section: Merge Helper
    mergeHelperHighlightBg: 'color(var(accentLightest) l(25%))',
    consoleBorder: 'var(background)',

    // Section: Hazard buttons
    hazardButtonBg: 'var(red)',

    // Section: Tabs
    repositoryTabBarBg: 'var(background)',
    repositoryTabBarBorderBg: 'var(background)',

    fileBadgeModifiedFg: 'var(mediumGray)',
    fileBadgeUnmergedFg: '#2e1d07',
    fileBadgeUntrackedBg: 'var(detailPanelBg)',
    fileBadgeUntrackedFg: 'var(mediumGray-dark)',
    fileBadgeStagedBg: 'var(fileHeaderBg)',
    fileBadgeStagedFg: 'var(mediumGray-light)',
};

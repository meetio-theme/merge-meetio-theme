 import { light as ui } from '@meetio/meetio-colors';

export const light = {
    textHeading: "#ddd",
    text: "#aaa",

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

    accentDark: "color(var(background) l(- 0.75%))",
    accentDarker: "color(var(background) l(- 1.00%))",
    accentDarkest: "color(var(background) l(- 2.00%))",
    accentLight: "color(var(background) l(+ 2%))",
    accentLighter: "color(var(background) l(+ 4%))",
    accentLightest: "color(var(background) l(+ 10%))",

    teal: "hsl(180, 40%, 65%)",
    magenta: "hsl(330, 70%, 65%)",

    darkRed: "color(var(red) s(25%) l(35%))",
    darkTeal: "color(var(teal) s(25%) l(35%))",
    darkBlue: "color(var(blue) s(25%) l(35%))",

    mediumGray: "hsl(210, 10%, 50%)",
    darkGrayLightest: "hsl(210, 10%, 19%)",
    darkGrayLight: "hsl(210, 10%, 16%)",
    darkGrayMedium: "hsl(210, 10%, 13%)",
    darkGray: "hsl(210, 10%, 10%)",

    // Labels
    labelColor: "var(foreground)",
    helpLabelColor: "color(var(foreground) a(0.6))",
    branchStatsLabelBg: "color(var(accentLightest) a(0.75))",

    // Header
    titleBarStyle: "light",
    headerBg: "var(background)",
    headerFg: "var(foreground)",
    headerButtonBg: "var(accentLight)",

    // Icons on Header (e.g: Push, Pull, Search)
    iconButtonOpacity: 1,
    iconButtonOpacityHover: 0.8,
    iconButtonOpacityFaded: 0.4,
    iconButtonOpacityHidden: 0.0,

    infoShadow: "color(black a(0.2))",

    divergedBg: "color(var(orange) l(- 5%) s(- 20%))",
    divergedButtonBg: "var(buttonBg)",
    divergedButtonFg: "var(foreground)",

    // Scroll shadow
    scrollShadow: "color(black a(0.3))",

    // Focus highlight
    focusHighlightColor: "var(foreground)",

    // Overlay
    overlayBg: "var(background)",

    // Welcome overlay
    welcomeBg: "var(accentDarkest)",
    recentRepositoriesRowBgHover: "var(background)",

    // Preferences Page
    preferencesOverlayBg: "var(background)",
    preferencesSectionTableBg: "var(background)",
    preferencesSectionTableRowBg: "var(accentLight)",
    preferencesOverlayLeft: "var(background)",

    // Side bar
    locationBarFg: "var(foreground)",
    locationBarHeadingFg: "var(foreground)",
    locationBarHeadingShadow: "black",
    locationBarRowBgHover: "var(accentLight)",
    disclosureFg: "white",

    // Commit list
    commitListBg: "var(background)",
    commitRowBgHover: "var(background)",
    commitSummaryFgPrimary: "var(foreground)",
    commitSummaryFgSecondary: "var(foreground)",

    commitEdge0: "var(blue)",
    commitEdge1: "var(purple)",
    commitEdge2: "var(magenta)",
    commitEdge3: "color(var(orange) l(- 10%))",
    commitEdge4: "var(yellow)",
    commitEdge5: "color(var(teal) l(50%))",

    // Sidebar Bar
    sideBarContainerBg: "var(background)",

    // Table of Contents
    tableOfContentsBg: "var(background)",
    tableOfContentsFg: "var(foreground)",
    tableOfContentsHeadingFg: "var(foreground)",
    tableOfContentsRowBg: "var(background)",

    // Detail panel
    detailPanelBg: "var(background)",
    fieldNameFg: "var(foreground)",
    authorFg: "color(var(--foreground) a(0.4))",
    terminatorFg: 'var(colorAccent)',

    // Center Branch Input
    outputSucceededFg: "var(green)",
    outputFailedFg: "var(red)",
    outputRunningFg: "var(cyan)",
    outputCanceledFg: "var(red)",

    // Tool Tips
    toolTipBg: "var(accentLight)",
    toolTipFg: "var(foreground)",

    // Annotations
    headAnnFg: "var(foreground)",
    headAnnBg: "var(purple)",

    branchAnnFg: "var(foreground)",
    branchAnnBg: "var(blue)",

    remoteAnnFg: "var(foreground)",
    remoteAnnBg: "var(cyan)",

    tagAnnFg: "var(foreground)",
    tagAnnBg: "var(yellow)",

    stashAnnFg: "var(foreground)",
    stashAnnBg: "var(orange)",

    fileAnnFg: "var(foreground)",
    fileAnnBg: "color(var(accentLightest) a(0.75))",

    submoduleAnnBg: "var(darkGrayLightest)",
    submoduleLightAnnBg: "var(darkGrayLightest)",

    insertedAnnBg: "color(var(cyan) a(0.50))",
    deletedAnnBg: "color(var(red) a(0.50))",

    // Diff headers
    fileDiffShadow: "color(black a(0.5))",
    fileIconBg: "color(white a(0.2))",

    hunkButtonFg: "#eee",
    hunkButtonShadow: "color(black a(0.5))",

    fileHeaderBg: "var(background)",
    fileHeaderBgHover: "var(background)",

    hunkHeaderBg: "var(accentLight)",

    deletedIconFg: "var(foreground)",
    deletedHeaderBg: "var(darkRed)",
    deletedHeaderBgHover: "color(var(darkRed) l(+ 5%))",

    unmergedIconFg: "color(var(foreground) l(+ 20%))",
    unmergedHeaderBg: "var(darkBlue)",
    unmergedHeaderBgHover: "color(var(darkBlue) l(+ 5%))",

    recentIconFg: "var(yellow)",
    recentIconBg: "transparent",
    untrackedHeaderBg: 'var(accentLight)',
    untrackedHeaderBgHover: 'var(accentLighter)',

    stagedIconFg: "var(foreground)",

    renamedFileInserted: "color(var(green) s(30%) l(60%))",
    renamedFileDeleted: "color(var(red) s(50%) l(65%))",

    // Sidebar Location Icon Visible
    hiddenSlash: "var(red)",

    // Blame
    blamePopupBg: "color(var(--background) l(+ 10%))",

    // Buttons
    buttonBg: "var(accentLighter)",
    buttonFg: "var(labelColor)",
    buttonShadow: "color(black a(0.5))",

    highlightedButtonLightBg: "color(hsl(84, 35%, 50%))",
    highlightedButtonLightFg: "var(labelColor)",
    highlightedButtonDarkBg: "color(hsl(83, 40%, 44%))",
    highlightedButtonDarkFg: "var(labelColor)",
    highlightedButtonShadow: "color(black a(0.5) l(+ 10%))",

    toggleButtonBg: "color(var(accentLightest) a(0.5))",
    toggleButtonFg: "var(foreground)",
    toggleButtonFgSelected: "var(foreground)",

    // Tabs
    tabBarBg: "var(background)",
    tabSeparatorBg: "var(accentLighter)",

    // Radio buttons
    radioBack: "var(--background)",
    radioSelected: "var(blue)",
    radioBorderSelected: "var(blue)",

    // Checkbox buttons
    checkboxBack: "var(--background)",
    checkboxSelected: "var(blue)",
    checkboxBorderSelected: "var(blue)",

    // Dialogs
    dialogBg: "var(background)",
    dialogButtonBg: "var(accentLight)",

    // Progress bar
    progressBg: "color(var(accentLightest) l(+ 3%))",
    progressFg: "color(var(accentDarker) a(0.5))",

    // Quick panel
    quickPanelBg: "var(background)",
    quickPanelRowBg: "var(accentLighter)",
    quickPanelFg: "var(foreground)",
    quickPanelFgMatch: "var(foreground)",
    quickPanelFgSelected: "var(foreground)",
    quickPanelFgSelectedMatch: "var(foreground)",
    quickPanelPathFg: "var(foreground)",
    quickPanelPathFgMatch: "var(foreground)",
    quickPanelPathFgSelected: "var(foreground)",
    quickPanelPathFgSelectedMatch: "var(foreground)",

    // Switch repository window
    switchRepoBg: "var(background)",

    // Hints
    failedLabelFg: "var(foreground)",

    // Loading
    loadingBall1: "var(mediumGray)",
    loadingBall2: "var(blue)",

    // Command Palette
    previewFg: "white",

    // Merge Helper
    mergeHelperHighlightBg: "color(var(accentLightest) l(25%))",
    consoleBorder: "var(background)",

    // Hazard buttons
    hazardButtonBg: "var(red)",

    // Tabs
    repositoryTabBarBg: "var(background)",
    repositoryTabBarBorderBg: "var(background)",

    fileBadgeModifiedFg: "var(mediumGray)",
    fileBadgeUnmergedFg: "#2e1d07",
    fileBadgeUntrackedBg: "var(detailPanelBg)",
    fileBadgeUntrackedFg: "var(mediumGray-dark)",
    fileBadgeStagedBg: "var(fileHeaderBg)",
    fileBadgeStagedFg: "var(mediumGray-light)",
};

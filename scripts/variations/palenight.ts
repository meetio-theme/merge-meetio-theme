export const palenight = {
    // Section: Define Meetio Colors
    foreground: 'var(--foreground)',
    background: 'var(--background)',
    transparent: "transparent",

    accentLight: 'color(var(background) l(+ 2%))',
    accentLighter: 'color(var(background) l(+ 4%))',
    accentLightest: 'color(var(background) l(+ 10%))',

    // Section: Labels
    labelColor: 'var(foreground)',
    helpLabelColor: 'color(var(foreground) a(0.6))',

    branchStatsLabelFg: "var(foreground)",
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

    divergedBg: 'color(var(--orangish) l(- 5%) s(- 20%))',
    divergedButtonBg: 'color(var(divergedBg) l(+ 25%))',
    divergedButtonFg: 'color(var(divergedBg) l(- 50%))',

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
    locationBarRowBg: 'var(accentLight)',
    locationBarRowBgHover: 'var(accentLighter)',
    disclosureFg: 'var(foreground)',

    // Section: Commit list
    commitListBg: 'var(accentLight)',
    commitRowBgHover: 'var(accentLighter)',
    commitSummaryFgPrimary: 'var(foreground)',
    commitSummaryFgSecondary: 'var(foreground)',

    commitEdge0: 'var(--bluish)',
    commitEdge1: 'var(--purplish)',
    commitEdge2: 'var(--redish)',
    commitEdge3: 'color(var(--orangish) l(- 10%))',
    commitEdge4: 'var(--yellowish)',
    commitEdge5: 'color(var(--cyanish) l(50%))',

    // Section: Sidebar
    sideBarContainerBg: 'var(background)',
    sideBarContainerBgWithGraph: 'var(accentLight)',

    // Section: Table of Contents
    tableOfContentsBg: 'var(background)',
    tableOfContentsFg: 'var(foreground)',
    tableOfContentsHeadingFg: 'var(foreground)',
    tableOfContentsRowBg: 'var(accentLight)',
    tableOfContentsRowBgHover: 'var(accentLighter)',

    // Section: Detail panel
    detailPanelBg: 'var(background)',
    fieldNameFg: 'var(foreground)',
    authorFg: 'color(var(foreground) a(0.4))',
    terminatorFg: 'var(foreground)',

    // Section: Center Branch Input
    outputSucceededFg: "var(--greenish)",
    outputFailedFg: "var(--redish)",
    outputRunningFg: "var(--cyanish)",
    outputCanceledFg: "var(--redish)",

    // Section: Git Output Panel
    gitOutputPanelBg: "var(accentLight)",
    gitOutputPanelFg: "var(foreground)",

    // Section: Tool Tips
    toolTipFg: 'var(foreground)',
    toolTipBg: 'var(accentLight)',

    // Section: Annotations
    headAnnFg: 'var(background)',
    headAnnBg: 'var(--purplish)',

    branchAnnFg: 'var(background)',
    branchAnnBg: 'var(--bluish)',

    remoteAnnFg: 'var(background)',
    remoteAnnBg: 'var(--cyanish)',

    tagAnnFg: 'var(background)',
    tagAnnBg: 'var(--yellowish)',

    stashAnnFg: 'var(background)',
    stashAnnBg: 'var(--orangish)',

    fileAnnFg: 'var(background)',
    fileAnnBg: 'color(var(--pinkish))',

    fileAnnIconAheadFg: 'var(--greenish)',
    fileAnnIconBehindFg: 'var(--redish)',

    submoduleAnnFg: 'var(background)',
    submoduleLightAnnFg: 'var(background)',

    submoduleAnnBg: 'var(--purplish)',
    submoduleLightAnnBg: 'var(--purplish)',

    insertedAnnFg: 'var(background)',
    insertedAnnBg: 'var(--cyanish)',

    deletedAnnBg: 'var(--redish)',

    // Section: Diff headers
    fileDiffShadow: 'color(black a(0.5))',
    fileIconBg: 'color(white a(0.2))',

    hunkButtonFg: 'var(foreground)',
    hunkButtonShadow: 'color(black a(0.5))',

    fileHeaderBg: 'var(background)',
    fileHeaderBgHover: 'var(accentLighter)',

    hunkHeaderBg: 'var(accentLight)',

    createdIconFg: 'var(--greenish)',

    deletedIconFg: 'var(--redish)',
    deletedHeaderBg: 'var(--redish)',
    deletedHeaderBgHover: 'color(var(--redish) l(+ 5%))',

    unmergedIconFg: 'var(--yellowish)',
    unmergedHeaderBg: 'var(accentLighter)',
    unmergedHeaderBgHover: 'var(accentLightest)',

    recentIconFg: 'var(--yellowish)',
    recentIconBg: 'transparent',

    iconUninitializedSubmodule: "var(--yellowish)",

    untrackedHeaderBg: 'var(accentLight)',
    untrackedHeaderBgHover: 'var(accentLighter)',

    stagedIconFg: 'var(foreground)',

    renamedFileInserted: 'color(var(--greenish) s(30%) l(60%))',
    renamedFileDeleted: 'color(var(--redish) s(50%) l(65%))',

    // Section: Sidebar Location Icon Visible
    hiddenSlash: "var(--redish)",

    // Section: Blame
    blamePopupBg: 'color(var(--background) l(+ 10%))',

    // Section: Buttons
    buttonBg: 'color(var(background) l(+ 5%))',
    buttonBgWelcome: 'color(var(welcomeBg) l(+ 5%))',
    buttonFg: 'var(labelColor)',
    buttonShadow: 'color(black a(0.5))',
    buttonBgHover: 'color(var(foreground) a(0.2))',

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
    tabSelectedBorderColor: 'var(foreground)',
    tabSelectedBorderSize: [0, 0, 0, 2],
    tabLabelColor: "color(var(foreground) a(0.50))",
    tabLabelColorHover: "color(var(foreground) a(1.0))",
    tabLabelColorSelected: "color(var(foreground) a(1.0))",

    // Section: Radio buttons
    radioBack: 'var(--background)',
    radioSelected: 'var(foreground)',
    radioBorderSelected: 'var(foreground)',

    // Section: Checkbox buttons
    checkboxBack: 'var(--background)',
    checkboxSelected: 'var(foreground)',
    checkboxBorderSelected: 'var(foreground)',

    // Section: Dialogs
    dialogBg: 'var(background)',
    dialogButtonBg: 'var(accentLight)',

    // Section: Progress bar
    progressBg: 'color(var(accentLightest) l(+ 3%))',
    progressFg: 'color(var(foreground) a(0.5))',

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
    failedLabelFg: 'var(background)',

    // Section: Loading
    loadingBall1: 'var(accentLighter)',
    loadingBall2: 'var(accentLightest)',

    // Section: Command Palette
    previewFg: 'var(foreground)',

    // Section: Merge Helper
    mergeHelperHighlightBg: 'color(var(accentLightest) l(25%))',
    consoleBorder: 'var(accentLight)',

    // Section: Hazard buttons
    hazardButtonBg: 'var(--redish)',

    // Section: Tabs
    repositoryTabBarBg: 'var(accentLight)',
    repositoryTabBarBorderBg: 'var(background)',


    // Section: Commit Area -> Modified & Unstaged Files
    fileBadgeModifiedLeftFg: 'var(foreground)',
    fileBadgeModifiedRightFg: 'var(--redish)',
    fileBadgeModifiedBg: 'color(white a(0.2))',
    fileBadgeModifiedHover: 'color(var(foreground) a(0.35))',
    fileBadgeUnmergedFg: 'var(foreground)',
    fileBadgeUnmergedBg: 'color(white a(0.2))',
    fileBadgeUnmergedHover: 'color(var(foreground) a(0.35))',
    fileBadgeUntrackedBg: 'color(white a(0.2))',
    fileBadgeUntrackedHover: 'color(var(foreground) a(0.35))',
    fileBadgeUntrackedFg: 'var(foreground)',
    fileBadgeStagedBg: 'color(white a(0.2))',
    fileBadgeStagedBgHover: 'color(var(foreground) a(0.35))',
    fileBadgeStagedFg: 'var(foreground)',
};

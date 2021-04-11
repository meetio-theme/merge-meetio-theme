import { darker as ui } from '@meetio/meetio-colors';

export const darker = {
    // Section: Define Meetio Colors
    cursor: ui.cursor,
    foreground: ui.foreground,
    background: ui.background,
    comments: ui.comments,
    blue: ui.base.blue,
    brown: ui.base.brown,
    cyan: ui.base.cyan,
    green: ui.base.green,
    orange: ui.base.orange,
    pink: ui.base.pink,
    purple: ui.base.purple,
    red: ui.base.red,
    yellow: ui.base.yellow,
    invalid: ui.invalid,
    deprecated: ui.deprecated,
    diffAdded: ui.diffAdded,
    diffModified: ui.diffModified,
    diffDeleted: ui.diffDeleted,
    transparent: "transparent",

    accentDark: 'color(var(background) l(- 0.75%))',
    accentDarker: 'color(var(background) l(- 1.00%))',
    accentDarkest: 'color(var(background) l(- 2.00%))',
    accentLight: 'color(var(background) l(+ 2%))',
    accentLighter: 'color(var(background) l(+ 4%))',
    accentLightest: 'color(var(background) l(+ 10%))',

    darkRed: 'color(var(red) s(25%) l(35%))',

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
    tableOfContentsRowBg: 'var(accentLight)',
    tableOfContentsRowBgHover: 'var(accentLighter)',

    // Section: Detail panel
    detailPanelBg: 'var(background)',
    fieldNameFg: 'var(foreground)',
    authorFg: 'color(var(--foreground) a(0.4))',
    terminatorFg: 'var(foreground)',

    // Section: Center Branch Input
    outputSucceededFg: "var(green)",
    outputFailedFg: "var(red)",
    outputRunningFg: "var(cyan)",
    outputCanceledFg: "var(red)",

    // Section: Git Output Panel
    gitOutputPanelBg: "var(accentLight)",
    gitOutputPanelFg: "var(foreground)",

    // Section: Tool Tips
    toolTipFg: 'var(foreground)',
    toolTipBg: 'var(accentLight)',

    // Section: Annotations
    headAnnFg: 'var(background)',
    headAnnBg: 'var(purple)',

    branchAnnFg: 'var(background)',
    branchAnnBg: 'var(blue)',

    remoteAnnFg: 'var(background)',
    remoteAnnBg: 'var(cyan)',

    tagAnnFg: 'var(background)',
    tagAnnBg: 'var(yellow)',

    stashAnnFg: 'var(background)',
    stashAnnBg: 'var(orange)',

    fileAnnFg: 'var(foreground)',
    fileAnnBg: 'color(var(cyan) a(0.50))',

    fileAnnIconAheadFg: 'var(green)',
    fileAnnIconBehindFg: 'var(red)',

    submoduleAnnBg: 'var(purple)',
    submoduleLightAnnBg: 'var(foreground)',

    insertedAnnBg: 'color(var(cyan) a(0.50))',
    deletedAnnBg: 'color(var(red) a(0.50))',

    // Section: Diff headers
    fileDiffShadow: 'color(black a(0.5))',
    fileIconBg: 'color(white a(0.2))',

    hunkButtonFg: 'var(foreground)',
    hunkButtonShadow: 'color(black a(0.5))',

    fileHeaderBg: 'var(background)',
    fileHeaderBgHover: 'var(accentLighter)',

    hunkHeaderBg: 'var(accentLight)',

    createdIconFg: 'var(green)',

    deletedIconFg: 'var(red)',
    deletedHeaderBg: 'var(darkRed)',
    deletedHeaderBgHover: 'color(var(darkRed) l(+ 5%))',

    unmergedIconFg: 'var(yellow)',
    unmergedHeaderBg: 'var(accentLighter)',
    unmergedHeaderBgHover: 'var(accentLightest)',

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
    failedLabelFg: 'var(darkGray)',

    // Section: Loading
    loadingBall1: 'var(accentLighter)',
    loadingBall2: 'var(accentLightest)',

    // Section: Command Palette
    previewFg: 'var(foreground)',

    // Section: Merge Helper
    mergeHelperHighlightBg: 'color(var(accentLightest) l(25%))',
    consoleBorder: 'var(accentLight)',

    // Section: Hazard buttons
    hazardButtonBg: 'var(red)',

    // Section: Tabs
    repositoryTabBarBg: 'var(accentLight)',
    repositoryTabBarBorderBg: 'var(background)',


    // Section: Commit Area -> Modified & Unstaged Files
    fileBadgeModifiedLeftFg: 'var(foreground)',
    fileBadgeModifiedRightFg: 'var(red)',
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

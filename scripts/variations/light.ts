export const light = {
    // ~ Meetio Inspired
    light_background: '#fbfbfb',
    light_accent: '#f7f5f5',
    light_accent_lightest: 'color(var(light_background) l(15%))',
    // ~ End Meetio
    // Style guide:
    //  - Grays: use hex format
    //    e.g. #333, #e0e0e0
    //  - Other colors: use hsl() to make hue evident
    //    e.g. hsl(210, 50%, 100%)
    //  - Related colors: use color() function to
    //    modify alpha, hue, saturation or lightness

    header_bg: 'var(light_background)',
    // "header_fg": "var(text-heading)",

    header_button_bg: 'color(var(light_background) a(0.5))',
    // "header_button_bg": "color(var(medium_gray) a(0.5))",

    // Welcome overlay
    welcome_bg: 'color(var(light_background) l(- 0.75%))',
    // "welcome_bg": "color(var(dark_gray) l(- 3%))",
    'recent_repositories_row_bg-hover': 'var(light_accent)',
    // "recent_repositories_row_bg-hover": "var(dark_gray-light)",

    // Preferences Page
    preferences_overlay_bg: 'var(light_background)',
    // "preferences_overlay_bg": "var(dark_gray-medium)",
    preferences_section_table_bg: 'var(light_background)',
    // "preferences_section_table_bg": "var(dark_gray-lightest)",

    'location_bar_row_bg-hover': 'var(light_accent)',
    // "location_bar_row_bg-hover": "var(--background)",

    // Commit list
    commit_list_bg: 'var(light_background)', // ~ Commit Left Background
    // "commit_list_bg": "var(dark_gray-lightest)",
    'commit_row_bg-hover': 'var(light_accent)', // ~ Commit row selection color
    // "commit_row_bg-hover": "color(var(dark_gray-lightest) l(22%))",

    // Tool Tips
    // ~ Hover Over Button Results
    tool_tip_bg: 'var(light_accent_lightest)',
    tool_tip_fg: 'white',

    // Location Bar
    side_bar_container_bg: 'var(light_background)',
    // "side_bar_container_bg": "var(dark_gray-light)",

    // Table of Contents
    table_of_contents_bg: 'var(light_background)', // todo find what this changes

    table_of_contents_row_bg: 'var(light_accent)', // ~ Tree view hover
    // "table_of_contents_row_bg": "var(medium_gray)",

    // Detail panel
    detail_panel_bg: 'var(light_accent)', // ~ Details View

    file_header_bg: 'var(light_background)', // ~ File header in Right Detail View
    // "file_header_bg": "color(var(--background) l(+ 5%))",
    'file_header_bg-hover': 'var(light_accent)', // ~ File header hover in Right Detail View
    // "file_header_bg-hover": "color(var(--background) l(+ 8%))",

    hunk_header_bg: 'color(var(light_accent) l(+ 1%))', // ~ Hunk header in Right Detail View
    // "hunk_header_bg": "color(var(--background) l(+ 11%))",

    // ~ Buttons
    button_bg: 'color(var(light_accent) l(+ 5%)))',
    // "button_fg": "var(label_color)",

    // Tabs
    tab_bar_bg: 'var(light_accent)', // ~ Tabs background (Locations, Commits, Files, Summary..)
    // "tab_bar_bg": "var(dark_gray-medium)",

    // Quick panel
    quick_panel_bg: 'var(light_background)', // ~ Background Panel
    // "quick_panel_bg": "var(dark_gray-light)",
    quick_panel_row_bg: 'var(light_accent_lightest)', // ~ Active Row / Hover Row Background on the Panel
    // "quick_panel_row_bg": "var(dark_gray)",

    // Switch repository window
    switch_repo_bg: 'var(light_background)',

    // Merge Helper
    merge_helper_highlight_bg: 'color(var(dark_gray-lightest) l(25%))',
    console_border: 'var(light_background)', // ? Console Border

    // Tabs
    repository_tab_bar_bg: 'var(light_background)', // ? Title bar background color
    repository_tab_bar_border_bg: 'var(light_accent)', // ? Seperator to the right of the Tabs in the titlebar

    // ~ Hazard buttons (Discard)
    hazard_button_bg: 'color(var(red) l(25%))',
};

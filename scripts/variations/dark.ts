export const dark = {
    // ~ Meetio Inspired
    dark_background: 'rgb(5,17, 29)',
    dark_accent: '#011627',
    dark_accent_lightest: 'color(var(dark_background) l(15%))',
    // ~ End Meetio

    // ~ Font
    font_face: 'system',
    // ~ End Font

    // "text-heading": "#ddd",
    // "text": "#aaa",

    // "orange": "hsl(32, 80%, 60%)",
    // "yellow": "hsl(44, 100%, 60%)",
    // "teal": "hsl(180, 40%, 65%)",
    // "blue": "hsl(210, 60%, 65%)",
    // "purple": "hsl(260, 60%, 75%)",
    // "magenta": "hsl(330, 70%, 65%)",

    // "dark_red": "color(var(red) s(25%) l(35%))",
    // "dark_teal": "color(var(teal) s(25%) l(35%))",
    // "dark_blue": "color(var(blue) s(25%) l(35%))",

    // "medium_gray": "hsl(210, 10%, 50%)",
    // "dark_gray-lightest": "hsl(210, 10%, 19%)",
    // "dark_gray-light": "hsl(210, 10%, 16%)",
    // "dark_gray-medium": "hsl(210, 10%, 13%)",
    // "dark_gray": "hsl(210, 10%, 10%)",

    // Labels
    // "label_color": "var(text-heading)",
    // "help_label_color": "color(var(text-heading) a(0.6))",

    // Header
    title_bar_style: 'dark',
    header_bg: 'color(var(dark_background))',
    // "header_bg": "color(var(dark_gray-medium))",

    // "header_fg": "var(text-heading)",

    header_button_bg: 'color(var(dark_background) a(0.5))',
    // "header_button_bg": "color(var(medium_gray) a(0.5))",

    // "icon_button_fg": "#FFF",

    // "info_shadow": "color(black a(0.2))",

    // "diverged_bg": "color(var(orange) l(- 5%) s(- 20%))",
    // "diverged_button_bg": "var(button_bg)",
    // "diverged_button_fg": "var(dark_gray)",

    // Scroll shadow
    // "scroll_shadow": "color(black a(0.3))",

    // Focus highlight
    // "focus_highlight_color": "var(text)",

    // Welcome overlay
    welcome_bg: 'color(var(dark_background) l(- 0.75%))',
    // "welcome_bg": "color(var(dark_gray) l(- 3%))",
    'recent_repositories_row_bg-hover': 'var(dark_accent)',
    // "recent_repositories_row_bg-hover": "var(dark_gray-light)",

    // Preferences Page
    preferences_overlay_bg: 'var(dark_background)',
    // "preferences_overlay_bg": "var(dark_gray-medium)",
    preferences_section_table_bg: 'var(dark_background)',
    // "preferences_section_table_bg": "var(dark_gray-lightest)",

    // Side bar
    // "location_bar_fg": "var(text)",
    // "location_bar_heading_fg": "var(text-heading)",
    // "location_bar_heading_shadow": "black",

    'location_bar_row_bg-hover': 'var(dark_accent)',
    // "location_bar_row_bg-hover": "var(--background)",

    // "disclosure_fg": "white",

    // Commit list
    commit_list_bg: 'var(dark_background)', // ~ Commit Left Background
    // "commit_list_bg": "var(dark_gray-lightest)",
    'commit_row_bg-hover': 'var(dark_accent)', // ~ Commit row selection color
    // "commit_row_bg-hover": "color(var(dark_gray-lightest) l(22%))",

    // Tool Tips
    // ~ Hover Over Button Results
    tool_tip_bg: 'var(dark_accent_lightest)',
    tool_tip_fg: 'white',

    // "commit_edge_0": "var(blue)",
    // "commit_edge_1": "var(purple)",
    // "commit_edge_2": "var(magenta)",
    // "commit_edge_3": "color(var(orange) l(- 10%))",
    // "commit_edge_4": "var(yellow)",
    // "commit_edge_5": "color(var(teal) l(50%))",

    // Location Bar
    side_bar_container_bg: 'var(dark_background)',
    // "side_bar_container_bg": "var(dark_gray-light)",

    // Table of Contents
    table_of_contents_bg: 'var(dark_background)', // todo find what this changes
    //  tree view?

    // "table_of_contents_fg": "var(text)",
    // "table_of_contents_heading_fg": "var(text-heading)",

    table_of_contents_row_bg: 'var(dark_accent)', // ~ Tree view hover
    // "table_of_contents_row_bg": "var(medium_gray)",

    // Detail panel
    detail_panel_bg: 'var(dark_accent)', // ~ Details View

    // "field_name_fg": "var(text)",
    // "author_fg": "color(var(--foreground) a(0.4))",
    // "terminator_fg": "var(medium_gray)",

    // Annotations
    // "head_ann_fg": "var(dark_gray)",
    // "head_ann_bg": "var(purple)",

    // "branch_ann_fg": "var(dark_gray)",
    // "branch_ann_bg": "var(blue)",

    // "remote_ann_fg": "var(dark_gray)",
    // "remote_ann_bg": "color(var(teal))",

    // "tag_ann_fg": "var(dark_gray)",
    // "tag_ann_bg": "var(yellow)",

    // "stash_ann_fg": "var(dark_gray)",
    // "stash_ann_bg": "var(orange)",

    // "file_ann_fg": "var(text)",
    // "file_ann_bg": "color(var(file_ann_fg) a(0.3))",

    // "submodule_ann_bg": "var(dark_gray-lightest)",
    // "submodule_light_ann_bg": "var(dark_gray-lightest)",

    // "inserted_ann_bg": "color(var(dark_teal) s(- 10%))",
    // "deleted_ann_bg": "color(var(dark_red) s(- 10%))",

    // Diff headers
    // "file_diff_shadow": "color(black a(0.5))",
    // "file_icon_bg": "color(white a(0.2))",

    // "hunk_button_fg": "#eee",
    // "hunk_button_shadow": "color(black a(0.5))",

    file_header_bg: 'var(dark_background)', // ~ File header in Right Detail View
    // "file_header_bg": "color(var(--background) l(+ 5%))",
    'file_header_bg-hover': 'var(dark_accent)', // ~ File header hover in Right Detail View
    // "file_header_bg-hover": "color(var(--background) l(+ 8%))",

    hunk_header_bg: 'color(var(dark_accent) l(+ 1%))', // ~ Hunk header in Right Detail View
    // "hunk_header_bg": "color(var(--background) l(+ 11%))",

    // "deleted_icon_fg": "var(text)",
    // "deleted_header_bg": "var(dark_red)",
    // "deleted_header_bg-hover": "color(var(dark_red) l(+ 5%))",

    // "unmerged_icon_fg": "color(var(text) l(+ 20%))",
    // "unmerged_header_bg": "var(dark_blue)",
    // "unmerged_header_bg-hover": "color(var(dark_blue) l(+ 5%))",

    // "recent_icon_fg": "var(yellow)",
    // "recent_icon_bg": "transparent",
    // "untracked_header_bg": "color(var(dark_gray-medium) s(- 5%) l(+ 5%))",
    // "untracked_header_bg-hover": "color(var(dark_gray-medium) s(- 5%) l(+ 10%))",

    // "staged_icon_fg": "var(text)",

    // "renamed_file_inserted": "color(var(green) s(30%) l(60%))",
    // "renamed_file_deleted": "color(var(red) s(50%) l(65%))",

    // // Blame
    // "blame_popup_bg": "color(var(--background) l(+ 10%))",

    // // Buttons
    button_bg: 'color(var(dark_accent) l(+ 5%)))',
    // "button_fg": "var(label_color)",
    // "button_shadow": "color(black a(0.5))",

    // "highlighted_button_light_bg": "color(hsl(84, 35%, 50%))",
    // "highlighted_button_light_fg": "var(label_color)",
    // "highlighted_button_dark_bg": "color(hsl(83, 40%, 44%))",
    // "highlighted_button_dark_fg": "var(label_color)",
    // "highlighted_button_shadow": "color(black a(0.5) l(+ 10%))",

    // "toggle_button_bg": "#3B4248", // This matches the header hover buttons
    // "toggle_button_fg": "var(text)",
    // "toggle_button_fg_selected": "var(text-heading)",

    // Tabs
    tab_bar_bg: 'var(dark_accent)', // ~ Tabs background (Locations, Commits, Files, Summary..)
    // "tab_bar_bg": "var(dark_gray-medium)",
    // "tab_separator_bg": "var(medium_gray-dark)",

    // // Radio buttons
    // "radio_back": "var(--background)",
    // "radio_selected": "var(blue)",
    // "radio_border-selected": "var(blue)",

    // // Checkbox buttons
    // "checkbox_back": "var(--background)",
    // "checkbox_selected": "var(blue)",
    // "checkbox_border-selected": "var(blue)",

    // // Dialogs
    // "dialog_bg": "var(dark_gray-light)",
    // "dialog_button_bg": "var(medium_gray)",

    // // Progress bar
    // "progress_bg": "color(var(dark_gray-lightest) l(+ 3%))",
    // "progress_fg": "color(var(medium_gray) a(0.5))",

    // Quick panel
    quick_panel_bg: 'var(dark_background)', // ~ Background Panel
    // "quick_panel_bg": "var(dark_gray-light)",
    quick_panel_row_bg: 'var(dark_accent_lightest)', // ~ Active Row / Hover Row Background on the Panel
    // "quick_panel_row_bg": "var(dark_gray)",

    // // Switch repository window
    switch_repo_bg: 'var(dark_background)',

    // // Hints
    // "failed_label_fg": "var(dark_gray)",

    // // Loading
    // "loading_ball_1": "var(medium_gray)",
    // "loading_ball_2": "var(blue)",

    // // Command Palette
    // "preview_fg": "white",

    // Merge Helper
    merge_helper_highlight_bg: 'color(var(dark_gray-lightest) l(25%))',
    console_border: 'var(dark_background)', // ? Console Border

    // Tabs
    repository_tab_bar_bg: 'var(dark_background)', // ? Title bar background color
    repository_tab_bar_border_bg: 'var(dark_accent)', // ? Seperator to the right of the Tabs in the titlebar

    // Hazard buttons
    hazard_button_bg: 'color(var(red) l(25%))',
    // "hazard_button_bg": "var(red)",

    // "file_badge_modified_fg": "var(medium_gray)",
    // "file_badge_unmerged_fg": "#2e1d07",
    // "file_badge_untracked_bg": "var(detail_panel_bg)",
    // "file_badge_untracked_fg": "var(medium_gray-dark)",
    // "file_badge_staged_bg": "var(file_header_bg)",
    // "file_badge_staged_fg": "var(medium_gray-light)",
};

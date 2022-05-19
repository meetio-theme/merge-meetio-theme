export const rules = [
    {
        class: 'table_row',
        attributes: ['hover'],
        'layer0.opacity': 0.1,
    },
    {
        class: 'table_row',
        attributes: ['selected'],
        'layer0.opacity': 0.2,
    },
    {
        class: 'table_row',
        parents: [{ class: 'auto_complete', attributes: ['file_light'] }],
        attributes: ['selected'],
        'layer0.opacity': 0.15,
    },
    {
        class: 'table_row',
        'layer0.tint': [255, 255, 255],
        'layer0.opacity': 0.0,
    },
    {
        class: 'table_row',
        parents: [{ class: 'auto_complete', attributes: ['file_light'] }],
        'layer0.tint': [0, 0, 0],
        'layer0.opacity': 0.0,
    },
    // Command History
    {
        class: 'command_table',
    },
    {
        class: 'command_history_container',
        'layer0.tint': 'var(accentLighter)',
    },
    {
        class: 'command_table_container',
        'layer0.tint': 'var(accentLight)',
    },
    // Browse page
    {
        class: 'console_panel',
        'layer0.tint': 'var(consoleBorder)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'panel_grid_control',
        inside_spacing: 0,
        outside_vspacing: 4,
    },
    {
        class: 'root_tabs',
        'layer0.tint': 'var(tabBarBg)',
        'layer0.opacity': 1.0,
    },

    // Focus highlight
    {
        class: 'focus_highlight_control',
        highlight_color: 'color(var(foreground) a(0.2))',
        highlight_border_color: 'color(var(foreground) a(0.6))',
    },

    // Overlay
    {
        class: 'overlay_container_control',
        'layer0.tint': 'var(overlayBg)',
        'layer0.opacity': 0.4,
    },

    // Labels
    {
        class: 'label_control',
        fg: 'var(labelColor)',
    },
    {
        class: 'title_label_control',
        fg: 'var(labelColor)',
        'font.size': 24,
    },
    {
        class: 'label_control',
        parents: [{ class: 'button_control' }],
        fg: 'var(buttonFg)',
        shadow_color: 'var(buttonShadow)',
        shadow_offset: [0, 0],
    },

    // Basic and hazard buttons
    {
        class: 'button_control',
        'layer1.tint': 'var(buttonBg)',
        'layer1.opacity': {
            target: 0.6,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer1.inner_margin': 4,
        'layer2.tint': 'var(hazardButtonBg)',
        'layer2.opacity': 0.0,
        'layer2.inner_margin': 4,
        min_size: [90, 15],
        content_margin: [10, 6],
    },
    {
        class: 'button_control left',
    },
    {
        class: 'button_control right',
    },
    {
        class: 'button_control',
        attributes: ['hover'],
        'layer1.tint': 'var(buttonBgHover)',
        'layer1.opacity': 1.0,
    },
    {
        class: 'button_control',
        attributes: ['confirm'],
        'layer2.opacity': {
            target: 0.5,
            speed: 2.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'button_control',
        attributes: ['pressed'],
        'layer1.opacity': 1.0,
    },
    {
        class: 'button_control',
        attributes: ['pressed', 'confirm'],
        'layer1.opacity': {
            target: 1.0,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'label_control',
        parents: [{ class: 'button_control', attributes: ['confirm'] }],
        fg: 'var(foreground)',
        shadow_color: 'var(hazard_button_shadow)',
        shadow_offset: [0, 0],
    },

    // Split buttons
    {
        class: 'button_control_left',
        min_size: [70, 15],
    },
    {
        class: 'button_control_right',
        'layer1.inner_margin': [2, 2, 2, 2],
        'layer3.tint': 'var(split_button_line)',
        'layer3.opacity': 0.35,
        'layer3.inner_margin': 4,
        content_margin: [5, 6],
        min_size: [10, 15],
    },
    // {
    //     class: 'label_control',
    //     parents: [{ class: 'button_control_right' }],
    //     fg: 'var(split_button_right_fg)',
    // },
    // {
    //     class: 'label_control',
    //     parents: [{ class: 'button_control_right', attributes: ['hover'] }],
    //     fg: 'var(split_button_right_fg-hover)',
    // },

    // Toggle buttons
    {
        class: 'toggle_button',
        'layer0.tint': 'var(toggleButtonBg)',
        'layer0.opacity': 1.0,
        'layer0.inner_margin': 4,
        min_size: [60, 22],
        content_margin: [8, 0, 8, 0],
    },
    {
        class: 'toggle_button left',
        'layer1.opacity': {
            target: 0.0,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'toggle_button left',
        attributes: ['hover'],
        'layer1.tint': 'var(toggleButtonBg)',
        'layer1.opacity': {
            target: 0.3,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'toggle_button left',
        attributes: ['selected'],
        'layer1.opacity': 0,
    },
    {
        class: 'toggle_button right',
        'layer1.opacity': {
            target: 0.0,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'toggle_button right',
        attributes: ['hover'],
        'layer1.tint': 'var(toggleButtonBg)',
        'layer1.opacity': {
            target: 0.3,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'toggle_button right',
        attributes: ['selected'],
        'layer1.opacity': 0,
    },
    {
        class: 'label_control',
        parents: [{ class: 'toggle_button' }],
        fg: 'var(toggleButtonFg)',
        shadow_offset: [0, 0]
    },
    {
        class: 'label_control',
        parents: [{ class: 'toggle_button', attributes: ['selected'] }],
        fg: 'var(toggleButtonFgSelected)',
    },

    // File Tabs
    {
        class: 'tab',
        'layer0.tint': 'var(tabBackground)',
        'layer0.opacity': 0.0,
        'layer0.inner_margin': 4,
        'layer1.inner_margin': 'var(tabSelectedBorderSize)',
        'layer1.draw_center': false,
        'layer1.tint': 'var(tabSelectedBorderColor)',
        'layer1.opacity': 0.0,
        min_size: [90, 32],
        content_margin: [8, 0, 8, 0],
    },
    {
        class: 'tab',
        parents: [{ class: 'side_bar_container with_graph' }],
        'layer0.tint': 'var(sideBarContainerBgWithGraph)',
    },
    {
        class: 'tab',
        attributes: ['hover'],
        'layer1.opacity': {
            target: 0.5,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'tab',
        attributes: ['selected'],
        'layer0.opacity': 0.0,
        'layer1.opacity': 1.0,
    },
    {
        class: 'label_control',
        parents: [{ class: 'tab' }],
        fg: 'var(toggleButtonFg)',
    },
    {
        class: 'label_control',
        parents: [{ class: 'tab', attributes: ['selected'] }],
        fg: 'var(toggleButtonFgSelected)',
    },

    {
        class: 'tab_separator',
        'layer0.tint': 'var(tabSeparatorBg)',
        'layer0.inner_margin': [0, 1],
        'layer0.opacity': 1.0,
        content_margin: [0, 12, 1, 12],
    },
    {
        class: 'tab_separator_container',
    },

    {
        class: 'details_tab_bar',
        'layer0.tint': 'var(tabBarBg)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'scroll_area_control',
        parents: [{ class: 'details_tab_bar' }],
        left_shadow: 'var(scrollShadow)',
        left_shadow_size: 8,
        right_shadow: 'var(scrollShadow)',
        right_shadow_size: 8,
    },
    {
        class: 'tab',
        parents: [{ class: 'details_tab_bar' }],
        'layer0.tint': 'var(locationBarFg)',
    },
    {
        class: 'label_control',
        parents: [{ class: 'details_tab_bar' }],
        fg: 'var(foreground)',
    },
    {
        class: 'label_control',
        parents: [{ class: 'all_button' }],
        fg: 'var(foreground)',
    },
    {
        class: 'label_control',
        parents: [
            { class: 'details_tab_bar' },
            { class: 'tab', attributes: ['selected'] },
        ],
        fg: 'var(foreground)',
    },
    // Checkboxes
    {
        class: 'checkbox_box_control',
        content_margin: [13, 13, 0, 0],
        'layer0.tint': 'var(checkboxBack)',
        'layer0.opacity': 1,
        'layer1.tint': 'var(checkbox_border-unselected)',
        'layer1.opacity': 1,
        'layer2.tint': 'var(checkboxSelected)',
        'layer2.opacity': 0,
    },
    {
        class: 'checkbox_box_control',
        parents: [{ class: 'checkbox_control', attributes: ['checked'] }],
        'layer1.tint': 'var(checkboxBorderSelected)',
        'layer2.opacity': 1,
    },
    {
        class: 'checkbox_box_control',
        parents: [{ class: 'checkbox_control', attributes: ['disabled'] }],
        'layer2.tint': 'var(checkbox-disabled)',
        'layer2.opacity': 1,
    },

    // Radio Buttons
    {
        class: 'radio_button_list_control',
        spacing: 4,
    },
    {
        class: 'checkbox_box_control',
        parents: [
            { class: 'radio_button_list_control' },
            { class: 'checkbox_control' },
        ],
        content_margin: [13, 13, 0, 0],
        'layer0.tint': 'var(radioBack)',
        'layer0.opacity': 1,
        'layer1.tint': 'var(radioBorderSelected)',
        'layer1.opacity': 1,
        'layer2.tint': 'var(radioSelected)',
        'layer2.opacity': 0,
    },
    {
        class: 'checkbox_box_control',
        parents: [
            { class: 'radio_button_list_control' },
            { class: 'checkbox_control', attributes: ['hover'] },
        ],
        'layer1.tint': 'var(radioBorderSelected)',
    },
    {
        class: 'checkbox_box_control',
        parents: [
            { class: 'radio_button_list_control' },
            { class: 'checkbox_control', attributes: ['checked'] },
        ],
        'layer1.tint': 'var(radioBorderSelected)',
        'layer2.opacity': 1,
    },

    // Scroll Bars
    {
        class: 'scroll_area_control',
        settings: ['overlay_scroll_bars'],
        overlay: true,
    },
    {
        class: 'scroll_area_control',
        settings: ['!overlay_scroll_bars'],
        overlay: false,
    },
    {
        class: 'scroll_bar_control',
        'layer0.opacity': 1.0,
        content_margin: 4,
        tint_index: 0,
    },
    {
        class: 'scroll_bar_control',
        settings: ['overlay_scroll_bars'],
        'layer0.opacity': 0.0,
    },
    {
        class: 'scroll_bar_control',
        settings: ['!overlay_scroll_bars'],
        'layer0.opacity': 1.0,
    },
    {
        class: 'scroll_track_control',
        'layer0.opacity': 1.0,
        'layer0.inner_margin': 2,
        content_margin: [4, 4, 3, 4],
    },
    // {
    //     class: 'scroll_track_control',
    //     attributes: ['dark'],
    // },
    // {
    //     class: 'puck_control',
    //     'layer0.opacity': 1.0,
    //     'layer0.inner_margin': 2,
    //     content_margin: [0, 12],
    // },
    // {
    //     class: 'puck_control',
    //     attributes: ['dark'],
    // },
    // {
    //     class: 'scroll_corner_control',
    //     'layer0.opacity': 1.0,
    //     tint_index: 0,
    // },
    // Scroll Bars (Horizontal)
    // {
    //     class: 'scroll_track_control',
    //     attributes: ['horizontal'],
    //     content_margin: [4, 4, 4, 3],
    // },
    // {
    //     class: 'scroll_track_control',
    //     attributes: ['horizontal', 'dark'],
    // },
    // {
    //     class: 'puck_control',
    //     attributes: ['horizontal'],
    //     content_margin: [12, 0],
    // },
    // {
    //     class: 'puck_control',
    //     attributes: ['horizontal', 'dark'],
    // },
    // Scroll Bars (Overlay)
    // {
    //     class: 'scroll_bar_control',
    //     parents: [{ class: 'overlay_control' }],
    //     'layer0.opacity': 0.0,
    //     content_margin: [4, 0, 0, 0],
    // },
    // {
    //     class: 'scroll_track_control',
    //     parents: [{ class: 'overlay_control' }],
    // },
    // {
    //     class: 'puck_control',
    //     parents: [{ class: 'overlay_control' }],
    // },

    // Dialogs
    {
        class: 'dialog',
        'layer0.tint': 'var(dialogBg)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'progress_bar_control',
        'layer0.tint': 'var(progressBg)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'progress_gauge_control',
        'layer0.tint': 'var(progressFg)',
        'layer0.opacity': 1.0,
        content_margin: [0, 6],
    },
    {
        class: 'button_control',
        parents: [{ class: 'dialog' }],
        'layer1.tint': 'var(dialogButtonBg)',
    },

    // Quick Panel
    {
        class: 'overlay_control',
        'layer0.tint': 'var(quickPanelBg)',
        'layer0.opacity': 1.0,
        content_margin: 4,
    },
    {
        class: 'quick_panel',
        row_padding: 6,
        'layer0.tint': 'var(quickPanelBg)',
        'layer0.opacity': 1.0,
        dark_content: false,
    },
    {
        class: 'text_line_control',
        'layer0.opacity': 0.0,
        'layer0.inner_margin': [20, 5, 20, 5],
        'layer1.tint': 'color(var(accentLightest) a(0.5))',
        'layer1.opacity': 1.0,
        'layer1.inner_margin': 'var(inputBorderSize)',
        'layer1.draw_center': false,
        color_scheme_tint: 'color(var(accentLightest) a(0.15))',
    },
    {
        class: 'text_line_control',
        parents: [{ class: 'welcome_overlay_contents' }],
        color_scheme_tint: 'var(inputBackgroundWelcome)',
    },
    {
        class: 'mini_quick_panel_row',
        'layer0.tint': 'var(quickPanelRowBg)',
        'layer0.opacity': 0.0,
    },
    {
        class: 'text_line_control',
        parents: [{ class: 'overlay_control' }],
        'font.size': 'var(font_size_lg)',
    },
    {
        class: 'text_line_control',
        parents: [{ class: 'switch_project_window' }],
        'font.size': 'var(font_size_lg)',
    },
    {
        class: 'mini_quick_panel_row',
        attributes: ['hover'],
        'layer0.opacity': 0.5,
    },
    {
        class: 'mini_quick_panel_row',
        attributes: ['selected'],
        'layer0.opacity': 1.0,
    },
    {
        class: 'quick_panel_row',
        'layer0.tint': 'var(quickPanelRowBg)',
        'layer0.opacity': 0.0,
    },
    {
        class: 'quick_panel_row',
        attributes: ['hover'],
        'layer0.opacity': 0.5,
    },
    {
        class: 'quick_panel_row',
        attributes: ['selected'],
        'layer0.opacity': 1.0,
    },
    {
        class: 'quick_panel_label',
        fg: 'var(quickPanelPathFg)',
        match_fg: 'var(quickPanelPathFgMatch)',
        selected_fg: 'var(quickPanelPathFgSelected)',
        selected_match_fg: 'var(quickPanelPathFgSelectedMatch)',
    },
    {
        class: 'quick_panel_label',
        parents: [{ class: 'mini_quick_panel_row' }],
        'font.size': 'var(font_size_lg)',
    },
    {
        class: 'quick_panel_path_label',
        fg: 'var(quickPanelPathFg)',
        match_fg: 'var(quickPanelPathFgMatch)',
        selected_fg: 'var(quickPanelPathFgSelected)',
        selected_match_fg: 'var(quickPanelPathFgSelectedMatch)',
    },
    {
        class: 'quick_panel_label preview',
        fg: 'var(previewFg)',
    },
    {
        class: 'quick_panel_label command',
        'font.italic': true,
    },
    // Quick Panel
    // - Right Side Labels (e.g. Build 2009)
    {
        class: "quick_panel_label hint",
        color: "color(var(--foreground) a(- 50%))"
    },
    // Quick Panel
    // - Right Side Command Labels (e.g. ⌘ + p)
    {
        class: "quick_panel_label key_binding",
        color: "color(var(--foreground) a(- 50%))"
    },

    // Header
    {
        class: 'title_bar',
        fg: 'var(headerFg)',
        bg: 'var(headerBg)',
        style: 'var(titleBarStyle)',
    },
    {
        class: 'title_bar',
        attributes: ['panel_visible'],
        bg: 'var(headerBg)',
    },
    {
        class: 'header',
        'layer0.tint': 'var(headerBg)',
        'layer0.opacity': 1.0,
        content_margin: [0, 2, 0, 2],
    },
    {
        class: 'search_dialog',
        'layer0.tint': 'var(headerBg)',
        'layer0.opacity': 1.0,
        content_margin: [4, 0, 4, 4],
    },
    {
        class: 'search_text_control',
        'layer0.opacity': 1.0,
        "layer0.tint": "var(accentLighter)",
        'layer0.inner_margin': 4,
        content_margin: 2,
    },
    // {
    //     class: 'search_bar',
    //     spacing: 4,
    // },
    {
        class: 'info_area',
        'layer0.tint': 'var(accentLighter)',
        'layer0.opacity': 0.4,
        'layer0.inner_margin': 4,
        content_margin: [36, 0],
        icon_spacing: [2, 1],
        min_size: [220, 27],
    },
    {
        class: 'info_area',
        attributes: ['hover'],
        'layer0.opacity': 1.0,
        'layer0.tint': 'var(accentLighter)',
    },
    {
        class: 'label_control',
        parents: [{ class: 'info_area' }],
        shadow_color: 'var(infoShadow)',
        shadow_offset: [0, 0],
    },
    {
        class: 'info_area_line',
        spacing: 4,
    },
    {
        class: 'failed_label',
        parents: [{ class: 'info_area' }],
        color: 'var(failedLabelFg)',
        background_color: 'var(failed_label_bg)',
    },
    {
        class: 'progress_bar_control',
        parents: [{ class: 'info_area' }],
        'layer0.inner_margin': [2, 0, 2, 2],
        'layer0.tint': 'var(background)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'progress_gauge_control',
        parents: [{ class: 'info_area' }],
        'layer0.inner_margin': [2, 0, 2, 2],
        'layer0.tint': 'var(foreground)',
        'layer0.opacity': 1.0,
        content_margin: [0, 2],
    },
    {
        class: 'git_output_button',
        'layer0.tint': 'var(foreground)',
        'layer0.opacity': {
            target: 1.0,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer1.tint': 'var(foreground)',
        'layer1.opacity': {
            target: 0.6,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer2.tint': 'var(foreground)',
        'layer2.opacity': {
            target: 0.8,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        content_margin: [13, 8, 12, 8],
    },
    {
        class: 'git_output_button succeeded',
        'layer2.tint': 'var(outputSucceededFg)',
    },
    {
        class: 'git_output_button failed',
        'layer2.tint': 'var(outputFailedFg)',
    },
    {
        class: 'git_output_button running',
        'layer2.tint': 'var(outputRunningFg)',
    },
    {
        class: 'git_output_button cancelled',
        'layer2.tint': 'var(outputCanceledFg)',
    },
    {
        class: 'git_output_button',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.6,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer1.opacity': {
            target: 0.8,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer2.opacity': {
            target: 1.0,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'toggle_diverged_banner_button',
        'layer0.texture': 'Theme - Merge/icon_diverged_exclamation.png',
        'layer0.opacity': {
            target: 0.8,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer0.tint': 'var(diverged_icon_fg)',
        'layer1.texture': 'Theme - Merge/icon_diverged_filled.png',
        'layer1.opacity': {
            target: 0.8,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer1.tint': 'var(diverged_icon_bg)',
        content_margin: [11, 8, 10, 8],
    },
    {
        class: 'toggle_diverged_banner_button hide',
        'layer0.opacity': {
            target: 0.4,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer0.tint': 'var(foreground)',
        'layer1.texture': 'Theme - Merge/icon_diverged_border.png',
        'layer1.opacity': {
            target: 0.4,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer1.tint': 'var(foreground)',
    },
    {
        class: 'toggle_diverged_banner_button',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 1.0,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer1.opacity': {
            target: 1.0,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'toggle_diverged_banner_button hide',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.8,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer1.opacity': {
            target: 0.8,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },

    // Header buttons
    {
        class: 'button_control',
        parents: [{ class: 'header' }],
        'layer1.tint': 'var(headerButtonBg)',
    },
    {
        class: 'button_control_right',
        parents: [{ class: 'header' }],
        'layer3.tint': 'var(headerBg)',
        'layer3.opacity': 0.35,
    },
    {
        class: 'load_diff_icon_container',
        min_size: [10, 27],
    },
    {
        class: 'button_control icon_button',
        'layer0.tint': 'var(background)',
        'layer0.opacity': 1.0,
        content_margin: 0,
        min_size: [10, 27],
    },
    {
        class: 'button_control icon_button search_close',
        content_margin: 0,
        min_size: [10, 27],
    },
    {
        class: 'button_control icon_button search_history_dropdown',
        content_margin: 0,
        min_size: [10, 27],
    },
    {
        class: 'button_control_right icon_button',
        content_margin: 0,
        min_size: [20, 27],
    },
    {
        class: 'button_control_left icon_button',
        content_margin: 0,
        min_size: [20, 27],
    },
    {
        class: 'button_control icon_button file_button',
        content_margin: 0,
        min_size: [110, 27],
    },
    {
        class: 'icon_side_bar',
        'layer0.texture': 'Theme - Merge/icon_side_bar.png',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [15, 13],
    },
    {
        class: 'icon_side_bar',
        parents: [{ class: 'button_control', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_table_of_contents',
        'layer0.texture': 'Theme - Merge/icon_toc.png',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [15, 13],
    },
    {
        class: 'icon_table_of_contents',
        parents: [{ class: 'button_control', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_back',
        'layer0.texture': 'Theme - Merge/icon_back.png',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [15, 13],
    },
    {
        class: 'icon_back',
        parents: [{ class: 'button_control', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_forward',
        'layer0.texture': 'Theme - Merge/icon_forward.png',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [15, 13],
    },
    {
        class: 'icon_forward',
        parents: [{ class: 'button_control', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_stash',
        'layer0.texture': 'Theme - Merge/icon_stash.png',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [15, 13],
    },
    {
        class: 'icon_stash',
        parents: [{ class: 'button_control', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_full_context',
        parents: [{ class: 'file_diff_hunk_container', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacity)',
    },
    {
        class: 'icon_full_context',
        parents: [{ class: 'icon_button', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_pop_stash',
        'layer0.texture': 'Theme - Merge/icon_pop_stash.png',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [15, 13],
    },
    {
        class: 'icon_pop_stash',
        parents: [{ class: 'button_control', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_search',
        'layer0.texture': 'Theme - Merge/icon_search.png',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [15, 13],
    },
    {
        class: 'icon_search',
        parents: [{ class: 'button_control', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_more',
        'layer0.texture': 'Theme - Merge/icon_more.png',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [15, 13],
    },
    {
        class: 'icon_more',
        parents: [{ class: 'button_control', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_pull',
        'layer0.texture': 'Theme - Merge/icon_pull.png',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [15, 13],
    },
    {
        class: 'icon_pull',
        parents: [{ class: 'button_control', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_push',
        'layer0.texture': 'Theme - Merge/icon_push.png',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [15, 13],
    },
    {
        class: 'icon_push',
        parents: [{ class: 'button_control', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_options_dropdown',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [8, 13],
    },
    {
        class: 'icon_options_dropdown',
        parents: [{ class: 'button_control', attributes: ['hover'] }],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'recent_commit_messages icon_options_dropdown',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [8, 13],
    },
    {
        class: 'icon_cancel',
        'layer0.texture': 'Theme - Merge/icon_cancel.png',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [9, 8],
    },
    {
        class: 'icon_cancel',
        attributes: ['hover'],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_dropdown_button',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [9, 8],
    },
    {
        class: 'icon_dropdown_button',
        attributes: ['hover'],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'tab_close_button',
        'layer0.opacity': 'var(iconButtonOpacity)',
        'layer0.tint': 'var(foreground)',
        content_margin: [9, 8],
    },
    {
        class: 'tab_close_button',
        attributes: ['hover'],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_visible',
        'layer0.texture': 'Theme - Merge/icon_visible.png',
        'layer0.opacity': 'var(iconButtonOpacityHidden)',
        'layer0.tint': 'var(foreground)',
        content_margin: [8, 5],
    },

    // Merge Helper
    {
        class: 'merge_helper_container',
        'layer0.tint': 'var(quickPanelBg)',
        'layer0.opacity': 1.0,
        content_margin: 8,
        spacing: 16,
    },
    // {
    //     class: 'merge_options_container',
    //     spacing: 4,
    // },
    // {
    //     class: 'merge_helper_buttons_container',
    //     spacing: 4,
    // },
    {
        class: 'merge_helper_help_text_label',
        fg: 'color(var(labelColor) a(0.5))',
    },
    {
        class: 'merge_helper_highlight_label',
        background_color: 'var(divergedBg)',
        fg: "var(accentLightest)"
    },

    // Diverged banner
    {
        class: 'diverged_container',
        'layer0.opacity': 1.0,
        'layer0.tint': 'var(divergedBg)',
        content_margin: [4, 4, 4, 4],
    },
    {
        class: 'diverged_button_container',
        spacing: 4,
    },
    {
        class: 'label_control',
        parents: [{ class: 'diverged_container' }],
        fg: 'var(divergedButtonFg)',
        shadow_color: 'var(highlightedButtonShadow)',
        shadow_offset: [0, 0],
    },
    {
        class: 'button_control',
        parents: [{ class: 'diverged_container' }],
        'layer1.tint': 'var(divergedButtonBg)',
    },

    // Highlighted buttons
    {
        class: 'button_control',
        attributes: ['highlighted'],
        'layer1.tint': 'var(highlightedButtonLightBg)',
    },
    {
        class: 'button_control',
        attributes: ['highlighted', 'dark'],
        'layer1.tint': 'var(highlightedButtonDarkBg)',
    },
    {
        class: 'button_control icon_button',
        attributes: ['highlighted'],
        content_margin: 0,
        min_size: [10, 27],
    },
    {
        class: 'label_control',
        parents: [{ class: 'button_control', attributes: ['highlighted'] }],
        fg: 'var(highlightedButtonDarkFg)',
        shadow_color: 'var(highlightedButtonShadow)',
    },
    {
        class: 'label_control',
        parents: [
            { class: 'button_control', attributes: ['highlighted', 'dark'] },
        ],
        fg: 'var(highlightedButtonDarkFg)',
    },

    // Side bar
    {
        class: 'side_bar_container',
        'layer0.tint': 'var(sideBarContainerBg)',
        'layer0.opacity': 1.0,
        content_margin: 0,
    },
    {
        class: 'side_bar_container with_graph',
        'layer0.tint': 'var(sideBarContainerBgWithGraph)',
    },
    {
        class: 'tab_body_container',
        settings: ['overlay_scroll_bars'],
        content_margin: [0, 4],
    },
    {
        class: 'scroll_area_control',
        parents: [{ class: 'side_bar_container' }],
        settings: ['overlay_scroll_bars'],
        top_shadow: 'var(scrollShadow)',
        top_shadow_size: 8,
    },
    {
        class: 'scroll_bar_control',
        parents: [{ class: 'side_bar_container' }],
        'layer0.opacity': 0.0,
    },
    {
        class: 'scroll_track_control',
        parents: [{ class: 'side_bar_container' }],
        'layer0.texture': 'Theme - Merge/light_scroll_bar.png',
    },
    {
        class: 'puck_control',
        parents: [{ class: 'side_bar_container' }],
        'layer0.texture': 'Theme - Merge/light_scroll_puck.png',
    },
    {
        class: 'location_bar_label',
        'font.bold': false,
        color: 'var(locationBarFg)',
    },
    {
        class: 'location_bar_label',
        attributes: ['selected'],
        'font.bold': true,
        color: 'var(locationBarFg)',
    },
    {
        class: 'location_bar_heading',
        'font.bold': true,
        color: 'var(locationBarFg)',
        shadow_color: 'var(location_bar_heading_shadow)',
        shadow_offset: [0, 0],
    },
    {
        class: 'location_bar_tree',
        row_padding: [6, 2, 2, 2],
        indent: 12,
        indent_offset: 13,
        indent_top_level: true,
        dark_content: false,
    },
    {
        class: 'location_bar_tree',
        settings: ['overlay_scroll_bars'],
        row_padding: [6, 2, 8, 2],
    },
    {
        class: 'location_bar_row',
        'layer0.tint': 'var(locationBarRowBg)',
        'layer0.opacity': 0.0,
    },
    {
        class: 'location_bar_row',
        attributes: ['hover'],
        'layer0.tint': 'var(locationBarRowBgHover)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'location_bar_row',
        attributes: ['selected'],
        'layer0.tint': 'var(locationBarRowBgHover)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'branch_stat',
        'layer0.texture': 'Theme - Merge/annotation.png',
        'layer0.tint': 'var(branchStatsLabelBg)',
        'layer0.opacity': 1.0,
        'layer0.inner_margin': 4,
        content_margin: [4, 0, 3, 0],
    },
    {
        class: 'branch_stat left',
        'layer0.texture': 'Theme - Merge/annotation_left.png',
        content_margin: [4, 0, 2, 0],
    },
    {
        class: 'branch_stat right',
        'layer0.texture': 'Theme - Merge/annotation_right.png',
        content_margin: [4, 0, 3, 0],
    },
    {
        class: 'branch_stats_meta',
        spacing: 1,
    },
    {
        class: 'branch_stat_meta',
        spacing: 1,
    },
    {
        class: 'submodule_stat',
        color: 'var(submodule_stat_fg)',
        background_color: 'var(submodule_stat_bg)',
    },
    {
        class: 'branch_stat_label',
        fg: "var(branchStatsLabelFg)"
    },
    {
        class: 'icon_behind',
        'layer0.texture': 'Theme - Merge/icon_behind.png',
        'layer0.tint': 'var(fileAnnIconBehindFg)',
        'layer0.opacity': 1.0,
        content_margin: [4, 5, 5, 5],
    },
    {
        class: 'icon_ahead',
        'layer0.texture': 'Theme - Merge/icon_ahead.png',
        'layer0.tint': 'var(fileAnnIconAheadFg)',
        'layer0.opacity': 1.0,
        content_margin: [4, 5, 5, 5],
    },
    {
        class: 'button_control icon_button not_filtering search_refs',
        'layer1.tint': 'var(background)',
    },
    {
        class: 'button_control icon_button filtering search_refs',
        'layer1.tint': 'var(background)',
    },
    {
        class: "filter_button",
        "layer1.tint": "var(tabBackground)"
    },
    {
        class: "icon_filter",
        parents: [
            {
                class: "button_control icon_button filter_button"
            }
        ],
        "layer1.tint": "var(foreground)"
    },
    {
        class: "icon_filter",
        parents: [
            {
                class: "button_control icon_button filter_button"
            }
        ],
        "layer0.tint": "var(foreground)"
    },
    {
        class: "icon_filter",
        parents: [
            {
                class: "button_control icon_button filter_button",
                attributes: [
                    "hover"
                ]
            }
        ],
        "layer0.tint": "var(foreground)"
    },
    {
        class: "icon_filter",
        parents: [
            {
                class: "button_control icon_button filter_button",
                attributes: [
                    "selected"
                ]
            }
        ],
        "layer0.opacity": 0.25,
        "layer1.opacity": 0.75,
        "layer1.tint": "var(foreground)",
    },
    {
        class: 'location_bar_branch_row',
        spacing: 4,
    },
    {
        class: 'button_control icon_button transparent',
        min_size: 0,
        content_margin: [2, 2],
        'layer1.opacity': 0,
        'layer0.tint': 'var(transparent)',
        'layer1.tint': 'var(transparent)',
        'layer2.tint': 'var(transparent)',
    },
    {
        class: 'icon_visible',
        parents: [
            {
                class: 'side_bar_container',
                attributes: ['hover'],
            },
        ],
        'layer0.opacity': 'var(iconButtonOpacity)',
    },
    {
        class: 'icon_visible',
        attributes: ['hover'],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_hidden',
        'layer0.opacity': 'var(iconButtonOpacityFaded)',
        'layer0.tint': 'var(foreground)',
        'layer1.opacity': 'var(iconButtonOpacity)',
        'layer1.tint': 'var(hiddenSlash)',
        content_margin: [8, 5],
    },
    {
        class: 'icon_hidden',
        attributes: ['hover'],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
        'layer1.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'icon_uninitialized_submodule',
        'layer0.opacity': 1,
        'layer0.tint': 'var(iconUninitializedSubmodule)',
        content_margin: [8, 6],
    },
    {
        class: 'icon_section_actions',
        'layer0.opacity': 'var(iconButtonOpacityHidden)',
        'layer0.tint': 'var(foreground)',
        content_margin: [10, 7],
    },
    {
        class: 'icon_section_actions',
        parents: [
            {
                class: 'side_bar_container',
                attributes: ['hover'],
            },
        ],
        'layer0.opacity': 'var(iconButtonOpacity)',
    },
    {
        class: 'icon_section_actions',
        attributes: ['hover'],
        'layer0.opacity': 'var(iconButtonOpacityHover)',
    },
    {
        class: 'side_bar_tabs',
        'layer0.tint': 'var(tabBarBg)',
        'layer0.opacity': 1.0,
    },
    // {
    //     class: 'table_of_contents_heading_container',
    //     spacing: 8,
    // },
    // {
    //     class: 'table_of_contents_view_style',
    //     content_margin: 4,
    // },
    {
        class: 'table_of_contents_tree',
        row_padding: [6, 2, 2, 2],
        indent: 12,
        indent_offset: 13,
        indent_top_level: true,
        dark_content: false,
    },
    {
        class: 'table_of_contents_tree',
        settings: ['overlay_scroll_bars'],
        row_padding: [6, 2, 8, 2],
    },
    {
        class: 'table_of_contents_label',
        color: 'var(tableOfContentsFg)',
    },
    {
        class: 'table_of_contents_row_container',
        'layer0.tint': 'var(tableOfContentsRowBg)',
        'layer0.opacity': 0.0,
    },
    {
        class: 'table_of_contents_row_container',
        attributes: ['hover'],
        'layer0.tint': 'var(tableOfContentsRowBgHover)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'table_of_contents_row_container',
        attributes: ['selected'],
        'layer0.tint': 'var(tableOfContentsRowBgHover)',
        'layer0.opacity': 1.0,
    },

    {
        class: 'table_of_contents_heading',
        'font.bold': true,
        color: 'var(locationBarFg)',
        shadow_color: 'var(location_bar_heading_shadow)',
        shadow_offset: [0, 0],
    },

    // Commit list
    {
        class: 'scroll_bar_control',
        parents: [{ class: 'commit_table_container' }],
        'layer0.opacity': 0.0,
    },
    {
        class: 'scroll_track_control',
        parents: [{ class: 'commit_table_container' }],
    },
    {
        class: 'puck_control',
        parents: [{ class: 'commit_table_container' }],
    },
    {
        class: 'commit_table',
        row_padding: [0, 0],
        dark_content: true,
    },
    {
        class: 'commit_summary_control',
        'layer0.tint': 'var(commitRowBgHover)',
        'layer0.opacity': 0.0,
        content_margin: [8, 8, 4, 8],
    },
    {
        class: 'commit_summary_control',
        parents: [{ class: 'commit_table_row', attributes: ['hover'] }],
        'layer0.opacity': 1.0,
    },
    {
        class: 'commit_summary_control',
        parents: [{ class: 'commit_table_row', attributes: ['selected'] }],
        'layer0.opacity': 1.0,
    },
    {
        class: 'commit_edges_control',
        num_colors: 6,
        color0: 'var(commitEdge0)',
        color1: 'var(commitEdge1)',
        color2: 'var(commitEdge2)',
        color3: 'var(commitEdge3)',
        color4: 'var(commitEdge4)',
        color5: 'var(commitEdge5)',
    },
    {
        class: 'index_files_label',
        parents: [{ class: 'commit_summary_control' }],
        color: 'var(commitSummaryFgPrimary)',
    },
    {
        class: 'index_action_label',
        parents: [{ class: 'commit_summary_control' }],
        'font.italic': true,
        color: 'var(commitSummaryFgSecondary)',
    },
    {
        class: 'message_label',
        parents: [{ class: 'commit_summary_control' }],
        'font.bold': false,
        color: 'var(commitSummaryFgPrimary)',
    },
    {
        class: 'message_label',
        attributes: ['highlighted'],
        'font.bold': true,
    },
    {
        class: 'author_label',
        parents: [{ class: 'commit_summary_control' }],
        'font.italic': true,
        color: 'var(commitSummaryFgSecondary)',
    },
    {
        class: 'time_label',
        parents: [{ class: 'commit_summary_control' }],
        'font.italic': true,
        color: 'var(commitSummaryFgSecondary)',
    },
    {
        class: 'commit_file_name_label',
        parents: [{ class: 'commit_summary_control' }],
        'font.italic': true,
        color: 'var(commitSummaryFgPrimary)',
        indent: 16,
    },
    {
        class: 'commit_file_path_label',
        parents: [{ class: 'commit_summary_control' }],
        'font.italic': true,
        color: 'var(commitSummaryFgSecondary)',
        indent: 16,
    },
    // Annotations
    {
        class: 'commit_annotation branch head',
        color: 'var(headAnnFg)',
        background_color: 'var(headAnnBg)',
    },
    {
        class: 'commit_annotation branch',
        color: 'var(branchAnnFg)',
        background_color: 'var(branchAnnBg)',
    },
    {
        class: 'commit_annotation remote',
        color: 'var(remoteAnnFg)',
        background_color: 'var(remoteAnnBg)',
    },
    {
        class: "condensed_branch_annotation_container",
        background_color: "var(--purplish)"
    },
    {
        class: "condensed_branch_annotation",
        fg: "var(background)"
    },
    {
        class: "condensed_branch_icon",
        "layer0.tint": "var(background)"
    },
    {
        class: 'tag_annotation_container',
        background_color: 'var(tagAnnBg)',
    },
    {
        class: 'tag_annotation',
        color: 'var(tagAnnFg)',
    },
    {
        class: 'stash_annotation',
        color: 'var(stashAnnFg)',
        background_color: 'var(stashAnnBg)',
    },
    {
        class: 'file_annotation',
        color: 'var(fileAnnFg)',
        background_color: 'var(fileAnnBg)',
    },
    {
        class: 'submodule_annotation',
        fg: 'var(submoduleAnnFg)',
        background_color: 'var(submoduleAnnBg)',
    },
    {
        class: 'submodule_light_annotation',
        fg: 'var(submoduleLightAnnFg)',
        background_color: 'var(submoduleLightAnnBg)',
    },
    {
        class: 'inserted_annotation',
        fg: 'var(insertedAnnFg)',
        background_color: 'var(insertedAnnBg)',
    },
    {
        class: 'deleted_annotation',
        fg: 'var(labelColor)',
        background_color: 'var(deletedAnnBg)',
    },

    // Search panel
    {
        class: 'search_message',
        content_margin: [14, 14, 14, 14],
    },
    {
        class: 'search_help',
        background_color: 'var(background)',
        headline_color: 'color(var(foreground) l(+ 10%))',
        color: 'var(foreground)',
        content_margin: [14, 8, 14, 14],
    },

    // Blame panel
    {
        class: 'blame_commit_summary',
        content_margin: [8, 8, 8, 8],
        background_color: 'var(accentLight)',
        link_color: 'var(--bluish)',
        color: 'var(--foreground)',
    },
    {
        class: 'blame_text_control',
        settings: ['!kelly_colors'],
        num_colors: 6,
        color0: 'color(var(--redish) s(80%))',
        color1: 'color(var(--orangish) s(80%))',
        color2: 'color(var(--yellowish) s(80%))',
        color3: 'color(color(var(--cyanish) l(35%)) s(80%))',
        color4: 'color(color(var(--bluish) l(60%)) s(80%))',
        color5: 'color(color(var(--purplish) s(80%) l(65%)) s(80%))',
    },
    {
        class: 'blame_text_control',
        settings: ['kelly_colors'],
        num_colors: 17,
        color0: 'rgb(128, 62, 117)',
        color1: 'rgb(166, 189, 215)',
        color2: 'rgb(193, 0, 32)',
        color3: 'rgb(206, 162, 98)',
        color4: 'rgb(129, 112, 102)',
        color5: 'rgb(0, 125, 52)',
        color6: 'rgb(246, 118, 142)',
        color7: 'rgb(0, 83, 138)',
        color8: 'rgb(255, 122, 92)',
        color9: 'rgb(255, 142, 0)',
        color10: 'rgb(179, 40, 81)',
        color11: 'rgb(244, 200, 0)',
        color12: 'rgb(127, 24, 13)',
        color13: 'rgb(147, 170, 0)',
        color14: 'rgb(89, 51, 21)',
        color15: 'rgb(241, 58, 19)',
        color16: 'rgb(35, 44, 22)',
    },

    // Detail panel
    {
        class: 'details_panel',
        'layer0.tint': 'var(detailPanelBg)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'scroll_area_control',
        parents: [{ class: 'side_bar_container' }],
        content_margin: [0, 4, 0, 0],
    },
    {
        class: 'scroll_area_control',
        parents: [{ class: 'side_bar_container' }],
        settings: ['overlay_scroll_bars'],
        content_margin: 0,
    },
    {
        class: 'scroll_area_control',
        parents: [{ class: 'details_panel' }],
        settings: ['overlay_scroll_bars'],
    },
    {
        class: 'scroll_bar_control',
        parents: [{ class: 'details_panel' }],
        settings: ['!overlay_scroll_bars'],
        content_margin: [4, 4, 4, 4],
        'layer0.opacity': 1.0,
        'layer0.tint': 'var(detailPanelBg)',
    },
    {
        class: 'scroll_bar_control',
        parents: [{ class: 'commit_dialog_section_container' }],
        content_margin: [4, 0, 4, 4],
    },
    {
        class: 'scroll_bar_control',
        parents: [{ class: 'commit_dialog_summary_container' }],
        content_margin: [4, 0, 4, 4],
    },
    // {
    //     class: 'commit_dialog_section_container',
    //     content_margin: [0, 4, 0, 0],
    // },
    // {
    //     class: 'commit_dialog_summary_container',
    //     content_margin: [0, 4, 0, 0],
    // },
    {
        class: 'scroll_corner_control',
        parents: [{ class: 'details_panel' }],
        settings: ['!overlay_scroll_bars'],
        'layer0.opacity': 1.0,
        'layer0.tint': 'var(detailPanelBg)',
    },
    // {
    //     class: 'diff scroll_area_control',
    //     overlay: true,
    // },
    {
        class: 'diff scroll_area_control',
        settings: ['!overlay_scroll_bars'],
        hover_reveal: true,
    },
    {
        class: 'scroll_bar_control',
        parents: [{ class: 'details_panel' }, { class: 'diff' }],
        'layer0.opacity': 0.0,
    },
    {
        class: 'commit_dialog_header',
        content_margin: [0, 2, 0, 0],
    },
    {
        class: 'scroll_bar_control',
        parents: [{ class: 'commit_dialog_header' }],
        settings: ['!overlay_scroll_bars'],
        content_margin: [4, 0, 0, 0],
    },
    {
        class: 'scroll_bar_control',
        parents: [{ class: 'commit_dialog_header' }],
        settings: ['overlay_scroll_bars'],
        content_margin: [4, 0, 4, 0],
    },
    // {
    //     class: 'scroll_area_control',
    //     parents: [{ class: 'commit_dialog_header' }],
    // },
    {
        class: 'commit_message_container',
        'layer0.tint': '#f00',
        'layer0.opacity': 1.0,
        content_margin: [4, 4, 4, 8],
        spacing: 6,
    },
    // {
    //     class: 'recent_commit_messages_dropdown_container',
    //     content_margin: [2, 0],
    // },
    {
        class: 'commit_metadata_container',
        content_margin: [6, 6, 4, 6],
        message_content_margin: [0, 4, 0, 4],
        'layer0.tint': '#f0f',
        'layer0.opacity': 1.0,
        spacing: 6,
    },
    // {
    //     class: 'sidebar_commit_metadata_container',
    //     min_size: [0, 180],
    // },
    {
        class: 'commit_metadata_standin',
        'layer0.tint': 'var(background)',
        'layer0.opacity': 0.0,
        content_margin: [0, 4, 0, 0],
    },
    // {
    //     class: 'show_contents_container',
    //     content_margin: 8,
    // },
    // {
    //     class: 'edit_button_container',
    //     spacing: 4,
    // },
    {
        class: 'field_name_label',
        'font.italic': true,
        'font.bold': true,
        color: 'var(foreground)',
    },
    {
        class: 'separator_container',
        content_margin: [12, 12, 12, 12],
    },
    {
        class: 'terminator',
        'layer0.tint': 'color(var(terminatorFg) a(0.25))',
        'layer0.opacity': 1.0,
        content_margin: [16, 4, 16, 4],
    },
    {
        class: "terminator",
        attributes: ["hover"],
        "layer0.tint": "color(var(terminatorFg) a(0.50))",
        "layer0.opacity": 1,
    },
    {
        class: 'terminator_container',
        content_margin: [12, 12, 12, 12],
    },
    {
        class: 'label_control good_signature',
        color: 'var(--greenish)',
    },
    {
        class: 'label_control bad_signature',
        color: 'var(--redish)',
    },

    // File diffs
    {
        class: 'single_file',
        content_margin: [6, 6, 6, 6],
    },
    {
        class: 'file_diff_control',
        spacing: 0,
        content_margin: [0, 0, 0, 1],
    },
    {
        class: 'file_diff_control',
        attributes: ['expanded'],
        content_margin: [0, 0, 0, 6],
    },
    {
        class: 'expand_all_diff_control untracked',
        content_margin: [0, 0, 0, 1],
    },
    {
        class: 'file_diff_header',
        'layer0.tint': 'var(fileHeaderBg)',
        'layer0.opacity': 1.0,
        content_margin: 4,
    },
    {
        class: 'file_diff_header collapsible',
        attributes: ['hover'],
        'layer0.tint': 'var(fileHeaderBgHover)',
    },
    {
        class: 'file_diff_header',
        parents: [{ class: 'expand_all_diff_control' }],
        spacing: 4,
        content_margin: [4, 4, 4, 4],
    },
    {
        class: 'file_diff_header',
        parents: [{ class: 'expand_all_diff_control detail' }],
        'layer0.tint': 'var(detailPanelBg)',
    },
    {
        class: 'file_diff_header',
        parents: [{ class: 'expand_all_diff_control working' }],
        'layer0.tint': 'var(detailPanelBg)',
    },
    {
        class: 'onion_skin_slider',
        puck_border_color: 'var(accentLighter)',
        puck_color: 'var(foreground)',
        track_color: 'var(accentLight)',
    },
    {
        class: "image_metadata_label",
        background_color: "var(accentLightest)",
        fg: "var(foreground)"
    },

    {
        class: 'button_control all_button',
        'layer0.draw_center': false,
        'layer0.tint': 'var(buttonBg)',
        'layer0.inner_margin': 4,
        'layer0.opacity': {
            target: 0.4,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer1.opacity': {
            target: 0.2,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'button_control all_button',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.0,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer1.opacity': {
            target: 0.8,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'file_diff_header',
        parents: [{ class: 'expand_all_diff_control staged' }],
        'layer0.tint': 'var(detailPanelBg)',
    },
    {
        class: 'file_diff_header',
        parents: [{ class: 'expand_all_diff_control untracked' }],
        'layer0.tint': 'var(untrackedHeaderBg)',
    },
    {
        class: 'file_diff_header collapsible',
        parents: [{ class: 'expand_all_diff_control untracked' }],
        attributes: ['hover'],
        'layer0.tint': 'var(untrackedHeaderBgHover)',
    },
    {
        class: 'file_diff_header',
        parents: [{ class: 'file_diff_control unmerged' }],
        'layer0.tint': 'var(unmergedHeaderBg)',
    },
    {
        class: 'file_diff_header collapsible',
        parents: [{ class: 'file_diff_control unmerged' }],
        attributes: ['hover'],
        'layer0.tint': 'var(unmergedHeaderBgHover)',
    },
    {
        class: 'file_diff_header',
        parents: [{ class: 'file_diff_control untracked' }],
        'layer0.tint': 'var(untrackedHeaderBg)',
        content_margin: [20, 4, 4, 4],
    },
    {
        class: 'file_diff_header collapsible',
        parents: [{ class: 'file_diff_control untracked' }],
        attributes: ['hover'],
        'layer0.tint': 'var(untrackedHeaderBgHover)',
    },
    // {
    //     class: 'file_meta',
    //     spacing: 5,
    // },
    {
        class: 'icon_deleted',
        'layer0.tint': 'var(deletedIconFg)',
        'layer0.opacity': 1.0,
        content_margin: [10, 9, 10, 9],
    },
    {
        class: 'icon_created',
        'layer0.tint': 'var(createdIconFg)',
        'layer0.opacity': 1.0,
        content_margin: [10, 9, 10, 9],
    },

    {
        class: 'icon_unmerged',
        'layer0.tint': 'var(unmergedIconFg)',
        'layer0.opacity': 1.0,
        content_margin: [10, 9, 10, 9],
    },
    {
        class: 'icon_recent',
        'layer0.texture': 'Theme - Merge/icon_recent_bg.png',
        'layer0.tint': 'var(recentIconBg)',
        'layer0.opacity': 1.0,
        'layer1.texture': 'Theme - Merge/icon_recent.png',
        'layer1.tint': 'var(recentIconFg)',
        'layer1.opacity': 1.0,
        content_margin: [10, 9, 10, 9],
    },
    // {
    //     class: 'table_of_contents_icon',
    //     content_margin: [10, 9, 10, 9],
    // },
    {
        class: 'icon_staged',
        'layer0.tint': 'var(stagedIconFg)',
        'layer0.opacity': 1.0,
        content_margin: [10, 9, 10, 9],
    },
    {
        class: 'icon_text',
        color: 'var(foreground)',
    },
    // {
    //     class: 'total_untracked',
    //     content_margin: [4, 0, 4, 0],
    // },
    // {
    //     class: 'recently_modified',
    //     content_margin: [5, 0, 0, 0],
    // },
    // {
    //     class: 'file_icons',
    //     spacing: 1,
    // },
    {
        class: 'file_icon',
        'layer0.tint': 'var(fileIconBg)',
        'layer0.opacity': 1.0,
        'layer0.inner_margin': [4, 4, 4, 4],
        min_size: [0, 18],
    },
    {
        class: 'file_icon_left',
    },
    {
        class: 'file_icon_right',
    },
    {
        class: 'table_of_contents_icon_wrapper',
        content_margin: [8, 0],
    },
    {
        class: 'label_control',
        parents: [{ class: 'file_diff_header' }],
        "font.bold": true,
        shadow_color: 'var(file_diff_shadow)',
        shadow_offset: [0, 0],
    },
    {
        class: "eliding_label_control",
        color: "var(foreground)"
    },
    {
        class: 'eliding_label_control',
        parents: [{ class: 'file_diff_header' }],
        shadow_color: 'var(file_diff_shadow)',
        shadow_offset: [0, 0],
    },
    {
        class: 'label_control',
        parents: [{ class: 'file_diff_header' }, { class: 'button_control' }],
        shadow_color: 'var(buttonShadow)',
    },
    {
        class: 'label_control',
        parents: [
            { class: 'file_diff_header' },
            { class: 'button_control', attributes: ['confirm'] },
        ],
        shadow_color: 'var(hazard_button_shadow)',
    },
    {
        class: 'label_control',
        parents: [{ class: 'expand_all_diff_control' }, { class: 'file_meta' }],
        fg: 'var(foreground)',
    },
    {
        class: 'renamed_file_container',
        spacing: 0,
    },
    {
        class: 'label_control inserted',
        fg: 'var(renamed_file_inserted)',
    },
    {
        class: 'label_control deleted',
        fg: 'var(renamed_file_deleted)',
    },
    {
        class: 'disclosure_button_control',
        'layer0.opacity': {
            target: 0.3,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer0.tint': 'var(disclosureFg)',
        content_margin: [8, 8],
    },
    {
        class: 'disclosure_button_control',
        attributes: ['expanded'],
    },
    {
        class: 'disclosure_button_control',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.5,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'disclosure_button_control',
        parents: [{ class: 'file_diff_header', attributes: ['hover'] }],
        'layer0.opacity': {
            target: 0.5,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'disclosure_button_control',
        parents: [{ class: 'close' }],
        content_margin: [9, 8],
    },
    {
        class: 'file_diff_hunk_header',
        'layer0.tint': 'var(hunkHeaderBg)',
        'layer0.opacity': 1.0,
        content_margin: 4,
    },
    {
        class: 'hunk_label_container',
        content_margin: [4, 0],
    },
    {
        class: 'file_diff_hunk_container',
        'layer0.tint': 'var(--background)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'hunk_description_container',
        content_margin: [0, 8, 0, 8],
    },

    // Commit dialog
    {
        class: 'commit_author',
        color: 'var(foreground)',
    },
    {
        class: 'commit_author_container',
        content_margin: [2, 0, 0, 0],
    },
    {
        class: 'commit_buttons',
        spacing: 4,
    },
    {
        class: 'commit_button',
        min_size: [204, 15],
    },
    {
        class: 'split_commit_button',
        // The min_size is wider than commit_button because button_control
        // adds the margin to the min_size, where split_commit_button
        // does not have it's own margin
        min_size: [224, 15],
    },

    // Hunk buttons
    {
        class: 'icon_more_hunk',
        'layer0.tint': 'var(foreground)'
    },
    {
        class: 'hunk_button',
        min_size: [90, 15],
        content_margin: [10, 3],
    },
    {
        class: 'hunk_button',
        parents: [
            { class: 'file_diff_hunk_container', attributes: ['!hover'] },
        ],
        attributes: ['!confirm'],
        'layer1.opacity': 0.0,
        'layer2.opacity': 0.0,
    },
    {
        class: 'hunk_button',
        parents: [{ class: 'file_diff_hunk_container', attributes: ['hover'] }],
        'layer1.opacity': 0.6,
    },
    {
        class: 'hunk_button',
        parents: [{ class: 'file_diff_hunk_header', attributes: ['selected'] }],
        'layer1.opacity': 0.6,
    },
    {
        class: 'hunk_button',
        parents: [{ class: 'file_diff_hunk_container', attributes: ['hover'] }],
        attributes: ['hover'],
        'layer1.opacity': {
            target: 0.8,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'hunk_button',
        parents: [{ class: 'file_diff_hunk_container', attributes: ['hover'] }],
        attributes: ['pressed'],
        'layer1.opacity': {
            target: 1.0,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'label_control',
        parents: [
            { class: 'file_diff_hunk_container' },
            { class: 'hunk_button', attributes: ['!confirm'] },
        ],
        fg: 'color(var(hunkButtonFg) a(0))',
        shadow_offset: [0, 0],
    },
    {
        class: 'label_control',
        parents: [
            { class: 'file_diff_hunk_container', attributes: ['hover'] },
            { class: 'hunk_button', attributes: ['!confirm'] },
        ],
        fg: 'var(hunkButtonFg)',
        shadow_color: 'var(hunkButtonShadow)',
        shadow_offset: [0, 0],
    },
    {
        class: 'label_control',
        parents: [
            { class: 'file_diff_hunk_header', attributes: ['selected'] },
            { class: 'hunk_button', attributes: ['!confirm'] },
        ],
        fg: 'var(hunkButtonFg)',
        shadow_color: 'var(hunkButtonShadow)',
        shadow_offset: [0, 0],
    },

    // File Badges
    {
        class: 'file_badge',
        'layer0.inner_margin': [4, 4, 4, 4],
        'layer0.opacity': 1.0,
        min_size: [18, 18],
    },
    {
        class: 'file_badge_split_container',
        spacing: 1,
    },
    {
        class: 'left_badge',
    },
    {
        class: 'right_badge',
    },
    {
        class: 'modified_badge',
        'layer0.tint': 'var(fileBadgeModifiedBg)',
    },
    {
        class: 'modified_badge',
        parents: [{ class: 'file_diff_header', attributes: ['hover'] }],
        'layer0.tint': 'var(fileBadgeModifiedHover)',
    },
    {
        class: 'unmerged_badge',
        'layer0.tint': 'var(fileBadgeUnmergedBg)',
    },
    {
        class: 'unmerged_badge',
        parents: [{ class: 'file_diff_header', attributes: ['hover'] }],
        'layer0.tint': 'var(fileBadgeUnmergedHover)',
    },
    {
        class: 'untracked_badge',
        'layer0.tint': 'var(fileBadgeUntrackedBg)',
    },
    {
        class: 'staged_badge',
        'layer0.tint': 'var(fileBadgeStagedBg)',
    },
    {
        class: 'staged_badge',
        parents: [{ class: 'file_diff_header' }],
        'layer0.tint': 'var(fileBadgeStagedBg)',
    },
    {
        class: 'staged_badge',
        parents: [{ class: 'file_diff_header', attributes: ['hover'] }],
        'layer0.tint': 'var(fileBadgeStagedBgHover)',
    },
    {
        class: 'label_control',
        parents: [{ class: 'file_badge' }],
        'font.bold': false,
    },
    {
        class: 'label_control',
        parents: [{ class: 'modified_badge' }],
        fg: 'var(fileBadgeModifiedLeftFg)',
    },
    {
        class: 'label_control',
        parents: [{ class: 'unmerged_badge' }],
        fg: 'var(file_badge_unmerged_fg)',
    },
    {
        class: 'label_control',
        parents: [{ class: 'untracked_badge' }],
        fg: 'var(fileBadgeUntrackedFg)',
    },
    {
        class: 'label_control',
        parents: [{ class: 'staged_badge' }],
        fg: 'var(fileBadgeStagedFg)',
    },
    {
        class: 'icon_deleted',
        parents: [{ class: 'modified_badge' }],
        'layer0.tint': 'var(fileBadgeModifiedRightFg)',
    },
    {
        class: 'icon_deleted',
        parents: [{ class: 'staged_badge' }],
        'layer0.tint': 'var(fileBadgeModifiedRightFg)',
    },

    // Welcome overlay
    {
        class: 'welcome_overlay',
        'layer0.tint': 'var(overlayBg)',
        'layer0.opacity': 0.9,
    },
    {
        class: 'dialog',
        parents: [{ class: 'welcome_overlay' }],
        'layer0.opacity': 0.5,
    },
    {
        class: 'welcome_overlay_contents',
        'layer0.tint': 'var(welcomeBg)',
        'layer0.opacity': 1.0,
        'layer0.inner_margin': 4,
        spacing: 32,
        content_margin: [50, 25, 50, 25],
    },
    {
        class: 'button_control',
        parents: [{ class: 'welcome_overlay_contents' }],
        'layer1.tint': 'var(buttonBgWelcome)',
        'layer1.inner_margin': 4,
        'layer2.opacity': 0.0,
        'layer2.inner_margin': 4,
        min_size: [120, 15],
        content_margin: [10, 6],
    },
    {
        class: 'purchase_license_cta_link',
        fg: 'color(var(link_label_color))',
        'font.bold': true,
    },
    {
        class: 'open_new_repository_buttons_container',
        content_margin: [0, 8, 0, 8],
        spacing: 8,
    },
    {
        class: 'subtitle_label_control',
        fg: 'var(labelColor)',
        'font.size': 17,
    },
    // {
    //     class: 'recent_repository_row',
    //     spacing: 4,
    //     content_margin: [0, 4],
    // },
    {
        class: 'recent_repository_button',
        'layer0.tint': 'var(recentRepositoriesRowBg)',
        'layer0.opacity': 1.0,
        content_margin: 4,
    },
    {
        class: 'recent_repository_button',
        attributes: ['hover'],
        'layer0.tint': 'var(recentRepositoriesRowBgHover)',
        'layer0.opacity': 1.0,
    },

    // Command History overlay
    {
        class: 'commit_metadata_container',
        content_margin: [8, 5, 5, 5],
        'layer0.tint': 'var(commitRowBgHover)',
        'layer0.opacity': 0.0,
    },
    {
        class: 'commit_table_container command_history',
        'layer0.tint': 'var(commitListBg)',
        'layer0.opacity': 1.0,
        content_margin: 0,
    },
    {
        class: 'commit_metadata_container',
        'layer0.opacity': 1.0,
        parents: [{ class: 'commit_table_row', attributes: ['selected'] }],
    },
    {
        class: 'commit_metadata_container',
        'layer0.opacity': 0.2,
        parents: [{ class: 'commit_table_row', attributes: ['!selected'] }],
        attributes: ['hover'],
    },
    {
        class: 'git_output_data_container',
        'layer0.tint': 'var(gitOutputPanelBg)',
        'layer0.opacity': 1.0,
        content_margin: [6, 6, 4, 6],
    },

    // Command History overlay labels
    {
        class: 'command_history_label',
        fg: 'var(helpLabelColor)',
    },

    // Preferences Page
    {
        class: 'preferences_overlay_left',
        'layer0.tint': 'var(preferencesOverlayLeft)',
        'layer0.opacity': 1.0,
        content_margin: [0, 16, 0, 0],
    },
    {
        class: 'preferences_overlay_right',
        content_margin: [16, 16, 4, 16],
        'layer0.tint': 'var(preferencesOverlayBg)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'preferences_section_table',
        row_padding: [24, 6, 12, 6],
        dark_content: false,
        'layer0.tint': 'var(preferencesSectionTableBg)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'preferences_section_table_row',
        attributes: ['hover'],
        'layer0.tint': 'var(preferencesSectionTableRowBg)',
        'layer0.opacity': 1.0,
        content_margin: [0, 16, 0, 0],
    },
    {
        class: 'preferences_section_table_row',
        attributes: ['selected'],
        'layer0.tint': 'var(preferencesSectionTableRowBg)',
        'layer0.opacity': 1.0,
        content_margin: [0, 16, 0, 0],
    },
    {
        class: 'preferences_buttons_container',
        content_margin: 8,
        'layer0.tint': 'var(preferencesOverlayBg)',
        'layer0.opacity': 1.0,
    },
    // {
    //     class: 'preference_wrapper',
    //     content_margin: [4, 4, 4, 24],
    //     spacing: 4,
    // },
    // {
    //     class: 'preference_text_input_container',
    //     spacing: 8,
    // },

    // Preference Labels
    {
        class: 'preferences_section_label',
        fg: 'var(labelColor)',
        'font.size': 14,
        'font.bold': true,
        case: 'title',
    },
    {
        class: 'preference_help_text_label',
        fg: 'var(helpLabelColor)',
    },

    // Switch Repository Window
    {
        class: 'panel_control',
        parents: [{ class: 'switch_project_window' }],
        'layer0.opacity': 1.0,
        'layer0.tint': 'var(switchRepoBg)',
        content_margin: 2,
    },
    {
        class: 'scroll_bar_control',
        parents: [{ class: 'switch_project_window' }],
        'layer0.tint': 'var(switchRepoBg)',
        tint_index: -1,
    },
    {
        class: 'switch_project_panel_cancel_container',
        parents: [{ class: 'switch_project_window' }],
        'layer0.tint': 'var(switchRepoBg)',
        tint_index: -1,
    },

    // Tool Tips
    {
        class: 'tool_tip_control',
        'layer0.tint': 'var(foreground)',
        'layer0.opacity': 1.0,
        content_margin: [8, 3, 8, 3],
    },
    {
        class: 'tool_tip_label_control',
        fg: 'color(black)',
    },

    // Hints
    {
        class: 'hint_stem',
        'layer0.opacity': 1.0,
        'layer0.tint': 'var(hint_bg)',
    },
    {
        class: 'hint_stem bottom',
        content_margin: [6, 3, 6, 3],
    },
    {
        class: 'hint_stem left',
        content_margin: [3, 6, 3, 6],
    },
    {
        class: 'hint_stem top',
        content_margin: [6, 3, 6, 3],
    },
    {
        class: 'hint_stem right',
        content_margin: [3, 6, 3, 6],
    },
    {
        class: 'hint_control',
        'layer0.tint': 'var(hint_bg)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'hint_control bottom',
        'layer0.texture': 'Theme - Merge/hint_bottom_box.png',
        'layer0.inner_margin': [4, 9, 4, 4],
        content_margin: [8, 9, 8, 4],
    },
    {
        class: 'hint_control left',
        'layer0.texture': 'Theme - Merge/hint_left_box.png',
        'layer0.inner_margin': [4, 4, 9, 4],
        content_margin: [8, 4, 13, 4],
    },
    {
        class: 'hint_control right',
        'layer0.texture': 'Theme - Merge/hint_right_box.png',
        'layer0.inner_margin': [9, 4, 4, 4],
        content_margin: [13, 4, 8, 4],
    },
    {
        class: 'hint_control top',
        'layer0.texture': 'Theme - Merge/hint_top_box.png',
        'layer0.inner_margin': [4, 4, 4, 9],
        content_margin: [8, 4, 8, 9],
    },
    {
        class: 'hint_label',
        fg: 'var(hint_fg)',
    },
    {
        class: 'hint_control',
        parents: [{ class: 'error_output' }],
        'layer0.tint': 'var(error_hint_bg)',
    },
    {
        class: 'hint_control bottom',
        parents: [{ class: 'error_output' }],
        'layer1.inner_margin': [4, 9, 4, 4],
        'layer1.draw_center': false,
        'layer1.tint': 'var(error_hint_accent)',
        'layer1.opacity': 1.0,
        content_margin: [10, 12, 10, 6],
    },
    {
        class: 'hint_stem',
        parents: [{ class: 'error_output' }],
        'layer0.tint': 'var(error_hint_accent)',
    },
    {
        class: 'hint_label',
        parents: [{ class: 'error_output' }],
        fg: 'var(error_hint_fg)',
    },

    // Tree View
    {
        class: 'scroll_bar_control',
        parents: [{ class: 'tree_details' }],
        content_margin: [4, 4, 4, 4],
    },
    {
        class: 'scroll_bar_control',
        parents: [{ class: 'tree_list' }],
        'layer0.tint': 'color(var(commitListBg) a(0.5))',
        'layer0.opacity': 1.0,
    },
    {
        class: 'tree',
        'layer0.tint': 'color(var(commitListBg) a(0.5))',
        'layer0.opacity': 1.0,
        row_padding: [6, 3, 6, 3],
        indent: 12,
        indent_offset: 13,
        indent_top_level: false,
        dark_content: false,
    },
    {
        class: 'tree_row',
        'layer0.tint': 'var(hunkHeaderBg)',
        'layer0.opacity': 0.0,
    },
    {
        class: 'tree_row',
        attributes: ['selected'],
        'layer0.opacity': 1.0,
    },

    // Merge Tool
    {
        class: 'diff_text_control',
        line_selection_color: [64, 64, 177, 10],
        line_selection_border_color: [64, 64, 117, 50],
        line_selection_border_width: 2.0,
        line_selection_border_radius: 2.0,
    },
    {
        class: 'use_hunk_button',
        'layer0.tint': 'var(hunkButtonFg)',
        'layer0.opacity': {
            target: 0.8,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        content_margin: [10, 8],
    },
    // {
    //     class: 'use_hunk_button left',
    // },
    // {
    //     class: 'use_hunk_button right',
    // },
    {
        class: 'use_hunk_button',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 1.0,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },

    // Auto Complete
    {
        class: 'popup_control',
        'layer0.tint': [255, 255, 255],
        'layer0.opacity': 1.0,
    },
    {
        class: 'auto_complete',
        row_padding: [4, 1, 4, 1],
        tint_index: 0,
        'layer0.opacity': 1.0,
        tint_modifier: [255, 255, 255, 0.05],
    },
    {
        class: 'auto_complete',
        attributes: ['file_light'],
        tint_modifier: [0, 0, 0, 0.05],
    },
    {
        class: 'scroll_bar_control',
        parents: [{ class: 'popup_control auto_complete_popup' }],
        tint_modifier: [0, 0, 0, 0.05],
    },
    {
        class: 'scroll_bar_control',
        attributes: ['dark'],
        parents: [{ class: 'popup_control auto_complete_popup' }],
        tint_modifier: [255, 255, 255, 0.05],
    },
    {
        class: 'auto_complete_label',
        fg: [0, 0, 0, 0.0],
        match_fg: [255, 255, 255, 0.18],
        selected_fg: [0, 0, 0, 0.0],
        selected_match_fg: [255, 255, 255, 0.18],
        fg_blend: true,
    },
    {
        class: 'auto_complete_label',
        parents: [{ class: 'auto_complete', attributes: ['file_light'] }],
        fg: [0, 0, 0, 0.0],
        match_fg: [0, 0, 0, 0.18],
        selected_fg: [0, 0, 0, 0.0],
        selected_match_fg: [0, 0, 0, 0.18],
        fg_blend: true,
    },
    {
        class: 'progress_gauge_control',
        parents: [{ class: 'clone_area' }],
        content_margin: [0, 12],
    },
    {
        class: 'clone_progress_container',
        spacing: 4,
    },
    {
        class: 'table_of_contents_style_container',
        content_margin: [0, 8, 0, 8],
    },
    {
        class: 'table_of_contents_style_selector',
        min_size: [80, 20],
    },

    // Repository Tabs (Tab Bar Settings)
    {
        class: 'tabset_control',
        'layer0.opacity': 1.0,
        content_margin: [0, 0, 0, 0],
        tint_index: 0,
        tint_modifier: [255, 255, 255, 0.32],
        tab_height: 32,
        tab_width: 32,
    },
    {
        class: 'tabset_control',
        settings: ['mouse_wheel_switches_tabs', '!enable_tab_scrolling'],
        mouse_wheel_switch: true,
    },
    {
        class: 'tab_control',
        content_margin: [10, 6],
        'layer1.tint': 'var(repositoryTabBarBg)',
        'layer1.opacity': 1.0,
        'layer3.tint': 'var(repositoryTabBarBorderBg)',
        'layer3.inner_margin': [16, 0, 16, 0],
        'layer3.opacity': {
            target: 0.2,
            speed: 2.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'tab_control',
        attributes: ['selected'],
        'layer1.tint': 'var(headerBg)',
        tint_modifier: [255, 255, 255, 0.0],
        'layer3.opacity': 0.0,
    },
    {
        class: 'tab_control',
        attributes: ['right'],
    },
    {
        class: 'repository_tab_label_container',
        spacing: 4,
    },
    {
        class: 'icon_folder',
        'layer0.opacity': 0.4,
        'layer0.tint': 'var(foreground)',
        content_margin: [9, 8],
    },
    {
        class: 'tab_label',
        fg: 'color(var(labelColor) a(0.9))',
    },
    {
        class: "tab_label",
        fg: "var(tabLabelColor)",
        "font.face": "var(font_face)",
        "font.size": "var(font_size)"
    },
    {
        class: "tab_label",
        parents: [
            {
                class: "tab_control",
                attributes: [
                    "hover"
                ]
            }],
        fg: "var(tabLabelColorHover)"
    },
    {
        class: "close_button_control",
        "layer0.tint": "var(foreground)",
    },
    {
        class: "tab_label",
        parents: [
            {
                class: "tab_control",
                attributes: [
                    "selected"
                ]
            }],
        fg: "var(tabLabelColorSelected)"
    },
    {
        class: 'tab_close_button',
        settings: ['show_tab_close_buttons'],
        content_margin: [10, 9],
    },
    {
        class: 'tab_close_button',
        parents: [{ class: 'tab_control', attributes: ['!selected'] }],
        'layer0.opacity': {
            target: 0.3,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'tab_close_button',
        parents: [{ class: 'tab_control', attributes: ['selected'] }],
        'layer0.opacity': {
            target: 0.5,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'tab_close_button',
        attributes: ['hover'],
        parents: [{ class: 'tab_control', attributes: ['!selected'] }],
        'layer0.opacity': {
            target: 0.6,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'tab_close_button',
        attributes: ['hover'],
        parents: [{ class: 'tab_control', attributes: ['selected'] }],
        'layer0.opacity': {
            target: 0.8,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'new_tab_button',
        content_margin: 0,
        min_size: [32, 32],
        'layer1.tint': 'var(repositoryTabBarBg)',
        'layer1.opacity': 1.0,
        'layer3.tint': 'var(repositoryTabBarBorderBg)',
        'layer3.inner_margin': [16, 0, 16, 0],
        'layer3.opacity': 0.2,
    },
    {
        class: 'new_tab_icon',
        parents: [{ class: 'new_tab_button' }],
        "layer0.tint": "var(foreground)",
        "layer0.opacity": "var(iconButtonOpacity)",
    },
    {
        class: 'new_tab_icon',
        parents: [{ class: 'new_tab_button', attributes: ['hover'] }],
        "layer0.tint": "var(foreground)",
        "layer0.opacity": "var(iconButtonOpacityHover)",
    },
    {
        class: 'tab_dropdown_button',
        content_margin: 0,
        min_size: [32, 32],
        'layer1.tint': 'var(repositoryTabBarBg)',
        'layer1.opacity': 1.0,
        'layer3.tint': 'var(repositoryTabBarBorderBg)',
        'layer3.inner_margin': [16, 0, 16, 0],
        'layer3.opacity': 0.2,
    },
    {
        class: 'tab_select_dropdown_icon',
        parents: [{ class: 'tab_dropdown_button' }],
        "layer0.tint": "var(foreground)",
        "layer0.opacity": "var(iconButtonOpacity)",
    },
    {
        class: 'tab_select_dropdown_icon',
        parents: [{ class: 'tab_dropdown_button', attributes: ['hover'] }],
        "layer0.tint": "var(foreground)",
        "layer0.opacity": "var(iconButtonOpacityHover)",
    },
]

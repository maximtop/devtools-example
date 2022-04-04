chrome.devtools.panels.elements.createSidebarPane(
    'Devtool example',
    (sidebar) => {
        sidebar.setHeight('400px');
        sidebar.setObject({ some_data: "Some data to show" });
    });

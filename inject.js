(function() {
    const toolboxXML = `
        <category name="Hidden Blocks" id="hidden_cat" colour="#ff0000" secondaryColour="#cc0000">
            <block type="event_whentouchingobject">
                <value name="TOUCHINGOBJECTMENU"><shadow type="event_touchingobjectmenu"/></value>
            </block>
            <block type="control_for_each">
                <value name="VALUE"><shadow type="math_whole_number"><field name="NUM">10</field></shadow></value>
            </block>
            <block type="control_while"/>
            <block type="control_incr_counter"/>
            <block type="control_clear_counter"/>
            <block type="control_get_counter"/>
        </category>`;

    function injectCategory() {
        if (window.ScratchBlocks && window.ScratchBlocks.mainWorkspace) {
            const workspace = window.ScratchBlocks.mainWorkspace;
            if (workspace.getFlyout()) {
                let currentXML = workspace.options.languageTree.innerHTML;
                if (!currentXML.includes('id="hidden_cat"')) {
                    workspace.updateToolbox(currentXML + toolboxXML);
                }
            }
        }
    }
    setInterval(injectCategory, 2000);
})();

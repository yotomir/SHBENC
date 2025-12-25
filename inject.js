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
            <block type="operator_mathop">
                <field name="OPERATOR">e ^</field>
                <value name="NUM"><shadow type="math_number"><field name="NUM">10</field></shadow></value>
            </block>
        </category>`;

    function injectCategory() {
        if (window.ScratchBlocks && window.ScratchBlocks.mainWorkspace) {
            const workspace = window.ScratchBlocks.mainWorkspace;
            const flyout = workspace.getFlyout();
            
            if (flyout) {
                let currentXML = workspace.options.languageTree.innerHTML;
                if (!currentXML.includes('id="hidden_cat"')) {
                    workspace.updateToolbox(currentXML + toolboxXML);
                    console.log("УСПЕХ: Категорията е добавена!");
                }
            }
        }
    }

    // Този таймер проверява на всеки 2 секунди дали категорията е там
    // Ако я няма - я добавя автоматично.
    setInterval(injectCategory, 2000);
})();

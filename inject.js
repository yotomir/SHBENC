(function() {
    function setupHiddenBlocks() {
        if (!window.ScratchBlocks) return;
        const Blocks = window.ScratchBlocks;

        // Дефинираме категорията с цвят #ff0000 и икона-коте в името
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

        const updateToolbox = () => {
            const workspace = Blocks.mainWorkspace;
            if (workspace && workspace.getFlyout()) {
                let currentXML = workspace.options.languageTree.innerHTML;
                // Проверяваме дали вече не е добавена, за да не се повтаря
                if (!currentXML.includes('id="hidden_cat"')) {
                    workspace.updateToolbox(currentXML + toolboxXML);
                }
            }
        };
        
        updateToolbox();
    }

    // Изчакваме малко повече (3 секунди), за да зареди Scratch напълно
    const initInterval = setInterval(() => {
        if (window.vm && window.ScratchBlocks && window.ScratchBlocks.mainWorkspace) {
            clearInterval(initInterval);
            setupHiddenBlocks();
        }
    }, 3000);
})();

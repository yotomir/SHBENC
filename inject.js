(function() {
    const toolboxXML = `
        <category name="Hidden Blocks" id="hidden_cat" colour="#ff0000" secondaryColour="#cc0000">
            <block type="control_while"/>
            <block type="control_for_each">
                <value name="VALUE"><shadow type="math_whole_number"><field name="NUM">10</field></shadow></value>
            </block>
            <block type="control_get_counter"/>
            <block type="control_incr_counter"/>
            <block type="control_clear_counter"/>
        </category>`;

    function tryInject() {
        try {
            if (window.ScratchBlocks && window.ScratchBlocks.mainWorkspace) {
                const ws = window.ScratchBlocks.mainWorkspace;
                // Проверка дали категорията вече е там
                if (!ws.options.languageTree.innerHTML.includes('id="hidden_cat"')) {
                    const currentXML = ws.options.languageTree.innerHTML;
                    ws.updateToolbox(currentXML + toolboxXML);
                    console.log("HIDDEN BLOCKS CATEGORY DEPLOYED!");
                }
            }
        } catch (e) {
            // Ако има грешка, просто изчакваме следващия цикъл
        }
    }

    // Проверяваме на всяка секунда, защото ScratchAddons може да презареди менюто
    setInterval(tryInject, 1000);
})();

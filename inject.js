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

    function injectCategory() {
        if (window.ScratchBlocks && window.ScratchBlocks.mainWorkspace) {
            const ws = window.ScratchBlocks.mainWorkspace;
            const tree = ws.options.languageTree.innerHTML;
            if (!tree.includes('id="hidden_cat"')) {
                ws.updateToolbox(tree + toolboxXML);
                console.log("Activated!!");
            }
        }
    }
    setInterval(injectCategory, 2000);
})();

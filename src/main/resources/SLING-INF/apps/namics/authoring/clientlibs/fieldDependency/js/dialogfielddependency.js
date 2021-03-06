/**
 * Extension for dialogs to enable dependencies between fields. Fields can be shown / hidden based on the selection of
 * other fields.
 *
 * How to use in AEM dialog definitions:
 *
 * Source field (field that contains the selected value):
 * - add attribute "fd-source-id". Value should be an identifier (string)
 * Target fields (fields that are shown / hidden depending on selected source field value):
 * - add attribute "fd-values-<identifier>" to each target field that should be shown/hidden. Replace "<identifier>" with the identifier you've chosen for the source field.
 *   You can add multiple values separated by space. If any of these values were selected by the source field, this field will be visible.
 */
(function (document, ns, $) {
    "use strict";

    $(document).on("dialog-ready", function () {
        $("[" + ns.AbstractDialogField.ATTR_ID + "]").each(function () {
            if ($(this).hasClass("coral-RadioGroup")) {
                // handle radio group
                new ns.DialogFieldRadio($(this));
            } else if ($(this).hasClass("coral-Select")) {
                // handle select
                new ns.DialogFieldSelect($(this));
            } else if ($(this).hasClass("coral-Checkbox-input")) {
                // handle checkbox
                new ns.DialogFieldCheckbox($(this));
            }
        });
    });

})(document, Namics.authoring, Granite.$);